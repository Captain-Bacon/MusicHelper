# Genre Content Structure Reference

**This document is a scaffold, not a trap.**

Don't copy structures blindly. Understand the problems they solve, diagnose your genre's needs, then choose (or create) what serves the pedagogy.

---

## The Core Problem We're Solving

**User confusion**: "I see Jazz scales with conflicting notes (Dorian says don't use E+B, Mixolydian says don't use B). Which do I use when? Why do they exist?"

**Root cause**: Scales presented as information dumps without context for **when** and **how** to use them.

**Our solution**: Structure content based on how melody actually works in each genre, not based on arbitrary templates.

---

## How to Diagnose Your Genre

Before choosing a structure, answer these questions about how melody works in your genre:

### Question 1: Scale Coverage

**"Does one scale (or small set) work over the entire progression?"**

- **YES** → Model 1 (Unified Melodic Vocabulary)
- **NO, melody must track chord changes** → Model 2 or 3

**Examples:**

- Blues minor pentatonic works over the whole 12-bar → Model 1
- Rock pentatonic works over power chord progressions → Model 1
- Jazz melody must switch scales with each chord (Dm7 → G7 → CMaj7) → Model 2

### Question 2: Melodic Approach

**"When chords change, how does melody respond?"**

- **Stays in same scale** → Model 1
- **Switches to chord-specific scale** → Model 2 (Chord-Scale)
- **Uses chromatic motion to connect chord tones** → Model 3 (Chromatic Voice-Leading)

**Examples:**

- Blues stays in minor pentatonic even as I7 → IV7 → V7 changes → Model 1
- Jazz switches D Dorian → G Mixolydian → C Ionian → Model 2
- Gospel uses chromatic runs (E-Eb-D-Db-C) connecting chord tones → Model 3

### Question 3: Pedagogical Confusion Point

**"What would confuse a learner if we just listed scales?"**

- **"Why don't chords use these scales?"** → Add melody vs harmony explainer (Blues)
- **"Which scale for which chord?"** → Need chord-scale system explanation (Jazz)
- **"When do I use these scales?"** → They're reference, not rules (Gospel)

**This question reveals what context is missing.**

---

## Three Pedagogical Models

These emerged from analyzing how melody actually works in different genres. They're not templates—they're solutions to specific problems.

### Model 1: Unified Melodic Vocabulary

**Problem solved**: One scale works everywhere, but learner needs to understand melody vs harmony separation.

**Genres**: Blues, Pop, Rock, Country

**Melodic pattern**:

- Single scale (or small set) used throughout progression
- Melody doesn't track chord changes closely
- Creates tension when minor melody over major harmony (Blues) or freedom when pentatonic over power chords (Rock)

**Structure**:

```javascript
theory: {
  overview: '...',

  // OPTIONAL: Clarify melody vs harmony (if learner might confuse)
  melodicVsHarmonic: {  // or melodicVsRhythmic, or scalesVsChords
    title: 'Scales: For Melody',
    explanation: 'These scales are melodic tools. Chords built separately.',
    // Add fields that clarify the confusion point
  },

  // Standard scales array
  scales: [
    {
      name: 'Scale Name',
      formula: '1 - b3 - 4 - 5 - b7',
      description: 'When/how to use',
      example: 'In A: A - C - D - E - G'
    }
  ],

  // Rest of theory section...
}
```

**When to use**:

- Melody stays in one tonal area while chords move
- "Learn this scale, use it everywhere in the song"
- Simple, direct, beginner-friendly

**Warning signs you need this**:

- Learner asks "Do I use minor pentatonic for minor chords?"
- Confusion about why melody has b3 but chords have natural 3
- Uncertainty about when to switch scales

**Examples**:

- **Blues**: Minor pentatonic over I7-IV7-V7. Has explicit `scalesVsChords` explaining the paradox.
- **Pop**: Major/minor pentatonic for hooks. Added `melodicVsHarmonic` to clarify.
- **Rock**: Pentatonic over power chords. Added `melodicVsRhythmic` connecting lead to rhythm.

---

### Model 2: Chord-Scale Relationships

**Problem solved**: Melody tracks harmony closely, different scale per chord type, learner needs system explanation.

**Genres**: Jazz, Neo-Soul, Bebop, Latin Jazz

**Melodic pattern**:

- Melody changes with each chord
- Specific scale matches each chord type (Dorian for m7, Mixolydian for 7, Ionian for Maj7)
- Learner must understand "which scale for which chord"

**Structure**:

```javascript
theory: {
  overview: '...',

  // REQUIRED: Explain the system BEFORE listing scales
  chordScaleRelationships: {
    title: 'Chord-Scale Theory: How This Works',
    explanation: 'Different scale for each chord type. Must match chord underneath.',
    example: {
      progression: 'ii-V-I in C',
      chords: 'Dm7 → G7 → CMaj7',
      scales: 'D Dorian → G Mixolydian → C Ionian',
      breakdown: 'Three chords, three scales, three roots'
    },
    why: 'Each scale contains chord tones + available tensions for that chord type',
    vsBluesRock: 'Contrast with Model 1 genres',
    practiceApproach: 'How to actually learn this'
  },

  // Scales organized by CHORD TYPE, not alphabetically
  scalesByChordType: {
    explanation: 'Organized by which chord you\'re playing over',

    majorSeventhChords: {
      title: 'For Major 7 Chords (Maj7, Maj9)',
      chordTypes: 'IMaj7, IVMaj7',
      character: 'Stable, resolved',
      whenToUse: 'When a Major 7 chord is sounding',

      scales: [
        {
          name: 'Ionian Mode',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
          description: 'Default for Major 7',
          example: 'C Ionian over CMaj7: C-D-E-F-G-A-B',
          chordTones: '1, 3, 5, 7',
          availableTensions: '9, 13',
          sound: 'Bright, consonant',
          usage: 'Use on IMaj7',
          // Can add: why, when, practice, etc.
        }
      ]
    },

    minorSeventhChords: { /* similar structure */ },
    dominantSeventhChords: { /* similar structure */ },
    // etc.
  },

  // OPTIONAL: Practice guidance specific to chord-scale switching
  practicalApplication: {
    title: 'How to Practice Chord-Scale Theory',
    steps: [ /* step-by-step */ ],
    commonMistake: { /* what NOT to do */ },
    keyInsight: '...'
  },

  // Rest of theory section...
}
```

**When to use**:

- Melody must track harmony (chord changes every 2-4 bars)
- Different chord types need different scales
- Learner sees conflicting scale information without context

**Warning signs you need this**:

- Listing scales without explaining when to use each
- User asks "Which scale for Dm7? For G7?"
- Simple `scales` array creates confusion about switching

**Key transposition behavior**:

- Show functional relationships, not just "all scales in selected key"
- If key = C: "D Dorian over Dm7, G Mixolydian over G7, C Ionian over CMaj7"
- If key = G: "A Dorian over Am7, D Mixolydian over D7, G Ionian over GMaj7"

**Examples**:

- **Jazz**: Complete chord-scale system with scales grouped by chord type
- **Neo-Soul**: Jazz foundation + chromatic approach emphasis

---

### Model 3: Chromatic Voice-Leading

**Problem solved**: Melody isn't scale-based—it's chromatic motion connecting chord tones. Scales are reference context, not rules.

**Genres**: Gospel, some R&B, Chromatic Jazz

**Melodic pattern**:

- Melody targets chord tones
- Connects them with chromatic runs, approaches, passing tones
- Uses all 12 notes as glue, not bounded by scales
- Scales show harmonic framework but don't dictate melodic choices

**Structure**:

```javascript
theory: {
  overview: '...',

  // REQUIRED: Explain chromatic approach FIRST, before scales
  melodicApproach: {
    title: 'Genre Melody: Chord Tones + Chromatic Motion',
    coreIdea: 'Not scale-based. Target chord tones, connect chromatically.',

    howItWorks: {
      explanation: '...',
      dm7Example: 'Target D-F-A-C, approach chromatically',
      g7Example: 'Target G-B-D-F, use chromatic runs',
      // Show progression examples
    },

    threeKeyTechniques: {  // Or however many
      technique1: {
        name: 'The 3-to-1 Chromatic Slide',
        formula: '3 - b3 - 2 - b2 - 1',
        description: '...',
        when: 'End of phrases',
        practice: 'Learn in all 12 keys'
      },
      // More techniques...
    },

    vsJazz: 'Jazz uses chord-scales. Gospel uses chromatic motion.',
    vsBlues: 'Blues uses one scale. Gospel tracks harmony chromatically.',
    keyInsight: 'Melody is FUNCTIONAL, not scalar'
  },

  // Scales shown as REFERENCE CONTEXT with warnings
  referenceScales: {
    title: 'Reference Scales (Context, Not Rules)',
    explanation: 'These show HARMONIC CONTEXT. Don\'t think "I\'m in this scale." Gospel is CHROMATIC—you use all 12 notes as passing tones.',

    gospelScale: {  // Or whatever scales fit
      name: 'Gospel Scale',
      formula: '1 - 2 - b3 - 3 - 4 - 5 - 6 - b7',
      description: '...',
      example: 'In C: C-D-Eb-E-F-G-A-Bb',
      usage: 'Shows available colors',
      context: 'Reference for harmonic framework',
      chromatic: 'But you\'re not limited to these notes'
    },

    caveat: 'WARNING: This genre uses chromatic motion. Scales are reference, not boundaries. You use ALL 12 notes.'
  },

  // Rest of theory section...
}
```

**When to use**:

- Melody is primarily chromatic motion between chord tones
- Scales would mislead learner into thinking "stay in this scale"
- Genre's defining characteristic IS the chromatic approach

**Warning signs you need this**:

- Listing scales makes content feel incomplete or misleading
- Real technique is chromatic runs/approaches, not scale playing
- Learner would try to "stay in the scale" and miss the point

**Examples**:

- **Gospel**: Chromatic runs (3-to-1 slide, walkups, approaches) with scales as reference
- Could apply to chromatic R&B, avant-garde jazz, etc.

---

## Decision Framework

Use this flowchart when adding/updating a genre:

```
1. How does melody work in this genre?
   ├─ One scale over whole progression → Model 1
   ├─ Different scale per chord type → Model 2
   └─ Chromatic motion connecting chord tones → Model 3

2. What would confuse a learner if you just listed scales?
   ├─ "Why don't chords use these scales?" → Add melody vs harmony explainer
   ├─ "Which scale for which chord?" → Use chord-scale structure
   └─ "When do I use these scales?" → Reframe as reference context

3. Does the genre actually fit these models?
   ├─ YES → Use appropriate model
   └─ NO → Understand WHY it doesn't fit, create what serves the pedagogy
```

**The models aren't mandatory.** They solve specific problems. If your genre doesn't have those problems, don't force the structures.

---

## Anti-Patterns: What NOT to Do

### ❌ Forcing scales into every genre

**Problem**: Not every genre is scale-based.

**Example**: Gospel tried to list scales like Blues. But Gospel melody is chromatic runs connecting chord tones, not scale playing. Listing scales without explaining chromatic motion confused learners.

**Solution**: Recognized Model 3 pattern, restructured to emphasize chromatic techniques with scales as reference.

### ❌ Structure-first thinking

**Problem**: "We have a scales section, let's fill it" creates wrong content.

**Example**: Initially tried to populate Gospel scales section like Blues. Felt wrong because the genres work differently.

**Solution**: Content-first thinking: "What does a Gospel learner need to know?" → Chromatic motion is primary, scales are context.

### ❌ Ignoring pedagogical confusion

**Problem**: Technically correct but confusing to learner.

**Example**: Jazz listing scales without chord-scale explanation. All scales are "correct" but learner doesn't know when to use which.

**Solution**: Added `chordScaleRelationships` explainer BEFORE scales, organized scales by chord type.

### ❌ Copy-paste from similar genres

**Problem**: Similar genres might have different pedagogical needs.

**Example**: Neo-Soul and Jazz both use chord-scales, but Neo-Soul's defining characteristic is chromatic approaches. Copying Jazz structure exactly would miss this.

**Solution**: Jazz structure + heavy chromatic approach emphasis + laid-back feel guidance.

---

## Warning Signs Your Structure Is Wrong

**If you notice these, reconsider your approach:**

1. **Content feels forced**: You're trying to fit information into structure instead of structure serving information
2. **Missing the point**: You've documented scales but the genre's real technique is something else
3. **Learner confusion**: You can list facts but learner doesn't know what to do with them
4. **Arbitrary organization**: Scales listed alphabetically instead of by function
5. **Incomplete feeling**: You've documented scales but it doesn't capture what makes the genre sound like itself

**Good sign**: Content flows naturally, learner can answer "when do I use this?" after reading.

---

## Common Structures by Section

### Theory Section Patterns

#### Model 1 (Unified Vocabulary) Example

```javascript
theory: {
  overview: '...',
  melodicVsHarmonic: { /* optional clarifier */ },
  scales: [ /* array */ ],
  blueNotes: { /* or colorTones */ },
  chordConstruction: { /* required */ },
  typicalKeys: { /* recommended */ },
  // Other theory content...
}
```

#### Model 2 (Chord-Scale) Example

```javascript
theory: {
  overview: '...',
  chordScaleRelationships: { /* required explainer */ },
  scalesByChordType: {
    majorSeventhChords: { /* grouped by function */ },
    minorSeventhChords: { /* ... */ },
    dominantSeventhChords: { /* ... */ }
  },
  practicalApplication: { /* how to practice switching */ },
  typicalKeys: { /* recommended */ },
  // Other theory content...
}
```

#### Model 3 (Chromatic Voice-Leading) Example

```javascript
theory: {
  overview: '...',
  melodicApproach: {
    coreIdea: '...',
    howItWorks: { /* examples */ },
    threeKeyTechniques: { /* chromatic techniques */ }
  },
  referenceScales: {
    explanation: 'WARNING: reference context',
    scale1: { /* with context field */ },
    caveat: 'Chromatic freedom statement'
  },
  chordConstruction: { /* required */ },
  typicalKeys: { /* recommended */ },
  // Other theory content...
}
```

### Universal Sections (All Models)

**Required**:

- `overview` - 1-2 sentence genre description
- `chordConstruction` - How chords work in this genre (minimum: triads + one other type)

**Recommended**:

- `typicalKeys` - Which keys are common and why (if genre has preferences)
- `rhythm` section with `feel` description
- `licks` array with characteristic techniques
- `practice` section with songs, exercises, progression path

**Optional but powerful**:

- Custom sections explaining genre-specific concepts
- Comparisons between genres (when clarifying, not duplicating)
- Voicings sections (if genre has specific approaches)

---

## Field-Level Reference

### Auto-Transposition Patterns

Text that matches these patterns will transpose with key selector:

- `In [Key]:` → Updates key and following notes
- `e.g., in [Key]:` → Updates examples
- Scale formulas (e.g., `'1 - b3 - 4 - 5 - b7'`) → Generates actual notes

**Example**:

```javascript
example: 'In C: walk bass C → D → Eb → E'
// User selects A →
// Renders: 'In A: walk bass A → B → C → C#'
```

### Instrument-Specific Content

Wrap content with these classes for instrument toggle:

```javascript
keys: '<div class="instrument-keys-only">Keys-specific content</div>',
guitar: '<div class="instrument-guitar-only">Guitar-specific content</div>'
```

Controlled by `body[data-instrument]` attribute (both/keys/guitar).

### Common Field Patterns

**For explainer sections**:

```javascript
sectionName: {
  title: 'Display Title',           // Shows as heading
  explanation: 'Main concept',       // Bold primary text
  example: 'Concrete example',       // Auto-transposes "In C:" patterns
  why: 'Deeper explanation',         // Italicized insight
  // Any other string fields render as "Field: value"
}
```

**For scale objects**:

```javascript
{
  name: 'Scale Name',
  formula: '1 - b3 - 4 - 5 - b7',   // Generates notes in selected key
  description: 'When/how to use',
  example: 'In A: A - C - D - E - G',
  chordTones: '1, b3, 5, b7',       // For Model 2
  availableTensions: '9, 11, 13',   // For Model 2
  sound: 'Character description',
  usage: 'When to use',
  why: 'Rationale',                 // Any field you need
  when: 'Specific situations',
  practice: 'Practice tips'
}
```

**For technique/lick objects**:

```javascript
{
  name: 'Technique Name',
  description: 'What it is / when to use',
  keys: 'Keys approach (transposes)',
  guitar: 'Guitar approach (transposes)',
  when: 'When to use',              // Optional additional fields
  practice: 'How to practice'
}
```

---

## Rendering Behavior

### Main.js Rendering Logic

**New structure handlers** (added during restructuring):

1. `melodicVsHarmonic` / `melodicVsRhythmic` - Orange/yellow box before scales
2. `chordScaleRelationships` - Green box before scalesByChordType
3. `melodicApproach` - Green box with technique breakdown
4. `scalesByChordType` - Accordion with keyboards/tables grouped by chord type
5. `referenceScales` - Orange accordion with warning emphasis

**Existing handlers**:

- `scales` - Green accordion with keyboards/tables (Model 1)
- `scalesVsChords` - Orange box explaining melody vs harmony (Blues)
- `chordConstruction` - Accordion with chord theory
- `pianoVoicings` / `guitarVoicings` - Accordion with voicings
- `typicalKeys` - Orange box with key preferences

**Generic rendering**:

- Custom sections with `.title` field render in green boxes
- Fields: title (heading), explanation (bold), example (auto-transposes), why (italics)

### Accordion Sections

Three main accordions auto-generate if content exists:

1. **Scales** - If `scales` OR `scalesByChordType` OR `referenceScales` exists
2. **Understanding Chords** - If `chordConstruction` exists
3. **Voicings & Technique** - If `pianoVoicings` OR `guitarVoicings` OR `turnaround` exists

**Always visible** (not in accordions):

- `overview`
- Explainer boxes (`melodicVsHarmonic`, `chordScaleRelationships`, `melodicApproach`)
- `typicalKeys`
- Custom sections with `.title`

---

## Critical Guidelines

### Only Genre-Specific Content

**DON'T include basic music theory from Scales page**:

- ❌ Major Scale (universal, not genre-specific)
- ❌ Basic intervals explained elsewhere
- ✅ Only scales/concepts specific to THIS genre

### Each Genre = Self-Contained

Don't assume learner read other genres:

- ❌ "Same as Blues: left hand plays root + 7th"
- ✅ "Left hand plays root + 7th. This is the foundation."

**Comparisons OK for context** (not technical how-to):

- ✅ "Gospel inherited Blues' emotional core but added Jazz harmony"
- ✅ "Where Blues stays on I7, Gospel keeps moving"

### Avoid Timeframe Estimates

Everyone learns differently:

- ❌ `{ level: 'Beginner', goal: '...', timeframe: 'Weeks 1-4' }`
- ✅ `{ level: 'Beginner', goal: '...' }`

### Progressions Go in chord-progressions.js

Don't duplicate progression formulas in genre content:

- ❌ Listing progressions like "I → V → vi → IV" in theory
- ✅ Add to `src/data/chord-progressions.js` with `style: 'GenreName'`
- ✅ Explain WHY genre uses certain progressions (context), don't list them

### Custom Section Names Matter

Choose field names based on function:

- **Blues**: `blueNotes` - defining characteristic
- **Gospel**: `colorTones` - chromatic passing tones
- Choose based on how the genre uses them, not convention

---

## Creating New Genre Content

### Minimum Viable Content

```javascript
'GenreName': {
  theory: {
    overview: 'Coming soon...',
    chordConstruction: {
      description: 'Coming soon...',
      triads: { explanation: '...', formula: '1-3-5', example: '...' }
    }
  },
  rhythm: { feel: { description: 'Coming soon...' } },
  licks: [],
  practice: {}
}
```

### Recommended Process

**Don't start with structure. Start with analysis:**

1. **Analyze the genre melodically**:
   - Listen to 5-10 representative songs
   - How does melody relate to chord changes?
   - Does one scale work everywhere? Must melody track chords? Is it chromatic motion?

2. **Identify the pedagogical problem**:
   - What would confuse a learner?
   - What context is missing?
   - What question would they ask that you need to answer?

3. **Choose model based on diagnosis**:
   - Model 1: One scale everywhere
   - Model 2: Scale per chord type
   - Model 3: Chromatic voice-leading
   - None of these: Understand why, create what serves the pedagogy

4. **Write content that solves the problem**:
   - Explainer sections BEFORE technical details
   - Organize by function, not arbitrarily
   - Include context for every piece of information

5. **Test with naive reader**:
   - Can they answer "when do I use this?"
   - Does organization make sense?
   - Any confusion points?

### If Your Genre Doesn't Fit

**That's OK.** The models aren't universal—they solve specific problems we encountered.

**What to do**:

1. Document how melody actually works in your genre
2. Identify what would confuse a learner
3. Create structure that provides the missing context
4. Update this reference doc with new pattern (if it applies to other genres)

**Example**: Classical music might need period-based organization (Baroque/Classical/Romantic), not chord-scale or chromatic models. That's fine—serve the pedagogy.

---

## Lessons from the Restructuring

### What We Learned

1. **Pedagogical analysis before structure**: Understand how melody works, then structure follows
2. **Information without context = confusion**: Don't just list facts, provide decision framework
3. **One size doesn't fit all**: Different melodic approaches need different presentations
4. **User confusion is data**: "I don't know what to do with this" reveals missing context
5. **Flexibility is strength**: Three models, not one template, because genres differ

### The Evolution

**Before**: Simple `scales` array for all genres, assumed one structure fits all

**Problem discovered**: Jazz scales listed without context created confusion

**Diagnostic process**: Analyzed how melody works in Blues vs Jazz vs Gospel

**Result**: Three models based on melodic approach, not arbitrary structure

**Key insight**: Structure should serve pedagogy, not the reverse

### Success Metrics

**Good sign your content works**:

- Learner can answer "when do I use this?"
- Organization feels natural, not forced
- Captures what makes genre sound like itself
- No confusion about conflicting information

**Bad sign you need to reconsider**:

- "I don't know what to do with this information"
- "Why are these scales all different?"
- Content feels incomplete despite having technical details
- Forcing content into structure instead of structure serving content

---

## Examples by Model

### Model 1: Blues (Gold Standard)

**Why Model 1**: Minor pentatonic works over entire 12-bar progression

**Key additions**:

- `scalesVsChords` section explicitly explains melody vs harmony paradox
- Resolves "why minor melody over major chords?"
- Learner understands tension is intentional, not confusion

**Structure**:

- Simple `scales` array with 3 options
- Explainer section before scales
- Characteristic notes section
- Chord construction (from major scale, not blues scales)

### Model 2: Jazz (Complete Example)

**Why Model 2**: Melody must track harmony, different scale per chord type

**Key additions**:

- `chordScaleRelationships` explains the system before listing scales
- `scalesByChordType` groups scales by function (Major 7, Minor 7, Dominant 7)
- `practicalApplication` shows how to practice switching
- Each scale includes chord tones, available tensions, when to use

**Resolves**: "Which scale for which chord? When do I switch?"

### Model 3: Gospel (Hybrid Example)

**Why Model 3**: Melody is chromatic motion, not scale-based

**Key additions**:

- `melodicApproach` emphasizes chromatic techniques FIRST
- `referenceScales` shows scales as context, not rules
- Warning: "Gospel is CHROMATIC—scales are reference, not boundaries"
- Three key techniques documented (3-to-1 slide, walkups, approaches)

**Resolves**: Prevents learner from trying to "stay in scale" when genre uses all 12 notes

---

## Final Thoughts: Scaffold, Not Trap

**This document teaches pattern recognition and problem-solving, not structure copying.**

The three models aren't rules—they're solutions to problems we encountered. If your genre has different problems, create different solutions.

**Guiding principle**: Serve the pedagogy. If structure helps learner understand, use it. If structure creates confusion, change it.

**Permission granted**: Deviate from these patterns when your genre needs it. Document why, so future contributors understand your reasoning.

**What matters**: After reading your content, can learner answer "when do I use this?" If yes, your structure worked. If no, reconsider your approach.

The goal is clarity, not consistency. Different genres have different needs. Honor that.
