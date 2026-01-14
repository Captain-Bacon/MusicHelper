import './styles.css';
import { scaleData, keyDisplayNames, scaleTypeDisplayNames, keyOrder, circleOfFifthsOrder } from './data/scales.js';
import { landingProgressions, keyTransitions } from './data/progressions.js';

let selectedScales = []; // Array of {key, scaleType} objects to maintain selection order
let highlightMode = 'off'; // 'off', 'all', '2plus'
let chordToneMode = false; // Show only chord tones (1-3-5)
let circleVisible = false; // Circle of Fifths visibility

// Table filtering state
let selectedProgressions = new Set(); // Indices of selected landing progressions
let selectedTransitions = new Set(); // Indices of selected key transitions
let landingFilterActive = false;
let transitionsFilterActive = false;

// Generate buttons based on active scale type filters
function generateKeyButtons() {
    const keySelector = document.getElementById('keySelector');
    const majorChecked = document.getElementById('filterMajor').checked;
    const minorChecked = document.getElementById('filterMinor').checked;

    keySelector.innerHTML = '';

    keyOrder.forEach(key => {
        if (majorChecked) {
            const btn = document.createElement('button');
            btn.className = 'key-button';
            btn.dataset.key = key;
            btn.dataset.scaleType = 'major';
            btn.textContent = keyDisplayNames[key];

            // Check if this scale is selected
            if (selectedScales.some(s => s.key === key && s.scaleType === 'major')) {
                btn.classList.add('selected');
            }

            btn.addEventListener('click', () => toggleScale(key, 'major'));
            keySelector.appendChild(btn);
        }

        if (minorChecked) {
            const btn = document.createElement('button');
            btn.className = 'key-button';
            btn.dataset.key = key;
            btn.dataset.scaleType = 'minor';
            btn.textContent = keyDisplayNames[key] + 'm';

            // Check if this scale is selected
            if (selectedScales.some(s => s.key === key && s.scaleType === 'minor')) {
                btn.classList.add('selected');
            }

            btn.addEventListener('click', () => toggleScale(key, 'minor'));
            keySelector.appendChild(btn);
        }
    });
}

// Initialize event listeners
document.getElementById('filterMajor').addEventListener('change', generateKeyButtons);
document.getElementById('filterMinor').addEventListener('change', generateKeyButtons);
document.getElementById('selectAll').addEventListener('click', selectAllKeys);
document.getElementById('clearAll').addEventListener('click', clearAllKeys);
document.getElementById('highlightToggle').addEventListener('click', toggleHighlightMode);
document.getElementById('chordToneToggle').addEventListener('click', toggleChordToneMode);
document.getElementById('circleToggle').addEventListener('click', toggleCircle);

// Style control sliders
const styleControls = {
    cellPaddingH: { element: 'td', prop: 'padding-left', suffix: 'px', valueDisplay: 'cellPaddingHValue', also: 'padding-right' },
    cellPaddingV: { element: 'td', prop: 'padding-top', suffix: 'px', valueDisplay: 'cellPaddingVValue', also: 'padding-bottom' },
    headerFont: { element: 'th', prop: 'font-size', suffix: 'px', valueDisplay: 'headerFontValue' },
    noteFont: { element: 'td', prop: 'font-size', suffix: 'px', valueDisplay: 'noteFontValue' },
    rowLabelFont: { element: 'td:first-child', prop: 'font-size', suffix: 'px', valueDisplay: 'rowLabelFontValue' },
    firstColPadding: { element: 'td:first-child', prop: 'padding-left', suffix: 'px', valueDisplay: 'firstColPaddingValue', alsoSelector: 'th:first-child' },
    containerWidth: { element: '.table-container', prop: 'max-width', suffix: 'px', valueDisplay: 'containerWidthValue', additionalProps: { 'margin': '30px auto 0' } }
};

// Get or create style element for dynamic updates
let dynamicStyle = document.getElementById('dynamic-styles');
if (!dynamicStyle) {
    dynamicStyle = document.createElement('style');
    dynamicStyle.id = 'dynamic-styles';
    document.head.appendChild(dynamicStyle);
}

function updateStyle(controlId, value) {
    const control = styleControls[controlId];
    const displayElement = document.getElementById(control.valueDisplay);
    displayElement.textContent = value + control.suffix;

    // Build CSS rule
    let rules = [];

    if (control.also) {
        rules.push(`${control.element} { ${control.prop}: ${value}${control.suffix}; ${control.also}: ${value}${control.suffix}; }`);
    } else {
        rules.push(`${control.element} { ${control.prop}: ${value}${control.suffix}; }`);
    }

    if (control.alsoSelector) {
        rules.push(`${control.alsoSelector} { ${control.prop}: ${value}${control.suffix}; }`);
    }

    // Update or add rules to dynamic stylesheet
    const ruleText = rules.join('\n');
    const existingRuleIndex = Array.from(dynamicStyle.sheet.cssRules).findIndex(rule =>
        rule.selectorText === control.element || (control.alsoSelector && rule.selectorText === control.alsoSelector)
    );

    // Clear and rebuild all rules
    while (dynamicStyle.sheet.cssRules.length > 0) {
        dynamicStyle.sheet.deleteRule(0);
    }

    // Rebuild all current styles
    Object.keys(styleControls).forEach(id => {
        const ctrl = styleControls[id];
        const slider = document.getElementById(id);
        const val = slider.value;

        let cssProps = `${ctrl.prop}: ${val}${ctrl.suffix};`;
        if (ctrl.also) {
            cssProps += ` ${ctrl.also}: ${val}${ctrl.suffix};`;
        }
        if (ctrl.additionalProps) {
            Object.entries(ctrl.additionalProps).forEach(([prop, value]) => {
                cssProps += ` ${prop}: ${value};`;
            });
        }

        dynamicStyle.sheet.insertRule(`${ctrl.element} { ${cssProps} }`, dynamicStyle.sheet.cssRules.length);

        if (ctrl.alsoSelector) {
            dynamicStyle.sheet.insertRule(`${ctrl.alsoSelector} { ${ctrl.prop}: ${val}${ctrl.suffix}; }`, dynamicStyle.sheet.cssRules.length);
        }
    });
}

// Initialize slider listeners
Object.keys(styleControls).forEach(controlId => {
    const slider = document.getElementById(controlId);
    slider.addEventListener('input', (e) => {
        updateStyle(controlId, e.target.value);
    });
    // Initialize with current value
    updateStyle(controlId, slider.value);
});

function toggleScale(key, scaleType) {
    const index = selectedScales.findIndex(s => s.key === key && s.scaleType === scaleType);

    if (index !== -1) {
        // Remove from array
        selectedScales.splice(index, 1);
    } else {
        // Add to end of array (most recent)
        selectedScales.push({ key, scaleType });
    }

    // Regenerate buttons to update selected state
    generateKeyButtons();
    updateTable();
    updateCircle();
}

function selectAllKeys() {
    // Select all currently visible buttons
    const majorChecked = document.getElementById('filterMajor').checked;
    const minorChecked = document.getElementById('filterMinor').checked;

    selectedScales = [];
    keyOrder.forEach(key => {
        if (majorChecked) selectedScales.push({ key, scaleType: 'major' });
        if (minorChecked) selectedScales.push({ key, scaleType: 'minor' });
    });

    generateKeyButtons();
    updateTable();
    updateCircle();
}

function clearAllKeys() {
    selectedScales = [];
    generateKeyButtons();
    updateTable();
    updateCircle();
}

function toggleHighlightMode() {
    const modes = ['off', 'all', '2plus'];
    const labels = {
        'off': 'Highlight: Off',
        'all': 'Highlight: Common to ALL',
        '2plus': 'Highlight: Common to 2+'
    };

    const currentIndex = modes.indexOf(highlightMode);
    highlightMode = modes[(currentIndex + 1) % modes.length];

    const button = document.getElementById('highlightToggle');
    button.textContent = labels[highlightMode];

    if (highlightMode === 'off') {
        button.classList.remove('active');
    } else {
        button.classList.add('active');
    }

    updateTable();
}

function toggleChordToneMode() {
    chordToneMode = !chordToneMode;

    const button = document.getElementById('chordToneToggle');
    button.textContent = chordToneMode ? 'Chord Tones Only: On' : 'Chord Tones Only: Off';

    if (chordToneMode) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }

    updateTable();
}

// Circle of Fifths functions
function toggleCircle() {
    circleVisible = !circleVisible;

    const container = document.getElementById('circleContainer');
    const button = document.getElementById('circleToggle');

    if (circleVisible) {
        container.classList.add('visible');
        button.classList.add('active');
    } else {
        container.classList.remove('visible');
        button.classList.remove('active');
    }
}

function renderCircle() {
    const circle = document.getElementById('circleOfFifths');

    // Clear existing segments (keep center)
    const existingSegments = circle.querySelectorAll('.circle-segment');
    existingSegments.forEach(seg => seg.remove());

    // Create 12 segments
    circleOfFifthsOrder.forEach((key, index) => {
        const segment = document.createElement('div');
        segment.className = 'circle-segment';
        segment.dataset.key = key;

        // Calculate rotation (30 degrees per segment, starting at top)
        const rotation = (index * 30) - 90; // -90 to start at top
        segment.style.transform = `rotate(${rotation}deg)`;

        const inner = document.createElement('div');
        inner.className = 'circle-segment-inner';
        inner.textContent = keyDisplayNames[key];
        inner.style.transform = `translateX(-50%) rotate(${-rotation}deg)`; // Counter-rotate text

        segment.appendChild(inner);

        // Check if this key is selected
        updateCircleSegment(segment, key);

        // Handle clicks
        segment.addEventListener('click', () => handleCircleClick(key));

        circle.appendChild(segment);
    });
}

function updateCircleSegment(segment, key) {
    const hasMajor = selectedScales.some(s => s.key === key && s.scaleType === 'major');
    const hasMinor = selectedScales.some(s => s.key === key && s.scaleType === 'minor');

    segment.classList.remove('selected-major', 'selected-minor', 'selected-both');

    if (hasMajor && hasMinor) {
        segment.classList.add('selected-both');
    } else if (hasMajor) {
        segment.classList.add('selected-major');
    } else if (hasMinor) {
        segment.classList.add('selected-minor');
    }
}

function updateCircle() {
    if (!circleVisible) return;

    // Update all segments
    circleOfFifthsOrder.forEach(key => {
        const segment = document.querySelector(`.circle-segment[data-key="${key}"]`);
        if (segment) {
            updateCircleSegment(segment, key);
        }
    });
}

function handleCircleClick(key) {
    const majorChecked = document.getElementById('filterMajor').checked;
    const minorChecked = document.getElementById('filterMinor').checked;

    // Determine what to toggle based on current state and filters
    const hasMajor = selectedScales.some(s => s.key === key && s.scaleType === 'major');
    const hasMinor = selectedScales.some(s => s.key === key && s.scaleType === 'minor');

    if (majorChecked && minorChecked) {
        // Both filters on: cycle through states
        if (!hasMajor && !hasMinor) {
            // Add major first
            toggleScale(key, 'major');
        } else if (hasMajor && !hasMinor) {
            // Add minor too
            toggleScale(key, 'minor');
        } else {
            // Remove both
            if (hasMajor) toggleScale(key, 'major');
            if (hasMinor) toggleScale(key, 'minor');
        }
    } else if (majorChecked) {
        // Only major filter: toggle major
        toggleScale(key, 'major');
    } else if (minorChecked) {
        // Only minor filter: toggle minor
        toggleScale(key, 'minor');
    }
}

// Normalize note names to pitch class (0-11) for comparison
function noteToPitchClass(note) {
    const noteMap = {
        'C': 0, 'B♯': 0,
        'C♯': 1, 'D♭': 1,
        'D': 2, 'C𝄪': 2,
        'D♯': 3, 'E♭': 3,
        'E': 4, 'F♭': 4, 'D𝄪': 4,
        'F': 5, 'E♯': 5,
        'F♯': 6, 'G♭': 6, 'E𝄪': 6,
        'G': 7, 'F𝄪': 7,
        'G♯': 8, 'A♭': 8,
        'A': 9, 'G𝄪': 9,
        'A♯': 10, 'B♭': 10,
        'B': 11, 'C♭': 11
    };
    return noteMap[note] ?? null;
}

// Analyze common notes across selected scales
function analyzeCommonNotes() {
    if (selectedScales.length < 2 || highlightMode === 'off') {
        return new Map();
    }

    // Count occurrences of each pitch class
    const pitchClassCounts = new Map();
    const pitchClassToNotes = new Map(); // Track which notes represent each pitch class

    selectedScales.forEach(scale => {
        const notes = scaleData[scale.scaleType][scale.key];
        const seenPitchClasses = new Set();

        notes.forEach(note => {
            const pitchClass = noteToPitchClass(note);
            if (pitchClass !== null && !seenPitchClasses.has(pitchClass)) {
                seenPitchClasses.add(pitchClass);
                pitchClassCounts.set(pitchClass, (pitchClassCounts.get(pitchClass) || 0) + 1);

                if (!pitchClassToNotes.has(pitchClass)) {
                    pitchClassToNotes.set(pitchClass, new Set());
                }
                pitchClassToNotes.get(pitchClass).add(note);
            }
        });
    });

    // Filter based on mode
    const commonNotes = new Map();
    const minOccurrences = highlightMode === 'all' ? selectedScales.length : 2;

    pitchClassCounts.forEach((count, pitchClass) => {
        if (count >= minOccurrences) {
            const notes = pitchClassToNotes.get(pitchClass);
            notes.forEach(note => {
                commonNotes.set(note, count);
            });
        }
    });

    return commonNotes;
}

function updateTable() {
    const tbody = document.getElementById('tableBody');

    if (selectedScales.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="no-selection">
                    Select scales above to view their notes
                </td>
            </tr>
        `;
        return;
    }

    // Get common notes analysis
    const commonNotes = analyzeCommonNotes();

    // Build table rows for selected scales in selection order
    let html = '';

    selectedScales.forEach(scale => {
        const notes = scaleData[scale.scaleType][scale.key];
        const displayName = keyDisplayNames[scale.key];
        const label = scale.scaleType === 'minor' ? displayName + 'm' : displayName;

        html += `
            <tr>
                <td>${label}</td>
                ${notes.map((note, index) => {
                    let highlightClass = '';
                    if (commonNotes.has(note)) {
                        const count = commonNotes.get(note);
                        if (count === 2) highlightClass = ' highlighted-2';
                        else if (count === 3) highlightClass = ' highlighted-3';
                        else if (count === 4) highlightClass = ' highlighted-4';
                        else if (count === 5) highlightClass = ' highlighted-5';
                        else if (count >= 6) highlightClass = ' highlighted-6plus';
                    }

                    // Apply chord tone emphasis if enabled
                    let emphasisClass = '';
                    if (chordToneMode) {
                        // Indices: 0=root(1), 1=2nd, 2=3rd, 3=4th, 4=5th, 5=6th, 6=7th
                        if (index === 1 || index === 3 || index === 5) {
                            emphasisClass = ' note-hidden'; // Hide 2nd, 4th, 6th
                        } else if (index === 6) {
                            emphasisClass = ' note-faded'; // Fade 7th
                        }
                        // Indices 0, 2, 4 (root, 3rd, 5th) remain full opacity
                    }

                    return `<td class="note-cell${highlightClass}${emphasisClass}">${note}</td>`;
                }).join('')}
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

// Roman numeral to chord name conversion
function romanToChord(roman, key) {
    const originalRoman = roman;

    // Major scale intervals from root (semitones)
    const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11];

    // Get chromatic notes
    const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    const keyIndex = chromaticNotes.indexOf(key);

    if (keyIndex === -1) return originalRoman;

    // Parse Roman numeral
    let quality = '';
    let extension = '';
    let accidental = 0;

    // Extract accidentals (b or #)
    if (roman.startsWith('b')) {
        accidental = -1;
        roman = roman.slice(1);
    } else if (roman.startsWith('#')) {
        accidental = 1;
        roman = roman.slice(1);
    }

    // Extract extensions (Maj7, dim7, m7, or just 7)
    const extensionMatch = roman.match(/(Maj7|dim7|m7|7)$/);
    if (extensionMatch) {
        extension = extensionMatch[1];
        roman = roman.replace(extensionMatch[0], '');
    }

    // Determine quality based on case
    const isUpperCase = roman === roman.toUpperCase();
    const isLowerCase = roman === roman.toLowerCase();

    // Convert Roman numeral to scale degree (0-indexed)
    const romanMap = {
        'I': 0, 'i': 0,
        'II': 1, 'ii': 1,
        'III': 2, 'iii': 2,
        'IV': 3, 'iv': 3,
        'V': 4, 'v': 4,
        'VI': 5, 'vi': 5,
        'VII': 6, 'vii': 6
    };

    const degree = romanMap[roman];
    if (degree === undefined) return originalRoman; // Return as-is if can't parse

    // Calculate chromatic interval
    const interval = majorScaleIntervals[degree] + accidental;

    // Get chord root
    const chordRootIndex = (keyIndex + interval + 12) % 12;
    const chordRoot = chromaticNotes[chordRootIndex];

    // Determine chord quality
    if (extension === 'dim7') {
        quality = 'dim';
    } else if (isLowerCase && !extension.includes('Maj')) {
        quality = 'm';
    }

    return chordRoot + quality + extension;
}

function parseAndConvertProgression(formula, key) {
    if (!key) return formula;

    // Split by arrows and common separators
    const parts = formula.split(/\s*[→\/]\s*/);
    const converted = parts.map(part => {
        part = part.trim();
        // Check if it's a Roman numeral pattern
        if (/^[b#]?[IViv]+(?:7|Maj7|dim7|m7)?$/.test(part)) {
            return romanToChord(part, key);
        }
        return part;
    });

    return converted.join(' → ');
}

function populateLandingProgressions(selectedKey = '') {
    const tbody = document.getElementById('landingProgressionsBody');
    let html = '';

    landingProgressions.forEach((prog, index) => {
        const exampleChords = selectedKey ? parseAndConvertProgression(prog.formula, selectedKey) : prog.example;
        const formulaDisplay = prog.note ? `${prog.formula} ${prog.note}` : prog.formula;
        const isSelected = selectedProgressions.has(index);
        const isHidden = landingFilterActive && !isSelected;

        html += `
            <tr class="${isSelected ? 'selected' : ''} ${isHidden ? 'filtered-hidden' : ''}" data-index="${index}">
                <td><input type="checkbox" class="prog-checkbox" data-index="${index}" ${isSelected ? 'checked' : ''}></td>
                <td><strong>${formulaDisplay}</strong></td>
                <td>${exampleChords}</td>
                <td>${prog.voicing}</td>
                <td>${prog.character}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    // Add checkbox event listeners
    tbody.querySelectorAll('.prog-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const index = parseInt(e.target.dataset.index);
            if (e.target.checked) {
                selectedProgressions.add(index);
            } else {
                selectedProgressions.delete(index);
            }
            updateLandingFilterUI();
            populateLandingProgressions(selectedKey);
        });
    });

    updateLandingFilterUI();
}

function updateLandingFilterUI() {
    const btn = document.getElementById('landingFilterBtn');
    const indicator = document.getElementById('landingFilterIndicator');
    const count = selectedProgressions.size;

    if (count > 0) {
        btn.style.display = 'inline-block';
        btn.textContent = landingFilterActive
            ? `Show All Progressions`
            : `Show Selected Only (${count})`;
        btn.classList.toggle('active', landingFilterActive);

        if (landingFilterActive) {
            indicator.style.display = 'inline';
            indicator.textContent = `Showing ${count} of ${landingProgressions.length} progressions`;
        } else {
            indicator.style.display = 'none';
        }
    } else {
        // Auto-disable filter when no items selected
        if (landingFilterActive) {
            landingFilterActive = false;
            const selectedKey = document.getElementById('landingKeySelector').value;
            populateLandingProgressions(selectedKey);
        }
        btn.style.display = 'none';
        indicator.style.display = 'none';
    }
}

function toggleLandingFilter() {
    landingFilterActive = !landingFilterActive;
    const selectedKey = document.getElementById('landingKeySelector').value;
    populateLandingProgressions(selectedKey);
}

function populateKeyTransitions() {
    const tbody = document.getElementById('keyTransitionsBody');
    let html = '';

    keyTransitions.forEach((trans, index) => {
        const isSelected = selectedTransitions.has(index);
        const isHidden = transitionsFilterActive && !isSelected;

        html += `
            <tr class="${isSelected ? 'selected' : ''} ${isHidden ? 'filtered-hidden' : ''}" data-index="${index}">
                <td><input type="checkbox" class="trans-checkbox" data-index="${index}" ${isSelected ? 'checked' : ''}></td>
                <td><strong>${trans.from} → ${trans.to}</strong></td>
                <td>${trans.relationship}</td>
                <td>${trans.transition}</td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    // Add checkbox event listeners
    tbody.querySelectorAll('.trans-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const index = parseInt(e.target.dataset.index);
            if (e.target.checked) {
                selectedTransitions.add(index);
            } else {
                selectedTransitions.delete(index);
            }
            updateTransitionsFilterUI();
            populateKeyTransitions();
        });
    });

    updateTransitionsFilterUI();
}

function updateTransitionsFilterUI() {
    const btn = document.getElementById('transitionsFilterBtn');
    const indicator = document.getElementById('transitionsFilterIndicator');
    const count = selectedTransitions.size;

    if (count > 0) {
        btn.style.display = 'inline-block';
        btn.textContent = transitionsFilterActive
            ? `Show All Transitions`
            : `Show Selected Only (${count})`;
        btn.classList.toggle('active', transitionsFilterActive);

        if (transitionsFilterActive) {
            indicator.style.display = 'inline';
            indicator.textContent = `Showing ${count} of ${keyTransitions.length} transitions`;
        } else {
            indicator.style.display = 'none';
        }
    } else {
        // Auto-disable filter when no items selected
        if (transitionsFilterActive) {
            transitionsFilterActive = false;
            populateKeyTransitions();
        }
        btn.style.display = 'none';
        indicator.style.display = 'none';
    }
}

function toggleTransitionsFilter() {
    transitionsFilterActive = !transitionsFilterActive;
    populateKeyTransitions();
}

// Initialize reference tables
populateLandingProgressions();
populateKeyTransitions();

// Handle key selector change
document.getElementById('landingKeySelector').addEventListener('change', (e) => {
    populateLandingProgressions(e.target.value);
});

// Handle filter button clicks
document.getElementById('landingFilterBtn').addEventListener('click', toggleLandingFilter);
document.getElementById('transitionsFilterBtn').addEventListener('click', toggleTransitionsFilter);

// Initialize buttons and table
generateKeyButtons();
updateTable();
renderCircle();

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        // Toggle active state
        header.classList.toggle('active');
        content.classList.toggle('active');
    });
});
