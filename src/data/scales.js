// Scale data organized by type and key
export const scaleData = {
    major: {
        'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        'Db': ['D♭', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
        'D': ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'],
        'Eb': ['E♭', 'F', 'G', 'A♭', 'B♭', 'C', 'D'],
        'E': ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'],
        'F': ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
        'Gb': ['G♭', 'A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F'],
        'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'],
        'Ab': ['A♭', 'B♭', 'C', 'D♭', 'E♭', 'F', 'G'],
        'A': ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'],
        'Bb': ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'],
        'B': ['B', 'C♯', 'D♯', 'E', 'F♯', 'G♯', 'A♯']
    },
    minor: {
        'C': ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'],
        'Db': ['D♭', 'E♭', 'F♭', 'G♭', 'A♭', 'B𝄫', 'C♭'],
        'D': ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'],
        'Eb': ['E♭', 'F', 'G♭', 'A♭', 'B♭', 'C♭', 'D♭'],
        'E': ['E', 'F♯', 'G', 'A', 'B', 'C', 'D'],
        'F': ['F', 'G', 'A♭', 'B♭', 'C', 'D♭', 'E♭'],
        'Gb': ['G♭', 'A♭', 'B𝄫', 'C♭', 'D♭', 'E𝄫', 'F♭'],
        'G': ['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F'],
        'Ab': ['A♭', 'B♭', 'C♭', 'D♭', 'E♭', 'F♭', 'G♭'],
        'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        'Bb': ['B♭', 'C', 'D♭', 'E♭', 'F', 'G♭', 'A♭'],
        'B': ['B', 'C♯', 'D', 'E', 'F♯', 'G', 'A']
    }
};

// Key display names
export const keyDisplayNames = {
    'C': 'C', 'Db': 'D♭', 'D': 'D', 'Eb': 'E♭',
    'E': 'E', 'F': 'F', 'Gb': 'G♭', 'G': 'G',
    'Ab': 'A♭', 'A': 'A', 'Bb': 'B♭', 'B': 'B'
};

// Scale type display names
export const scaleTypeDisplayNames = {
    'major': 'Major',
    'minor': 'Minor'
};

// Chromatic key order
export const keyOrder = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Circle of Fifths order (starting at C, moving clockwise)
export const circleOfFifthsOrder = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
