// Restructured Jazz Theory Section
// Implements chord-scale relationship model with pedagogical clarity

'Jazz': {
  theory: {
    overview: 'Jazz is built on harmonic sophistication and conversational melody. The ii-V-I progression is the foundation. Extended chords (7ths, 9ths, 11ths, 13ths) are essential. The language is chord-scale relationships—different scales for different chords, not one scale for the whole song.',

    chordScaleRelationships: {
      title: 'Chord-Scale Theory: The Jazz System',
      explanation: 'Unlike Blues or Rock (where one scale works over the entire progression), Jazz uses DIFFERENT SCALES for DIFFERENT CHORD TYPES. The scale you improvise with must match the chord sounding underneath at that moment.',

      example: {
        progression: 'ii-V-I in C Major',
        chords: 'Dm7 → G7 → CMaj7',
        scales: 'D Dorian → G Mixolydian → C Ionian',
        breakdown: 'Three chords, three different scales, three different roots. You switch scales as the chord changes.'
      },

      why: 'Each scale contains the chord tones (1-3-5-7) PLUS the available tensions (9, 11, 13) for that specific chord type. This creates melodic color while staying harmonically connected.',

      vsBluesRock: 'Blues uses minor pentatonic over everything—one unified sound. Rock uses pentatonic over power chords—freedom through ambiguity. Jazz tracks the harmony closely—sophistication through chord-awareness.',

      practiceApproach: 'Don\'t think "I\'m in the key of C." Think "This chord is Dm7, I use D Dorian. Now it\'s G7, I switch to G Mixolydian." Your melodic choices change with each chord.'
    },

    scalesByChordType: {
      explanation: 'Here are the jazz scales organized by CHORD TYPE. When you see a chord, find its type below, then play the corresponding scale from that chord\'s ROOT.',

      majorSeventhChords: {
        title: 'For Major 7 Chords (Maj7, Maj9, Maj13)',
        chordTypes: 'IMaj7, IVMaj7',
        character: 'Stable, resolved, "home" feeling',
        whenToUse: 'When a Major 7 chord is sounding (CMaj7, FMaj7 in the key of C)',

        scales: [
          {
            name: 'Ionian Mode (Major Scale)',
            formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
            description: 'The default choice for Major 7 chords. Natural, consonant major sound.',
            example: 'C Ionian over CMaj7: C - D - E - F - G - A - B',
            chordTones: 'Root (C), Major 3rd (E), Perfect 5th (G), Major 7th (B)',
            availableTensions: '9th (D), 11th (F, use sparingly—can clash with 3rd), 13th (A)',
            sound: 'Bright, consonant, "pretty." The safe choice for Major 7.',
            usage: 'Use on IMaj7 in major keys. Bill Evans, Oscar Peterson use this constantly.'
          },
          {
            name: 'Lydian Mode',
            formula: '1 - 2 - 3 - #4 - 5 - 6 - 7',
            description: 'Ionian with raised 4th. Brighter, dreamier than Ionian.',
            example: 'F Lydian over FMaj7: F - G - A - B - C - D - E',
            chordTones: 'Root (F), Major 3rd (A), Perfect 5th (C), Major 7th (E)',
            availableTensions: '9th (G), #11th (B, the magic note), 13th (D)',
            sound: 'Floating, ethereal, sophisticated. The #11 creates a distinctive bright color.',
            usage: 'Common on IVMaj7 chords. Creates lift and space. Herbie Hancock, Chick Corea use this for color.',
            why: 'The natural 11 (4th) sits a half-step above the 3rd, creating dissonance. Raising it to #11 solves the clash and adds sparkle.'
          }
        ]
      },

      minorSeventhChords: {
        title: 'For Minor 7 Chords (m7, m9, m11)',
        chordTypes: 'iim7, iiim7, vim7',
        character: 'Transitional, moving toward resolution',
        whenToUse: 'When a minor 7 chord is sounding (Dm7, Em7, Am7 in the key of C)',

        scales: [
          {
            name: 'Dorian Mode',
            formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
            description: 'THE default mode for jazz minor 7 chords. Minor scale with major 6th—sophisticated, not dark.',
            example: 'D Dorian over Dm7: D - E - F - G - A - B - C',
            chordTones: 'Root (D), Minor 3rd (F), Perfect 5th (A), Minor 7th (C)',
            availableTensions: '9th (E), 11th (G), 13th (B)',
            sound: 'Smooth, jazzy minor. The major 6th (B over D) is the characteristic Dorian color—not sad, sophisticated.',
            usage: 'Default for iim7 chords in ii-V-I. Every jazz standard uses this. Miles Davis, John Coltrane, Bill Evans.',
            why: 'Natural minor has b6, which sounds too dark for jazz. Dorian\'s major 6th fits the sophisticated minor sound jazz needs.',
            compare: 'Natural Minor (Aeolian) has b6 and sounds darker. Dorian has natural 6 and sounds "jazzy."'
          },
          {
            name: 'Aeolian Mode (Natural Minor)',
            formula: '1 - 2 - b3 - 4 - 5 - b6 - b7',
            description: 'Darker than Dorian due to b6. Use for vim7 or when you want a sadder minor color.',
            example: 'A Aeolian over Am7: A - B - C - D - E - F - G',
            chordTones: 'Root (A), Minor 3rd (C), Perfect 5th (E), Minor 7th (G)',
            availableTensions: '9th (B), 11th (D), b13th (F)',
            sound: 'Melancholic, darker than Dorian. The b6 (F over A) creates a sad, unresolved quality.',
            usage: 'Use on vim7 when you want more emotional weight. Or on minor tunes in minor keys.',
            when: 'Dorian for iim7 (transitional). Aeolian for vim7 or minor key center (final).'
          }
        ]
      },

      dominantSeventhChords: {
        title: 'For Dominant 7 Chords (7, 9, 13, 7alt)',
        chordTypes: 'V7, secondary dominants (V7/ii, V7/vi)',
        character: 'Tension, wanting to resolve',
        whenToUse: 'When a dominant 7 chord is sounding (G7 in the key of C, or secondary dominants like A7, E7)',

        scales: [
          {
            name: 'Mixolydian Mode',
            formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
            description: 'Major scale with b7. The basic dominant sound.',
            example: 'G Mixolydian over G7: G - A - B - C - D - E - F',
            chordTones: 'Root (G), Major 3rd (B), Perfect 5th (D), Minor 7th (F)',
            availableTensions: '9th (A), 13th (E)',
            sound: 'Bright dominant. The b7 (F) creates the characteristic dominant tension without extra color.',
            usage: 'Default for V7 chords. Clean, straightforward dominant sound. Every jazz player starts here.',
            tritone: 'The 3rd (B) and b7 (F) form a tritone—3 whole steps, extremely dissonant. This interval wants to resolve and defines dominant function.',
            avoid: 'Avoid the 11th (C) on dominant chords—it clashes with the 3rd (B). Either omit it or raise it to #11.'
          },
          {
            name: 'Bebop Dominant Scale',
            formula: '1 - 2 - 3 - 4 - 5 - 6 - b7 - 7',
            description: 'Mixolydian + chromatic passing tone (major 7). Eight notes align chord tones with downbeats when playing eighth notes.',
            example: 'G Bebop Dominant over G7: G - A - B - C - D - E - F - F# (or G - A - B - C - D - E - F - G♭ descending)',
            chordTones: 'Root (G), Major 3rd (B), Perfect 5th (D), Minor 7th (F)',
            availableTensions: '9th (A), 13th (E)',
            chromatic: 'Major 7 (F#) or b7 (Gb descending) acts as passing tone',
            sound: 'Smooth, flowing lines with chord tones landing on strong beats.',
            usage: 'Charlie Parker, Dizzy Gillespie bebop lines. The 8-note structure means chord tones land on beats 1,2,3,4 when playing continuous eighth notes.',
            why: 'Seven-note scales cause chord tones to drift across beat boundaries in eighth-note lines. Eight notes = chord tones align with beats = cleaner phrasing.',
            practice: 'Play ascending: G-A-B-C-D-E-F-F#-G. Play descending: G-F-E-D-C-B-A-G. Chord tones (G,B,D,F) now land on beats.'
          },
          {
            name: 'Altered Scale (Super Locrian)',
            formula: '1 - b9 - #9 - 3 - b5 - #5 - b7',
            description: 'Maximum tension scale. Every extension is altered (b9, #9, b5/b13, #5/#11). Use on V7alt chords.',
            example: 'G Altered over G7alt: G - Ab - A# - B - Db - Eb - F',
            chordTones: 'Root (G), Major 3rd (B), Minor 7th (F)',
            alteredTensions: 'b9 (Ab), #9 (A#/Bb), b5/#11 (Db), #5/b13 (Eb)',
            sound: 'Dissonant, tense, "outside." Creates maximum instability before resolution.',
            usage: 'Modern jazz, bebop, when V7 chord is marked "alt" or when you want maximum tension. John Coltrane, McCoy Tyner.',
            when: 'Use when the chord chart says "G7alt" or "G7#5" or "G7b9". Don\'t use on regular V7—save for maximum drama.',
            resolution: 'The altered tensions resolve beautifully: b9 (Ab) down to 5 (G on CMaj7), #5 (Eb) down to 3 (E on CMaj7).'
          },
          {
            name: 'Whole Tone Scale',
            formula: '1 - 2 - 3 - #4 - #5 - b7',
            description: 'Symmetrical scale—all whole steps. Creates floating, ambiguous sound. Use on V7 with #5 or augmented chords.',
            example: 'G Whole Tone over G7#5: G - A - B - C# - D# - F',
            chordTones: 'Root (G), Major 3rd (B), Minor 7th (F)',
            alteredTensions: '#4/#11 (C#), #5/b13 (D#/Eb)',
            sound: 'Dreamy, floating, no tonal center. Feels unresolved and spacey.',
            usage: 'Impressionistic jazz, Debussy-influenced. Herbie Hancock, Bill Evans on augmented chords.',
            when: 'Use when you see G7#5, G+, Gaug. Or for color on regular V7 when you want "out" sound.',
            unique: 'Only 2 whole tone scales exist (one starting on C, one on Db). All others are transpositions.'
          }
        ]
      },

      halfDiminishedChords: {
        title: 'For Half-Diminished Chords (m7b5, ø7)',
        chordTypes: 'iim7b5 (in minor keys), viiø7',
        character: 'Fragile, unstable, leading to resolution',
        whenToUse: 'In minor ii-V-i progressions, or on viiø7 chords',

        scales: [
          {
            name: 'Locrian Mode',
            formula: '1 - b2 - b3 - 4 - b5 - b6 - b7',
            description: 'The most unstable mode. Minor 3rd and flat 5—defines half-diminished quality.',
            example: 'B Locrian over Bm7b5: B - C - D - E - F - G - A',
            chordTones: 'Root (B), Minor 3rd (D), Diminished 5th (F), Minor 7th (A)',
            availableTensions: 'b9 (C), 11th (E), b13 (G)',
            sound: 'Dark, tense, unstable. Every interval wants to resolve.',
            usage: 'Use on iim7b5 in minor ii-V-i. Bm7b5 → E7alt → Am in key of A minor.',
            when: 'Anytime you see m7b5 or ø7 symbol. Less common than Dorian (major key ii) but essential for minor keys.'
          }
        ]
      }
    },

    practicalApplication: {
      title: 'How to Practice Chord-Scale Theory',

      conceptualFramework: 'Chord-scale theory sounds complex but it\'s simple: know the chord, know the root, play the corresponding scale from that root. The progression tells you which chord. The chord type tells you which scale. The scale gives you note choices.',

      steps: [
        {
          step: 1,
          action: 'Learn the chord progression',
          example: 'In C: Dm7 - G7 - CMaj7 (ii-V-I)'
        },
        {
          step: 2,
          action: 'Identify each chord\'s root and type',
          example: 'Dm7 (minor 7), G7 (dominant 7), CMaj7 (major 7)'
        },
        {
          step: 3,
          action: 'Match each chord to its scale',
          example: 'Dm7 = D Dorian, G7 = G Mixolydian, CMaj7 = C Ionian'
        },
        {
          step: 4,
          action: 'Practice playing each scale from its root',
          example: 'D Dorian (D-E-F-G-A-B-C), G Mixolydian (G-A-B-C-D-E-F), C Ionian (C-D-E-F-G-A-B)'
        },
        {
          step: 5,
          action: 'Switch scales as chords change',
          example: 'Play D Dorian while Dm7 sounds, switch to G Mixolydian when G7 hits, switch to C Ionian when CMaj7 arrives'
        }
      ],

      exercises: {
        exercise1: 'Play each scale as whole notes (1 scale per chord). Hear how each scale "fits" its chord.',
        exercise2: 'Play chord tones (1-3-5-7) as quarter notes. Add scale tones between chord tones.',
        exercise3: 'Improvise freely, switching scales with each chord. Start simple—just hit the root on each change.',
        exercise4: 'Learn ii-V-I in all 12 keys. Master this progression everywhere on your instrument.'
      },

      commonMistake: {
        problem: 'Playing C major scale over the entire ii-V-I because "it\'s in the key of C."',
        why: 'Technically correct (all modes come from C major) but sounds generic. You\'re not "wrong" but you\'re missing harmonic color.',
        solution: 'Use chord-specific scales. D Dorian emphasizes D-F-A-C (Dm7 chord tones). G Mixolydian emphasizes G-B-D-F (G7 chord tones). Creates melodic interest and harmonic awareness.',
        analogy: 'It\'s like having a 64-color crayon box but only using "blue" instead of "navy," "cerulean," "azure." Chord-scales give you the full palette.'
      },

      keyInsight: 'All these modes come from the same parent major scale (D Dorian, G Mixolydian, C Ionian are all from C major). But thinking "chord-scale" instead of "key" makes you aware of which notes are chord tones and which are tensions. That awareness creates sophisticated, harmonically-connected melodies.'
    },

    guideTones: {
      title: 'Guide Tones: The Secret to Smooth Jazz Lines',
      explanation: 'Guide tones are the 3rd and 7th of each chord. These two notes define the chord quality (major vs minor, major 7 vs dominant 7) and create the strongest voice leading.',

      why: 'Root and 5th are stable but don\'t define quality. 3rd says major or minor. 7th says major 7 or dominant 7. Together, they tell you everything.',

      voiceLeading: 'Guide tones move by step between chords in ii-V-I progressions. This creates smooth, connected lines.',

      example: {
        progression: 'Dm7 → G7 → CMaj7',
        dm7GuideTones: 'F (3rd), C (7th)',
        g7GuideTones: 'B (3rd), F (7th)',
        cmaj7GuideTones: 'E (3rd), B (7th)',
        movement: 'F-C (Dm7) → B-F (G7) → E-B (CMaj7). Notice: C stays as common tone to F, then F moves to E (half-step), B stays as common tone.'
      },

      practice: {
        exercise: 'Play only guide tones over ii-V-I backing tracks. Alternate 3rd and 7th, or play both together. Hear how they define the progression.',
        nextStep: 'Add chord roots. Now you have 1-3-7 (shell voicing). Add scale tones between to create melodies.',
        mastery: 'Great jazz lines ALWAYS hit guide tones on strong beats. The rest is decoration.'
      },

      bebopSecret: 'Charlie Parker and Dizzy Gillespie built bebop lines by outlining guide tones with chromatic approaches. Fast lines = guide tones + chromatic passing tones. Slow it down and you\'ll see 3rds and 7ths on downbeats.'
    }
  },

  rhythm: {
    feel: {
      description: 'Jazz swing—the pulse is written as straight eighth notes but FELT as triplets. The "and" lags behind, creating forward momentum.',
      written: '4/4 time signature',
      important: 'Swing is feel-based, learned by listening to recordings. Can\'t be perfectly notated.',
      ratio: 'Rough ratio: 2:1 triplet feel (long-short, long-short). But mature swing is more subtle than strict triplets.'
    },

    comping: {
      description: 'Jazz comping (accompanying) is rhythmic punctuation, not constant chords. Leave space.',
      when: 'Play on beats 2 and 4 (backbeat), syncopated "and"s, phrase endings. Don\'t play on every beat.',
      voicings: 'Use rootless voicings (left hand plays 3rd and 7th, no root). Bass player covers roots.',
      listen: 'Comp responds to the soloist. Play less when they play more. Answer phrases with punctuation.'
    }
  },

  licks: [
    {
      name: 'The ii-V-I Bebop Line',
      description: 'The most important lick in jazz. Guide tones with chromatic approaches.',
      keys: 'In C: Dm7 (F-E-D-C#) → G7 (B-Bb-A-G#) → CMaj7 (E-D-C#-B). Targets guide tones (F,C on Dm7; B,F on G7; E,B on CMaj7), approaches chromatically.',
      guitar: 'Same concept: target 3rds and 7ths, approach from half-step below. Classic bebop sound.',
      practice: 'Learn in all 12 keys. This one lick unlocks hundreds of jazz standards.'
    },
    {
      name: 'Enclosure (Bebop Surround)',
      description: 'Approach a target note from a half-step above AND below, then land on it.',
      keys: 'Targeting E (3rd of CMaj7): play F (above), D# (below), then E. Creates bebop chromaticism.',
      guitar: 'Same technique. Surround chord tones with chromatic neighbors. Instant bebop vocabulary.',
      usage: 'Use on chord tones, especially 3rds and 7ths. Makes any melody sound like bebop.'
    },
    {
      name: '1-2-3-5 Pattern',
      description: 'Major scale pattern that outlines triads. Smooth, melodic, classic jazz sound.',
      keys: 'In C: C-D-E-G (1-2-3-5). Then continue: D-E-F-A, E-F-G-B, etc. Diatonic, smooth.',
      guitar: 'Same concept: ascend in 1-2-3-5 patterns through the scale. Oscar Peterson, Bud Powell used this.',
      usage: 'Great for building lines that imply triads without playing chords. Melodic and harmonic simultaneously.'
    }
  ],

  practice: {
    backingTracks: {
      search: '"Jazz ii-V-I backing track" or jazz standards by name ("Autumn Leaves backing track")',
      listenFor: 'Walking bass, swinging hi-hat, clear chord changes every 2-4 bars',
      recommended: '120 BPM (medium swing), 200+ BPM (bebop/fast), 60-80 BPM (ballad)'
    },

    exercises: [
      '1. Learn ii-V-I in all 12 keys with proper chord-scales (D Dorian, G Mixolydian, C Ionian in key of C).',
      '2. Practice guide tones (3rds and 7ths) over ii-V-I. Play them as whole notes, then quarter notes, then embellish.',
      '3. Learn bebop enclosure technique: surround target notes with chromatic approaches.',
      '4. Learn three jazz standards (Autumn Leaves, All the Things You Are, Blue Bossa). Master the chord-scale choices.',
      '5. Transcribe a solo from a recording (Miles Davis, John Coltrane). Analyze which scales they use over which chords.'
    ],

    songs: [
      { title: 'Autumn Leaves', artist: 'Bill Evans / Miles Davis', focus: 'Classic ii-V-I progression in two keys (G minor, E minor). Perfect for practicing Dorian and Mixolydian.' },
      { title: 'All the Things You Are', artist: 'Charlie Parker / Ella Fitzgerald', focus: 'Complex key modulations, multiple ii-V-I progressions. Advanced chord-scale practice.' },
      { title: 'So What', artist: 'Miles Davis', focus: 'Modal jazz—stays on Dm7 for 16 bars (D Dorian), then Ebm7 for 8 bars. Teaches modal playing.' },
      { title: 'Blue Bossa', artist: 'Joe Henderson', focus: 'Latin jazz, minor ii-V-i. Introduces half-diminished (Locrian) and altered dominant scales.' },
      { title: 'Tune Up', artist: 'Miles Davis', focus: 'Three ii-V-I progressions in three keys. Perfect for practicing chord-scale shifts.' }
    ],

    progressionPath: [
      { level: 'Beginner', goal: 'Learn ii-V-I in C major with proper scales (D Dorian, G Mixolydian, C Ionian). Understand guide tones (3rd and 7th). Learn 3 simple standards (Autumn Leaves, Blue Bossa, C Jam Blues).' },
      { level: 'Intermediate', goal: 'Master ii-V-I in all 12 keys. Learn bebop enclosures and chromatic approaches. Understand altered dominants (V7alt). Play 10 standards with confident chord-scale choices.' },
      { level: 'Advanced', goal: 'Improvise over complex changes (All the Things You Are, Giant Steps). Use Lydian, Altered, and Whole Tone scales for color. Play rootless voicings while comping. Transcribe and analyze solos.' }
    ],

    commonMistakes: [
      '❌ Playing C major scale over ii-V-I in C instead of using D Dorian, G Mixolydian, C Ionian (misses harmonic color)',
      '❌ Playing straight eighths instead of swinging (sounds stiff and un-jazzy)',
      '❌ Ignoring guide tones (3rds and 7ths)—lines sound directionless',
      '❌ Comping too much—leave space for the soloist',
      '❌ Not listening to recordings—jazz is an aural tradition, you must listen to learn the language',
      '❌ Trying to learn complex scales (Altered, Whole Tone) before mastering basic modes (Dorian, Mixolydian, Ionian)',
      '❌ Practicing scales without connecting them to actual chord progressions—scales are useless in isolation'
    ]
  }
}
