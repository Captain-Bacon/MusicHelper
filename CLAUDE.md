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

```plaintext
src/
├── index.html              # Main HTML with tab structure
├── main.js                 # Core app logic, event handling, DOM manipulation (2,587 lines)
├── styles.css              # All styling (1,033 lines)
├── data/
│   ├── scales.js               # Scale data for all 12 keys (major/minor)
│   ├── progressions.js         # Landing progressions & key transitions
│   ├── chord-progressions.js   # Curated chord progression library (50+ progressions with extensive notes, 66KB)
│   └── genre-content.js        # Genre-specific deep dive content (16 genres, 2,603 lines, 193KB)
├── utils/
│   ├── romanNumeralParser.js   # Roman numeral → chord name conversion
│   ├── scaleBuilder.js         # Scale generation from interval formulas
│   └── keyboardVisualizer.js   # SVG keyboard diagram generation
├── components/
│   └── styleControls.js        # Layout control sliders
└── lib/                    # Currently empty, reserved for future libraries
```

**Root-level files:**

- `manifest.json` - PWA manifest (copied to dist/ during build)
- `service-worker.js` - Offline caching (copied to dist/ during build)
- `origin/` - Initial prototype and reference materials
- `*.md` files - Reference documentation (chord-progressions.md, landing-progressions.md, key-transitions.md)
- `.archive/` - Development artifacts (drafts, restructuring notes, audit results)
- `.claude/` - Claude AI working directory (styles, settings, model cache)
- `my_notes/` - User notes directory

### Key Modules

**`data/scales.js`** exports:

- `scaleData` - Notes for each key/scale type
- `keyOrder` - Chromatic ordering
- `circleOfFifthsOrder` - Circle of fifths key sequence
- `keyDisplayNames` - Display names with unicode symbols
- `scaleTypeDisplayNames` - Human-readable scale type labels

**`data/progressions.js`** exports:

- `landingProgressions` - Resolution progressions with formulas
- `keyTransitions` - Key change relationships

**`data/chord-progressions.js`** exports:

- `chordProgressions` - Array of 50+ curated progressions with comprehensive metadata. Each progression includes detailed musicality notes with historical context (e.g., Beatles, Journey, U2), usage examples, and instrument-specific implementation guidance.
- `styleOptions` - Filter values for style (Pop, Jazz, Blues, Gospel, Classical, Rock, etc.)
- `difficultyOptions` - Filter values for difficulty (Beginner, Intermediate, Advanced)

**`data/genre-content.js`** exports:

- `genreContent` - Object mapping 16 genre names to deep-dive content (Pop, Jazz, Blues, Gospel, Classical, Rock, Funk, Jazz Fusion, Latin Jazz, Neo-Soul, Indie, Singer-Songwriter, R&B, Worship, Lo-Fi, Cinematic):
  - `theory` - Scales (with formulas), blue notes, voicings, turnarounds
  - `rhythm` - Feel descriptions, instrument-specific techniques
  - `licks` - Named techniques with keys/guitar instructions
  - `practice` - Backing tracks, exercises, songs, progression path, common mistakes

**`utils/romanNumeralParser.js`** exports:

- `romanToChord(roman, key)` - Converts single Roman numeral to chord name in specified key
- `parseAndConvertProgression(formula, key)` - Converts entire progression formula to chord names
- Handles secondary dominants (V7/vi), figured bass (I6/4), extensions (Maj7, m7b5, etc.)

**`utils/scaleBuilder.js`** exports:

- `buildScaleFromFormula(rootNote, formula)` - Generates scale notes from interval formula (e.g., '1 - b3 - 4 - b5 - 5 - b7')
- `chromaticSequence(startNote, endNote)` - Creates chromatic walkdown/walkup between two notes
- `getScaleDegree(rootNote, semitones)` - Returns note at specified interval from root

**`utils/keyboardVisualizer.js`** exports:

- `generateKeyboardSVG(scaleNotes, blueNotes)` - Generates SVG keyboard diagram with highlighted notes
- `identifyBlueNotes(genreName, key)` - Identifies blue notes for genre-specific keyboard visualization

**`components/styleControls.js`** exports:

- `initializeStyleControls()` - Sets up layout control sliders with dynamic CSS injection

**`main.js`** manages (2,587 lines):

- **State Management**: Scale selection (`selectedScales`), highlighting modes, chord tone filtering, genre expansion tracking, filter state for 3+ independent tables
- **Dynamic UI Rendering**: Tab switching, genre switching, collapsible sections, expandable progression notes
- **Circle of Fifths**: Interactive overlay with clickable segments, visual state indicators (blue/red/split)
- **Progression Systems**: Landing progressions with key transposition, key transitions table, chord progressions with style/difficulty filtering
- **Genre Deep Dives**: Genre content rendering with automatic key transposition, scale formula substitution, instrument-specific content toggling
- **Style Controls**: Dynamic CSS injection via programmatic stylesheet (not inline styles)
- **Roman Numeral Parser Integration**: Converts formulas to chord names in selected keys
- **Filter Management**: Independent filter states for landing progressions, key transitions, and chord progressions sections

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

**Landing progression data structure:**

```javascript
{
  formula: 'ii → V → I',           // Roman numerals
  example: 'Dm → G → C',           // Concrete example in C
  voicing: 'Triads',               // Texture guidance
  character: 'Warm, smooth',       // Stylistic flavor
  note: '(tritone sub)'            // Optional annotation
}
```

**Chord progression data structure:**

```javascript
{
  formula: 'ii7 → V7 → IMaj7',     // Roman numerals
  example: 'Dm7 → G7 → CMaj7',     // Concrete example in C
  style: 'Jazz',                   // Style category for filtering
  difficulty: 'Intermediate',      // Skill level
  character: 'Warm, resolved',     // Stylistic flavor
  voicing: '7th chords',           // Texture guidance
  notes: 'The fundamental jazz...' // Detailed musicality explanation with historical context,
                                   // usage examples (e.g., Beatles, Journey, U2), and
                                   // instrument-specific implementation guidance
}
```

## Build Configuration

`vite.config.js` settings:

- Root: `src/`
- Output: `../dist/`
- `assetsInlineLimit: 100000000` - Inline ALL assets (images, styles, scripts)
- `viteSingleFile` plugin bundles to single HTML

Build outputs to `dist/`:

- `index.html` - Complete app (all JS/CSS inlined, ~356KB single file)
- `manifest.json` - PWA manifest (copied from root)
- `service-worker.js` - Offline support (copied from root)

## PWA Features

Service worker caches root (`/`) and `manifest.json` for offline access. Cache versioning uses `CACHE_NAME` constant. Build step copies both `manifest.json` and `service-worker.js` to `dist/` so the PWA works when deployed from the dist folder.

## UI Structure

**4 main tabs** (see [index.html](src/index.html:82-86)):

1. **Scales** - Interactive scale comparison with highlighting, circle of fifths overlay
2. **Progressions** - Contains 3 collapsible sections:
   - **Landing Progressions** - Resolution progressions with key selector
   - **Key Transitions** - Relationships between keys
   - **Chord Progressions** - 50+ progressions filterable by style/difficulty, expandable musicality notes
   - **Notation Guide** - Expandable "Understanding Notation" section explaining Roman numerals, secondary dominants, figured bass, extensions, and accidentals
3. **Genre** - Genre-specific deep dives with 16 genre sub-tabs (Pop, Jazz, Blues, Gospel, Classical, Rock, Funk, Jazz Fusion, Latin Jazz, Neo-Soul, Indie, Singer-Songwriter, R&B, Worship, Lo-Fi, Cinematic):
   - **Progressions** - Filtered view of chord progressions for selected genre
   - **Essential Theory & Scales** - Genre-specific scales with key-aware examples
   - **Rhythm & Feel** - Time signatures, groove patterns, instrument techniques
   - **Licks & Tricks** - Characteristic phrases and techniques
   - **Practice Resources** - Backing tracks, exercises, song references, learning path
   - **Controls**: Key selector (transposes all examples), **instrument toggle** (Keys/Guitar/Both - dynamically shows/hides instrument-specific content)
4. **Chords & Theory** - Placeholder, no content yet

Each section in Progressions tab has independent filter state and checkbox selection. Genre tab uses `genreKeySelector` to dynamically transpose all examples (scales, licks, turnarounds) to the selected key, and the instrument toggle controls visibility of `.instrument-keys-only` and `.instrument-guitar-only` content wrappers.

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

- Simple landing progressions: Edit `landingProgressions` or `keyTransitions` in `data/progressions.js`
- Curated chord progressions: Add to `chordProgressions` array in `data/chord-progressions.js`. Include all metadata fields (formula, example, style, difficulty, character, voicing, notes)
- Tables auto-populate from data changes

**Modifying highlighting logic:**
See `analyzeCommonNotes()` function. Uses pitch class mapping to count note occurrences across selected scales.

**Adding genre deep dive content:**

1. Edit `genreContent` object in `data/genre-content.js`
2. Add entry for your genre following the Blues example structure:
   - `theory.overview` - Genre description
   - `theory.scales` - Array with `{name, formula, description, example}` (example auto-transposes)
   - `theory.blueNotes` - Optional special notes
   - `theory.voicings` - Instrument-specific voicing guidance (`keys` and/or `guitar`)
   - `theory.turnaround` - Optional characteristic turnaround patterns
   - `rhythm.feel` - Time signature, feel description, groove patterns
   - `rhythm.keys` / `rhythm.guitar` - Instrument-specific rhythm techniques
   - `licks` - Array of `{name, description, keys, guitar}` techniques
   - `practice.backingTracks` - How to find practice tracks
   - `practice.exercises` - Practice routine steps
   - `practice.songs` - Reference songs with `{title, artist, focus}`
   - `practice.progressionPath` - Learning milestones by skill level
   - `practice.commonMistakes` - Pitfalls to avoid
3. Scale formulas use interval notation: `1`, `b3`, `4`, `#5`, etc.
4. Embedded examples in text will auto-transpose if they match patterns (see `renderTheorySection`, `renderLicksSection`)
5. Use `<div class="instrument-keys-only">` and `<div class="instrument-guitar-only">` wrappers for instrument-specific content
