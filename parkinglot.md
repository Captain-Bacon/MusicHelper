# Parking Lot

## Highlighting - Frequency Threshold Mode

Slider: "Show notes in at least N keys" - user sets minimum overlap threshold. Noise control for 4+ key comparisons.

## Educational Features (Theory Learning)

### Relative/Parallel Key Suggestions

Add section below scale type filters with checkboxes: `[ Show Relative Keys ] [ Show Parallel Keys ]`

When checked with single scale selected:

- **Relative**: Auto-selects the relative minor/major (C major → Am, Am → C major)
- **Parallel**: Auto-selects parallel key (C major → Cm, Cm → C major)

Both show in highlighted info box: "C major and Am are relative keys (share all notes)"

### Transition Difficulty Indicator

When 2+ scales selected, show badge near each scale in table indicating transition difficulty.

Example: `C major [●●●●● Close]`, `Bb major [●●○○○ Distant]`

Based on:

- Common notes (more = easier)
- Root interval (closer in circle of fifths = easier)

### Scale Degree Comparison Mode

New checkbox in Display Mode: `[✓] Show Scale Degrees`

When on, each note cell shows both note name and scale degree below it (e.g., "E" with "^3" below).

Helps see functional relationships: "both have their 3rd raised" vs "different notes, same function"

### Pivot Chord Finder

Button that appears when exactly 2 scales selected: `[Find Pivot Chords →]`

Opens expandable panel showing:

- Common triads you can build from shared notes
- Which ones work as pivot points (functional in both keys)
- Example: "C major → G major: Em, Am, C, G all work as pivots"
