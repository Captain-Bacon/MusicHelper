/**
 * Build scale notes from a root note and interval formula
 * Used for dynamically generating scale examples in different keys
 */

/**
 * Build a scale from a root note and an interval formula
 * @param {string} rootNote - Root note (e.g., 'A', 'Db', 'F#')
 * @param {string} formula - Interval formula (e.g., '1 - b3 - 4 - b5 - 5 - b7')
 * @returns {string} Scale notes as a string (e.g., 'A - C - D - Eb - E - G')
 */
export function buildScaleFromFormula(rootNote, formula) {
    // Chromatic notes
    const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    // Get root note index
    const rootIndex = chromaticNotes.indexOf(rootNote);
    if (rootIndex === -1) {
        // Try alternative spellings
        const altSpellings = {
            'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb'
        };
        if (altSpellings[rootNote]) {
            return buildScaleFromFormula(altSpellings[rootNote], formula);
        }
        return formula; // Can't parse, return formula
    }

    // Parse formula into intervals (semitones from root)
    // e.g., '1 - b3 - 4 - b5 - 5 - b7' → [0, 3, 5, 6, 7, 10]
    const intervalMap = {
        '1': 0,
        'b2': 1, '2': 2, '#2': 3,
        'b3': 3, '3': 4, '#3': 5,
        '4': 5, '#4': 6,
        'b5': 6, '5': 7, '#5': 8,
        'b6': 8, '6': 9, '#6': 10,
        'b7': 10, '7': 11
    };

    // Split formula by ' - ' and map to semitones
    const intervals = formula.split(/\s*-\s*/).map(interval => {
        interval = interval.trim();
        if (intervalMap.hasOwnProperty(interval)) {
            return intervalMap[interval];
        }
        return null;
    }).filter(i => i !== null);

    // Build scale notes
    const scaleNotes = intervals.map(interval => {
        const noteIndex = (rootIndex + interval) % 12;
        return chromaticNotes[noteIndex];
    });

    return scaleNotes.join(' - ');
}

/**
 * Generate a chromatic sequence from one note to another
 * @param {string} startNote - Starting note (e.g., 'C')
 * @param {string} endNote - Ending note (e.g., 'G')
 * @returns {string} Chromatic sequence (e.g., 'C → B → Bb → A → Ab → G')
 */
export function chromaticSequence(startNote, endNote) {
    const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    const startIndex = chromaticNotes.indexOf(startNote);
    const endIndex = chromaticNotes.indexOf(endNote);

    if (startIndex === -1 || endIndex === -1) return `${startNote} → ${endNote}`;

    const sequence = [];
    let currentIndex = startIndex;

    // Walk down chromatically
    while (currentIndex !== endIndex) {
        sequence.push(chromaticNotes[currentIndex]);
        currentIndex = (currentIndex - 1 + 12) % 12;

        // Safety check to prevent infinite loop
        if (sequence.length > 12) break;
    }
    sequence.push(chromaticNotes[endIndex]);

    return sequence.join(' → ');
}

/**
 * Get a scale degree note given a root and interval
 * @param {string} rootNote - Root note (e.g., 'A')
 * @param {number} semitones - Semitones above root (e.g., 9 for 6th)
 * @returns {string} Note name (e.g., 'F#')
 */
export function getScaleDegree(rootNote, semitones) {
    const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    const rootIndex = chromaticNotes.indexOf(rootNote);

    if (rootIndex === -1) return rootNote;

    const noteIndex = (rootIndex + semitones) % 12;
    return chromaticNotes[noteIndex];
}
