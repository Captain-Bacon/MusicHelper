export const rnbContent = {
'R&B': {
  theory: {
    overview: 'Contemporary R&B is built on smooth extended chords, sophisticated voice leading, and soulful syncopation. Where Gospel moves constantly and Blues stays grounded, R&B floats in the space between—rich major7ths and minor9ths create sophistication, while syncopated rhythms and melismatic phrasing keep it grounded and human. It borrows Gospel\'s harmonic depth, Blues\' emotional rawness, and Jazz\'s chord extensions, then wraps it all in production aesthetics and modern groove sensibility.',

    scales: [
      {
        name: 'Dorian Mode',
        formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
        description: 'The R&B scale. Minor with a major 6th. Sounds sophisticated but approachable—not too dark (natural minor) but not too bright (major). Use over minor7 chords. The b3-6 combination creates that mellow, soulful sound.',
        example: 'In A: A - B - C - D - E - F# - G'
      },
      {
        name: 'Minor Pentatonic Scale',
        formula: '1 - b3 - 4 - 5 - b7',
        description: 'Inherited from Blues. Use for vocal runs and licks. Works over dominant and minor chords. Add chromatic passing tones for modern R&B flavor.',
        example: 'In A: A - C - D - E - G'
      },
      {
        name: 'Mixolydian Mode',
        formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
        description: 'Major with a b7. Use over dominant7th chords and vamp sections. Creates that "almost resolved" feeling that defines R&B groove sections.',
        example: 'In A: A - B - C# - D - E - F# - G'
      },
      {
        name: 'Blues Scale (Chromatic R&B Version)',
        formula: '1 - b3 - 4 - b5 - 5 - b7',
        description: 'The classic blues scale, but in R&B context use it for edgy vocal runs and bent notes. Add chromatic approach notes around the b5 and b7 for contemporary R&B texture.',
        example: 'In A: A - C - D - Eb - E - G'
      }
    ],

    chromaticInfluence: {
      title: 'Chromaticism: The R&B Signature',
      explanation: 'R&B vocals move chromatically between chord tones. Unlike Blues (which bends) or Gospel (which walks), R&B slides and approaches notes from half-step above or below. This creates vocal-influenced melodic lines.',
      example: 'In C: playing CMaj7, the vocal might sing C-B-C (approach from below), or E-F-E (approach 3rd from above). These aren\'t errors—they\'re the grammar of R&B.',
      why: 'R&B sounds like a person singing, not an instrument playing scales. Chromatic approach notes sound natural and conversational. This is why Usher, SZA, and H.E.R. sound effortless—they\'re using chromatic voice leading inherited from Jazz and refined by modern production.'
    },

    chordConstruction: {
      description: 'R&B chords are extended by DEFAULT (like Gospel) but with different color priorities. Major7ths are common (not dominant7ths like Blues). Extended chords (9ths, 11ths, 13ths) create lushness. Alterations (#5, b9, #11) add sophistication.',

      triads: {
        explanation: 'Start with basic major and minor triads (1-3-5), but bare triads sound empty in R&B. Always add extensions.',
        formula: '1 - 3 - 5',
        example: 'C major triad = C-E-G (but play CMaj9 instead)'
      },

      seventh: {
        explanation: 'The 7th is ALWAYS there. This is non-negotiable in contemporary R&B.',
        major7th: {
          formula: '1 - 3 - 5 - 7',
          example: 'CMaj7 = C-E-G-B. Warm, sophisticated, "home" chord.',
          sound: 'Resolved, peaceful, beautiful. Use on I chords and stable moments.',
          character: 'This is the Alicia Keys sound—CMaj7 chord with extended voicings.'
        },
        minor7th: {
          formula: '1 - b3 - 5 - b7',
          example: 'Am7 = A-C-E-G. Mellow, transitional, sets up movement.',
          sound: 'Floaty, not quite resolved. Use on ii, iii, vi chords and vamp sections.',
          character: 'The foundation of R&B grooves. Soft and inviting.'
        },
        dominant7th: {
          formula: '1 - 3 - 5 - b7',
          example: 'G7 = G-B-D-F. Tense, wants to resolve but R&B doesn\'t always let it.',
          sound: 'Slightly edgy, creates forward motion.',
          usage: 'Less common than Blues. In R&B, use on V chords and to create tension before resolution.'
        }
      },

      extensions: {
        whatTheyAre: 'Notes beyond the 7th. In R&B, extensions are NOT fancy—they\'re essential. CMaj7 without a 9th sounds incomplete.',
        naming: '9th = 2nd octave up, 11th = 4th octave up, 13th = 6th octave up. Play them in close position (cluster voicings), not an octave higher.',
        common: [
          { interval: '9th', description: 'On EVERYTHING. CMaj9, Am9, Dm9. Adds shimmer and sophistication. This IS the R&B sound.' },
          { interval: '11th', description: 'Often raised to #11 on Major7 chords (CMaj7#11). Adds open, suspended quality. Jazzy and modern.' },
          { interval: '13th', description: 'The richest extension. CMaj13 (C-E-G-B-D-A). Creates lush, expensive sound. Very common in R&B production.' }
        ],
        inPractice: 'Build chords from the bottom up: Root + 7th (left hand anchor), then 3rd + extensions clustered in right hand. Example: CMaj9 = LH: C+B, RH: D-E-G (9th, 3rd, 5th tight). The 9th and 3rd together create shimmer.'
      },

      alterations: {
        description: 'Modify extensions for color and tension. #5, b5, #11, b9 create sophisticated, modern sound.',
        common: [
          { interval: '#5 (sharp 5)', usage: 'On Major7 chords: CMaj7#5 (C-E-G#-B). Sounds bright, augmented. Use for emotional peaks or key changes.' },
          { interval: 'b9 (flat 9)', usage: 'On dominant chords: G7b9 (G-B-D-F-Ab). Tense, edgy. R&B uses this less than Gospel, but it appears in contemporary production.' },
          { interval: '#11 (sharp 11)', usage: 'On Major7 chords: CMaj7#11 (C-E-G-B-F#). Open, suspended sound. Very Alicia Keys, very modern.' }
        ]
      }
    },

    voicings: {
      title: 'R&B Chord Voicings: The Art of Richness',

      pianoVoicings: {
        shellFoundation: {
          concept: 'Left hand = root + 7th (the shell that defines the chord quality)',
          major7th: 'Left hand: root + major 7th (C + B for CMaj7). Creates the "home" feeling.',
          minor7th: 'Left hand: root + b7 (A + G for Am7). Creates the mellow, floating feeling.',
          rightHand: 'Right hand: 3rd + 9th + 13th (or 9th + 3rd + 5th). Cluster tight, within an octave.'
        },

        example: {
          CMaj9: 'Left hand: C (low) + B. Right hand: D-E-G (9th, 3rd, 5th) tight together in mid-register. The D-E create a 2nd interval (tight, shimmer-y).',
          Am9: 'Left hand: A + G. Right hand: B-C-E (9th, 3rd, 5th) or C-E-B depending on voice leading.',
          Dm9: 'Left hand: D + C. Right hand: E-F-A (9th, 3rd, 5th). Mellow and forward-moving.'
        },

        voiceLeading: {
          description: 'Move from one chord to the next with MINIMAL motion. This is the essence of R&B smoothness.',
          example: 'CMaj9 (C-B / D-E-G) → Am9 (A-G / B-C-E). From first chord to second: C moves to A (down 3rd), B stays as B (now the 9th of Am9), D moves to E, E stays, G moves to C. Each note moves by step or stays put. Smooth.',
          why: 'This is why Alicia Keys and Chris Brown progressions sound effortless. Voice leading makes the chord progression feel like a single, flowing melody rather than static stacked chords.'
        }
      },

      guitarVoicings: {
        voicingStrategy: 'Spread chords across 6 strings for rich sound. Use open strings where possible for resonance and ease.',

        maj7Shapes: {
          description: 'Major7 chords dominate R&B. Learn them in multiple positions.',
          open: 'Open position shapes (use open strings). Easiest for beginners.',
          moveable: 'Barre shapes that move across the fretboard. More control over voicing.',
          extensions: 'Add the 9th (or 2nd) by finding where it sits in your chord shape or adjacent strings.'
        },

        rhythmTechnique: {
          strumming: 'R&B guitar is percussive but sparse. Hit specific strings to voice the chord, mute between.',
          chordStabs: 'Staccato hits on beats 2 and 4 (the backbeat). Creates pocket with drums.',
          fills: 'Fill space between vocal phrases with single-note lines or small arpeggios. Use Dorian mode or minor pentatonic + chromatic passing tones.',
          fingerpicking: 'Fingerpick arpeggios instead of strumming. Creates sophisticated, intimate texture. Very common in contemporary R&B.'
        }
      }
    },

    progressions: {
      title: 'R&B Harmonic Movement',
      description: 'R&B progressions are sophisticated but grounded. They move constantly (like Gospel) but land on Major7 (not dominant 7 like Blues).',

      iiVI: {
        name: 'ii7 → V7 → IMaj7 (The Foundation)',
        formula: 'ii7 → V7 → IMaj7',
        inC: 'Dm7 → G7 → CMaj7',
        why: 'Fundamental progression. Creates strong sense of resolution.',
        rnbTwist: 'Make it Dm9 → G7#11 → CMaj9. The #11 on V7 sounds sophisticated and modern.'
      },

      iVIIVi: {
        name: 'I-vi-IV-V (Modern R&B Pop)',
        formula: 'IMaj7 → VIMaj7 → IVMaj7 → V7',
        inC: 'CMaj7 → AMaj7 → FMaj7 → G7',
        why: 'Modern, accessible, memorable. Very common in contemporary R&B and soul.'
      }
    }
  },

  rhythm: {
    feel: {
      description: 'R&B lives in POCKET. The beat sits behind the click, creating space and intimacy. Modern R&B grooves use triplet subdivisions and 16th-note precision.',
      written: '4/4 time signature',
      pocket: 'The groove sits JUST BEHIND the beat, not on it, not early. This separates great R&B from generic pop.',
      backbeat: 'Beats 2 and 4 are crucial (backbeat), but the snare sits behind the grid.'
    },

    keys: {
      comping: 'Sparse, syncopated hits. Play on beat 1, hit on "and" of 2, rest on 3, hit beat 4. Leave space.',
      voiceLeading: 'Smooth movement between chords. Each note moves by step (or stays put). No big jumps.',
      runs: 'Chromatic runs between phrases. Use major scale + chromatic passing tones.'
    },

    guitar: {
      stabs: 'Short, staccato chord hits on 2 and 4. Creates pocket.',
      fingerpicking: 'Fingerpick arpeggios between vocal phrases. Intimate and sophisticated.',
      fills: 'Small scale runs between vocal lines. Leave space.'
    }
  },

  licks: [
    {
      name: 'The Chromatic Approach (Half-Step Glide)',
      description: 'Approach the target note from a half-step above or below. The signature R&B vocal move.',
      keys: 'Playing C (root of CMaj7), approach from above: B-C (half-step slide). Or from below: D-C.',
      guitar: 'Slide a half-step into the target note. In C: to land on E (the 3rd), slide from F down to E.'
    },
    {
      name: 'The Melisma (Vocal-Style Run)',
      description: 'Multiple notes on a single syllable. Signature Alicia Keys, Usher, SZA move.',
      keys: 'Quick chromatic or scalar run (4-6 notes) on one chord. C scale: C-D-E-F-E-D.',
      guitar: 'Fingerpicked scale run on one string. Use Dorian mode or minor pentatonic + chromatic passing tones.'
    },
    {
      name: 'The 3-to-1 Chromatic Walkdown (Gospel-Influenced)',
      description: 'Chromatic descent from 3rd to root (four separate notes, not a slide). Inherited from Gospel but used differently in R&B.',
      keys: 'In C: E-Eb-D-C (fast). Four distinct notes played chromatically. R&B plays it with space—not every phrase ending.',
      guitar: 'Play four chromatic notes descending from 3rd to root on a single string. E-Eb-D-C. Smooth and soulful.'
    },
    {
      name: 'The Dorian Lick (Minor 6th Interval)',
      description: 'Play the characteristic 6th interval of Dorian mode. Sounds jazzy and soulful.',
      keys: 'In A Dorian: Play A (root), jump to F# (the 6th). Very sophisticated.',
      guitar: 'Same intervallic approach. Creates open, sophisticated Dorian sound.'
    },
    {
      name: 'The Bent 3rd (Blues Influence)',
      description: 'Bend the b3 up to major 3rd. Brings Blues sensibility into R&B context.',
      keys: 'Play Eb, bend up to E. Use for emotional emphasis, not on every lick.',
      guitar: 'Bend b3 to 3 on a single string. Soulful and expressive.'
    }
  ],

  practice: {
    backingTracks: {
      search: '"R&B Backing Track" + your key. Or search artist-specific: "Alicia Keys style", "Usher groove", "Anderson .Paak pocket", "SZA vibes"',
      listenFor: 'Laid-back beat (behind the grid), syncopated hi-hats, prominent bass line, space in the mix',
      recommended: 'Medium tempo (90-110 BPM) for learning, uptempo (110-130 BPM) for energy sections'
    },

    exercises: [
      '1. Practice CMaj9 voicing (LH: C+B, RH: D-E-G) and voice lead to Dm9, FMaj9, G7. Focus on smooth voice leading.',
      '2. Learn Dorian mode in 3 keys (C, A, F). Play it over backing tracks.',
      '3. Chromatic approach exercise: approach chord tones from half-step above/below.',
      '4. Pocket exercise: Play comping pattern (beat 1, "and" of 2, rest, beat 4). Record and listen.',
      '5. Melisma practice: Sing multiple notes on one vowel using Dorian or minor pentatonic.',
      '6. ii-V-I smooth voice leading in all 12 keys: Dm9 → G7#11 → CMaj9.'
    ],

    songs: [
      { title: 'Fallin', artist: 'Alicia Keys', focus: 'Sophisticated voice leading, rich chord voicings' },
      { title: 'Yeah!', artist: 'Usher (ft. Lil Jon)', focus: 'Modern R&B groove, pocket, syncopation' },
      { title: 'Come Through', artist: 'H.E.R. (ft. Chris Brown)', focus: 'Sparse keys, finger-picked guitar' },
      { title: 'The Weekend', artist: 'SZA', focus: 'Neo-soul, lush production, melismatic runs' },
      { title: 'Focus', artist: 'H.E.R.', focus: 'Intimate R&B, fingerpicking, minimal production' },
      { title: 'Come Down', artist: 'Anderson .Paak', focus: 'Modern groove, layered instruments, pocket' },
      { title: 'Kiss Me More', artist: 'Doja Cat (ft. SZA)', focus: 'Contemporary R&B pop, strong groove' },
      { title: 'Redbone', artist: 'Childish Gambino', focus: 'Funk-R&B fusion, triplet feel' },
      { title: 'Untitled (How Does It Feel)', artist: 'D\'Angelo', focus: 'Modern soul/R&B, lush chords' },
      { title: 'Thinkin Bout You', artist: 'Frank Ocean', focus: 'Sparse arrangement, emotional intimacy' }
    ],

    progressionPath: [
      { level: 'Beginner', goal: 'Learn CMaj9 and Am9 voicings. Voice lead smoothly. Play 4-bar vamp. Understand pocket.' },
      { level: 'Intermediate', goal: 'Add Dm9, FMaj9, G7 voicings. Learn ii-V-I in 3 keys. Study Alicia Keys songs.' },
      { level: 'Advanced', goal: 'Master pocket in all styles. Melismatic runs. Fingerpicked guitar licks. Study modulation.' }
    ],

    commonMistakes: [
      '❌ Playing on the beat instead of pocket (behind the grid)',
      '❌ Overplaying—space is essential',
      '❌ Using plain Major7 chords without extensions',
      '❌ Not understanding voice leading—move notes by steps',
      '❌ Playing Gospel runs constantly',
      '❌ Bending everything like Blues',
      '❌ Straight comping rhythm on every beat',
      '❌ Ignoring the backbeat (2 & 4)',
      '❌ Not studying THE POCKET—watch artists, listen carefully'
    ]
  }
};
