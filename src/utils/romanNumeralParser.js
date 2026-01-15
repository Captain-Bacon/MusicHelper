/**
 * Roman numeral to chord name conversion utilities
 * Handles Roman numeral progressions, secondary dominants, figured bass, and extensions
 */

/**
 * Convert a Roman numeral to a chord name in the specified key
 * @param {string} roman - Roman numeral (e.g., 'ii7', 'V7/vi', 'I6/4')
 * @param {string} key - Key to convert in (e.g., 'C', 'Db')
 * @returns {string} Chord name (e.g., 'Dm7', 'E7', 'G/C')
 */
export function romanToChord(roman, key) {
    const originalRoman = roman;

    // FIRST: Check for figured bass notation (V6/4, I6) before generic slash handling
    // This must come first because these patterns contain slashes
    const figuredBassMatch = roman.match(/^([b#]?[IViv]+)(6\/4|6)$/);
    if (figuredBassMatch) {
        const [, baseChord, figures] = figuredBassMatch;

        // Get chromatic notes
        const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

        // Recursively convert the base chord to get its full name
        const baseChordName = romanToChord(baseChord, key);
        const chordRoot = baseChordName.match(/^[A-G][b#]?/)[0];
        const rootIndex = chromaticNotes.indexOf(chordRoot);

        if (figures === '6/4') {
            // Second inversion: 5th in bass (7 semitones above root)
            const bassIndex = (rootIndex + 7) % 12;
            const bassNote = chromaticNotes[bassIndex];
            return baseChordName + '/' + bassNote;
        } else if (figures === '6') {
            // First inversion: 3rd in bass
            // Need to determine if major or minor to get correct 3rd interval
            // Check if baseChord (before conversion) is uppercase = major
            const chordRomanOnly = baseChord.replace(/^[b#]/, ''); // Remove accidental
            const isMajorChord = chordRomanOnly === chordRomanOnly.toUpperCase();
            const thirdInterval = isMajorChord ? 4 : 3;
            const bassIndex = (rootIndex + thirdInterval) % 12;
            const bassNote = chromaticNotes[bassIndex];
            return baseChordName + '/' + bassNote;
        }
    }

    // SECOND: Handle secondary/applied chords (V7/vi, vii°7/V)
    if (roman.includes('/')) {
        const parts = roman.split('/');
        if (parts.length === 2) {
            const [chordPart, targetPart] = parts;

            // Secondary/applied chord: build chordPart in the key of targetPart
            // Example: V7/vi means "V7 chord in the key of vi"
            // Example: vii°7/V means "vii°7 chord in the key of V"

            // First, find the root of the target chord
            const targetChord = romanToChord(targetPart, key);
            const targetRoot = targetChord.match(/^[A-G][b#]?/)[0];

            // Now build the specified chord (chordPart) in the target key
            const resultChord = romanToChord(chordPart, targetRoot);

            return resultChord;
        }
    }

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

    // Extract extensions (order matters - match longer patterns first)
    // Handle diminished symbol (°) and ø (half-diminished)
    const extensionMatch = roman.match(/(°7|ø7|Maj13|Maj11|Maj9|M13|M11|M9|M7|Maj7|dim7|m13|m11|m9|m7b5|m7|add9|add2|sus4|sus2|7sus4|7sus2|13|11|9|7|m|°|ø)$/);
    if (extensionMatch) {
        extension = extensionMatch[1];
        roman = roman.replace(extensionMatch[0], '');
    }

    // Determine quality based on case (before extension was removed)
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

    // Determine chord quality and normalize extensions
    if (extension === 'dim7') {
        quality = 'dim';
        extension = '7'; // 'dim' goes in quality, '7' stays as extension
    } else if (extension === '°7') {
        // Diminished seventh: convert ° symbol to 'dim'
        quality = 'dim';
        extension = '7';
    } else if (extension === '°') {
        // Diminished triad: convert ° symbol to 'dim'
        quality = 'dim';
        extension = '';
    } else if (extension === 'ø7' || extension === 'ø') {
        // Half-diminished: convert to m7b5
        extension = 'm7b5';
        quality = '';
    } else if (extension === 'M7' || extension === 'M9' || extension === 'M11' || extension === 'M13') {
        // Convert single-letter M to Maj
        extension = extension.replace('M', 'Maj');
        quality = '';
    } else if (extension === 'm' || extension.startsWith('m')) {
        // Extensions like 'm', 'm7', 'm7b5' already include the minor quality
        quality = ''; // Don't duplicate
    } else if (isLowerCase && !extension.includes('Maj')) {
        // Lowercase Roman numeral without explicit minor extension
        quality = 'm';
    }

    return chordRoot + quality + extension;
}

/**
 * Parse a chord progression formula and convert Roman numerals to chord names
 * @param {string} formula - Progression formula (e.g., 'ii → V7 → I')
 * @param {string} key - Key to convert in (e.g., 'C')
 * @returns {string} Progression with chord names (e.g., 'Dm → G7 → C')
 */
export function parseAndConvertProgression(formula, key) {
    if (!key) return formula;

    // Split by arrows only (not slashes, which are used for secondary dominants and figured bass)
    const parts = formula.split(/\s*→\s*/);
    const converted = parts.map(part => {
        part = part.trim();
        // Check if it's a Roman numeral pattern
        // Matches:
        // - optional accidental (b, #)
        // - Roman numerals (I-VII, i-vii)
        // - optional extensions (M7, Maj7, dim7, m7, etc.)
        // - optional figured bass (6/4, 6) OR secondary chord (/vi, /V, etc.)
        // Extensions: M7, M9, M11, M13, Maj7, dim7, m7b5, m7, °7, °, ø7, ø, add9, add2, sus4, sus2, 7sus4, 7sus2, m, 7, 9, 11, 13
        if (/^[b#]?[IViv]+(?:°7|ø7|Maj13|Maj11|Maj9|M13|M11|M9|M7|Maj7|dim7|m13|m11|m9|m7b5|m7|add9|add2|sus4|sus2|7sus4|7sus2|13|11|9|7|m|°|ø)?(?:(?:6\/4|6)|(?:\/[IViv]+(?:°7|ø7|Maj7|M7|dim7|m7b5|m7|13|11|9|7|m|°|ø)?))?$/.test(part)) {
            return romanToChord(part, key);
        }
        return part;
    });

    return converted.join(' → ');
}
