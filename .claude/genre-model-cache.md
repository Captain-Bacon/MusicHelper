# Genre Model Cache

**Purpose**: Pattern recognition for genre content structure. No pedagogy—recognition triggers + implementation specs only.

---

## Model Selection (Boolean Conditions)

**Input**: How melody relates to harmony in this genre

**Test sequence**:
1. Does one scale work over entire progression? → Model 1
2. Does melody switch scales with each chord type? → Model 2
3. Is melody primarily chromatic motion between chord tones? → Model 3
4. None match? → Document why, create custom structure

---

## Model 1: Unified Melodic Vocabulary

**Melodic signature**: Single scale (or small set) throughout progression, independent of chord changes

**Triggers**:
- Minor melody over major chords (Blues)
- Pentatonic over power chords (Rock)
- Single scale repeated regardless of progression movement

**Required fields**:
```javascript
theory: {
  overview: string,
  scales: [{ name, formula, description, example }],
  chordConstruction: { /* min: triads + one other */ }
}
```

**Optional context clarifiers**:
```javascript
melodicVsHarmonic: {  // or melodicVsRhythmic, scalesVsChords
  title: string,
  explanation: string,
  // Use when learner might confuse melody/harmony separation
}
```

**Examples**: Blues, Pop, Rock

---

## Model 2: Chord-Scale Relationships

**Melodic signature**: Different scale per chord type, melody tracks harmony

**Triggers**:
- Dm7 uses D Dorian, G7 uses G Mixolydian, CMaj7 uses C Ionian
- Chord changes every 2-4 bars, melody follows
- Multiple scales present but no system explaining "which scale when"

**Required fields**:
```javascript
theory: {
  overview: string,

  // MUST explain system before listing scales
  chordScaleRelationships: {
    title: string,
    explanation: string,
    example: {
      progression: string,
      chords: string,
      scales: string,
      breakdown: string
    },
    why: string,
    practiceApproach: string
  },

  // Scales grouped by FUNCTION (chord type), not alphabetically
  scalesByChordType: {
    explanation: string,
    majorSeventhChords: {
      title: string,
      chordTypes: string,
      whenToUse: string,
      scales: [{
        name, formula, description, example,
        chordTones: string,
        availableTensions: string,
        usage: string
      }]
    },
    minorSeventhChords: { /* same structure */ },
    dominantSeventhChords: { /* same structure */ }
    // etc per chord type
  },

  chordConstruction: { /* required */ }
}
```

**Key transposition behavior**:
- Show functional relationships in selected key
- Key=C: "D Dorian over Dm7, G Mixolydian over G7, C Ionian over CMaj7"
- Key=G: "A Dorian over Am7, D Mixolydian over D7, G Ionian over GMaj7"

**Examples**: Jazz, Neo-Soul

---

## Model 3: Chromatic Voice-Leading

**Melodic signature**: Chromatic motion connecting chord tones, scales are reference context not rules

**Triggers**:
- 3-to-1 chromatic slides (E-Eb-D-Db-C)
- Chromatic walkups/walkdowns between chord tones
- All 12 notes used as passing tones, not bounded by scale

**Required fields**:
```javascript
theory: {
  overview: string,

  // MUST explain chromatic approach BEFORE scales
  melodicApproach: {
    title: string,
    coreIdea: string,
    howItWorks: {
      explanation: string,
      // Concrete examples showing chromatic motion
    },
    threeKeyTechniques: {  // or however many techniques
      technique1: { name, formula, description, when, practice }
    }
  },

  // Scales as REFERENCE with explicit warnings
  referenceScales: {
    title: 'Reference Scales (Context, Not Rules)',
    explanation: 'WARNING: reference context, not boundaries',
    gospelScale: {  // or whatever scales
      name, formula, description, example,
      usage: string,
      context: string,
      chromatic: string  // clarify freedom
    },
    caveat: 'WARNING: This genre uses chromatic motion. Scales are reference, not boundaries. You use ALL 12 notes.'
  },

  chordConstruction: { /* required */ }
}
```

**Examples**: Gospel, chromatic R&B

---

## Field Semantics

### Auto-transposition triggers:
- `In [Key]:` → updates key and following notes
- `e.g., in [Key]:` → updates examples
- Formula patterns (`'1 - b3 - 4 - 5 - b7'`) → generates actual notes in selected key

### Instrument-specific wrappers:
```html
<div class="instrument-keys-only">content</div>
<div class="instrument-guitar-only">content</div>
```
Controlled by `body[data-instrument]` attribute.

### Explainer section fields:
```javascript
{
  title: string,           // Heading
  explanation: string,     // Bold primary text
  example: string,         // Auto-transposes
  why: string,             // Italicized
  // Any other fields render as "FieldName: value"
}
```

### Scale object fields:
```javascript
{
  name: string,
  formula: string,         // Generates notes in selected key
  description: string,
  example: string,         // Auto-transposes "In X:" patterns
  // Model 2 additions:
  chordTones: string,
  availableTensions: string,
  sound: string,
  usage: string
}
```

---

## Rendering Behavior (main.js)

### Explainer box handlers:
- `melodicVsHarmonic` / `melodicVsRhythmic` → Orange/yellow box before scales
- `scalesVsChords` → Orange box (Blues-specific)
- `chordScaleRelationships` → Green box before scalesByChordType
- `melodicApproach` → Green box with technique breakdown
- `typicalKeys` → Orange box

### Scale section handlers:
- `scales` → Green accordion with keyboards/tables (Model 1)
- `scalesByChordType` → Accordion with keyboards/tables grouped by chord type (Model 2)
- `referenceScales` → Orange accordion with warning emphasis (Model 3)

### Accordion auto-generation:
Three accordions if content exists:
1. **Scales** - if `scales` OR `scalesByChordType` OR `referenceScales`
2. **Understanding Chords** - if `chordConstruction`
3. **Voicings & Technique** - if `pianoVoicings` OR `guitarVoicings` OR `turnaround`

### Always visible (not in accordions):
- `overview`
- Explainer boxes (melodicVsHarmonic, chordScaleRelationships, melodicApproach, etc.)
- `typicalKeys`
- Custom sections with `.title` field

---

## Project-Specific Conventions

### Section naming:
- `blueNotes` (Blues) - defining characteristic
- `colorTones` (Gospel) - chromatic passing tones
- Choose field name based on genre function, not convention

### Content boundaries:
- ❌ Don't include universal theory (major scale, basic intervals)
- ✅ Only genre-specific scales/concepts
- ❌ Don't duplicate progressions (go in chord-progressions.js)
- ✅ Explain WHY genre uses certain progressions

### Self-contained genre content:
- Don't assume learner read other genres
- ❌ "Same as Blues: left hand plays root + 7th"
- ✅ "Left hand plays root + 7th. This is the foundation."
- Comparisons OK for context, not technical how-to

### Universal required fields:

- `overview` (1-2 sentences, genre identity)
- `chordConstruction` (ALL models require this - min: triads + one extended type)
  - Explains how to build chords before diving into scales
  - Self-contained - doesn't assume learner knows chord construction
  - Essential bridge: connects chord types to why certain scales work over them

### Universal recommended fields:

- `typicalKeys` (if genre has preferences)
- `rhythm.feel`
- `licks` array
- `practice` section

---

## Edge Cases

### Doesn't fit any model?
1. Document melodic behavior
2. Identify learner confusion point
3. Create structure that provides missing context
4. Update this cache if pattern applies to other genres

### Multiple models applicable?
- Neo-Soul: Model 2 base + chromatic emphasis (hybrid)
- Use primary model, add sections from secondary as needed

### Forced scale lists feel wrong?
- Indicator you need Model 3 or custom structure
- Don't force scales if genre isn't scale-based

---

## Construction Specs: How to Build Genre Content

**Core learning flow**: Play → Picture → Theory → Play more → Repeat

Every field serves this progression. Content must answer: "What do I do?" before "Why does it work?"

---

### Complete Section Templates

#### Theory Section (All Models)

```javascript
theory: {
  // ALWAYS FIRST: 1-2 sentence genre identity
  overview: string,  // "What is this genre?" Concrete, not abstract.

  // MODEL-SPECIFIC SECTIONS (see model templates below)

  // SCALES SECTION (model-dependent structure)

  // CHARACTERISTIC NOTES (optional, use when genre has defining notes)
  blueNotes: {  // or colorTones, characteristicNotes, etc.
    description: string,  // What these notes do
    notes: [
      {
        note: string,      // 'b3 (flat third)'
        usage: string      // HOW to use it, not just "adds color"
      }
    ]
  },

  // CHORD CONSTRUCTION (required, minimum: triads + one extended type)
  chordConstruction: {
    description: string,  // Overview of how chords work in this genre

    // Optional context if needed
    majorBlues: string,   // Genre-specific chord context
    minorBlues: string,   // Can use any field names that serve the pedagogy

    triads: {
      explanation: string,  // What triads are, what they do
      formula: string,      // '1 - 3 - 5'
      example: string       // 'I chord = Root, Major 3rd, Perfect 5th'
    },

    dominant7th: {  // or seventh, or extensions, or whatever chord type matters
      explanation: string,  // What this chord type does
      formula: string,      // '1 - 3 - 5 - b7'
      example: string,      // Concrete example in a key
      why: string,          // WHY this chord type matters in this genre
      // Can add: when, sound, usage, etc.
    },

    // Add more chord types as needed (sus, add9, extensions, etc.)
    // Each should follow: explanation → formula → example → context
  },

  // TYPICAL KEYS (recommended if genre has key preferences)
  typicalKeys: {
    description: string,  // Why this genre favors certain keys
    common: string,       // List common keys
    why: string,          // Concrete reason (vocal range, instrument ease, etc.)
    avoid: string,        // Less common keys
    whyAvoid: string      // Why they're avoided
  },

  // VOICINGS (optional, use when genre has specific voicing approaches)
  pianoVoicings: {
    title: string,

    shellVoicing: {  // Or whatever voicing concepts matter
      concept: string,
      leftHand: string,
      rightHand: string,
      example: string
    },

    // Add more voicing concepts
  },

  guitarVoicings: {
    basic: string,
    learning: string,
    extensions: string
  },

  // TURNAROUND (optional, genre-specific ending patterns)
  turnaround: {
    description: string,
    common: string,
    keys: string,     // Instrument-specific if needed
    guitar: string
  }
}
```

#### Rhythm Section

```javascript
rhythm: {
  // REQUIRED: The feel/groove
  feel: {
    description: string,   // How the rhythm FEELS, not just time signature
    written: string,       // '4/4 time signature'
    feels: string,         // How it's actually felt (triplets, swing, etc.)
    important: string      // Critical rhythmic insight
  },

  // OPTIONAL: Additional rhythm concepts
  callAndResponse: {  // Or backbeat, groove, etc.
    description: string,
    why: string,
    practice: string
  },

  // INSTRUMENT-SPECIFIC RHYTHM
  keys: string,     // How keyboard players approach rhythm in this genre
  guitar: string,   // How guitarists approach rhythm

  // Other rhythm concepts as needed
  backbeat: string
}
```

#### Licks Section

```javascript
licks: [
  {
    name: string,          // "The Bend (b3 to 3)"
    description: string,   // What this technique is, when to use it
    keys: string,          // HOW to play on keys (concrete, transposable)
    guitar: string,        // HOW to play on guitar (concrete)
    when: string,          // When in the progression to use it (optional)
    practice: string       // How to practice it (optional)
  }
  // 3-7 licks typical, each must be PLAYABLE from the text
]
```

#### Practice Section

```javascript
practice: {
  backingTracks: {
    search: string,        // Exact search terms
    listenFor: string,     // What to listen for in the track
    recommended: string,   // BPM ranges
    tip: string            // Additional search tips (optional)
  },

  exercises: [
    string  // Step-by-step practice exercises, numbered
    // Each should be concrete action, not "understand X"
  ],

  songs: [
    {
      title: string,
      artist: string,
      focus: string  // What to learn from this song
    }
  ],

  progressionPath: [
    {
      level: string,  // 'Beginner', 'Intermediate', 'Advanced'
      goal: string    // What to achieve at this level
      // NO timeframe - people learn at different speeds
    }
  ],

  commonMistakes: [
    string  // Start with ❌, describe the mistake concretely
  ]
}
```

---

### Model-Specific Scale Section Templates

#### Model 1: Simple Scales Array

```javascript
theory: {
  overview: '...',

  // OPTIONAL: Add if learner might confuse melody/harmony
  melodicVsHarmonic: {  // or scalesVsChords, melodicVsRhythmic
    title: string,
    explanation: string,  // The core confusion point
    example: string,      // Concrete example showing the separation
    why: string          // Why this separation exists
  },

  scales: [
    {
      name: string,        // 'Minor Pentatonic Scale'
      formula: string,     // '1 - b3 - 4 - 5 - b7'
      description: string, // WHEN and HOW to use, not just "sounds like X"
      example: string      // 'In A: A - C - D - E - G' (auto-transposes)
    }
    // 2-5 scales typical
  ],

  // Rest of theory section...
}
```

#### Model 2: Chord-Scale Relationships

```javascript
theory: {
  overview: '...',

  // REQUIRED: Explain the system BEFORE listing scales
  chordScaleRelationships: {
    title: string,
    explanation: string,  // Core concept: different scale per chord type

    example: {           // Concrete ii-V-I example
      progression: string,  // 'ii-V-I in C Major'
      chords: string,       // 'Dm7 → G7 → CMaj7'
      scales: string,       // 'D Dorian → G Mixolydian → C Ionian'
      breakdown: string     // What's happening
    },

    why: string,             // Why this system exists
    vsBluesRock: string,     // Contrast with Model 1 (optional but helpful)
    practiceApproach: string // HOW to practice switching
  },

  // Scales organized by CHORD TYPE (functional grouping)
  scalesByChordType: {
    explanation: string,  // Overview of organization

    majorSeventhChords: {  // Repeat this structure for each chord type
      title: string,          // 'For Major 7 Chords (Maj7, Maj9, Maj13)'
      chordTypes: string,     // 'IMaj7, IVMaj7'
      character: string,      // How these chords feel
      whenToUse: string,      // When you encounter these chords

      scales: [
        {
          name: string,              // 'Ionian Mode'
          formula: string,           // '1 - 2 - 3 - 4 - 5 - 6 - 7'
          description: string,       // What this scale does
          example: string,           // 'C Ionian over CMaj7: C-D-E-F-G-A-B'
          chordTones: string,        // '1, 3, 5, 7' (the chord itself)
          availableTensions: string, // '9, 11, 13' (extensions you can add)
          sound: string,             // How it sounds
          usage: string,             // When/how to use in this genre
          why: string,               // Why this scale for this chord (optional)
          compare: string            // Comparison to similar scale (optional)
        }
      ]
    },

    minorSeventhChords: { /* same structure */ },
    dominantSeventhChords: { /* same structure */ },
    halfDiminishedChords: { /* same structure if needed */ }
  },

  // OPTIONAL: Additional practice guidance
  practicalApplication: {
    title: string,
    conceptualFramework: string,  // Big picture

    steps: [
      {
        step: number,
        action: string,
        example: string
      }
    ],

    exercises: {
      exercise1: string,
      exercise2: string
      // etc.
    },

    commonMistake: {
      problem: string,
      why: string,
      solution: string,
      analogy: string  // Optional but powerful
    },

    keyInsight: string
  },

  // Rest of theory section...
}
```

#### Model 3: Chromatic Voice-Leading

```javascript
theory: {
  overview: '...',

  // REQUIRED: Explain chromatic approach BEFORE scales
  melodicApproach: {
    title: string,
    coreIdea: string,  // The fundamental concept (not scale-based)

    howItWorks: {
      explanation: string,  // Overview of chromatic motion
      dm7Example: string,   // Concrete example over one chord
      g7Example: string,    // Another chord
      cmaj7Example: string  // Resolution example
    },

    threeKeyTechniques: {  // Or however many techniques define the genre
      technique1: {
        name: string,        // '3-to-1 Chromatic Slide'
        formula: string,     // '3 - b3 - 2 - b2 - 1'
        description: string, // What it is
        when: string,        // When to use it
        why: string,         // Why it works
        practice: string     // How to practice
      },
      technique2: { /* same structure */ },
      technique3: { /* same structure */ }
    },

    vsJazz: string,    // Contrast with Model 2 (optional)
    vsBlues: string,   // Contrast with Model 1 (optional)
    keyInsight: string // The critical understanding
  },

  // Scales as REFERENCE CONTEXT with warnings
  referenceScales: {
    title: 'Reference Scales (Context, Not Rules)',
    explanation: string,  // WARNING: these are reference, not boundaries

    scaleName1: {  // gospelScale, mixolydian, whatever fits
      name: string,
      formula: string,
      description: string,
      example: string,
      usage: string,      // What the scale shows
      context: string,    // How to think about it
      chromatic: string   // Reminder of chromatic freedom
    },

    scaleName2: { /* same structure */ },

    caveat: string  // FINAL WARNING: you use all 12 notes
  },

  // Rest of theory section...
}
```

---

### Field Purpose Guide

**Every field answers a learner question:**

| Field | Answers | Content Pattern |
|-------|---------|-----------------|
| `overview` | "What is this genre?" | 1-2 sentences, concrete identity |
| `formula` | "What notes?" | Interval formula (1 - b3 - 4 - 5 - b7) |
| `example` | "Show me in a key" | Concrete notes (In A: A-C-D-E-G) |
| `description` | "What is this / what does it do?" | Function and context |
| `usage` | "When do I use this?" | Specific situations |
| `when` | "At what point in the music?" | Timing/placement |
| `why` | "Why does this work?" | Theoretical justification |
| `sound` | "How does this feel?" | Sonic character |
| `practice` | "How do I learn this?" | Concrete practice steps |
| `explanation` | "What's the concept?" | Context before details |

---

### Content Sequencing Principles

#### 1. Concrete Before Abstract

❌ "Dominant 7th chords create tension through the tritone interval between the 3rd and b7th, functioning as V in functional harmony."

✅ "Add the b7 to a major triad. This creates a dominant 7th chord—the backbone of major blues. In C: C-E-G-Bb. The b7 (Bb) creates tension that wants to resolve. In blues, we never fully resolve it—that tension IS the blues sound."

**Pattern**: Show what to DO, then explain why it works.

#### 2. Playable Examples First

❌ "The Dorian mode features a natural 6th degree, distinguishing it from Aeolian."

✅ "D Dorian over Dm7: D-E-F-G-A-B-C. The B (major 6th) is the characteristic Dorian color—not sad, sophisticated. Play it over a Dm7 backing track and hear how the B sounds 'jazzy.'"

**Pattern**: Give notes, give context where to play them, give what to listen for.

#### 3. Answer "When" Before "Why"

❌ "Lydian mode's raised 4th avoids the dissonant interval with the major 3rd."

✅ "Use Lydian on IVMaj7 chords. F Lydian over FMaj7: F-G-A-B-C-D-E. The B (raised 4th) creates a floating, ethereal sound. Common in Herbie Hancock, Chick Corea. Why: The natural 11th sits a half-step above the 3rd, creating dissonance. Raising it to #11 solves the clash and adds sparkle."

**Pattern**: When to use → What it sounds like → Who uses it → Why it works.

#### 4. Build Complexity Gradually

**Good chord construction sequence:**
1. Triads (1-3-5) - the foundation
2. 7th chords (1-3-5-7) - basic extension
3. Extensions (9th, 11th, 13th) - color
4. Voicings - how to actually play them

**Each step builds on previous**. Don't introduce extensions before 7th chords. Don't explain voicings before basic chord construction.

#### 5. Context Before Rules

❌ "Blues uses dominant 7th chords on all three chord positions."

✅ "Blues chords are dominant 7ths: I7, IV7, V7. In A: A7 (A-C#-E-G), D7 (D-F#-A-C), E7 (E-G#-B-D). Why dominant 7th and not major 7th? Major 7th sounds too resolved and pretty for blues. The b7 creates the 'unresolved yearning' that defines blues."

**Pattern**: What you do → Concrete example → Why this choice.

---

### Writing Field Content: Patterns

#### `description` field:
- Start with function: "What this does" not "What this is"
- Include when/where to use
- Keep under 2 sentences for scales, can be longer for concepts

**Example**:
```javascript
description: 'The foundation. Learn this first—5 notes, safe everywhere, always sounds like blues. Every blues solo uses this.'
```

#### `usage` field:
- Specific situations, not generic "adds color"
- Include artist/style references when helpful
- Focus on actionability

**Example**:
```javascript
usage: 'Use on IMaj7 in major keys. Bill Evans, Oscar Peterson use this constantly.'
```

#### `why` field:
- Theoretical justification AFTER practical usage
- Connect to sound/effect, not just theory
- Use accessible language

**Example**:
```javascript
why: 'The natural 11 (4th) sits a half-step above the 3rd, creating dissonance. Raising it to #11 solves the clash and adds sparkle.'
```

#### `example` field:
- Always include key and actual notes
- Use auto-transposition pattern: "In [Key]: [notes]"
- Can include musical context

**Example**:
```javascript
example: 'C Ionian over CMaj7: C - D - E - F - G - A - B'
```

#### `explanation` field:
- Opens a concept before diving into details
- 1-3 sentences, sets context
- Answers "what is this for?"

**Example**:
```javascript
explanation: 'Add the b7 (flatted 7th scale degree) to the major triad. This creates a dominant 7th chord—the backbone of major blues.'
```

---

### Complete Minimal Working Example

```javascript
'Rock': {
  theory: {
    overview: 'Rock is built on power chords and pentatonic scales. Simple, direct, loud. The power chord\'s ambiguous tonality (no 3rd) gives you melodic freedom—play major or minor pentatonic over the same chord.',

    melodicVsRhythmic: {
      title: 'Scales: For Lead',
      explanation: 'These scales are for LEAD GUITAR and MELODY. Rhythm guitar plays power chords (root + 5th only, no 3rd). The ambiguity lets lead players use major or minor scales freely.',
      example: 'You might solo with minor pentatonic while rhythm plays power chords. The power chord has no 3rd, so your minor 3rd doesn\'t clash—it defines the minor sound.'
    },

    scales: [
      {
        name: 'Minor Pentatonic Scale',
        formula: '1 - b3 - 4 - 5 - b7',
        description: 'THE rock scale. Use for aggressive, edgy solos. Works over any power chord progression.',
        example: 'In E: E - G - A - B - D'
      },
      {
        name: 'Major Pentatonic Scale',
        formula: '1 - 2 - 3 - 5 - 6',
        description: 'Brighter, more country-rock sound. Use for upbeat riffs or major-key rock.',
        example: 'In E: E - F# - G# - B - C#'
      }
    ],

    chordConstruction: {
      description: 'Rock uses power chords (no 3rd) for rhythm and full chords for color moments.',

      powerChord: {
        explanation: 'The foundation of rock. Root + 5th only. No 3rd means no major/minor—pure power.',
        formula: '1 - 5',
        example: 'E5 = E + B (that\'s it)',
        why: 'Heavy distortion makes 3rds sound muddy. Power chords stay clear under gain.'
      },

      triads: {
        explanation: 'Use full major/minor chords for clean sections or chord progressions.',
        formula: '1 - 3 - 5',
        example: 'E major = E - G# - B'
      }
    },

    typicalKeys: {
      description: 'Rock favors guitar-friendly keys with open strings.',
      common: 'E, Em, A, Am, D, G (most common)',
      why: 'Open strings allow power chord mobility and deeper bass. E and A are natural drop-D tuning roots.',
      avoid: 'Db, Gb, Eb, F# (less common)',
      whyAvoid: 'Require barre chords throughout, lose open string resonance. Some metal uses these for darker tone.'
    }
  },

  rhythm: {
    feel: {
      description: 'Driving 4/4 with emphasis on downbeats. Straight eighth notes, no swing. Power and forward motion.',
      written: '4/4 time signature',
      important: 'Lock with the kick drum. Downstrokes for power, palm mute for tightness.'
    },

    guitar: 'Power chords on downbeats, palm mute for verses, open up for chorus. Use downstrokes for heavy feel.',
    keys: 'Double the guitar power chords or play sustained chords. Leave space for guitar—don\'t overplay.'
  },

  licks: [
    {
      name: 'Pentatonic Box Bend',
      description: 'Bend the b3 up to the 3 within the pentatonic box position.',
      keys: 'Not applicable—piano doesn\'t bend notes.',
      guitar: 'In E minor pentatonic (12th fret): bend G (15th fret, b3) up to G# (3). Classic rock lead move.'
    },
    {
      name: 'Power Chord Hammer-On',
      description: 'Hammer from root to 5th within power chord shape.',
      keys: 'Not applicable.',
      guitar: 'Play root on low E, hammer to 5th on A string. Creates movement in static power chord.'
    }
  ],

  practice: {
    backingTracks: {
      search: '"Rock Backing Track" + key, or "Power Chord Backing Track"',
      listenFor: 'Heavy drums, driving bass, space for lead',
      recommended: '120-140 BPM (mid-tempo), 90-110 BPM (hard rock), 160+ BPM (punk)'
    },

    exercises: [
      '1. Learn minor pentatonic in one position (box 1)',
      '2. Practice power chord changes between E5, A5, D5',
      '3. Play pentatonic licks over power chord progression',
      '4. Add bends to pentatonic patterns'
    ],

    songs: [
      { title: 'Smoke on the Water', artist: 'Deep Purple', focus: 'Power chord riff, simple pentatonic' },
      { title: 'Back in Black', artist: 'AC/DC', focus: 'Driving rhythm, pentatonic lead' },
      { title: 'Enter Sandman', artist: 'Metallica', focus: 'Palm muting, power chord movement' }
    ],

    progressionPath: [
      { level: 'Beginner', goal: 'Learn power chords and one pentatonic position' },
      { level: 'Intermediate', goal: 'Connect pentatonic positions, add bends and vibrato' },
      { level: 'Advanced', goal: 'Mix major/minor pentatonic, play fast alternate picking runs' }
    ],

    commonMistakes: [
      '❌ Using full chords under distortion—sounds muddy',
      '❌ Playing too many notes in solos—rock is about space and power',
      '❌ Weak bends—bend all the way to pitch, not halfway',
      '❌ Ignoring rhythm guitar—it\'s 80% of rock playing'
    ]
  }
}
```

---

### Key Implementation Principles

1. **Every field must be actionable**: "Learn this" not "This exists"
2. **Examples must transpose**: Use "In [Key]:" pattern religiously
3. **Build concrete → abstract**: Play it → Picture it → Theory → Play more
4. **Answer "when" before "why"**: Usage before justification
5. **Self-contained**: Never assume learner read another genre
6. **Instrument-specific where needed**: Keys and guitar often differ
7. **No time estimates**: Everyone learns differently

---

### Testing Your Content

**Good content passes these tests:**

1. **Playability test**: Can learner play something from reading one scale/lick description?
2. **When test**: Does learner know WHEN to use this technique/scale?
3. **Isolation test**: Can learner understand this genre without reading others?
4. **Progression test**: Does content build from simple → complex?
5. **Why test**: Does learner understand WHY this technique works (after trying it)?

**If any test fails, content needs revision.**
