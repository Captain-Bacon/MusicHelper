import './styles.css';
import { scaleData, keyDisplayNames, scaleTypeDisplayNames, keyOrder, circleOfFifthsOrder } from './data/scales.js';
import { landingProgressions, keyTransitions } from './data/progressions.js';
import { chordProgressions, styleOptions, difficultyOptions } from './data/chord-progressions.js';
import { genreContent } from './data/genre-content.js';
import { parseAndConvertProgression } from './utils/romanNumeralParser.js';
import { buildScaleFromFormula, chromaticSequence, getScaleDegree } from './utils/scaleBuilder.js';
import { generateKeyboardSVG, identifyBlueNotes } from './utils/keyboardVisualizer.js';
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

// Tab switching functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tab;

        // Remove active class from all tabs and panels
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

        // Add active class to clicked tab and corresponding panel
        button.classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// Collapsible section functionality
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const toggle = header.querySelector('.section-toggle');

        // Toggle active state
        header.classList.toggle('active');
        content.classList.toggle('active');

        // Update toggle icon
        if (header.classList.contains('active')) {
            toggle.textContent = '▼';
        } else {
            toggle.textContent = '▶';
        }
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

// Genre tab functionality
let currentGenre = 'Pop';
let genreExpandedProgressions = new Set(); // Track expanded rows in genre tab
let currentInstrument = 'both'; // 'both', 'keys', 'guitar'

function renderGenreProgressions() {
    const tbody = document.getElementById('genreProgressionsBody');
    const selectedKey = document.getElementById('genreKeySelector').value;

    // Filter progressions by current genre
    const genreProgressions = chordProgressions.filter(p => p.style === currentGenre);

    if (genreProgressions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="no-selection">No progressions available for this genre yet.</td></tr>';
        return;
    }

    let html = '';

    genreProgressions.forEach((prog) => {
        // Calculate global index for expansion tracking
        const globalIndex = chordProgressions.indexOf(prog);
        const isExpanded = genreExpandedProgressions.has(globalIndex);
        const exampleChords = parseAndConvertProgression(prog.formula, selectedKey);

        // Main row
        html += `
            <tr class="progression-row" data-index="${globalIndex}">
                <td>${prog.formula}</td>
                <td>${exampleChords}</td>
                <td>${prog.difficulty}</td>
                <td>${prog.character}</td>
                <td><span class="expand-icon" data-index="${globalIndex}">${isExpanded ? '▲' : '▼'}</span></td>
            </tr>
        `;

        // Expandable notes row
        html += `
            <tr class="progression-notes-row ${isExpanded ? 'expanded' : ''}" data-index="${globalIndex}">
                <td colspan="5">
                    <div class="progression-notes">
                        <div style="margin-bottom: 10px;"><strong>Voicing:</strong> ${prog.voicing}</div>
                        <strong>Notes:</strong> ${prog.notes}
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    // Add row click listeners for expand/collapse
    tbody.querySelectorAll('.progression-row').forEach(row => {
        row.addEventListener('click', () => {
            const index = parseInt(row.dataset.index);
            toggleGenreProgressionExpansion(index);
        });
    });

    // Add expand icon click listeners
    tbody.querySelectorAll('.expand-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(icon.dataset.index);
            toggleGenreProgressionExpansion(index);
        });
    });
}

function toggleGenreProgressionExpansion(index) {
    if (genreExpandedProgressions.has(index)) {
        genreExpandedProgressions.delete(index);
    } else {
        genreExpandedProgressions.add(index);
    }
    renderGenreProgressions();
}

// Genre tab button event listeners
document.querySelectorAll('.genre-tab-button').forEach(button => {
    button.addEventListener('click', () => {
        currentGenre = button.dataset.genre;

        // Update active state
        document.querySelectorAll('.genre-tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update title
        document.getElementById('genreTitle').textContent = `${currentGenre}`;

        // Render progressions and content for this genre
        renderGenreProgressions();
        renderGenreContent();
    });
});

// Genre key selector - update both progressions and content sections
document.getElementById('genreKeySelector').addEventListener('change', () => {
    renderGenreProgressions();
    renderGenreContent();
});

// Instrument toggle
document.querySelectorAll('.instrument-toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentInstrument = button.dataset.instrument;

        // Update active state
        document.querySelectorAll('.instrument-toggle-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update body data attribute for CSS visibility
        document.body.dataset.instrument = currentInstrument;
    });
});

// Genre section collapsible functionality
document.querySelectorAll('.genre-section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const toggle = header.querySelector('.section-toggle');

        // Toggle active state
        header.classList.toggle('active');
        content.classList.toggle('active');

        // Update toggle icon
        if (header.classList.contains('active')) {
            toggle.textContent = '▼';
        } else {
            toggle.textContent = '▶';
        }
    });
});

// Render genre content sections (placeholder for now)
function renderGenreContent() {
    const genre = genreContent[currentGenre];

    if (!genre || !genre.theory || genre.theory.overview === 'Coming soon...') {
        // Show placeholder for incomplete genres
        document.getElementById('genreTheoryContent').innerHTML = '<p>Theory content for ' + currentGenre + ' coming soon...</p>';
        document.getElementById('genreRhythmContent').innerHTML = '<p>Rhythm & feel content for ' + currentGenre + ' coming soon...</p>';
        document.getElementById('genreLicksContent').innerHTML = '<p>Licks & tricks for ' + currentGenre + ' coming soon...</p>';
        document.getElementById('genrePracticeContent').innerHTML = '<p>Practice resources for ' + currentGenre + ' coming soon...</p>';
        return;
    }

    // Render Theory Section
    renderTheorySection(genre.theory);

    // Render Rhythm Section
    renderRhythmSection(genre.rhythm);

    // Render Licks Section
    renderLicksSection(genre.licks);

    // Render Practice Section
    renderPracticeSection(genre.practice);
}

function renderTheorySection(theory) {
    const content = document.getElementById('genreTheoryContent');
    const selectedKey = document.getElementById('genreKeySelector').value;
    let html = '';

    // ==================================================
    // ALWAYS VISIBLE: Overview + Blues Paradox + 12-Bar Form
    // ==================================================

    html += `<p>${theory.overview}</p>`;

    // The Blues Paradox (always visible - this is the hook)
    if (theory.scalesVsChords) {
        html += `
            <div style="margin: 25px 0; padding: 20px; background: #fff9e6; border: 2px solid #f39c12; border-radius: 8px;">
                <h4 style="margin-top: 0;">${theory.scalesVsChords.title}</h4>
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 12px;"><strong>${theory.scalesVsChords.explanation}</strong></p>
                <p style="font-size: 14px; color: #7f6a00; margin-bottom: 12px;"><strong>Example in ${selectedKey}:</strong> ${theory.scalesVsChords.example.replace(/You play/, `You play ${selectedKey}`)}</p>
                <p style="font-size: 14px; color: #7f6a00; font-style: italic; margin-bottom: 0;">${theory.scalesVsChords.why}</p>
            </div>
        `;
    }

    // 12-Bar Blues Form (always visible - THE foundational structure)
    if (theory.bluesForm) {
        html += `<h4 style="margin-top: 30px;">${theory.bluesForm.title}</h4>`;
        html += `<p>${theory.bluesForm.description}</p>`;

        // Get chord names in selected key
        const I7form = parseAndConvertProgression('I7', selectedKey);
        const IV7form = parseAndConvertProgression('IV7', selectedKey);
        const V7form = parseAndConvertProgression('V7', selectedKey);

        html += `<div style="margin: 20px 0;">`;
        html += `<div style="display: grid; grid-template-columns: auto auto 1fr; gap: 10px; padding: 15px; background: #f8f9fa; border-radius: 8px;">`;

        theory.bluesForm.structure.forEach(section => {
            const chordInKey = section.chord.replace('I7', I7form).replace('IV7', IV7form).replace('V7', V7form);
            html += `
                <div style="font-weight: bold; color: #2c3e50;">Bars ${section.bars}</div>
                <div style="font-weight: bold; color: #e67e22;">${chordInKey}</div>
                <div style="color: #7f8c8d;">${section.description}</div>
            `;
        });

        html += `</div></div>`;
        html += `<p style="margin-top: 15px;"><strong>Quick-change variation:</strong> ${theory.bluesForm.quickChange}</p>`;
        html += `<p style="font-style: italic; color: #7f8c8d;">${theory.bluesForm.barNumbers}</p>`;
    }

    // ==================================================
    // TYPICAL KEYS: Genre-specific key preferences
    // ==================================================

    if (theory.typicalKeys) {
        html += `
            <div style="margin: 25px 0; padding: 20px; background: #fff3e0; border: 2px solid #ff9800; border-radius: 8px;">
                <h4 style="margin-top: 0;">🎹 Typical Keys for This Genre</h4>
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">${theory.typicalKeys.description}</p>

                <div style="margin: 15px 0; padding: 12px; background: #ffffff; border-left: 4px solid #4caf50; border-radius: 4px;">
                    <strong style="color: #2e7d32;">✅ Common keys:</strong> ${theory.typicalKeys.common}<br>
                    <span style="color: #555; font-size: 14px; margin-top: 8px; display: block;">${theory.typicalKeys.why}</span>
                </div>
        `;

        if (theory.typicalKeys.avoid) {
            html += `
                <div style="margin: 15px 0; padding: 12px; background: #ffffff; border-left: 4px solid #f44336; border-radius: 4px;">
                    <strong style="color: #c62828;">❌ Less common:</strong> ${theory.typicalKeys.avoid}<br>
                    ${theory.typicalKeys.whyAvoid ? `<span style="color: #555; font-size: 14px; margin-top: 8px; display: block;">${theory.typicalKeys.whyAvoid}</span>` : ''}
                </div>
            `;
        }

        html += `</div>`;
    }

    // ==================================================
    // NEW THEORY STRUCTURES: Pedagogical improvements
    // ==================================================

    // melodicVsHarmonic (Pop) and melodicVsRhythmic (Rock)
    if (theory.melodicVsHarmonic || theory.melodicVsRhythmic) {
        const section = theory.melodicVsHarmonic || theory.melodicVsRhythmic;
        html += `
            <div style="margin: 25px 0; padding: 20px; background: #fff9e6; border: 2px solid #f39c12; border-radius: 8px;">
                <h4 style="margin-top: 0;">${section.title}</h4>
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 12px;"><strong>${section.explanation}</strong></p>
        `;

        if (section.example) {
            html += `<p style="font-size: 14px; color: #7f6a00; margin-bottom: 12px;"><strong>Example:</strong> ${section.example}</p>`;
        }

        if (section.simplicity) {
            html += `<p style="font-size: 14px; color: #7f6a00; font-style: italic; margin-bottom: 0;">${section.simplicity}</p>`;
        }

        if (section.pentatonicFreedom) {
            html += `<p style="font-size: 14px; color: #7f6a00; font-style: italic; margin-bottom: 12px;"><strong>Key Insight:</strong> ${section.pentatonicFreedom}</p>`;
        }

        if (section.contrast) {
            html += `<p style="font-size: 14px; color: #7f6a00; font-style: italic; margin-bottom: 0;"><strong>Contrast:</strong> ${section.contrast}</p>`;
        }

        html += `</div>`;
    }

    // chordScaleRelationships (Jazz, Neo-Soul)
    if (theory.chordScaleRelationships) {
        const section = theory.chordScaleRelationships;
        html += `
            <div style="margin: 25px 0; padding: 20px; background: #e8f5e9; border: 2px solid #4caf50; border-radius: 8px;">
                <h4 style="margin-top: 0;">${section.title}</h4>
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;"><strong>${section.explanation}</strong></p>
        `;

        // Render example progression breakdown
        if (section.example) {
            const ex = section.example;
            // Transpose progression to selected key
            const transposedChords = parseAndConvertProgression(ex.chords.split(' → ').map(c => c.replace(/[A-G][b#]?/, 'X')).join(' → ').replace(/X/g, 'I'), selectedKey);

            html += `
                <div style="margin: 15px 0; padding: 15px; background: #ffffff; border-left: 4px solid #4caf50; border-radius: 4px;">
                    <strong style="color: #2e7d32;">Example: ${ex.progression} in ${selectedKey}</strong><br>
                    <span style="color: #555; font-size: 14px; margin-top: 8px; display: block;">
                        <strong>Chords:</strong> ${ex.chords} → (becomes ${transposedChords} in ${selectedKey})<br>
                        <strong>Scales:</strong> ${ex.scales}<br>
                        <strong>Breakdown:</strong> ${ex.breakdown}
                    </span>
                </div>
            `;
        }

        if (section.why) {
            html += `<p style="font-size: 14px; color: #2e7d32; margin-bottom: 12px;">${section.why}</p>`;
        }

        if (section.vsBluesRock) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 12px;"><strong>vs Blues/Rock:</strong> ${section.vsBluesRock}</p>`;
        }

        if (section.vsBebop) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 12px;"><strong>vs Bebop/Jazz:</strong> ${section.vsBebop}</p>`;
        }

        if (section.vsJazz) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 12px;"><strong>vs Jazz:</strong> ${section.vsJazz}</p>`;
        }

        if (section.vsGospel) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 12px;"><strong>vs Gospel:</strong> ${section.vsGospel}</p>`;
        }

        if (section.practiceApproach) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 0;"><strong>Practice Approach:</strong> ${section.practiceApproach}</p>`;
        }

        html += `</div>`;
    }

    // melodicApproach (Gospel)
    if (theory.melodicApproach) {
        const section = theory.melodicApproach;
        html += `
            <div style="margin: 25px 0; padding: 20px; background: #e8f5e9; border: 2px solid #4caf50; border-radius: 8px;">
                <h4 style="margin-top: 0;">${section.title}</h4>
                <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;"><strong>${section.coreIdea}</strong></p>
        `;

        // How It Works section
        if (section.howItWorks) {
            const hw = section.howItWorks;
            html += `
                <div style="margin: 15px 0;">
                    <h5 style="color: #2e7d32; margin-bottom: 10px;">How It Works</h5>
                    <p style="font-size: 14px; margin-bottom: 10px;">${hw.explanation}</p>
                    <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px;">
                        <li style="margin-bottom: 8px;"><strong>Dm7:</strong> ${hw.dm7Example}</li>
                        <li style="margin-bottom: 8px;"><strong>G7:</strong> ${hw.g7Example}</li>
                        <li style="margin-bottom: 8px;"><strong>CMaj7:</strong> ${hw.cmaj7Example}</li>
                    </ul>
                </div>
            `;
        }

        // Three Key Techniques
        if (section.threeKeyTechniques) {
            html += `<h5 style="color: #2e7d32; margin-top: 20px; margin-bottom: 10px;">Three Key Techniques</h5>`;

            const techniques = section.threeKeyTechniques;

            if (techniques.threeToOneSlide) {
                const tech = techniques.threeToOneSlide;
                const transposedExample = buildScaleFromFormula(selectedKey, tech.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: #ffffff; border-left: 4px solid #4caf50; border-radius: 4px;">
                        <strong style="color: #2e7d32;">1. ${tech.name}</strong><br>
                        <span style="color: #555; font-size: 14px; margin-top: 8px; display: block;">
                            <strong>Formula:</strong> ${tech.formula}<br>
                            <strong>In ${selectedKey}:</strong> ${transposedExample}<br>
                            ${tech.description}<br>
                            <strong>When:</strong> ${tech.when}<br>
                            <strong>Why:</strong> ${tech.why}<br>
                            <em>${tech.practice}</em>
                        </span>
                    </div>
                `;
            }

            if (techniques.chromaticWalkup) {
                const tech = techniques.chromaticWalkup;
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: #ffffff; border-left: 4px solid #4caf50; border-radius: 4px;">
                        <strong style="color: #2e7d32;">2. ${tech.name}</strong><br>
                        <span style="color: #555; font-size: 14px; margin-top: 8px; display: block;">
                            ${tech.description}<br>
                            <strong>Example:</strong> ${tech.example}<br>
                            <strong>When:</strong> ${tech.when}<br>
                            <strong>Why:</strong> ${tech.why}<br>
                            <strong>Speed:</strong> ${tech.speed}<br>
                            <em>${tech.practice}</em>
                        </span>
                    </div>
                `;
            }

            if (techniques.chromaticApproachTones) {
                const tech = techniques.chromaticApproachTones;
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: #ffffff; border-left: 4px solid #4caf50; border-radius: 4px;">
                        <strong style="color: #2e7d32;">3. ${tech.name}</strong><br>
                        <span style="color: #555; font-size: 14px; margin-top: 8px; display: block;">
                            ${tech.description}<br>
                            <strong>Example:</strong> ${tech.example}<br>
                            <strong>Over G7:</strong> ${tech.overG7}<br>
                            <strong>Why:</strong> ${tech.why}<br>
                            <em>${tech.practice}</em>
                        </span>
                    </div>
                `;
            }
        }

        // Comparison sections
        if (section.vsJazz) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-top: 15px; margin-bottom: 8px;"><strong>vs Jazz:</strong> ${section.vsJazz}</p>`;
        }
        if (section.vsBlues) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 8px;"><strong>vs Blues:</strong> ${section.vsBlues}</p>`;
        }
        if (section.vsNeoSoul) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 8px;"><strong>vs Neo-Soul:</strong> ${section.vsNeoSoul}</p>`;
        }
        if (section.keyInsight) {
            html += `<p style="font-size: 14px; color: #2e7d32; font-weight: bold; margin-top: 15px; margin-bottom: 0;"><strong>Key Insight:</strong> ${section.keyInsight}</p>`;
        }

        html += `</div>`;
    }

    // ==================================================
    // CUSTOM SECTIONS: Generic rendering for genre-specific content
    // ==================================================

    // Known section types that have their own rendering (skip these)
    const knownSections = ['overview', 'scales', 'scalesByChordType', 'referenceScales', 'blueNotes', 'colorTones',
                          'scalesVsChords', 'bluesForm', 'melodicVsHarmonic', 'melodicVsRhythmic', 'powerChords',
                          'chordScaleRelationships', 'melodicApproach', 'harmonyVsBlues',
                          'chordConstruction', 'whyDominant7th', 'pianoVoicings', 'guitarVoicings', 'turnaround', 'typicalKeys'];

    // Render any custom sections that aren't known types
    Object.keys(theory).forEach(sectionKey => {
        if (!knownSections.includes(sectionKey)) {
            const section = theory[sectionKey];
            if (section && typeof section === 'object' && section.title) {
                html += `
                    <div style="margin: 25px 0; padding: 20px; background: #e8f5e9; border: 2px solid #4caf50; border-radius: 8px;">
                        <h4 style="margin-top: 0;">${section.title}</h4>
                `;

                if (section.explanation) {
                    html += `<p style="font-size: 15px; line-height: 1.6; margin-bottom: 12px;"><strong>${section.explanation}</strong></p>`;
                }

                if (section.example) {
                    // Auto-transpose examples that mention specific keys
                    let exampleText = section.example;
                    if (exampleText.includes('In C:')) {
                        // Convert the Roman numerals or progression in the example
                        exampleText = exampleText.replace(/In [A-G][b#]?:/g, `In ${selectedKey}:`);
                    }
                    html += `<p style="font-size: 14px; color: #2e7d32; margin-bottom: 12px;"><strong>Example:</strong> ${exampleText}</p>`;
                }

                if (section.why) {
                    html += `<p style="font-size: 14px; color: #2e7d32; font-style: italic; margin-bottom: 0;">${section.why}</p>`;
                }

                // Handle any additional fields generically
                Object.keys(section).forEach(key => {
                    if (!['title', 'explanation', 'example', 'why'].includes(key) && typeof section[key] === 'string') {
                        html += `<p style="margin-top: 10px;"><strong>${key}:</strong> ${section[key]}</p>`;
                    }
                });

                html += `</div>`;
            }
        }
    });

    // ==================================================
    // SCALES BY CHORD TYPE: Jazz & Neo-Soul
    // ==================================================

    if (theory.scalesByChordType) {
        const scalesByChord = theory.scalesByChordType;

        html += `
            <div style="margin: 30px 0;">
                <button class="scales-accordion-toggle" style="
                    width: 100%;
                    padding: 15px;
                    background: #e8f5e9;
                    border: 2px solid #4caf50;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: bold;
                    color: #2e7d32;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>🎵 Scales by Chord Type</span>
                    <span class="scales-accordion-icon" style="font-size: 18px;">▼</span>
                </button>
                <div class="scales-accordion-content" style="
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    background: #f8f9fa;
                    border: 2px solid #4caf50;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                ">
                    <div style="padding: 20px;">
        `;

        if (scalesByChord.explanation) {
            html += `<p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;"><strong>${scalesByChord.explanation}</strong></p>`;
        }

        // Process each chord type category
        const categories = ['majorSeventhChords', 'minorSeventhChords', 'dominantSeventhChords', 'halfDiminishedChords'];

        categories.forEach(categoryKey => {
            const category = scalesByChord[categoryKey];
            if (!category) return;

            html += `
                <div style="margin: 30px 0; padding: 20px; background: #ffffff; border: 2px solid #2196f3; border-radius: 8px;">
                    <h4 style="margin-top: 0; color: #0d47a1;">${category.title}</h4>
                    <p style="font-size: 14px; color: #555; margin-bottom: 8px;"><strong>Chord Types:</strong> ${category.chordTypes}</p>
                    <p style="font-size: 14px; color: #555; margin-bottom: 8px;"><strong>Character:</strong> ${category.character}</p>
                    <p style="font-size: 14px; color: #555; margin-bottom: 15px;"><strong>When to Use:</strong> ${category.whenToUse}</p>
            `;

            // Render each scale in this category
            if (category.scales && category.scales.length > 0) {
                category.scales.forEach(scale => {
                    const notesString = buildScaleFromFormula(selectedKey, scale.formula);
                    const notes = notesString.split(' - ');
                    const blueNotes = identifyBlueNotes(selectedKey, notes);
                    const keyboardSVG = generateKeyboardSVG(selectedKey, notes, blueNotes);

                    html += `
                        <div style="margin-bottom: 30px; padding: 15px; background: #f8f9fa; border-left: 4px solid #2196f3; border-radius: 4px;">
                            <h5 style="margin-top: 0; margin-bottom: 5px; color: #2c3e50;">${selectedKey} ${scale.name}</h5>
                            <p style="margin-bottom: 15px; color: #7f8c8d; font-size: 14px;">${scale.description}</p>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; margin-bottom: 15px;">
                                <!-- Keyboard -->
                                <div>${keyboardSVG}</div>

                                <!-- Scale Table -->
                                <div class="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Notes in ${selectedKey}</th>
                    `;

                    for (let i = 0; i < notes.length; i++) {
                        html += `<th>${i + 1}</th>`;
                    }

                    html += `
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${scale.name}</td>
                    `;

                    notes.forEach(note => {
                        html += `<td class="note-cell">${note}</td>`;
                    });

                    html += `
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div style="font-size: 13px; color: #555; line-height: 1.6;">
                    `;

                    if (scale.chordTones) {
                        html += `<p style="margin-bottom: 8px;"><strong>Chord Tones:</strong> ${scale.chordTones}</p>`;
                    }
                    if (scale.availableTensions) {
                        html += `<p style="margin-bottom: 8px;"><strong>Available Tensions:</strong> ${scale.availableTensions}</p>`;
                    }
                    if (scale.sound) {
                        html += `<p style="margin-bottom: 8px;"><strong>Sound:</strong> ${scale.sound}</p>`;
                    }
                    if (scale.usage) {
                        html += `<p style="margin-bottom: 8px;"><strong>Usage:</strong> ${scale.usage}</p>`;
                    }
                    if (scale.why) {
                        html += `<p style="margin-bottom: 8px;"><strong>Why:</strong> ${scale.why}</p>`;
                    }
                    if (scale.when) {
                        html += `<p style="margin-bottom: 8px;"><strong>When:</strong> ${scale.when}</p>`;
                    }
                    if (scale.compare) {
                        html += `<p style="margin-bottom: 8px;"><strong>Compare:</strong> ${scale.compare}</p>`;
                    }
                    if (scale.tritone) {
                        html += `<p style="margin-bottom: 8px;"><strong>Tritone:</strong> ${scale.tritone}</p>`;
                    }
                    if (scale.avoid) {
                        html += `<p style="margin-bottom: 8px;"><strong>Avoid:</strong> ${scale.avoid}</p>`;
                    }
                    if (scale.chromatic) {
                        html += `<p style="margin-bottom: 8px;"><strong>Chromatic Note:</strong> ${scale.chromatic}</p>`;
                    }
                    if (scale.practice) {
                        html += `<p style="margin-bottom: 0;"><strong>Practice:</strong> ${scale.practice}</p>`;
                    }

                    html += `
                            </div>
                        </div>
                    `;
                });
            }

            html += `</div>`;
        });

        // Close scales accordion
        html += `
                    </div>
                </div>
            </div>
        `;
    }

    // ==================================================
    // REFERENCE SCALES: Gospel
    // ==================================================

    if (theory.referenceScales) {
        const refScales = theory.referenceScales;

        html += `
            <div style="margin: 30px 0;">
                <button class="scales-accordion-toggle" style="
                    width: 100%;
                    padding: 15px;
                    background: #fff3e0;
                    border: 2px solid #ff9800;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: bold;
                    color: #e65100;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>📖 ${refScales.title}</span>
                    <span class="scales-accordion-icon" style="font-size: 18px;">▼</span>
                </button>
                <div class="scales-accordion-content" style="
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    background: #f8f9fa;
                    border: 2px solid #ff9800;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                ">
                    <div style="padding: 20px;">
        `;

        if (refScales.explanation) {
            html += `<p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px; background: #fff9e6; padding: 15px; border-left: 4px solid #ff9800;"><strong>⚠️ ${refScales.explanation}</strong></p>`;
        }

        // Render Gospel Scale
        if (refScales.gospelScale) {
            const scale = refScales.gospelScale;
            const notesString = buildScaleFromFormula(selectedKey, scale.formula);
            const notes = notesString.split(' - ');
            const blueNotes = identifyBlueNotes(selectedKey, notes);
            const keyboardSVG = generateKeyboardSVG(selectedKey, notes, blueNotes);

            html += `
                <div style="margin-bottom: 30px;">
                    <h5 style="margin-top: 0; margin-bottom: 5px; color: #2c3e50;">${selectedKey} ${scale.name}</h5>
                    <p style="margin-bottom: 15px; color: #7f8c8d; font-size: 14px;">${scale.description}</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; margin-bottom: 15px;">
                        <!-- Keyboard -->
                        <div>${keyboardSVG}</div>

                        <!-- Scale Table -->
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Notes in ${selectedKey}</th>
            `;

            for (let i = 0; i < notes.length; i++) {
                html += `<th>${i + 1}</th>`;
            }

            html += `
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${scale.name}</td>
            `;

            notes.forEach(note => {
                html += `<td class="note-cell">${note}</td>`;
            });

            html += `
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="font-size: 14px; color: #555; line-height: 1.6;">
                        <p style="margin-bottom: 8px;"><strong>Usage:</strong> ${scale.usage}</p>
                        <p style="margin-bottom: 8px;"><strong>Context:</strong> ${scale.context}</p>
                        ${scale.chromatic ? `<p style="margin-bottom: 0;"><strong>Chromatic Freedom:</strong> ${scale.chromatic}</p>` : ''}
                    </div>
                </div>
            `;
        }

        // Render Mixolydian
        if (refScales.mixolydian) {
            const scale = refScales.mixolydian;
            const notesString = buildScaleFromFormula(selectedKey, scale.formula);
            const notes = notesString.split(' - ');
            const blueNotes = identifyBlueNotes(selectedKey, notes);
            const keyboardSVG = generateKeyboardSVG(selectedKey, notes, blueNotes);

            html += `
                <div style="margin-bottom: 30px;">
                    <h5 style="margin-top: 0; margin-bottom: 5px; color: #2c3e50;">${selectedKey} ${scale.name}</h5>
                    <p style="margin-bottom: 15px; color: #7f8c8d; font-size: 14px;">${scale.description}</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; margin-bottom: 15px;">
                        <!-- Keyboard -->
                        <div>${keyboardSVG}</div>

                        <!-- Scale Table -->
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Notes in ${selectedKey}</th>
            `;

            for (let i = 0; i < notes.length; i++) {
                html += `<th>${i + 1}</th>`;
            }

            html += `
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${scale.name}</td>
            `;

            notes.forEach(note => {
                html += `<td class="note-cell">${note}</td>`;
            });

            html += `
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="font-size: 14px; color: #555; line-height: 1.6;">
                        <p style="margin-bottom: 8px;"><strong>Usage:</strong> ${scale.usage}</p>
                        <p style="margin-bottom: 8px;"><strong>Context:</strong> ${scale.context}</p>
                        ${scale.extensions ? `<p style="margin-bottom: 0;"><strong>Extensions:</strong> ${scale.extensions}</p>` : ''}
                    </div>
                </div>
            `;
        }

        if (refScales.caveat) {
            html += `<p style="font-size: 15px; line-height: 1.6; margin-top: 20px; background: #ffebee; padding: 15px; border-left: 4px solid #f44336;"><strong>⚠️ IMPORTANT: ${refScales.caveat}</strong></p>`;
        }

        // Close scales accordion
        html += `
                    </div>
                </div>
            </div>
        `;
    }

    // ==================================================
    // ACCORDION: Scales & Blue Notes
    // ==================================================

    if (theory.scales && theory.scales.length > 0) {
        html += `
            <div style="margin: 30px 0;">
                <button class="scales-accordion-toggle" style="
                    width: 100%;
                    padding: 15px;
                    background: #e8f5e9;
                    border: 2px solid #4caf50;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: bold;
                    color: #2e7d32;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>🎵 Essential Scales</span>
                    <span class="scales-accordion-icon" style="font-size: 18px;">▼</span>
                </button>
                <div class="scales-accordion-content" style="
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    background: #f8f9fa;
                    border: 2px solid #4caf50;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                ">
                    <div style="padding: 20px;">
        `;

        // Render first scale with keyboard + table side-by-side
        if (theory.scales[0]) {
            const scale = theory.scales[0];
            const notesString = buildScaleFromFormula(selectedKey, scale.formula);
            const notes = notesString.split(' - ');
            const blueNotes = identifyBlueNotes(selectedKey, notes);
            const keyboardSVG = generateKeyboardSVG(selectedKey, notes, blueNotes);

            html += `
                <div style="margin-bottom: 25px;">
                    <h5 style="margin-top: 0; margin-bottom: 5px; color: #2c3e50;">${selectedKey} ${scale.name}</h5>
                    <p style="margin-bottom: 15px; color: #7f8c8d; font-size: 14px;">${scale.description}</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;">
                        <!-- Keyboard -->
                        <div>${keyboardSVG}</div>

                        <!-- Scale Table -->
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Notes in ${selectedKey}</th>
            `;

            for (let i = 0; i < notes.length; i++) {
                html += `<th>${i + 1}</th>`;
            }

            html += `
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${scale.name}</td>
            `;

            notes.forEach(note => {
                html += `<td class="note-cell">${note}</td>`;
            });

            html += `
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }

        // Render remaining scales as collapsed accordions
        for (let i = 1; i < theory.scales.length; i++) {
            const scale = theory.scales[i];
            // Generate notes in selected key from formula
            const notesString = buildScaleFromFormula(selectedKey, scale.formula);
            const notes = notesString.split(' - ');

            // Identify blue notes for highlighting
            const blueNotes = identifyBlueNotes(selectedKey, notes);

            // Generate keyboard visualization
            const keyboardSVG = generateKeyboardSVG(selectedKey, notes, blueNotes);

            html += `
                <div style="margin-bottom: 25px;">
                    <h5 style="margin-top: 0; margin-bottom: 5px; color: #2c3e50;">${selectedKey} ${scale.name}</h5>
                    <p style="margin-bottom: 15px; color: #7f8c8d; font-size: 14px;">${scale.description}</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;">
                        <!-- Keyboard -->
                        <div>${keyboardSVG}</div>

                        <!-- Scale Table -->
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Notes in ${selectedKey}</th>
            `;

            // Add column headers for each note position
            for (let i = 0; i < notes.length; i++) {
                html += `<th>${i + 1}</th>`;
            }

            html += `
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${scale.name}</td>
            `;

            // Add note cells
            notes.forEach(note => {
                html += `<td class="note-cell">${note}</td>`;
            });

            html += `
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }

        // Characteristic Notes (blue notes for Blues, color tones for Gospel, etc.)
        const characteristicNotes = theory.blueNotes || theory.colorTones;
        const characteristicNotesTitle = theory.blueNotes ? 'Blue Notes' : 'Gospel Color Tones';

        if (characteristicNotes) {
            html += `<h4 style="margin-top: 30px;">${characteristicNotesTitle}</h4><p>${characteristicNotes.description}</p>`;
            html += `<div style="margin-top: 15px;">`;

            characteristicNotes.notes.forEach(note => {
                const intervalMatch = note.note.match(/^([b#]?\d+)/);
                if (intervalMatch) {
                    const interval = intervalMatch[1];
                    const notesString = buildScaleFromFormula(selectedKey, interval);
                    const actualNote = notesString.split(' - ')[0];

                    html += `
                        <div style="margin-bottom: 15px; padding: 12px; background: #f8f9fa; border-left: 4px solid #e67e22;">
                            <strong>${note.note}</strong> = <strong style="color: #e67e22;">${actualNote}</strong> in ${selectedKey}<br>
                            <span style="color: #7f8c8d; font-size: 14px;">${note.usage}</span>
                        </div>
                    `;
                }
            });
            html += '</div>';
        }

        // Close scales accordion
        html += `
                    </div>
                </div>
            </div>
        `;
    }

    // ==================================================
    // ACCORDION: Understanding Chords
    // ==================================================

    if (theory.chordConstruction) {
        html += `
            <div style="margin: 30px 0;">
                <button class="chords-accordion-toggle" style="
                    width: 100%;
                    padding: 15px;
                    background: #e3f2fd;
                    border: 2px solid #2196f3;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: bold;
                    color: #0d47a1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>🎹 Understanding Chords</span>
                    <span class="chords-accordion-icon" style="font-size: 18px;">▼</span>
                </button>
                <div class="chords-accordion-content" style="
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    background: #f8f9fa;
                    border: 2px solid #2196f3;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                ">
                    <div style="padding: 20px;">
                        <h4 style="margin-top: 0;">Chord Construction</h4>
                        <p>${theory.chordConstruction.description}</p>
        `;

        if (theory.chordConstruction.majorBlues) {
            html += `<p style="margin-top: 10px;"><strong>Major Blues:</strong> ${theory.chordConstruction.majorBlues}</p>`;
        }
        if (theory.chordConstruction.minorBlues) {
            html += `<p style="margin-top: 8px;"><strong>Minor Blues:</strong> ${theory.chordConstruction.minorBlues}</p>`;
        }

        // Triads
        if (theory.chordConstruction.triads) {
            // Handle Blues-style (single formula) vs Rock-style (majorTriad/minorTriad)
            if (theory.chordConstruction.triads.formula) {
                // Blues style: single formula
                const triadNotes = buildScaleFromFormula(selectedKey, theory.chordConstruction.triads.formula);
                html += `
                    <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #3498db;">
                        <strong>Major Triad (1-3-5)</strong><br>
                        <span style="color: #7f8c8d; font-size: 14px;">${theory.chordConstruction.triads.explanation}</span><br>
                        <strong style="color: #3498db; margin-top: 8px; display: inline-block;">In ${selectedKey}: ${triadNotes}</strong>
                    </div>
                `;
            } else {
                // Rock style: majorTriad and minorTriad objects
                html += `<div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #3498db;">`;
                html += `<span style="color: #7f8c8d; font-size: 14px;">${theory.chordConstruction.triads.explanation}</span>`;

                if (theory.chordConstruction.triads.majorTriad) {
                    const majorNotes = buildScaleFromFormula(selectedKey, theory.chordConstruction.triads.majorTriad.formula);
                    html += `
                        <div style="margin-top: 15px;">
                            <strong>Major Triad (${theory.chordConstruction.triads.majorTriad.formula})</strong><br>
                            <strong style="color: #3498db;">In ${selectedKey}: ${majorNotes}</strong><br>
                            <span style="color: #7f8c8d; font-size: 14px;">${theory.chordConstruction.triads.majorTriad.usage}</span>
                        </div>
                    `;
                }

                if (theory.chordConstruction.triads.minorTriad) {
                    const minorNotes = buildScaleFromFormula(selectedKey, theory.chordConstruction.triads.minorTriad.formula);
                    html += `
                        <div style="margin-top: 15px;">
                            <strong>Minor Triad (${theory.chordConstruction.triads.minorTriad.formula})</strong><br>
                            <strong style="color: #3498db;">In ${selectedKey}: ${minorNotes}</strong><br>
                            <span style="color: #7f8c8d; font-size: 14px;">${theory.chordConstruction.triads.minorTriad.usage}</span>
                        </div>
                    `;
                }

                html += `</div>`;
            }
        }

        // Dominant 7th
        if (theory.chordConstruction.dominant7th) {
            const dom7Notes = buildScaleFromFormula(selectedKey, theory.chordConstruction.dominant7th.formula);
            const I7chord = parseAndConvertProgression('I7', selectedKey);

            // Get 3rd and b7 for tritone example
            const thirdNote = buildScaleFromFormula(selectedKey, '3').split(' - ')[0];
            const b7Note = buildScaleFromFormula(selectedKey, 'b7').split(' - ')[0];

            html += `
                <div style="margin: 20px 0; padding: 15px; background: #fff3cd; border-left: 4px solid #e67e22;">
                    <strong>Dominant 7th (1-3-5-b7)</strong><br>
                    <span style="color: #856404; font-size: 14px;">${theory.chordConstruction.dominant7th.explanation}</span><br>
                    <strong style="color: #e67e22; margin-top: 8px; display: inline-block;">In ${selectedKey}: ${I7chord} = ${dom7Notes}</strong><br>
                    <span style="color: #856404; font-size: 14px; font-style: italic; margin-top: 8px; display: inline-block;">${theory.chordConstruction.dominant7th.why}</span>
            `;

            if (theory.chordConstruction.dominant7th.tritone) {
                html += `
                    <br><br>
                    <span style="color: #856404; font-size: 14px;"><strong>Tritone in ${selectedKey}:</strong> ${theory.chordConstruction.dominant7th.tritone.replace(/In a C7 chord, the E \(3rd\) and Bb \(b7\)/, `In ${I7chord}, the ${thirdNote} (3rd) and ${b7Note} (b7)`)}</span>
                `;
            }

            html += `</div>`;
        }

        // Extensions
        if (theory.chordConstruction.extensions) {
            const ext = theory.chordConstruction.extensions;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #e7f3ff; border-left: 4px solid #8e44ad;">
                    <strong style="font-size: 16px;">Extensions (9ths, 11ths, 13ths)</strong><br><br>
                    <span style="color: #5a3a6b; font-size: 14px;"><strong>What they are:</strong> ${ext.whatTheyAre}</span><br><br>
                    <span style="color: #5a3a6b; font-size: 14px;"><strong>Why these names?</strong> ${ext.naming}</span>
                    <ul style="margin: 15px 0; padding-left: 20px;">
            `;

            ext.common.forEach(note => {
                // Build examples for each extension in selected key
                let intervalFormula = '';
                let exampleChord = '';

                if (note.interval === '9th') {
                    intervalFormula = '1 - 3 - 5 - b7 - 2'; // 9th = 2nd note
                    exampleChord = parseAndConvertProgression('I9', selectedKey);
                } else if (note.interval === '11th') {
                    intervalFormula = '1 - 3 - 5 - b7 - 2 - 4'; // includes 9th and 11th (2nd and 4th)
                    exampleChord = parseAndConvertProgression('I11', selectedKey);
                } else if (note.interval === '13th') {
                    intervalFormula = '1 - 3 - 5 - b7 - 2 - 6'; // includes 9th and 13th (2nd and 6th), skip 11th to avoid clash
                    exampleChord = parseAndConvertProgression('I13', selectedKey);
                }

                const extensionNotes = buildScaleFromFormula(selectedKey, intervalFormula);

                html += `
                    <li style="margin-bottom: 8px; color: #5a3a6b;">
                        <strong>${note.interval}</strong>: ${note.description}<br>
                        <span style="font-size: 13px; color: #8e44ad;">Example: ${exampleChord} in ${selectedKey} = ${extensionNotes}</span>
                    </li>
                `;
            });

            html += `
                    </ul>
                    <div style="margin-top: 15px; padding: 12px; background: #fff3cd; border-left: 3px solid #ffc107; border-radius: 4px;">
                        <span style="color: #856404; font-size: 14px;"><strong>⚠️ In practice:</strong> ${ext.inPractice}</span>
                    </div>
            `;

            html += `</div>`;
        }

        // Suspended Chords (Rock)
        if (theory.chordConstruction.suspendedChords) {
            const sus = theory.chordConstruction.suspendedChords;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #fff3cd; border-left: 4px solid #ffc107;">
                    <strong style="font-size: 16px;">Suspended Chords</strong><br><br>
                    <span style="color: #856404; font-size: 14px;">${sus.explanation}</span>
            `;

            if (sus.sus2) {
                const sus2Notes = buildScaleFromFormula(selectedKey, sus.sus2.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>sus2 (${sus.sus2.formula})</strong><br>
                        <strong style="color: #e67e22;">In ${selectedKey}: ${sus2Notes}</strong><br>
                        <span style="color: #856404; font-size: 14px;">${sus.sus2.usage}</span>
                    </div>
                `;
            }

            if (sus.sus4) {
                const sus4Notes = buildScaleFromFormula(selectedKey, sus.sus4.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>sus4 (${sus.sus4.formula})</strong><br>
                        <strong style="color: #e67e22;">In ${selectedKey}: ${sus4Notes}</strong><br>
                        <span style="color: #856404; font-size: 14px;">${sus.sus4.usage}</span>
                    </div>
                `;
            }

            html += `</div>`;
        }

        // Seventh Chords (Rock, Neo-Soul)
        if (theory.chordConstruction.seventhChords) {
            const seventh = theory.chordConstruction.seventhChords;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #e8f5e9; border-left: 4px solid #4caf50;">
                    <strong style="font-size: 16px;">7th Chords</strong><br><br>
                    <span style="color: #2e7d32; font-size: 14px;">${seventh.explanation}</span>
            `;

            if (seventh.dominant7th) {
                const dom7Notes = buildScaleFromFormula(selectedKey, seventh.dominant7th.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>Dominant 7th (${seventh.dominant7th.formula})</strong><br>
                        <strong style="color: #4caf50;">In ${selectedKey}: ${dom7Notes}</strong><br>
                        <span style="color: #2e7d32; font-size: 14px;">${seventh.dominant7th.usage}</span>
                    </div>
                `;
            }

            if (seventh.major7th) {
                const maj7Notes = buildScaleFromFormula(selectedKey, seventh.major7th.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>Major 7th (${seventh.major7th.formula})</strong><br>
                        <strong style="color: #4caf50;">In ${selectedKey}: ${maj7Notes}</strong><br>
                        <span style="color: #2e7d32; font-size: 14px;">${seventh.major7th.usage}</span>
                    </div>
                `;
            }

            html += `</div>`;
        }

        // Extended Chords (Rock)
        if (theory.chordConstruction.extendedChords) {
            const ext = theory.chordConstruction.extendedChords;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #f3e5f5; border-left: 4px solid #9c27b0;">
                    <strong style="font-size: 16px;">Extended Chords (9ths, 11ths, 13ths)</strong><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;"><strong>What they are:</strong> ${ext.whatTheyAre}</span><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;"><strong>Why these names?</strong> ${ext.naming}</span>
                    <ul style="margin: 15px 0; padding-left: 20px;">
            `;

            ext.common.forEach(note => {
                html += `
                    <li style="margin-bottom: 8px; color: #6a1b9a;">
                        <strong>${note.interval}</strong>: ${note.description}
                    </li>
                `;
            });

            html += `
                    </ul>
                    <div style="margin-top: 15px; padding: 12px; background: white; border-radius: 4px;">
                        <span style="color: #6a1b9a; font-size: 14px;"><strong>In practice:</strong> ${ext.inPractice}</span>
                    </div>
                </div>
            `;
        }

        // Seventh (Gospel/R&B style - major7th/dominant7th/minor7th at same level)
        if (theory.chordConstruction.seventh) {
            const seventh = theory.chordConstruction.seventh;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #e8f5e9; border-left: 4px solid #4caf50;">
                    <strong style="font-size: 16px;">7th Chords</strong><br><br>
                    <span style="color: #2e7d32; font-size: 14px;">${seventh.explanation}</span>
            `;

            if (seventh.major7th) {
                const maj7Notes = buildScaleFromFormula(selectedKey, seventh.major7th.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>Major 7th (${seventh.major7th.formula})</strong><br>
                        <strong style="color: #4caf50;">In ${selectedKey}: ${maj7Notes}</strong><br>
                        <span style="color: #2e7d32; font-size: 14px;">${seventh.major7th.sound}</span>
                    </div>
                `;
            }

            if (seventh.dominant7th) {
                const dom7Notes = buildScaleFromFormula(selectedKey, seventh.dominant7th.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>Dominant 7th (${seventh.dominant7th.formula})</strong><br>
                        <strong style="color: #4caf50;">In ${selectedKey}: ${dom7Notes}</strong><br>
                        <span style="color: #2e7d32; font-size: 14px;">${seventh.dominant7th.sound}</span>
                    </div>
                `;
            }

            if (seventh.minor7th) {
                const min7Notes = buildScaleFromFormula(selectedKey, seventh.minor7th.formula);
                html += `
                    <div style="margin: 15px 0; padding: 12px; background: white; border-radius: 4px;">
                        <strong>Minor 7th (${seventh.minor7th.formula})</strong><br>
                        <strong style="color: #4caf50;">In ${selectedKey}: ${min7Notes}</strong><br>
                        <span style="color: #2e7d32; font-size: 14px;">${seventh.minor7th.sound}</span>
                    </div>
                `;
            }

            html += `</div>`;
        }

        // Minor 7th (Funk style - top-level chord type)
        if (theory.chordConstruction.minor7th) {
            const min7 = theory.chordConstruction.minor7th;
            const min7Notes = buildScaleFromFormula(selectedKey, min7.formula);
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #e3f2fd; border-left: 4px solid #2196f3;">
                    <strong style="font-size: 16px;">Minor 7th Chord</strong><br><br>
                    <span style="color: #1565c0; font-size: 14px;">${min7.explanation}</span><br>
                    <strong style="color: #2196f3; margin-top: 8px; display: inline-block;">In ${selectedKey}: ${min7Notes}</strong>
                </div>
            `;
        }

        // Alterations (R&B)
        if (theory.chordConstruction.alterations) {
            const alt = theory.chordConstruction.alterations;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #fce4ec; border-left: 4px solid #e91e63;">
                    <strong style="font-size: 16px;">Altered Chords</strong><br><br>
                    <span style="color: #880e4f; font-size: 14px;">${alt.description}</span>
                    <ul style="margin: 15px 0; padding-left: 20px;">
            `;

            alt.common.forEach(note => {
                html += `
                    <li style="margin-bottom: 8px; color: #880e4f;">
                        <strong>${note.interval}</strong>: ${note.usage}
                    </li>
                `;
            });

            html += `</ul></div>`;
        }

        // Quartal Voicings (Neo-Soul)
        if (theory.chordConstruction.quartalVoicings) {
            const qv = theory.chordConstruction.quartalVoicings;
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #f3e5f5; border-left: 4px solid #9c27b0;">
                    <strong style="font-size: 16px;">Quartal Voicings</strong><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;">${qv.description}</span><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;"><strong>Concept:</strong> ${qv.concept}</span><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;"><strong>Neo-Soul use:</strong> ${qv.neosoulUse}</span><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;"><strong>Practice:</strong> ${qv.practice}</span><br><br>
                    <span style="color: #6a1b9a; font-size: 14px;"><strong>When to use:</strong> ${qv.when}</span>
                </div>
            `;
        }

        // Power Chords (if any genre uses them)
        if (theory.chordConstruction.powerChords) {
            const pc = theory.chordConstruction.powerChords;
            const powerNotes = buildScaleFromFormula(selectedKey, pc.formula);
            html += `
                <div style="margin: 20px 0; padding: 15px; background: #ffebee; border-left: 4px solid #f44336;">
                    <strong style="font-size: 16px;">Power Chords</strong><br><br>
                    <span style="color: #c62828; font-size: 14px;">${pc.explanation}</span><br>
                    <strong style="color: #f44336; margin-top: 8px; display: inline-block;">In ${selectedKey}: ${powerNotes}</strong>
                </div>
            `;
        }

        // Why Dominant 7th? (Sub-accordion inside chords accordion)
    if (theory.whyDominant7th) {
        html += `
            <div style="margin: 25px 0;">
                <button class="why-dominant-toggle" style="
                    width: 100%;
                    padding: 15px;
                    background: #d4edda;
                    border: 2px solid #28a745;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: bold;
                    color: #155724;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>💡 ${theory.whyDominant7th.question}</span>
                    <span class="why-dominant-icon" style="font-size: 18px;">▼</span>
                </button>
                <div class="why-dominant-content" style="
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    background: #f8f9fa;
                    border: 2px solid #28a745;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                ">
                    <div style="padding: 20px;">
                        <p style="margin-bottom: 15px; font-size: 15px; line-height: 1.6;">${theory.whyDominant7th.answer}</p>
        `;

        // Add comparison with key-aware examples
        const IMaj7 = parseAndConvertProgression('IMaj7', selectedKey);
        const I7 = parseAndConvertProgression('I7', selectedKey);
        const maj7Notes = buildScaleFromFormula(selectedKey, '1 - 3 - 5 - 7');
        const dom7Notes = buildScaleFromFormula(selectedKey, '1 - 3 - 5 - b7');

        html += `
                        <div style="margin-top: 15px; padding: 15px; background: white; border-left: 4px solid #28a745; border-radius: 4px;">
                            <p style="margin-bottom: 10px;"><strong>Compare in ${selectedKey}:</strong></p>
                            <p style="margin-bottom: 8px;">
                                <strong style="color: #3498db;">${IMaj7}</strong> (Major 7th): ${maj7Notes}
                                <span style="color: #7f8c8d;">— Sounds complete and peaceful</span>
                            </p>
                            <p>
                                <strong style="color: #e67e22;">${I7}</strong> (Dominant 7th): ${dom7Notes}
                                <span style="color: #7f8c8d;">— Sounds restless and edgy</span>
                            </p>
                            <p style="margin-top: 12px; font-style: italic; color: #155724;">${theory.whyDominant7th.comparison.replace(/Try playing a CMaj7 chord \(C-E-G-B\), then a C7 chord \(C-E-G-Bb\)/, `The difference: the natural 7 (${maj7Notes.split(' - ')[3]}) vs the b7 (${dom7Notes.split(' - ')[3]})`)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Close the Understanding Chords accordion
    html += `
                    </div>
                </div>
            </div>
    `;
}

    // ==================================================
    // ACCORDION: Voicings & Technique
    // ==================================================

    if (theory.pianoVoicings || theory.guitarVoicings || theory.turnaround) {
        html += `
            <div style="margin: 30px 0;">
                <button class="voicings-accordion-toggle" style="
                    width: 100%;
                    padding: 15px;
                    background: #fce4ec;
                    border: 2px solid #e91e63;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    font-size: 16px;
                    font-weight: bold;
                    color: #880e4f;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <span>🎸 Voicings & Technique</span>
                    <span class="voicings-accordion-icon" style="font-size: 18px;">▼</span>
                </button>
                <div class="voicings-accordion-content" style="
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    background: #f8f9fa;
                    border: 2px solid #e91e63;
                    border-top: none;
                    border-radius: 0 0 8px 8px;
                ">
                    <div style="padding: 20px;">
        `;
    }

    // Piano Voicings
    if (theory.pianoVoicings) {
        const pv = theory.pianoVoicings;
        html += `<div class="instrument-keys-only"><h4 style="margin-top: 0;">${pv.title}</h4></div>`;

        // Add examples of common chords in the selected key
        const I7 = parseAndConvertProgression('I7', selectedKey);
        const IV7 = parseAndConvertProgression('IV7', selectedKey);
        const V7 = parseAndConvertProgression('V7', selectedKey);

        html += `
            <p style="margin-bottom: 20px;">The three main chords in ${selectedKey} blues are:
            <strong>${I7}</strong> (I7), <strong>${IV7}</strong> (IV7), and <strong>${V7}</strong> (V7)</p>
        `;

        // Shell Voicing
        if (pv.shellVoicing) {
            html += `
                <div class="instrument-keys-only" style="margin: 20px 0; padding: 15px; background: #f0f8ff; border-left: 4px solid #4a90e2; border-radius: 4px;">
                    <strong style="font-size: 16px;">Shell Voicing</strong><br>
                    <p style="margin-top: 10px; color: #2c3e50; line-height: 1.6;">${pv.shellVoicing.concept}</p>
                    <p style="margin-top: 10px; color: #2c3e50;"><strong>Left Hand:</strong> ${pv.shellVoicing.leftHand}</p>
                    <p style="margin-top: 8px; color: #2c3e50;"><strong>Optional 5th:</strong> ${pv.shellVoicing.optional5th}</p>
                    <p style="margin-top: 8px; color: #7f8c8d; font-style: italic;">${pv.shellVoicing.whySkip5th}</p>
                </div>
            `;
        }

        // Adding Extensions
        if (pv.addingExtensions) {
            html += `
                <div class="instrument-keys-only" style="margin: 20px 0; padding: 15px; background: #fff5e6; border-left: 4px solid #e67e22; border-radius: 4px;">
                    <strong style="font-size: 16px;">Adding Extensions</strong><br>
                    <p style="margin-top: 10px; color: #2c3e50; line-height: 1.6;">${pv.addingExtensions.rightHand}</p>
                    <p style="margin-top: 8px; color: #2c3e50;"><strong>Why 3rd in right hand?</strong> ${pv.addingExtensions.why3rdInRightHand}</p>
                    <p style="margin-top: 8px; color: #2c3e50;"><strong>Which extensions?</strong> ${pv.addingExtensions.whichExtensions}</p>
                    <p style="margin-top: 12px; padding: 12px; background: white; border-radius: 4px; color: #e67e22; font-weight: bold;">${pv.addingExtensions.example}</p>
                    <p style="margin-top: 10px; color: #7f8c8d; font-style: italic; font-size: 14px;">${pv.addingExtensions.voiceLeading}</p>
                </div>
            `;
        }

        // Crush Technique
        if (pv.crushTechnique) {
            html += `
                <div class="instrument-keys-only" style="margin: 20px 0; padding: 15px; background: #ffe6f0; border-left: 4px solid #c0392b; border-radius: 4px;">
                    <strong style="font-size: 16px;">The "Crush" Technique</strong><br>
                    <p style="margin-top: 10px; color: #2c3e50; line-height: 1.6;">${pv.crushTechnique.description}</p>
                    <p style="margin-top: 10px; color: #c0392b; font-weight: bold;">${pv.crushTechnique.example}</p>
                    <p style="margin-top: 8px; color: #2c3e50;"><strong>When to use:</strong> ${pv.crushTechnique.when}</p>
                </div>
            `;
        }

        // Other techniques
        if (pv.other) {
            html += `
                <div class="instrument-keys-only" style="margin-top: 12px; color: #7f8c8d; font-style: italic;">
                    <strong>Other techniques:</strong> ${pv.other}
                </div>
            `;
        }
    }

    // Guitar Voicings
    if (theory.guitarVoicings) {
        const gv = theory.guitarVoicings;
        html += `
            <div class="instrument-guitar-only" style="margin: 20px 0; padding: 15px; background: #f0f8ff; border-left: 4px solid #4a90e2; border-radius: 4px;">
                <strong style="font-size: 16px;">🎸 Guitar Voicings</strong><br>
                <p style="margin-top: 10px; color: #2c3e50;"><strong>Basic approach:</strong> ${gv.basic}</p>
                <p style="margin-top: 8px; color: #2c3e50;"><strong>Learning path:</strong> ${gv.learning}</p>
                <p style="margin-top: 8px; color: #2c3e50;"><strong>Mixing rhythm and lead:</strong> ${gv.mixing}</p>
                <p style="margin-top: 8px; color: #2c3e50;"><strong>Extensions:</strong> ${gv.extensions}</p>
            </div>
        `;
    }

    // Turnaround (inside voicings accordion)
    if (theory.turnaround) {
        const I7 = parseAndConvertProgression('I7', selectedKey);
        const V7 = parseAndConvertProgression('V7', selectedKey);

        html += `
            <h4>The Turnaround</h4>
            <p>${theory.turnaround.description}</p>
            <p><strong>Common pattern in ${selectedKey}:</strong> ${I7} → ${V7} (bars 11-12 of the 12-bar blues)</p>
        `;

        if (theory.turnaround.keys) {
            const rootNote = selectedKey;
            const sixthNote = getScaleDegree(rootNote, 9); // Major 6th
            const fifthNote = getScaleDegree(rootNote, 7); // Perfect 5th
            const chromaticWalkdown = chromaticSequence(sixthNote, fifthNote);

            let keysText = theory.turnaround.keys;
            keysText = keysText.replace(/e\.g\., in [A-G][b#]?: [A-G][b#]? → [A-G][b#]? → [A-G][b#]? → [A-G][b#]? → [A-G][b#]? → [A-G][b#]?/,
                `e.g., in ${rootNote}: ${chromaticWalkdown}`);

            html += `<div class="instrument-keys-only" style="margin-top: 10px;"><strong>🎹 Keys:</strong> ${keysText}</div>`;
        }
        if (theory.turnaround.guitar) {
            html += `<div class="instrument-guitar-only" style="margin-top: 10px;"><strong>🎸 Guitar:</strong> ${theory.turnaround.guitar}</div>`;
        }
    }

    // Close voicings accordion
    if (theory.pianoVoicings || theory.guitarVoicings || theory.turnaround) {
        html += `
                    </div>
                </div>
            </div>
        `;
    }

    content.innerHTML = html;

    // Add event listeners for accordions
    const whyDominantToggle = content.querySelector('.why-dominant-toggle');
    if (whyDominantToggle) {
        whyDominantToggle.addEventListener('click', () => {
            const contentDiv = whyDominantToggle.nextElementSibling;
            const icon = whyDominantToggle.querySelector('.why-dominant-icon');
            const parentAccordion = content.querySelector('.chords-accordion-content');

            if (contentDiv.style.maxHeight && contentDiv.style.maxHeight !== '0px') {
                contentDiv.style.maxHeight = '0px';
                icon.textContent = '▼';
            } else {
                contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                icon.textContent = '▲';
            }

            // Recalculate parent accordion height to accommodate expanded child
            if (parentAccordion && parentAccordion.style.maxHeight !== '0px') {
                setTimeout(() => {
                    parentAccordion.style.maxHeight = parentAccordion.scrollHeight + 'px';
                }, 10);
            }
        });
    }
    const scalesToggle = content.querySelector('.scales-accordion-toggle');
    if (scalesToggle) {
        scalesToggle.addEventListener('click', () => {
            const contentDiv = scalesToggle.nextElementSibling;
            const icon = scalesToggle.querySelector('.scales-accordion-icon');
            if (contentDiv.style.maxHeight && contentDiv.style.maxHeight !== '0px') {
                contentDiv.style.maxHeight = '0px';
                icon.textContent = '▼';
            } else {
                contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                icon.textContent = '▲';
            }
        });
    }

    const chordsToggle = content.querySelector('.chords-accordion-toggle');
    if (chordsToggle) {
        chordsToggle.addEventListener('click', () => {
            const contentDiv = chordsToggle.nextElementSibling;
            const icon = chordsToggle.querySelector('.chords-accordion-icon');
            if (contentDiv.style.maxHeight && contentDiv.style.maxHeight !== '0px') {
                contentDiv.style.maxHeight = '0px';
                icon.textContent = '▼';
            } else {
                contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                icon.textContent = '▲';
            }
        });
    }

    const voicingsToggle = content.querySelector('.voicings-accordion-toggle');
    if (voicingsToggle) {
        voicingsToggle.addEventListener('click', () => {
            const contentDiv = voicingsToggle.nextElementSibling;
            const icon = voicingsToggle.querySelector('.voicings-accordion-icon');
            if (contentDiv.style.maxHeight && contentDiv.style.maxHeight !== '0px') {
                contentDiv.style.maxHeight = '0px';
                icon.textContent = '▼';
            } else {
                contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                icon.textContent = '▲';
            }
        });
    }
}

function renderRhythmSection(rhythm) {
    const content = document.getElementById('genreRhythmContent');
    const selectedKey = document.getElementById('genreKeySelector').value;
    let html = '';

    if (rhythm.feel) {
        html += `
            <h4>Time & Feel</h4>
            <p>${rhythm.feel.description}</p>
        `;
        if (rhythm.feel.written) html += `<p><strong>Written:</strong> ${rhythm.feel.written}</p>`;
        if (rhythm.feel.feels) html += `<p><strong>Feels like:</strong> ${rhythm.feel.feels}</p>`;
        if (rhythm.feel.visual) html += `<p><strong>Count it:</strong> ${rhythm.feel.visual}</p>`;
        if (rhythm.feel.important) {
            html += `<p style="padding: 10px; background: #fff3cd; border-left: 4px solid #ffc107;"><strong>⚠️ ${rhythm.feel.important}</strong></p>`;
        }
    }

    // Call and Response
    if (rhythm.callAndResponse) {
        html += `
            <h4>Call and Response</h4>
            <div style="margin: 20px 0; padding: 15px; background: #e7f3ff; border-left: 4px solid #3498db;">
                <p style="margin-bottom: 10px;"><strong>${rhythm.callAndResponse.description}</strong></p>
                <p style="color: #2c3e50; margin-bottom: 10px;">${rhythm.callAndResponse.why}</p>
                <p style="color: #7f8c8d; font-style: italic;">${rhythm.callAndResponse.practice}</p>
            </div>
        `;
    }

    if (rhythm.keys) {
        html += `<div class="instrument-keys-only" style="margin-top: 15px;"><strong>🎹 Keys:</strong> ${rhythm.keys}</div>`;
    }
    if (rhythm.guitar) {
        html += `<div class="instrument-guitar-only" style="margin-top: 15px;"><strong>🎸 Guitar:</strong> ${rhythm.guitar}</div>`;
    }

    if (rhythm.backbeat) {
        html += `<p style="margin-top: 15px;"><strong>Backbeat:</strong> ${rhythm.backbeat}</p>`;
    }

    content.innerHTML = html;
}

function renderLicksSection(licks) {
    const content = document.getElementById('genreLicksContent');
    const selectedKey = document.getElementById('genreKeySelector').value;
    let html = '';

    if (licks.length === 0) {
        html = '<p>Licks coming soon...</p>';
    } else {
        licks.forEach((lick, index) => {
            html += `
                <div style="margin-bottom: 25px; padding: 20px; background: ${index % 2 === 0 ? '#f8f9fa' : '#ffffff'}; border-left: 4px solid #e67e22; border-radius: 4px;">
                    <h4 style="margin-top: 0; color: #e67e22;">${lick.name}</h4>
                    <p>${lick.description}</p>
            `;
            if (lick.keys) {
                // Replace key-specific examples dynamically
                let keysText = lick.keys;

                // Handle "in X:" pattern for turnaround lick (6th → 5th walkdown)
                if (keysText.includes('e.g., in')) {
                    const sixthNote = getScaleDegree(selectedKey, 9);
                    const fifthNote = getScaleDegree(selectedKey, 7);
                    const walkdown = chromaticSequence(sixthNote, fifthNote);
                    keysText = keysText.replace(/e\.g\., in [A-G][b#]?: [A-G][b#]? → [A-G][b#]? → [A-G][b#]?/,
                        `e.g., in ${selectedKey}: ${walkdown}`);
                }

                // Handle "In X:" pattern for chord walkup (I → IV)
                if (keysText.includes('In C: walk bass')) {
                    const rootNote = selectedKey;
                    const fourthNote = getScaleDegree(rootNote, 5); // Perfect 4th
                    // Generate chromatic walkup from root to 4th
                    const walkup = [rootNote];
                    let currentSemitone = 0;
                    while (currentSemitone < 5) {
                        currentSemitone++;
                        walkup.push(getScaleDegree(rootNote, currentSemitone));
                    }
                    const walkupSequence = walkup.join(' → ');
                    const fourthChord = parseAndConvertProgression('IV7', selectedKey);
                    keysText = keysText.replace(/In [A-G][b#]?: walk bass [A-G][b#]? → [A-G][b#]? → [A-G][b#]? → [A-G][b#]? → [A-G][b#]? \(arriving at [A-G][b#]? chord in bar 5\)/,
                        `In ${selectedKey}: walk bass ${walkupSequence} (arriving at ${fourthChord} chord in bar 5)`);
                }

                html += `<div class="instrument-keys-only"><strong>🎹 Keys:</strong> ${keysText}</div>`;
            }
            if (lick.guitar) {
                // Replace key-specific guitar examples
                let guitarText = lick.guitar;

                // Handle "In X blues:" pattern (sixth interval jump)
                if (guitarText.includes('In A blues:')) {
                    const sixthNote = getScaleDegree(selectedKey, 9);
                    guitarText = guitarText.replace(/In [A-G][b#]? blues: play open [A-G][b#]? string, jump to [A-G][b#]?/,
                        `In ${selectedKey} blues: play root (${selectedKey}), jump to ${sixthNote}`);
                }

                // Handle specific fret references (Albert King box bend) - keep generic for guitar
                // We can't easily transpose fret positions without knowing tuning context

                html += `<div class="instrument-guitar-only" style="margin-top: 10px;"><strong>🎸 Guitar:</strong> ${guitarText}</div>`;
            }
            html += '</div>';
        });
    }

    content.innerHTML = html;
}

function renderPracticeSection(practice) {
    const content = document.getElementById('genrePracticeContent');
    const selectedKey = document.getElementById('genreKeySelector').value;
    let html = '';

    // Backing Tracks
    if (practice.backingTracks && practice.backingTracks.search) {
        html += `
            <h4>🎧 Finding Backing Tracks</h4>
            <p><strong>Search for "${selectedKey}" tracks:</strong> ${practice.backingTracks.search.replace(/\+ your key/, `+ ${selectedKey}`)}</p>
            <p><strong>Listen for:</strong> ${practice.backingTracks.listenFor}</p>
            <p><strong>Recommended BPM:</strong> ${practice.backingTracks.recommended}</p>
        `;
        if (practice.backingTracks.tip) {
            html += `<p style="padding: 10px; background: #d1ecf1; border-left: 4px solid #17a2b8;"><strong>💡 Tip:</strong> ${practice.backingTracks.tip}</p>`;
        }
    }

    // Practice Exercises
    if (practice.exercises && practice.exercises.length > 0) {
        html += '<h4>📝 Practice Exercises</h4><ol>';
        practice.exercises.forEach((exercise, index) => {
            // Replace key references in first exercise
            let exerciseText = exercise;
            if (index === 0) {
                // Replace "in one key" or "in A or E" with current key
                exerciseText = exerciseText.replace(/in one key.*?\)/g, `in ${selectedKey}`);
                exerciseText = exerciseText.replace(/\(start with [A-G][b#]? or [A-G][b#]?—easiest on guitar\)/g, `(currently in ${selectedKey})`);
            }
            html += `<li style="margin-bottom: 10px;">${exerciseText}</li>`;
        });
        html += '</ol>';
    }

    // Song References
    if (practice.songs && practice.songs.length > 0) {
        html += '<h4>🎵 Essential Songs to Study</h4>';
        practice.songs.forEach(song => {
            html += `
                <div style="margin-bottom: 15px; padding: 12px; background: #f8f9fa; border-left: 4px solid #6c757d;">
                    <strong>"${song.title}"</strong> - ${song.artist}<br>
                    <span style="color: #7f8c8d; font-size: 14px;">Focus: ${song.focus}</span>
                </div>
            `;
        });
    }

    // Progression Path
    if (practice.progressionPath && practice.progressionPath.length > 0) {
        html += '<h4>🎯 Learning Path</h4>';
        practice.progressionPath.forEach(step => {
            html += `
                <div style="margin-bottom: 15px; padding: 15px; background: #e7f3ff; border-left: 4px solid #3498db;">
                    <strong>${step.level}</strong><br>
                    ${step.goal}
                </div>
            `;
        });
    }

    // Common Mistakes
    if (practice.commonMistakes && practice.commonMistakes.length > 0) {
        html += '<h4>⚠️ Common Mistakes to Avoid</h4><ul>';
        practice.commonMistakes.forEach(mistake => {
            html += `<li style="margin-bottom: 8px;">${mistake}</li>`;
        });
        html += '</ul>';
    }

    content.innerHTML = html;
}

// Initialize genre tab with Pop progressions
renderGenreProgressions();
renderGenreContent();
