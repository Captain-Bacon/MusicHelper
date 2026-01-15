# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Music theory reference tool built as a Progressive Web App (PWA). Interactive scale comparison, chord progression reference, and key transition guide for musicians and songwriters.

## Development Commands

```bash
npm run dev       # Start development server (Vite)
npm run build     # Build for production → dist/
npm run preview   # Preview production build
```

## Architecture

**Single-file PWA architecture** using Vite + vite-plugin-singlefile

- All assets inlined into single HTML file for portability
- No backend, purely client-side application
- Service worker enables offline functionality

### Source Structure

```
src/
├── index.html              # Main HTML with accordion sections
├── main.js                 # Core app logic, event handling, DOM manipulation
├── styles.css              # All styling
└── data/
    ├── scales.js           # Scale data for all 12 keys (major/minor)
    └── progressions.js     # Landing progressions & key transitions
```

**Root-level files:**

- `manifest.json` - PWA manifest (copied to dist/ during build)
- `service-worker.js` - Offline caching (copied to dist/ during build)
- `origin/` - Initial prototype and reference materials

### Key Modules

**`data/scales.js`** exports:

- `scaleData` - Notes for each key/scale type
- `keyOrder` - Chromatic ordering
- `circleOfFifthsOrder` - Circle of fifths key sequence
- `keyDisplayNames` - Display names with unicode symbols

**`data/progressions.js`** exports:

- `landingProgressions` - Resolution progressions with formulas
- `keyTransitions` - Key change relationships

**`main.js`** manages:

- Scale selection state (`selectedScales` array maintains insertion order)
- Highlighting modes (`off`, `all`, `2plus`)
- Chord tone filtering
- Circle of fifths overlay
- Dynamic CSS updates via injected stylesheet
- Roman numeral → chord name conversion

## Important Patterns

### State Management

State stored in module-level variables. Updates trigger regeneration of affected DOM sections.

### Pitch Class Normalization

Notes compared by pitch class (0-11) to handle enharmonic equivalents (C♯ = D♭). See `noteToPitchClass()` function.

### Roman Numeral Parser

`romanToChord()` converts formulas like `ii → V7 → I` to actual chord names in selected key. Handles:

- Accidentals (`b`, `#`)
- Extensions (`7`, `Maj7`, `dim7`, `m7`)
- Case sensitivity (uppercase = major, lowercase = minor)

### Dynamic Styling

Style controls use programmatic CSS rule injection via `dynamicStyle` element, not inline styles.

### DOM Rebuilding

Table/button sections regenerated on state change rather than targeted updates. Simple but effective for this scale.

## Data Format Notes

**Scale data structure:**

```javascript
scaleData = {
  major: { 'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'], ... },
  minor: { 'C': ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'], ... }
}
```

**Progression data structure:**

```javascript
{
  formula: 'ii → V → I',           // Roman numerals
  example: 'Dm → G → C',           // Concrete example in C
  voicing: 'Triads',               // Texture guidance
  character: 'Warm, smooth',       // Stylistic flavor
  note: '(tritone sub)'            // Optional annotation
}
```

## Build Configuration

`vite.config.js` settings:

- Root: `src/`
- Output: `../dist/`
- `assetsInlineLimit: 100000000` - Inline ALL assets (images, styles, scripts)
- `viteSingleFile` plugin bundles to single HTML

Build outputs to `dist/`:

- `index.html` - Complete app (all JS/CSS inlined)
- `manifest.json` - PWA manifest (copied from root)
- `service-worker.js` - Offline support (copied from root)

## PWA Features

Service worker caches root (`/`) and `manifest.json` for offline access. Cache versioning uses `CACHE_NAME` constant. Build step copies both `manifest.json` and `service-worker.js` to `dist/` so the PWA works when deployed from the dist folder.

## Accordion System

Three collapsible sections:

1. Scale Comparison (default open)
2. Landing Progressions - with key selector for formula → chord conversion
3. Key Transitions - shows functional relationships between keys

Each section has independent filter state (checkboxes + "show selected only" toggle).

## Circle of Fifths

Overlay visualization with 12 clickable segments. Visual state indicates:

- Blue: Major scale selected
- Red: Minor scale selected
- Split blue/red: Both selected

Segments rotate to start at top (C), counter-rotating text for readability.

## Common Development Tasks

**Adding a new scale type:**

1. Add data to `scaleData` in `data/scales.js`
2. Update `scaleTypeDisplayNames`
3. Add checkbox filter in HTML
4. Update button generation logic in `generateKeyButtons()`

**Adding progression data:**
Edit `landingProgressions` or `keyTransitions` arrays in `data/progressions.js`. Tables auto-populate.

**Modifying highlighting logic:**
See `analyzeCommonNotes()` function. Uses pitch class mapping to count note occurrences across selected scales.
