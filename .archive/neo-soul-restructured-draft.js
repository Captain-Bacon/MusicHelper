// Restructured Neo-Soul Theory Section
// Implements chord-scale + chromatic approach model

'Neo-Soul': {
  theory: {
    overview: 'Neo-Soul is laid-back sophistication: jazz harmony meets hip-hop pocket, gospel emotional depth with contemporary production. Extended chords (9ths, 11ths, 13ths) are default, but what defines Neo-Soul is the SPACE—playing behind the beat, leaving room for breath, letting chords ring with intentional silence. It\'s groove-conscious arrangement with harmonic complexity. Think D\'Angelo\'s Voodoo, Erykah Badu\'s Mama\'s Gun, Robert Glasper\'s reimagined standards—music that breathes, swings slightly even in straight time, and prioritizes feel over flash.',

    chordScaleRelationships: {
      title: 'Neo-Soul Harmony: Chord-Scale Theory + Chromatic Approach',
      explanation: 'Neo-Soul uses jazz chord-scale relationships but adds a crucial element: CHROMATIC APPROACH TONES. You don\'t land directly on scale tones—you slide into them from a half-step above or below. This creates the laid-back, smooth Neo-Soul sound.',

      twoSystems: {
        jazzFoundation: 'Different scales for different chord types (Dorian for minor 7, Mixolydian for dominant 7, etc.). This gives harmonic structure.',
        neoSoulAddition: 'Approach every target note from a half-step away. This adds the "glide" and sophistication that separates Neo-Soul from straight jazz.'
      },

      example: {
        progression: 'Am7 → D7 → GMaj7',
        jazzApproach: 'A Dorian over Am7, D Mixolydian over D7, G Ionian over GMaj7. Clean, correct, but sounds academic.',
        neoSoulApproach: 'Same scales BUT: approach A from G# or Bb, approach D from C# or Eb, approach G from F# or Ab. Every note has a chromatic "lean-in."'
      },

      why: 'The chromatic approaches create smooth voice leading and that characteristic "laid-back" sound. You\'re not hitting notes squarely—you\'re gliding into them. This is what makes Neo-Soul sound effortless and sophisticated.',

      vsJazz: 'Jazz improvisation emphasizes chord-scale relationships and bebop lines. Neo-Soul emphasizes FEEL—playing behind the beat, using space, and approaching notes chromatically for smoothness.',
      vsGospel: 'Gospel uses chromatic runs as energy and excitement. Neo-Soul uses chromatic approaches for smoothness and laid-back sophistication.'
    },

    scalesByChordType: {
      explanation: 'These scales provide the HARMONIC FRAMEWORK for Neo-Soul. But remember: you\'re not just "playing the scale." You\'re targeting chord tones and scale tones, approaching them chromatically.',

      minorSeventhChords: {
        title: 'For Minor 7 Chords (m7, m9, m11)',
        chordTypes: 'im7, iim7, vim7',
        character: 'Sophisticated minor, not sad—contemplative',
        whenToUse: 'Neo-Soul lives on minor 7 chords. This is home.',

        scales: [
          {
            name: 'Dorian Mode',
            formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
            description: 'THE Neo-Soul foundation. Minor with major 6th—sophisticated, not-quite-sad sound.',
            example: 'A Dorian over Am7: A - B - C - D - E - F# - G',
            chordTones: 'Root (A), Minor 3rd (C), Perfect 5th (E), Minor 7th (G)',
            availableTensions: '9th (B), 11th (D), 13th (F#)',
            sound: 'Smooth, jazzy minor. The major 6th (F#) is the signature Dorian color—adds brightness without losing minor quality.',
            usage: 'Default for Am7, Dm7, Em7 chords. D\'Angelo, Erykah Badu, Robert Glasper use this constantly.',
            neoSoulApproach: 'Target chord tones (A, C, E, G), approach each from half-step above or below. Play B → C (9th approaching 3rd). Play F# → G (13th approaching 7th).'
          },
          {
            name: 'Aeolian Mode (Natural Minor)',
            formula: '1 - 2 - b3 - 4 - 5 - b6 - b7',
            description: 'Darker than Dorian. Use when you want melancholy, introspective mood.',
            example: 'A Aeolian over Am7: A - B - C - D - E - F - G',
            chordTones: 'Root (A), Minor 3rd (C), Perfect 5th (E), Minor 7th (G)',
            availableTensions: '9th (B), 11th (D), b13th (F)',
            sound: 'Sad, darker. The b6 (F natural) creates a heavier, more emotional minor.',
            usage: 'When Neo-Soul gets introspective. Think late-night album cuts, not radio singles.',
            neoSoulApproach: 'Same chromatic approach concept. Glide into chord tones, use the b6 (F) for darker color.'
          }
        ]
      },

      dominantSeventhChords: {
        title: 'For Dominant 7 Chords (7, 9, 13)',
        chordTypes: 'V7, secondary dominants',
        character: 'Tension with sophistication',
        whenToUse: 'Neo-Soul dominant chords are EXTENDED—9ths and 13ths are standard',

        scales: [
          {
            name: 'Mixolydian Mode',
            formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
            description: 'Major with b7. The default dominant sound.',
            example: 'D Mixolydian over D7: D - E - F# - G - A - B - C',
            chordTones: 'Root (D), Major 3rd (F#), Perfect 5th (A), Minor 7th (C)',
            availableTensions: '9th (E), 13th (B)',
            sound: 'Bright dominant. The b7 creates tension that wants to resolve.',
            usage: 'Use on V7 chords. Neo-Soul extends this: D9, D13 are more common than plain D7.',
            neoSoulApproach: 'Play behind the beat. Approach the 3rd (F#) from F natural. Approach the 13th (B) from Bb or B from C. Let notes breathe—don\'t rush.'
          },
          {
            name: 'Mixolydian with b13',
            formula: '1 - 2 - 3 - 4 - 5 - b6 - b7',
            description: 'Mixolydian with flatted 6th. Creates darker, bluesier dominant color.',
            example: 'D Mixolydian b13 over D7: D - E - F# - G - A - Bb - C',
            chordTones: 'Root (D), Major 3rd (F#), Perfect 5th (A), Minor 7th (C)',
            alteredTension: 'b13 (Bb)',
            sound: 'Darker than regular Mixolydian. The b13 adds bluesy, soulful quality.',
            usage: 'Neo-Soul loves this color. D7b13 chord appears constantly. Creates gospel/blues hybrid sound.',
            neoSoulApproach: 'Emphasize the b13 (Bb) as you resolve. It creates that signature Neo-Soul "almost blues" quality.'
          }
        ]
      },

      majorSeventhChords: {
        title: 'For Major 7 Chords (Maj7, Maj9, Maj13)',
        chordTypes: 'IMaj7, IVMaj7',
        character: 'Resolved, peaceful, dreamy',
        whenToUse: 'Neo-Soul resolution points',

        scales: [
          {
            name: 'Ionian Mode (Major Scale)',
            formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
            description: 'Natural major. The "home" sound.',
            example: 'G Ionian over GMaj7: G - A - B - C - D - E - F#',
            chordTones: 'Root (G), Major 3rd (B), Perfect 5th (D), Major 7th (F#)',
            availableTensions: '9th (A), 13th (E)',
            sound: 'Bright, resolved, complete. This is "home" in Neo-Soul.',
            usage: 'Use on IMaj7 chords for resolution. But Neo-Soul often extends this: GMaj9 is more common than GMaj7.',
            neoSoulApproach: 'Approach the major 7 (F#) from F natural. This creates that signature smooth resolution. Play behind the beat—don\'t rush to land.'
          },
          {
            name: 'Lydian Mode',
            formula: '1 - 2 - 3 - #4 - 5 - 6 - 7',
            description: 'Ionian with raised 4th. Dreamy, floating major sound.',
            example: 'G Lydian over GMaj7: G - A - B - C# - D - E - F#',
            chordTones: 'Root (G), Major 3rd (B), Perfect 5th (D), Major 7th (F#)',
            availableTensions: '9th (A), #11 (C#)',
            sound: 'Ethereal, sophisticated. The #11 (C#) is the magic note—creates floating, dreamy quality.',
            usage: 'Robert Glasper, Kamasi Washington use this for color. Creates sophistication without tension.',
            neoSoulApproach: 'Emphasize the #11 (C#) as color tone. Approach it chromatically, let it ring.'
          }
        ]
      }
    },

    chromaticApproaches: {
      title: 'Chromatic Approach Tones: The Neo-Soul Secret',
      explanation: 'THIS is what makes Neo-Soul sound like Neo-Soul. You don\'t land directly on scale tones—you approach from a half-step above or below. This creates smooth voice leading and that laid-back, gliding feel.',

      howItWorks: {
        concept: 'Pick a target note (usually a chord tone). Play the note a half-step above or below it, THEN resolve to your target.',
        fromBelow: 'Approaching C: play B (half-step below), then resolve UP to C. Feels like a natural rise.',
        fromAbove: 'Approaching C: play Db (half-step above), then resolve DOWN to C. Feels like a gentle fall.',
        bothDirections: 'Enclosure: play Db (above) and B (below) in quick succession, THEN land on C. Bebop technique adapted for Neo-Soul.'
      },

      example: {
        progression: 'Am7 chord',
        chordTones: 'A (root), C (3rd), E (5th), G (7th)',
        approaches: [
          'Landing on C (3rd): approach from B (below) or Db (above)',
          'Landing on E (5th): approach from Eb (below) or F (above)',
          'Landing on G (7th): approach from F# (below) or Ab (above)'
        ],
        practice: 'Over Am7, play: [B → C], rest, [F# → G], rest, [G# → A], rest. Notice how every note is "leaned into."'
      },

      whyItWorks: 'The half-step creates EXPECTATION. Your ear hears the approach note and EXPECTS resolution. When you deliver it (especially behind the beat), it sounds inevitable and smooth. This is Neo-Soul voice leading.',

      vsBebop: 'Bebop uses chromatic approaches for SPEED and COMPLEXITY. Neo-Soul uses them for SMOOTHNESS and SPACE. Same technique, different feel.',

      vsGospel: 'Gospel uses chromatic RUNS (fast scalar passages). Neo-Soul uses chromatic APPROACHES (targeted half-steps before chord tones). More subtle, more laid-back.',

      practice: {
        step1: 'Pick a chord (Am7). Identify chord tones (A, C, E, G).',
        step2: 'For each chord tone, practice approaching from half-step below: [B → C], [D# → E], [F# → G], [G# → A].',
        step3: 'Practice approaching from half-step above: [Db → C], [F → E], [Ab → G], [Bb → A].',
        step4: 'Mix both directions. Improvise using ONLY chord tones and their chromatic approaches. This is Neo-Soul melody.',
        step5: 'Add space. Play a phrase, rest for 2 beats. Play behind the beat. Let each resolution breathe.'
      },

      mastery: 'When you can approach any chord tone from either direction instinctively, you have the Neo-Soul sound. The scales give you options, the chromatic approaches make it smooth, the space makes it Neo-Soul.'
    },

    practicalApplication: {
      title: 'How to Practice Neo-Soul Harmony',

      conceptualFramework: 'Neo-Soul combines chord-scale theory (jazz) with chromatic approaches (sophistication) and laid-back feel (hip-hop/gospel). It\'s not enough to know the scales—you must know how to GLIDE through them.',

      steps: [
        {
          step: 1,
          action: 'Learn the chord progression and identify chord types',
          example: 'Am7 - D7 - GMaj7 (minor 7, dominant 7, major 7)'
        },
        {
          step: 2,
          action: 'Match each chord to its scale',
          example: 'Am7 = A Dorian, D7 = D Mixolydian, GMaj7 = G Ionian'
        },
        {
          step: 3,
          action: 'Identify chord tones for each chord',
          example: 'Am7 (A-C-E-G), D7 (D-F#-A-C), GMaj7 (G-B-D-F#)'
        },
        {
          step: 4,
          action: 'Practice approaching each chord tone chromatically',
          example: 'For Am7: approach C from B or Db, approach E from Eb or F, approach G from F# or Ab'
        },
        {
          step: 5,
          action: 'Add space and play behind the beat',
          example: 'Play a phrase, rest for 1-2 beats. Don\'t rush. Neo-Soul breathes.'
        }
      ],

      exercises: {
        exercise1: 'Play chord tones as whole notes. Approach each one from half-step below. Feel the resolution.',
        exercise2: 'Same, but approach from half-step above. Notice the different feel.',
        exercise3: 'Improvise using ONLY chord tones and chromatic approaches. No other notes. Master this before adding scale tones.',
        exercise4: 'Add 9ths and 13ths (extensions). Approach these chromatically too.',
        exercise5: 'Play over a Neo-Soul backing track. Focus on SPACE—leave 2-4 beats of silence between phrases. Neo-Soul is what you DON\'T play.'
      },

      commonMistake: {
        problem: 'Playing scales without chromatic approaches—sounds like jazz, not Neo-Soul.',
        why: 'The scales are correct but the DELIVERY is wrong. Neo-Soul isn\'t about hitting scale tones cleanly—it\'s about gliding into them.',
        solution: 'Every important note (chord tones especially) should be approached chromatically. This creates the smooth, effortless Neo-Soul sound.',
        analogy: 'It\'s like singing. You don\'t jump between notes (operatic). You glide between notes (R&B). Same pitches, different delivery.'
      },

      keyInsight: 'Neo-Soul is FEEL over theory. You can know all the right scales and still sound wrong if you don\'t play behind the beat, use space, and approach notes smoothly. The theory gives you the map, but the feel is the destination.'
    },

    minorPentatonicChromaticApproach: {
      title: 'Minor Pentatonic + Chromatic Passing Tones',
      formula: '1 - b3 - 4 - 5 - b7 (plus chromatic approach tones)',
      description: 'The melodic foundation when you want simpler, more direct phrases. Five notes plus chromatic connectors.',
      example: 'In D: D - F - G - A - C (with chromatic approaches: D - C# - C - D, F - E - F, G - F# - G, etc.)',
      usage: 'Use this when you want to simplify. Five-note framework, approach any of them chromatically.',
      neoSoulTwist: 'Minor Pentatonic is blues-derived, but Neo-Soul approaches it differently: slower, more space, chromatic glides. Not "blues lick" but "Neo-Soul phrase."',
      practice: 'Play the 5 notes of minor pentatonic. Between each one, add chromatic approach. D → [C# → D], F → [E → F], G → [F# → G]. This is the Neo-Soul minor pentatonic.'
    },

    voicings: {
      title: 'Neo-Soul Chord Voicings',
      concept: 'Extended chords (9ths, 11ths, 13ths) are DEFAULT. Cluster voicings (close position) borrowed from gospel.',

      leftHand: 'Root + 7th (shell voicing). Or just root. Bass player often handles low end.',
      rightHand: '3rd + extensions clustered in close position. Play 3rd-7th-9th or 3rd-9th-13th within an octave.',

      example: {
        am9: 'Am9: LH = A + G (root and 7th). RH = C-E-B (3rd, 5th, 9th) clustered. Or C-B-E (3rd, 9th, 5th) for different voicing.',
        d9: 'D9: LH = D + C (root and 7th). RH = F#-A-E (3rd, 5th, 9th).',
        gmaj9: 'GMaj9: LH = G + F# (root and 7th). RH = B-D-A (3rd, 5th, 9th).'
      },

      space: 'Don\'t play constantly. Stab chords on backbeat (2 and 4), let them ring. Neo-Soul voicings are sparse, intentional.',
      influence: 'Robert Glasper, Chris Dave (drums), Pino Palladino (bass). Study how they leave SPACE. The silence is part of the voicing.'
    }
  },

  rhythm: {
    feel: {
      description: 'Neo-Soul groove is laid-back, behind-the-beat, with slight swing even in "straight" time. Hip-hop influenced—drums are programmed or played with quantized feel, but keys/bass play BEHIND the grid.',
      written: '4/4 time signature, but felt as relaxed, not rigid',
      behindTheBeat: 'Play melodies and chords slightly late—after the beat, not on it. This creates the "laid-back" feel. Drummers play on the beat, everyone else drags slightly.',
      important: 'This feel cannot be notated. Listen to D\'Angelo\'s "Voodoo," Erykah Badu\'s "Mama\'s Gun," Robert Glasper\'s "Black Radio." The groove is in how late you play.'
    },

    keys: {
      description: 'Neo-Soul keys are sparse, rhythmic punctuation. Not constant comping like jazz.',
      rhythm: 'Stab chords on backbeat (2 and 4), syncopated "ands." Leave space—play 4 chords per 8 bars, not 32.',
      voicings: 'Extended chords (9ths, 13ths), cluster voicings in right hand. Emphasize upper extensions for shimmer.',
      influence: 'Robert Glasper, James Poyser, Khari Mateen. Study their comping—minimal, intentional, behind the beat.'
    },

    guitar: {
      description: 'Neo-Soul guitar is often absent or minimal. When present: clean tone, chord stabs, rhythmic muting.',
      rhythm: 'Muted strumming on backbeat, sparse chord hits. Not constant strumming.',
      voicings: 'Jazz chords (9ths, 13ths, m7 shapes). Fingerstyle arpeggios for atmosphere.',
      influence: 'Isaiah Sharkey, Adam Deitch. Minimalist, rhythmic, space-conscious.'
    }
  },

  licks: [
    {
      name: 'The Chromatic Approach Phrase',
      description: 'The signature Neo-Soul lick. Target a chord tone, approach it from half-step below, resolve.',
      keys: 'Over Am7: Play B → C (approaching 3rd), then E (5th), then F# → G (approaching 7th). Slow, behind the beat.',
      guitar: 'Same concept. Target chord tones on higher strings, approach chromatically. Let notes ring, use space.',
      practice: 'Pick any chord. Play ONLY chord tones and their chromatic approaches. This is 90% of Neo-Soul melody.'
    },
    {
      name: 'The Laid-Back 9th',
      description: 'Play the 9th of the chord behind the beat, let it ring over the chord. Creates dreamy, extended sound.',
      keys: 'Over Am7 (A-C-E-G), play B (9th) late, hold it. Let it shimmer. Don\'t resolve immediately.',
      guitar: 'Hammer-on to the 9th, let it sustain. Creates that floating Neo-Soul color.',
      usage: 'Use on minor 7 and major 7 chords. The 9th is the Neo-Soul color tone.'
    },
    {
      name: 'The Gospel-Influenced Run',
      description: 'Quick chromatic descent to chord root. Borrowed from gospel but played LAZILY.',
      keys: 'Approaching Am7: G - F# - F - E - Eb - D - C# - C (chromatic walkdown to C, the 3rd of Am7).',
      guitar: 'Same concept, descending chromatic line. But play it SLOW, behind the beat. Gospel energy, Neo-Soul laziness.',
      usage: 'Use between chords for connection. Not flashy—functional and smooth.'
    }
  ],

  practice: {
    backingTracks: {
      search: '"Neo-Soul backing track" or "R&B jazz backing track"',
      listenFor: 'Hip-hop drums (programmed feel), walking or sparse bass, laid-back groove',
      recommended: '75-90 BPM (slow to medium). Neo-Soul is rarely fast.'
    },

    exercises: [
      '1. Learn Am7 - D7 - GMaj7 progression. Identify scales (A Dorian, D Mixolydian, G Ionian).',
      '2. Practice chord tones with chromatic approaches. Don\'t play scale runs—play targeted approaches.',
      '3. Record yourself playing a phrase. Listen back. Are you playing ON the beat or BEHIND it? Practice playing late.',
      '4. Play a phrase, rest for 2-4 beats. Repeat. Neo-Soul is about space—master the silence.',
      '5. Transcribe a D\'Angelo or Erykah Badu melody. Analyze: where are the chromatic approaches? How much space do they use?'
    ],

    songs: [
      { title: 'Untitled (How Does It Feel)', artist: 'D\'Angelo', focus: 'Laid-back groove, chromatic approaches in vocal melody, space between phrases. Quintessential Neo-Soul.' },
      { title: 'On & On', artist: 'Erykah Badu', focus: 'Hip-hop drums, jazz chords, smooth vocal delivery. Chromatic approaches in melody.' },
      { title: 'Afro Blue', artist: 'Robert Glasper Experiment', focus: 'Modal Neo-Soul, extended chords, cluster voicings. Jazz standard reimagined.' },
      { title: 'The Worst', artist: 'Jhené Aiko', focus: 'Modern Neo-Soul production, simple progression with extended chords, atmospheric.' },
      { title: 'Redbone', artist: 'Childish Gambino', focus: 'Funk-influenced Neo-Soul, chromatic bass line, extended vocal melodies.' }
    ],

    progressionPath: [
      { level: 'Beginner', goal: 'Learn Dorian mode and understand chromatic approaches. Practice approaching chord tones from half-step above/below. Master the "laid-back" feel by playing behind the beat.' },
      { level: 'Intermediate', goal: 'Master Am7-D7-GMaj7 progression with chromatic approaches in all positions. Learn cluster voicings (extended chords in close position). Understand when to use space vs. when to play.' },
      { level: 'Advanced', goal: 'Improvise over complex Neo-Soul progressions (Glasper-style). Use Lydian, Phrygian for color. Master the "invisible" technique—sophisticated harmony with minimal notes.' }
    ],

    commonMistakes: [
      '❌ Playing on the beat instead of behind it (sounds stiff, not Neo-Soul)',
      '❌ Playing too many notes—Neo-Soul is minimal, space is part of the sound',
      '❌ Using scales without chromatic approaches (sounds like jazz, not Neo-Soul)',
      '❌ Playing triads instead of extended chords (sounds too simple—Neo-Soul requires 9ths, 11ths, 13ths)',
      '❌ Ignoring the groove—Neo-Soul is FEEL first, theory second',
      '❌ Not listening to the genre—you must absorb the aesthetic by listening to D\'Angelo, Erykah Badu, Robert Glasper',
      '❌ Rushing resolutions—let chromatic approaches breathe, don\'t rush to the target note'
    ]
  }
}
