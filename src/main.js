import './styles.css';
import { scaleData, keyDisplayNames, scaleTypeDisplayNames, keyOrder, circleOfFifthsOrder } from './data/scales.js';
import { landingProgressions, keyTransitions } from './data/progressions.js';
import { chordProgressions, styleOptions, difficultyOptions } from './data/chord-progressions.js';
import { parseAndConvertProgression } from './utils/romanNumeralParser.js';
import { initializeStyleControls } from './components/styleControls.js';

let selectedScales = []; // Array of {key, scaleType} objects to maintain selection order
let highlightMode = 'off'; // 'off', 'all', '2plus'
let chordToneMode = false; // Show only chord tones (1-3-5)
let circleVisible = false; // Circle of Fifths visibility

// Table filtering state
let selectedProgressions = new Set(); // Indices of selected landing progressions
let selectedTransitions = new Set(); // Indices of selected key transitions
let selectedChordProgressions = new Set(); // Indices of selected chord progressions
let landingFilterActive = false;
let transitionsFilterActive = false;
let chordProgressionsFilterActive = false;
let expandedProgressions = new Set(); // Indices of expanded progression rows

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

// Chord Progressions Functions
function populateChordProgressionFilters() {
    // Populate style filter
    const styleFilter = document.getElementById('progressionStyleFilter');
    styleFilter.innerHTML = styleOptions.map(style =>
        `<option value="${style}">${style}</option>`
    ).join('');

    // Populate difficulty filter
    const difficultyFilter = document.getElementById('progressionDifficultyFilter');
    difficultyFilter.innerHTML = difficultyOptions.map(difficulty =>
        `<option value="${difficulty}">${difficulty}</option>`
    ).join('');
}

function populateChordProgressions() {
    const tbody = document.getElementById('chordProgressionsBody');
    const selectedKey = document.getElementById('progressionKeySelector').value;
    const selectedStyle = document.getElementById('progressionStyleFilter').value;
    const selectedDifficulty = document.getElementById('progressionDifficultyFilter').value;

    let html = '';

    chordProgressions.forEach((prog, index) => {
        // Apply filters
        if (selectedStyle !== 'All' && prog.style !== selectedStyle) return;
        if (selectedDifficulty !== 'All' && prog.difficulty !== selectedDifficulty) return;

        const exampleChords = parseAndConvertProgression(prog.formula, selectedKey);
        const isSelected = selectedChordProgressions.has(index);
        const isExpanded = expandedProgressions.has(index);
        const isHidden = chordProgressionsFilterActive && !isSelected;

        // Main row
        html += `
            <tr class="progression-row ${isSelected ? 'selected' : ''} ${isHidden ? 'filtered-hidden' : ''}" data-index="${index}">
                <td><input type="checkbox" class="chord-prog-checkbox" data-index="${index}" ${isSelected ? 'checked' : ''}></td>
                <td>${prog.formula}</td>
                <td>${exampleChords}</td>
                <td>${prog.style}</td>
                <td>${prog.difficulty}</td>
                <td>${prog.character}</td>
                <td><span class="expand-icon" data-index="${index}">${isExpanded ? '▲' : '▼'}</span></td>
            </tr>
        `;

        // Expandable notes row
        html += `
            <tr class="progression-notes-row ${isExpanded ? 'expanded' : ''} ${isHidden ? 'filtered-hidden' : ''}" data-index="${index}">
                <td colspan="7">
                    <div class="progression-notes">
                        <strong>Notes:</strong> ${prog.notes}
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    // Add checkbox event listeners
    tbody.querySelectorAll('.chord-prog-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            e.stopPropagation(); // Prevent row click
            const index = parseInt(e.target.dataset.index);
            if (e.target.checked) {
                selectedChordProgressions.add(index);
            } else {
                selectedChordProgressions.delete(index);
            }
            updateChordProgressionsFilterUI();
            populateChordProgressions();
        });
    });

    // Add row click listeners for expand/collapse
    tbody.querySelectorAll('.progression-row').forEach(row => {
        row.addEventListener('click', (e) => {
            // Don't expand if clicking checkbox
            if (e.target.type === 'checkbox') return;

            const index = parseInt(row.dataset.index);
            toggleProgressionExpansion(index);
        });
    });

    // Add expand icon click listeners
    tbody.querySelectorAll('.expand-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(icon.dataset.index);
            toggleProgressionExpansion(index);
        });
    });

    updateChordProgressionsFilterUI();
}

function toggleProgressionExpansion(index) {
    if (expandedProgressions.has(index)) {
        expandedProgressions.delete(index);
    } else {
        expandedProgressions.add(index);
    }
    populateChordProgressions();
}

function updateChordProgressionsFilterUI() {
    const btn = document.getElementById('progressionsFilterBtn');
    const indicator = document.getElementById('progressionsFilterIndicator');
    const count = selectedChordProgressions.size;

    if (count > 0) {
        btn.style.display = 'inline-block';
        btn.textContent = chordProgressionsFilterActive
            ? `Show All Progressions`
            : `Show Selected Only (${count})`;
        btn.classList.toggle('active', chordProgressionsFilterActive);

        if (chordProgressionsFilterActive) {
            indicator.style.display = 'inline';
            const visibleCount = chordProgressions.filter((prog, index) => selectedChordProgressions.has(index)).length;
            indicator.textContent = `Showing ${visibleCount} of ${chordProgressions.length} progressions`;
        } else {
            indicator.style.display = 'none';
        }
    } else {
        // Auto-disable filter when no items selected
        if (chordProgressionsFilterActive) {
            chordProgressionsFilterActive = false;
            populateChordProgressions();
        }
        btn.style.display = 'none';
        indicator.style.display = 'none';
    }
}

function toggleChordProgressionsFilter() {
    chordProgressionsFilterActive = !chordProgressionsFilterActive;
    populateChordProgressions();
}

// Initialize reference tables
populateLandingProgressions();
populateKeyTransitions();
populateChordProgressionFilters();
populateChordProgressions();

// Handle key selector change
document.getElementById('landingKeySelector').addEventListener('change', (e) => {
    populateLandingProgressions(e.target.value);
});

// Handle chord progressions controls
document.getElementById('progressionKeySelector').addEventListener('change', () => {
    populateChordProgressions();
});

document.getElementById('progressionStyleFilter').addEventListener('change', () => {
    populateChordProgressions();
});

document.getElementById('progressionDifficultyFilter').addEventListener('change', () => {
    populateChordProgressions();
});

document.getElementById('progressionsFilterBtn').addEventListener('click', toggleChordProgressionsFilter);

// Handle filter button clicks
document.getElementById('landingFilterBtn').addEventListener('click', toggleLandingFilter);
document.getElementById('transitionsFilterBtn').addEventListener('click', toggleTransitionsFilter);

// Initialize buttons and table
generateKeyButtons();
updateTable();
renderCircle();
initializeStyleControls();

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

// Notation guide toggle
const notationToggle = document.getElementById('notationGuideToggle');
const notationContent = document.getElementById('notationGuideContent');

if (notationToggle && notationContent) {
    notationToggle.addEventListener('click', () => {
        notationToggle.classList.toggle('active');
        notationContent.classList.toggle('expanded');
    });
}
