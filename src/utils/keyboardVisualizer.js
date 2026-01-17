/**
 * Generate SVG keyboard visualization for scales
 * Shows which notes are in the scale with visual highlighting
 */

/**
 * Generate an SVG keyboard showing scale notes
 * @param {string} rootNote - Root note of the scale (e.g., 'C', 'Eb')
 * @param {Array<string>} scaleNotes - Array of note names in the scale
 * @param {Array<string>} highlightNotes - Optional array of notes to highlight in different color (e.g., blue notes)
 * @returns {string} SVG markup
 */
export function generateKeyboardSVG(rootNote, scaleNotes, highlightNotes = []) {
    // Normalize notes to chromatic scale
    const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

    // Map alternative spellings to standard flats
    const normalizeNote = (note) => {
        const spellings = {
            'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb'
        };
        return spellings[note] || note;
    };

    const normalizedScaleNotes = scaleNotes.map(normalizeNote);
    const normalizedHighlightNotes = highlightNotes.map(normalizeNote);

    // Get root note index
    const rootIndex = chromaticNotes.indexOf(normalizeNote(rootNote));

    // Reorder chromatic notes to start from root
    const reorderedNotes = [
        ...chromaticNotes.slice(rootIndex),
        ...chromaticNotes.slice(0, rootIndex),
        chromaticNotes[rootIndex] // Add octave
    ];

    // Define keyboard layout (white and black keys)
    const whiteKeyPattern = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const blackKeyPattern = ['Db', 'Eb', null, 'Gb', 'Ab', 'Bb', null]; // null = no black key

    const whiteKeyWidth = 40;
    const whiteKeyHeight = 140;
    const blackKeyWidth = 28;
    const blackKeyHeight = 90;
    const totalWidth = whiteKeyWidth * 8 + 20; // 8 white keys (octave + 1) + padding
    const totalHeight = whiteKeyHeight + 60; // Extra space for labels

    let svg = `<svg width="${totalWidth}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">`;

    // Track current white key position
    let whiteKeyX = 10;
    let whiteKeyIndex = 0;

    // Find where our root note starts in the white key pattern
    const rootNoteBase = reorderedNotes[0].replace(/[b#]/, '').charAt(0);
    let startOffset = whiteKeyPattern.indexOf(rootNoteBase);

    // Draw white keys first
    const whiteKeys = [];
    for (let i = 0; i < 8; i++) { // Draw 8 white keys
        const noteIndex = (startOffset + i) % 7;
        const noteName = whiteKeyPattern[noteIndex];
        const fullNote = reorderedNotes.find(n => n.startsWith(noteName) && !n.includes('b'));

        if (!fullNote) continue;

        const isInScale = normalizedScaleNotes.includes(fullNote);
        const isHighlight = normalizedHighlightNotes.includes(fullNote);
        const isRoot = fullNote === reorderedNotes[0];

        let fillColor = '#ffffff';
        if (isRoot) {
            fillColor = '#a8d5e2'; // Soft muted blue for root
        } else if (isHighlight) {
            fillColor = '#f4d8a8'; // Soft amber/beige for blue notes
        } else if (isInScale) {
            fillColor = '#f5f5dc'; // Beige for scale notes
        }

        whiteKeys.push({
            x: whiteKeyX,
            note: fullNote,
            fillColor,
            isRoot,
            isInScale,
            isHighlight
        });

        svg += `
            <rect x="${whiteKeyX}" y="10" width="${whiteKeyWidth}" height="${whiteKeyHeight}"
                  fill="${fillColor}" stroke="#2c3e50" stroke-width="2" rx="3"/>
        `;

        whiteKeyX += whiteKeyWidth;
    }

    // Draw black keys on top
    whiteKeyX = 10;
    for (let i = 0; i < 7; i++) { // 7 white keys pattern for black keys
        const noteIndex = (startOffset + i) % 7;
        const blackNote = blackKeyPattern[noteIndex];

        if (blackNote !== null) {
            const fullNote = blackNote;
            const isInScale = normalizedScaleNotes.includes(fullNote);
            const isHighlight = normalizedHighlightNotes.includes(fullNote);
            const isRoot = fullNote === reorderedNotes[0];

            let fillColor = '#1a1a1a'; // Black for unselected black keys
            if (isRoot) {
                fillColor = '#6b9fb8'; // Muted darker blue for root
            } else if (isHighlight) {
                fillColor = '#d4a574'; // Muted darker amber for blue notes
            } else if (isInScale) {
                fillColor = '#c8b896'; // Muted darker beige for scale notes
            }

            const blackKeyX = whiteKeyX + whiteKeyWidth - (blackKeyWidth / 2);

            svg += `
                <rect x="${blackKeyX}" y="10" width="${blackKeyWidth}" height="${blackKeyHeight}"
                      fill="${fillColor}" stroke="#1a1a1a" stroke-width="2" rx="3"/>
            `;
        }

        whiteKeyX += whiteKeyWidth;
    }

    // Add note labels below white keys
    whiteKeys.forEach((key, index) => {
        const labelY = whiteKeyHeight + 30;
        const textAnchor = key.x + (whiteKeyWidth / 2);

        svg += `
            <text x="${textAnchor}" y="${labelY}"
                  font-family="Arial, sans-serif" font-size="14" font-weight="bold"
                  fill="#2c3e50" text-anchor="middle">
                ${key.note}
            </text>
        `;
    });

    // Add legend
    const legendY = whiteKeyHeight + 55;
    const legendItems = [
        { color: '#a8d5e2', label: 'Root' },
        { color: '#f4d8a8', label: 'Accent Note' },
        { color: '#f5f5dc', label: 'In Scale' }
    ];

    let legendX = 10;
    legendItems.forEach(item => {
        svg += `
            <rect x="${legendX}" y="${legendY - 12}" width="16" height="16"
                  fill="${item.color}" stroke="#666666" stroke-width="1" rx="2"/>
            <text x="${legendX + 22}" y="${legendY}"
                  font-family="Arial, sans-serif" font-size="13" fill="#2c3e50">
                ${item.label}
            </text>
        `;
        legendX += 110;
    });

    svg += '</svg>';
    return svg;
}

/**
 * Identify blue notes (notes that create the characteristic blues sound)
 * @param {string} rootNote - Root note
 * @param {Array<string>} scaleNotes - All notes in the scale
 * @returns {Array<string>} Array of blue note names
 */
export function identifyBlueNotes(rootNote, scaleNotes) {
    // Blue notes are typically b3, b5, and b7 intervals from root
    const chromaticNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    const rootIndex = chromaticNotes.indexOf(rootNote);

    if (rootIndex === -1) return [];

    const blueNoteIntervals = [3, 6, 10]; // b3, b5, b7 in semitones
    const blueNotes = blueNoteIntervals.map(interval => {
        const noteIndex = (rootIndex + interval) % 12;
        return chromaticNotes[noteIndex];
    });

    // Return only blue notes that are in the scale
    return blueNotes.filter(note => scaleNotes.includes(note));
}
