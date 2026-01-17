# Genre Theory Section Restructuring Plan

## Problem Statement

User discovered pedagogical gap: scale information presented without context for **when** and **how** to use scales. This creates confusion rather than clarity.

**Specific issue identified**: Jazz scales list (Ionian, Dorian, Mixolydian, Bebop) shown with "Use over IMaj7" instructions but no explanation of:

- WHY different scales for different chords
- WHEN to switch between them
- HOW this differs from Blues/Rock (where one scale works everywhere)

**Secondary issue**: Key selector transposes all scales to same root, which is musically wrong for chord-scale theory (should show D Dorian over Dm7 in key of C, not C Dorian).

## Pedagogical Models Identified

### Model 1: Unified Melodic Vocabulary

**Genres**: Blues, Pop, Rock
**Pattern**: One scale (or small set of scales) works over entire progression
**User experience**: "Learn this scale, use it anywhere in the song"
**Current status**: ✅ Works well, especially Blues with explicit `scalesVsChords` explanation

### Model 2: Chord-Scale Relationships

**Genres**: Jazz, Neo-Soul
**Pattern**: Different scale per chord type, must match chord underneath
**User experience**: "Which chord is playing? Use that chord's scale"
**Current status**: ❌ Broken - lists scales without explaining system

### Model 3: Chromatic Voice-Leading (Hybrid)

**Genre**: Gospel
**Pattern**: Melody follows chord tones connected by chromatic motion, not scale-based
**User experience**: "Know the chord tones, connect them chromatically"
**Current status**: ⚠️ Shows scales but actual technique is chromatic runs/approaches

## Restructuring Plan by Genre

### Blues (Model 1) - ✅ Keep structure, verify clarity

**Current structure**:

- Scales section with 3 unified options
- `scalesVsChords` explicit explanation of melody vs harmony
- `chordConstruction` showing chords come from standard scales

**Changes needed**: None - this is the gold standard. Verify it serves as template for other Model 1 genres.

### Pop (Model 1) - ✅ Keep structure, verify clarity

**Current structure**:

- 4 scales (Major, Natural Minor, Major Pentatonic, Minor Pentatonic)
- All work as melodic vocabulary over Pop progressions

**Changes needed**: Verify no confusion about when to use which scale. May need brief "scales vs chords" note like Blues has.

### Rock (Model 1) - ✅ Keep structure, verify clarity

**Current structure**:

- Pentatonic scales + natural minor
- Explicit "works over power chords" guidance

**Changes needed**: Likely fine as-is. Verify clarity.

### Jazz (Model 2) - ❌ Major restructuring needed

**Current structure**:

- Lists 4 scales with "Use over IMaj7" brief instructions
- `guideTones` section (good, keep)

**New structure**:

```
theory: {
  overview: '...',

  chordScaleRelationships: {
    title: 'Chord-Scale Theory: The Jazz System',
    explanation: 'Unlike Blues/Rock (one scale everywhere), Jazz uses different scales for different chord types. The scale you solo with must match the chord sounding underneath.',
    example: 'ii-V-I in C (Dm7 → G7 → CMaj7) uses THREE scales: D Dorian over Dm7, G Mixolydian over G7, C Ionian over CMaj7',
    why: 'Each scale contains the chord tones plus available tensions for that specific chord type'
  },

  scalesByChordType: {
    majorSeventhChords: {
      title: 'For Major 7 Chords (Maj7, Maj9, Maj13)',
      explanation: 'These are your "home" chords - stable, resolved',
      whenToUse: 'Play these scales when a Major 7 chord is sounding (IMaj7, IVMaj7 in major keys)',
      scales: [
        {
          name: 'Ionian Mode',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
          description: 'Default choice for Major 7 chords. Natural major sound.',
          example: 'C Ionian over CMaj7: C - D - E - F - G - A - B',
          chordTones: '1, 3, 5, 7',
          availableTensions: '9, 11 (use sparingly), 13'
        },
        {
          name: 'Lydian Mode',
          formula: '1 - 2 - 3 - #4 - 5 - 6 - 7',
          description: 'Brightens the sound with #4. Common on IVMaj7.',
          example: 'F Lydian over FMaj7: F - G - A - B - C - D - E',
          chordTones: '1, 3, 5, 7',
          availableTensions: '9, #11 (the magic note), 13'
        }
      ]
    },

    minorSeventhChords: {
      title: 'For Minor 7 Chords (m7, m9, m11)',
      explanation: 'These create movement toward the dominant chord',
      whenToUse: 'Play these scales when a minor 7 chord is sounding (iim7, iiim7, vim7)',
      scales: [
        {
          name: 'Dorian Mode',
          formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
          description: 'THE default for jazz minor chords. Major 6th makes it sophisticated.',
          example: 'D Dorian over Dm7: D - E - F - G - A - B - C',
          chordTones: '1, b3, 5, b7',
          availableTensions: '9, 11, 13'
        }
      ]
    },

    dominantSeventhChords: {
      title: 'For Dominant 7 Chords (7, 9, 13)',
      explanation: 'These create tension that wants to resolve',
      whenToUse: 'Play these scales when a dominant 7 chord is sounding (V7, secondary dominants)',
      scales: [
        {
          name: 'Mixolydian Mode',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
          description: 'Basic dominant sound. Major with b7.',
          example: 'G Mixolydian over G7: G - A - B - C - D - E - F',
          chordTones: '1, 3, 5, b7',
          availableTensions: '9, 13'
        },
        {
          name: 'Bebop Dominant Scale',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - b7 - 7',
          description: 'Mixolydian + passing tone (major 7). Eight notes align chord tones with downbeats.',
          example: 'G Bebop Dominant over G7: G - A - B - C - D - E - F - F#',
          chordTones: '1, 3, 5, b7',
          availableTensions: '9, 13',
          why8notes: 'Eight notes in 4/4 time = chord tones land on beats 1,2,3,4 when playing eighth notes'
        }
      ]
    }
  },

  practicalApplication: {
    title: 'How to Practice Chord-Scale Theory',
    steps: [
      'Learn the chord progression in the key (e.g., Dm7 - G7 - CMaj7)',
      'Identify the root of each chord (D, G, C)',
      'Play the appropriate scale from that root (D Dorian, G Mixolydian, C Ionian)',
      'Practice switching scales as chords change - THIS is jazz improvisation'
    ],
    commonMistake: 'Playing C major scale over the entire ii-V-I because "it\'s in the key of C." That works but sounds bland. Using chord-specific scales creates color and harmonic interest.',
    keyInsight: 'All these scales come from the parent key (Dorian is mode 2, Mixolydian is mode 5), but thinking "chord-scale" instead of "key" opens melodic possibilities.'
  },

  guideTones: {
    // Keep existing content
  }
}
```

### Neo-Soul (Model 2) - ❌ Major restructuring needed

**Current structure**:

- Lists 4 scales (Dorian, Mixolydian, Phrygian, Minor Pentatonic)
- Has `chromaticApproaches` section (excellent, keep and expand)

**New structure**: Similar to Jazz but emphasize chromatic approaches more heavily. Neo-Soul is "chord-scale theory + chromatic approach tones."

### Gospel (Model 3) - ❌ Major restructuring needed

**Current structure**:

- Lists 2 scales (Mixolydian, Gospel Scale)
- Has extensive chord construction, voicings, and techniques already
- The REAL content is in runs, chromatic approaches, voice leading

**New structure**:

```
theory: {
  overview: '...',

  melodicApproach: {
    title: 'Gospel Melody: Chord Tones + Chromatic Motion',
    coreIdea: 'Gospel doesn\'t stay in scales - it moves through CHORD TONES connected by CHROMATIC RUNS. You\'re not "in G Mixolydian," you\'re "targeting G7 chord tones and approaching them chromatically."',

    howItWorks: {
      explanation: 'Over a Gospel progression (Dm7 → G7 → CMaj7), you target the chord tones of each chord, connected by chromatic passing tones.',
      dm7Example: 'Target D, F, A, C (Dm7 chord tones). Approach F from E or Gb.',
      g7Example: 'Target G, B, D, F (G7 chord tones). Approach B from Bb or B♮ from above.',
      cmaj7Example: 'Target C, E, G, B (CMaj7 chord tones). Land on these with resolution.'
    },

    vsJazz: 'Jazz uses chord-scales (stay in D Dorian over Dm7). Gospel uses chord-tone targeting + chromatic connection. More freedom, more motion, more "churchy" runs.',
    vsBlues: 'Blues uses one scale over everything (minor pentatonic/blues scale). Gospel changes focus with each chord, following harmony closely.'
  },

  keyTechniques: {
    threeToOneRun: {
      name: 'The 3-to-1 Chromatic Run',
      description: 'The signature Gospel lick. From the 3rd of the scale, descend chromatically to root.',
      formula: '3 - b3 - 2 - b2 - 1',
      inC: 'E - Eb - D - Db - C (or just E - Eb - D - C for faster version)',
      when: 'End of phrases, turnarounds, landing on the I chord',
      practice: 'Learn in all 12 keys. This appears EVERYWHERE in Kirk Franklin, Tye Tribbett, Israel Houghton.'
    },

    chromaticApproachTones: {
      name: 'Half-Step Approaches',
      description: 'Don\'t land directly on chord tones - approach from half-step above or below.',
      example: 'Landing on C: approach from B (below) or Db (above). Creates smooth, inevitable resolution.',
      overChords: 'Over CMaj7, approach E (3rd) from Eb. Approach G (5th) from F# or Ab. Creates Gospel sophistication.',
      practice: 'Pick a chord tone. Play the note a half-step below, then resolve up. Play half-step above, resolve down. Do this over each chord in progression.'
    },

    chromaticWalkups: {
      name: 'Chromatic Runs Between Chords',
      description: 'Connect chords with chromatic scalar passages.',
      ascending: 'C to G7: C - C# - D - D# - E - F - F# - G (chromatic walkup to target)',
      descending: 'Called "falls" or cascades. Start high, descend chromatically to land on new chord.',
      practice: 'Find two chord roots a 5th apart (C to G). Practice chromatic walkup/walkdown between them. Speed up until it sounds like one gesture.'
    }
  },

  referenceScales: {
    title: 'Reference Scales (Context, Not Rules)',
    explanation: 'These scales provide the HARMONIC CONTEXT for Gospel, but don\'t think "I\'m playing in this scale now." Instead, these show which notes are available as you target chord tones and connect them chromatically.',

    gospelScale: {
      name: 'Gospel Scale',
      formula: '1 - 2 - b3 - 3 - 4 - 5 - 6 - b7',
      description: 'Major scale + blues notes (b3 and b7). Contains both major and minor colors - the Gospel duality.',
      example: 'In C: C - D - Eb - E - F - G - A - Bb',
      usage: 'Reference for available colors. The b3→3 movement is quintessentially Gospel.'
    },

    mixolydian: {
      name: 'Mixolydian Mode',
      formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
      description: 'Major with b7. Shows available notes over extended dominant 7th sections.',
      example: 'In G: G - A - B - C - D - E - F',
      usage: 'When sitting on a V7 chord for multiple bars (Gospel "vamp"), these notes are safe.'
    },

    caveat: 'But remember: Gospel melody is CHROMATIC. You\'re not limited to these scales - you\'re using ALL 12 notes as passing tones, approach tones, and connectors. The scales just show the harmonic framework.'
  },

  // Keep existing colorTones, harmonyVsBlues, chordConstruction, etc.
}
```

## Implementation Steps

1. **Audit Blues/Pop/Rock** - Verify Model 1 clarity
2. **Expand Jazz** - Full chord-scale explanation with pedagogical depth
3. **Expand Neo-Soul** - Chord-scale + chromatic approach emphasis
4. **Restructure Gospel** - Chromatic voice-leading model with reference scales
5. **Update rendering logic** - Handle new structures in main.js
6. **Test thoroughly** - Verify key selector, genre switching, all sections render

## Schema Changes Required

Current schema assumes uniform `scales: []` array. New schema needs flexibility:

```javascript
theory: {
  overview: string,

  // Model 1: Unified vocabulary (Blues, Pop, Rock)
  scales?: [...],
  scalesVsChords?: {...},

  // Model 2: Chord-scale (Jazz, Neo-Soul)
  chordScaleRelationships?: {...},
  scalesByChordType?: {...},
  practicalApplication?: {...},

  // Model 3: Chromatic voice-leading (Gospel)
  melodicApproach?: {...},
  keyTechniques?: {...},
  referenceScales?: {...},

  // Common sections
  chordConstruction: {...},
  [other sections...]
}
```

Rendering logic needs to detect which structure exists and render appropriately.

## Key Selector Behavior

**Current**: Transposes all scale examples to selected key

**Model 1 (Blues/Pop/Rock)**: ✅ Works correctly - all scales rooted on selected key

**Model 2 (Jazz/Neo-Soul)**: ❌ Broken - needs to show functional relationships

- If key = C, show: "D Dorian over Dm7, G Mixolydian over G7, C Ionian over CMaj7"
- If key = G, show: "A Dorian over Am7, D Mixolydian over D7, G Ionian over GMaj7"

**Model 3 (Gospel)**: ⚠️ Partial - examples should show chord progression in selected key, techniques transpose to show proper roots

## Success Criteria

User can answer these questions after reading restructured content:

**Jazz**:

- "I'm playing over a Dm7 chord in the key of C. What scale do I use?" → D Dorian
- "Why not C major scale over the whole ii-V-I?" → Works but bland, chord-specific scales add color
- "When do I switch scales?" → When the chord changes

**Gospel**:

- "I see these two scales listed. Which one do I use where?" → Neither - they're reference context
- "How do I actually create Gospel melodies?" → Target chord tones, approach chromatically, use runs
- "What's the 3-to-1 run and when do I use it?" → E-Eb-D-C landing on C chord, end of phrases

**Neo-Soul**:

- Similar to Jazz but also "What's different from straight jazz?" → Chromatic approach tones are essential

## Notes

This isn't box-ticking. We're solving a real pedagogical problem: information without decision framework creates confusion. The restructure provides:

- **Context**: Why this system exists
- **Decision rules**: When to use what
- **Contrast**: How this differs from other genres
- **Practice pathway**: How to actually learn this

The user's confusion about Jazz scales ("I don't know what to do with this conflicting information") will be eliminated by explaining the chord-scale system BEFORE listing the scales.
