export const jazzContent = {
'Jazz': {
  theory: {
    overview: 'Jazz is built on harmonic sophistication and conversational melody. The ii-V-I progression is the foundation—it appears in thousands of standards. Extended chords (7ths, 9ths, 11ths, 13ths) are not decorative but essential. The language is chord-scale relationships: each chord has a related scale, and you navigate between them with guide tones and approach notes. Bebop changed jazz from swing dancing music to listening music by adding chromatic passing tones and harmonic complexity.',

    scales: [
      {
        name: 'Major Scale (Ionian)',
        formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
        description: 'The parent scale for jazz harmony. Every Major7 and Maj9 chord lives in this scale. Use over IMaj7 and IVMaj7.',
        example: 'In C: C - D - E - F - G - A - B'
      },
      {
        name: 'Dorian Mode',
        formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
        description: 'Minor with a major 6th. Perfect for minor7 chords (ii, iii, vi). Darker than major but brighter than natural minor. The default for jazz minor chords.',
        example: 'In C: C - D - Eb - F - G - A - Bb'
      },
      {
        name: 'Mixolydian Mode',
        formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
        description: 'Major scale with a b7. Use over dominant 7th chords (V7, secondary dominants). Creates that "not quite resolved" jazz sound.',
        example: 'In C: C - D - E - F - G - A - Bb'
      },
      {
        name: 'Altered Scale (Super Locrian)',
        formula: '1 - b9 - #9 - 3 - #11 - b13 - b7',
        description: 'The "outside" sound. Used over altered dominant chords (7alt, 7b9, 7#11, 7b5). This spelling shows it\'s a dominant chord (1-3-b7) with all the altered tensions added. Sounds tense and dissonant—exactly the point. Maximum chromatic color.',
        example: 'In C: C - Db - D# - E - F# - Ab - Bb'
      },
      {
        name: 'Bebop Dominant Scale',
        formula: '1 - 2 - 3 - 4 - 5 - 6 - b7 - 7',
        description: 'Mixolydian + major 7. Eight notes instead of seven. Use over V7—the added major 7 lets you land on chord tones on the beat. This is why bebop sounds so "in the pocket."',
        example: 'In C: C - D - E - F - G - A - Bb - B'
      },
      {
        name: 'Bebop Major Scale',
        formula: '1 - 2 - 3 - 4 - 5 - #5 - 6 - 7',
        description: 'Major scale + #5. Eight notes. Use over IMaj7. Adds brightness and extra landing options for runs.',
        example: 'In C: C - D - E - F - G - G# - A - B'
      },
      {
        name: 'Half-Diminished Scale (Locrian)',
        formula: '1 - b2 - b3 - 4 - b5 - b6 - b7',
        description: 'The scale for m7b5 chords (ii in minor keys, viiø7). Locrian is always minor and always has b5. Used in blues progressions and turnarounds.',
        example: 'In C: C - Db - Eb - F - Gb - Ab - Bb'
      }
    ],

    chordScaleRelationships: {
      title: 'The Heart of Jazz: Chord-Scale Relationships',
      explanation: 'In jazz, each chord has a PRIMARY scale (the "in" sound) and ALTERNATE scales (the "outside" sound). Learning what scale goes with what chord is the foundation of jazz soloing.',

      majorFamily: {
        concept: 'IMaj7 and IVMaj7 chords',
        major: 'Use Major (Ionian) scale. The parent scale. Safe, resolved sound.',
        bebopMajor: 'Or use Bebop Major (Major + #5). Same parent scale but adds an extra landing note (the #5).',
        lydian: 'Or use Lydian (Major + #4). Creates floating, pretty sound. Use when you want to avoid the normal resolving quality.'
      },

      minorFamily: {
        concept: 'ii, iii, vi chords (all m7)',
        dorian: 'Use Dorian (minor with major 6). The DEFAULT for minor7 chords in jazz. Brighter than natural minor.',
        aeolian: 'Or use Natural Minor (Aeolian). Darker, sadder. Use when you want minor without the brightness.',
        phrygian: 'Rare: Phrygian (Natural Minor + b2). Very dark, exotic. Use for specific color.'
      },

      dominantFamily: {
        concept: 'V7 and secondary dominants (V7/ii, V7/iii, etc.)',
        mixolydian: 'Use Mixolydian (Major with b7). The DEFAULT for dominant 7 chords. Creates tension that wants to resolve.',
        bebopDominant: 'Or use Bebop Dominant (Mixolydian + major 7). Adds an extra landing note on the beat.',
        altered: 'Or use Altered Scale. The "outside" sound. Use when the chord has alterations (b9, #11, b5, b13).'
      },

      halfDiminished: {
        concept: 'viiø7 and m7b5 chords',
        locrian: 'Use Locrian. It\'s always half-diminished—built on b3, b5, b7. No bright notes.',
        whyLocrian: 'The b5 is essential. It defines the diminished quality. Locrian gives you that tension.'
      }
    },

    guideTones: {
      title: 'Guide Tones: The Secret to Smooth Jazz Lines',
      explanation: 'Guide tones are the 3rd and 7th of each chord. They define the quality (major, minor, dominant) and create smooth voice leading when you connect them between chords.',

      whatAreThey: 'The 3rd tells you major or minor. The 7th (or b7) tells you major7 or dominant7. Every other note (root, 5th, extensions) is decoration.',

      smokeTheGuides: 'The technique: play only the 3rd and 7th of chords for an entire ii-V-I progression. In C: Dm7 (F-C) → G7 (B-F) → CMaj7 (E-B). See how they flow? That\'s voice leading.',

      example: 'In C ii-V-I: Dm7 has F (3rd) and C (b7). G7 has B (3rd) and F (b7). CMaj7 has E (3rd) and B (7th). Notice: F→F (same), C→B (step down), E is new, B (same). Smooth.',

      approach: 'Approach the guides chromatically. A half-step below F is E (approach before landing on F of CMaj7). This is bebop—constant chromatic motion connecting chord tones.'
    },

    chordConstruction: {
      description: 'Jazz chords always have 7ths. Triads alone sound empty. Extended chords (9, 11, 13) are standard voicing colors, not advanced techniques. The goal is sophisticated extensions stacked efficiently.',

      seventh: {
        explanation: 'The 7th is essential in every jazz chord. It defines the sound.',
        major7: {
          formula: '1 - 3 - 5 - 7',
          example: 'CMaj7 = C - E - G - B',
          sound: 'Stable, resolved. Use on I and IV chords. Sounds complete.',
          when: 'IMaj7, IVMaj7. The "home" chords.'
        },
        dominant7: {
          formula: '1 - 3 - 5 - b7',
          example: 'G7 = G - B - D - F',
          sound: 'Tense, wants to resolve. Use on V and secondary dominants.',
          when: 'V7, V7/ii, V7/iii, V7/vi, etc. Creates harmonic momentum.',
          tritone: 'The 3rd (B) and b7 (F) form a tritone. In jazz, you exploit this—hold it, decorate it with extensions, then resolve. The tritone is the engine of jazz harmony.'
        },
        minor7: {
          formula: '1 - b3 - 5 - b7',
          example: 'Dm7 = D - F - A - C',
          sound: 'Mellow, transitional. Use on ii, iii, vi chords.',
          when: 'ii7, iii7, vi7. Sets up the V7.',
          function: 'In ii-V-I, the ii7 is the setup—it\'s beautiful but incomplete. You move FROM here.'
        },
        halfDiminished: {
          formula: '1 - b3 - b5 - b7',
          example: 'Bø7 = B - D - F - A (in C major)',
          sound: 'Tense, diminished. Use on vii chord.',
          when: 'viiø7. The penultimate chord before I. Lots of tension.',
          approach: 'Often approached with a V7/vii (secondary dominant to the viiø7), creating a chain of dominants.'
        }
      },

      extensions: {
        whatTheyAre: 'Extensions are 9ths, 11ths, 13ths—notes beyond the 7th. In jazz, they\'re not decorative; they\'re core voicing.',
        naming: 'Extensions count from the root: 9th (2nd octave up), 11th (4th octave up), 13th (6th octave up). But you play them in close position, not literally octaves high.',

        common: [
          { interval: '9th', description: 'The 2nd note. Brightest extension. Add to almost every chord. Dm9 instead of Dm7. Adds shimmer without changing function.' },
          { interval: 'b9', description: 'On dominant chords only (V7b9, alt7). Sounds tense and outside. G7b9 has Ab (the b9). Creates maximum tension before resolving.' },
          { interval: '#9', description: 'On dominant chords (V7#9). Sounds bluesy and edgy. G7#9 has A# (the #9). Jimi Hendrix territory. Less common in straight-ahead jazz.' },
          { interval: '11th', description: 'The 4th note. Adds suspended, dreamy quality. On minor chords mostly (Dm11). On major/dominant, often as #11 (raised 4th) to avoid clashing with 3rd.' },
          { interval: '#11', description: 'Dominant chords (V7#11, alt7). The raised 4th adds sophistication. G7#11 sounds very jazzy. Bill Evans used this constantly.' },
          { interval: '13th', description: 'The 6th note. The jazzy extension. CMaj13, G13. Adds richness and warmth. Often used at the end of a progression for resolution.' }
        ],

        voicingStrategy: 'Left hand plays root + 7th (the shell—defines the chord). Right hand plays 3rd + extensions in CLOSE POSITION. For CMaj9: LH = C + B, RH = D-E-G (9, 3, 5 clustered). The cluster is the jazz sound.',

        avoid11: 'The natural 11th clashes with the 3rd. In G7, D (the 11th) clashes with B (3rd). So either: skip the 11th, raise it to #11 (D#), or put it in the bass where it won\'t clash. This is why #11 is so common in jazz voicings.'
      }
    },

    bebopConcept: {
      title: 'Bebop: Eight-Note Scales and Chromaticism',
      explanation: 'Bebop changed jazz by adding an 8th note to scales, creating more landing options. This lets you play EVERY eighth note on chord tones—no awkward notes on the beat. Bebop is also defined by chromatic approach tones and avoid notes played on the "and" (offbeat), not the beat.',

      dominantBebop: 'Mixolydian + major 7 (8 notes). Use over V7. The major 7 lets you resolve cleanly to the I chord.',

      majorBebop: 'Major + #5 (8 notes). Use over IMaj7. The #5 gives an extra option.',

      chromaticApproach: 'Play a note a half-step BEFORE your target. In C: approaching E (3rd of CMaj7), play Eb first (quarter note), then E (quarter note). This is bebop: constant chromatic motion.',

      avoidNotes: 'Certain notes sound "outside" if played on the beat. Example: the 4th over a major chord. Play it on the "and" (offbeat), not on beat 1 or 3. This is why complex bebop solos still sound "in"—the math of placement.',

      example: 'In a Cmaj7 - Dm7 - G7 - Cmaj7 progression: solo line might be: E-D-C#-B (approach and guide tones) for CMaj7, then F-E-D-C# for Dm7, then B-Bb-A-G# for G7, landing on E for CMaj7 again. Lots of chromatic motion, but every beat lands on a chord tone.'
    },

    pianoVoicings: {
      title: 'Jazz Piano Voicings: From Shell to Rootless',

      shellVoicing: {
        concept: 'The foundation. Left hand plays root + 7th. This is enough to define any jazz chord.',
        leftHand: 'Root + 7th. For CMaj7: C + B. For G7: G + F. For Dm7: D + C. Bare minimum.',
        why: 'Leaves the right hand completely free for extensions and melody. The shell defines the chord; the right hand makes it jazzy.'
      },

      closePositionVoicing: {
        concept: 'Right hand plays 3rd + extensions, all within an octave (or close to it).',
        threeToPitch: 'Right hand almost ALWAYS starts with the 3rd (the most important note after root and 7th—it defines major or minor).',
        formula: 'LH: root + 7th. RH: 3rd + {9, 5, 13} or {9, 3, 5} or {3, 5, 13}—arrange for smooth voice leading.',
        example: 'CMaj9: LH = C+B. RH = E-D-G (3-9-5). Or D-E-G (9-3-5). Rearrange for comfortable hand position and good voice leading to next chord.',
        why: 'Jazz is about smooth voice leading. Minimize motion between chords. If CMaj9 goes to Dm9, keep as many notes as possible in the same position.'
      },

      rootlessVoicing: {
        concept: 'Advanced: omit the root entirely. The bass player plays the root, so piano just plays 7th + extensions.',
        formula: 'LH: 7th (no root). RH: 3rd + extensions. This opens up the sound.',
        example: 'CMaj9 rootless: LH = B (just the 7th). RH = E-D-G. Clean, open sound. The bass anchors the root.',
        why: 'Professional jazz trios use this constantly. It\'s less "thick" than shell voicing—brighter and cleaner. Lets the bass/drums define the harmonic foundation.',
        piano3way: 'In a jazz trio (piano-bass-drums), pianist often plays rootless. In a piano solo or duet, use shell voicing so the root is present.'
      },

      comping: {
        description: 'Rhythm piano accompaniment while someone solos. It\'s conversational—respond to what they play.',
        approach: 'Listen to the soloist. Play sparse voicings (maybe 2-3 notes) that complement their phrase. Don\'t play constantly—leave space.',
        rhythm: 'Syncopated, not on the beat. Play on the "and," the upbeat. This creates swing feel and lets the soloist own the beat.',
        listening: 'This is the art of comping. You\'re not playing preset voicings—you\'re listening and responding. If the soloist is playing fast, comp sparse. If they rest, fill the space with a chord hit or run.'
      },

      walkingBass: {
        description: 'Left hand plays a stepwise bass line (usually four quarter notes per bar) that outlines chords and creates momentum.',
        technique: 'Play scale tones and chord tones in a line that walks up or down. In a ii-V-I in C: bar 1 (Dm7): D-E-F-G (walking up). Bar 2 (G7): G-A-B-C (walking up to land on C). Bar 3 (CMaj7): C-B-Bb-A (walking down). Each bar typically lands on a chord tone on beat 1 of the next bar.',
        notes: 'Can use chromatic passing tones (notes between scale tones) for extra color. But the structure is stepwise—no big jumps. This is the signature sound of classic jazz trio recordings.',
        swing: 'Walking bass in swing feel creates the groove. No walking bass = different feel entirely.'
      },

      stridePiano: {
        description: 'Soloing technique (less common in modern jazz but classic): left hand plays jumping patterns (root, octave, 5th, octave) while right hand plays melody.',
        pattern: 'Left hand: ROOT (low) - 5th (mid) - ROOT (high) - 5th (mid) - repeat. Fast, steady pulse. Right hand plays melody over this.',
        feel: 'Solo piano sound. Fats Waller, Thelonious Monk used this. Old-school but effective. Creates self-contained movement.',
        modern: 'Less used in contemporary jazz but still relevant for solo piano arrangements.'
      }
    },

    guitarVoicings: {
      basic: 'Jazz guitar uses larger voicings than folk/rock. Maj7 and Dom7 shapes (barre chords with altered voicings). Four or five strings typically, not six-string chords.',
      extensions: 'Add 9ths and 13ths to shapes. Maj9, Dom9, m9 voicings are essential. Learn moveable shapes for quick key changes.',
      guideTones: 'For soloing: play the 3rd and 7th as the strongest notes in your lines. They define the chord quality.',
      innerVoices: 'Avoid the root in some voicings (rootless). Play 7th in bass, 3rd and 5th in mid-range. Lets the bass player anchor the root.',
      melodic: 'Jazz guitar often plays CHORD MELODY—comping and soloing simultaneously. Outline the chord with single notes, land on chord tones on strong beats.',
      toneAndTiming: 'A smooth, warm jazz tone (use neck pickup, play behind the bridge for warmth). Timing is everything—lay back slightly behind the beat to create swing.'
    },

    archtopTone: {
      description: 'Jazz guitarists typically use acoustic or electric archtop guitars (like L-5, Excel, 175). The warm, woody tone is part of the jazz sound.',
      warmth: 'Archtop design (arched top and back) creates resonance and warmth. Compared to flat-top acoustics, they\'re less bright and more "buttery."',
      electric: 'Semi-hollow body electrics (335-style) achieve similar warmth with amplification.',
      technique: 'Play cleanly, sustain notes, use smooth vibrato. The tone should sing—not bright and cutting like rock, but warm and conversational.'
    },

    turnarounds: {
      description: 'End a phrase (usually 4 or 8 bars) with a quick progression that loops back to the top. The turnaround is the jazz transitional moment.',
      classic: 'ii-V-I in the last 2 bars. In C: Dm7-G7 landing on CMaj7 (which transitions to the next A section).',
      chromatic: 'Descending chromatic bass while upper notes resolve. Create anticipation for the repeat.',
      extensions: 'Use extensions liberally in turnarounds: Dm9-G7b9-CMaj9. The extensions add sophistication at the transition moment.',
      lines: 'Or play a bebop line (quick, chromatic) over ii-V instead of comping chords. Solo over your own accompaniment.'
    }
  },

  rhythm: {
    feel: {
      description: 'Jazz swing—one of the most important concepts. The pulse is written as straight eighth notes but FELT as triplets. The "and" is the critical beat (sits back, lags behind). This creates forward momentum and the signature "bounce" of jazz.',
      written: '4/4 time signature',
      feel: 'Triplet subdivisions. Each beat divides into three, but you play on beat 1 and beat 3 of the triplet (not beat 2). This "swings" the rhythm.',
      visual: 'Written: 1-and-2-and-3-and-4-and (straight eighths). Felt: 1-(delayed)-and 2-(delayed)-and 3-(delayed)-and 4-(delayed)-and. The delay creates swing.',
      important: 'SWING IS FEEL-BASED, NOT NOTATION-BASED. You don\'t count "triplets" when you play—you feel the laid-back "and." This is learned by listening to jazz recordings and playing with other musicians. Listening to Coltrane, Miles Davis, Oscar Peterson is mandatory for understanding swing feel.'
    },

    comping: {
      description: 'Rhythm section (piano, guitar, bass, drums) creates the groove while soloist improvises on top. Comping is sparse, syncopated accompaniment.',
      piano: 'Play voicings on the "and" of the beat (offbeat). Leave space. Listen to the soloist and respond—if they\'re playing a slow phrase, play sparse. If they rest, fill with energy.',
      guitar: 'Similar approach. Strum on the "and," let the soloist own the beat. Use muted strings for texture. Comping is about conversation, not constant playing.'
    },

    walkingBass: {
      description: 'Bass line that walks steadily (one note per beat) outlining chords and creating harmonic foundation.',
      feel: 'Four quarter notes per bar, typically connecting root → chord tones → scale notes → target next chord root. Each bar usually lands on a chord tone beat 1 of the next bar.',
      swing: 'Walking bass is THE sound of classic jazz groove. No walking bass = different feel (bebop, fusion, modal jazz might use different bass approach).',
      chromatic: 'Can use chromatic passing tones (between scale tones) for color and forward momentum. But the structure is stepwise—no erratic jumps.'
    },

    driveFeel: {
      description: 'In uptempo bebop and hard bop, the feel is more "pushed"—less laid-back, more energetic. The "and" is still delayed but less extreme than ballad swing.',
      ballads: 'Slower tempos (around 60-80 BPM) have MORE laid-back swing. Maximum delay on the "and."',
      uptempo: 'Faster tempos (around 240+ BPM) feel more "on top" of the beat. The delay is still there but less pronounced. More driving energy.'
    },

    backbeat: 'Drums accent beats 2 and 4 (snare hits). This is universal in jazz. The hi-hat maintains the swing pulse.'
  },

  licks: [
    {
      name: 'The ii-V-I Bebop Line',
      description: 'The most important lick in jazz. This progression appears in thousands of standards. Learn this line and you\'ll recognize it everywhere.',
      keys: 'In C: Dm7 (F-E-D-C#-C) landing on 3rd of next chord, G7 (B-Bb-A-G#) landing on 5th, CMaj7 (E-D-C#-B). Guide tones with chromatic approaches. Lots of 8th note motion.',
      guitar: 'Same concept on fretboard. Play guide tones (3rd and 7th of each chord) with chromatic approach notes. In C: Fret F(1st string/1st fret)-E(open)-D#-D-C# connecting to guide tones.'
    },
    {
      name: 'Bebop Enclosure',
      description: 'Surround a target note with chromatic approach notes: one half-step above and one half-step below. Creates tension that resolves when you hit the target.',
      keys: 'Target: E (3rd of CMaj7). Play F-E-Eb. Or: target G (5th), play G#-G-F#. Creates smooth, connected lines.',
      guitar: 'Same idea on strings. Target a chord tone, approach from above and below with half-steps.'
    },
    {
      name: 'Chromatic Approach Tone',
      description: 'Play a half-step BEFORE your target note. This is bebop fundamentals. Every target note on a beat should have a chromatic approach.',
      keys: 'In Dm7, target is F (3rd). Play E (half-step below) on beat (or beat-and), then F on the next beat. E-F creates smooth voice leading.',
      guitar: 'Same technique. Half-step below your target, land on the target on a strong beat.'
    },
    {
      name: 'Arpeggio Runs',
      description: 'Play chord tones in ascending or descending order to outline harmony without using scale tones.',
      keys: 'In CMaj7: play E-G-B (3-5-7) ascending, or B-G-E descending. Can extend: E-G-B-D (add 9th). Creates strong harmonic outline.',
      guitar: 'Fret and play: outline each chord with arpeggios. C major: play C-E-G, G7: play G-B-D-F.'
    },
    {
      name: 'Descending Guide Tone Line',
      description: 'Play ONLY the 3rd and 7th of chords, descending through a progression. Extremely smooth and sophisticated.',
      keys: 'In C ii-V-I: Dm7 has F (3rd) and C (b7). G7 has B (3rd) and F (b7). CMaj7 has E (3rd) and B (7th). Play F-C / B-F / E-B. All descending or stepwise. Minimalist but beautiful.',
      guitar: 'Same concept. Play only guide tones across changes. Super clean sound.'
    },
    {
      name: 'Bebop Dominant Lick',
      description: 'Use the Bebop Dominant scale (Mixolydian + major 7) to get an extra landing note. Lands cleanly on the resolve.',
      keys: 'Over G7: play G-A-B-C-D-E-F-F# (Bebop Dominant). The F# (major 7) lets you land on E (3rd of CMaj7) on beat 1 of the next measure. Creates smooth voice leading.',
      guitar: 'Same scale. The extra note (major 7) is your get-out-of-jail card for landing on chord tones cleanly.'
    },
    {
      name: 'Tritone Substitution',
      description: 'Replace V7 with bII7 (a chord a tritone away). They share the same tritone interval, so voice leading is smooth.',
      keys: 'In C, instead of G7 → CMaj7, play Db7 → CMaj7. The Db7 has B and F (same tritone as G7). Sounds different but resolves beautifully. Sophisticated move.',
      guitar: 'Barre Db7 instead of G7. Same tritone, different root. Sounds jazzy and advanced.'
    },
    {
      name: 'Target Note Soloing',
      description: 'Choose chord tones as "landing" notes on strong beats. Fill between them with scalar motion or approach notes. Creates secure, grounded soloing.',
      keys: 'Decide on landing notes (chord tones) on beats 1 and 3. Fill between with 8th notes (scale or chromatic). This is how jazz soloists balance freedom with structure.',
      guitar: 'Same technique. Land on chord tones on strong beats, fill space with runs.'
    },
    {
      name: 'Altered Dominant Resolution',
      description: 'Use Altered scale over V7 with alterations (b9, #11, b5, b13). Creates maximum tension before resolving to I.',
      keys: 'Over G7alt (in C): play Altered scale (G-Ab-Bb-Bbb-Db-Eb-F), landing on B (3rd) which resolves to E (3rd of CMaj7). The tension resolves perfectly.',
      guitar: 'Hard to voice full Altered scale on guitar. But try G7 with added Db (#11) and Ab (b9) for the altered sound.'
    },
    {
      name: 'The Coltrane Changes',
      description: 'A rapid series of ii-V progressions in different keys. John Coltrane used this constantly to navigate complex standards.',
      keys: 'In C: ii-V in C (Dm7-G7) → ii-V in B (C#m7-F#7) → ii-V in A (Bm7-E7). Each in 2 beats. Creates harmonic adventure. Coltrane\'s "Giant Steps" is the ultimate example.',
      guitar: 'Same progression. Sequence of ii-V in descending keys (or ascending). Difficult to master but when you nail it, you sound like Coltrane.'
    },
    {
      name: 'Half-Diminished Approach',
      description: 'Use m7b5 (half-diminished) chords in runs and lines. Creates tension and sophistication.',
      keys: 'Ascending: C-Db-Eb-F-Gb (the viiø7 in B major context). Use these notes to approach the I chord dramatically.',
      guitar: 'Same idea. Half-diminished sounds outside and tense—use sparingly, resolve back to stable chord.'
    }
  ],

  practice: {
    backingTracks: {
      search: '"Jazz ii-V-I backing track" or "Jazz standard backing track" + your key. Or: "Autumn Leaves backing track", "Blue Bossa", "So What"',
      listenFor: 'Walking bass line (steady four-on-the-floor), swinging hi-hat pattern, chord changes clearly marked',
      recommended: 'Start at 120 BPM (medium swing), work up to 200+ BPM (bebop tempo). Ballad tempo around 60-80 BPM (more swing feel).',
      tip: 'Search classic tunes by name: "All the Things You Are backing track", "Fly Me to the Moon", "Girl from Ipanema". These standards are the foundation of jazz language.'
    },

    exercises: [
      '1. Learn the ii-V-I progression in all 12 keys. Play the guide tone line (3rds and 7ths only) until smooth voice leading is automatic.',
      '2. Practice the bebop enclosure: pick a chord tone, play half-step above, the target, half-step below. Do this for every chord in a progression.',
      '3. Learn three jazz standards (suggest: "Autumn Leaves", "All the Things You Are", "Fly Me to the Moon"). Know the changes by heart.',
      '4. Comping exercise: play chord voicings on the "and" of beats while listening to a soloist. Respond to their phrasing—don\'t play constantly.',
      '5. Walking bass practice: play a four-note walking line over ii-V-I in all 12 keys. Each note on the beat, outlines chords, stepwise motion.',
      '6. Transcribe a solo: write out a solo from a recording (Miles Davis, John Coltrane, Bill Evans). Analyze the note choices, chord tones, approach notes. Play it perfectly.',
      '7. Target note exercise: choose chord tones as landing notes on strong beats. Improvise scalar runs between them. This is the framework of jazz soloing.'
    ],

    songs: [
      { title: 'Autumn Leaves', artist: 'Bill Evans / Miles Davis', focus: 'Classic ii-V-I progression, beautiful melody, standard form' },
      { title: 'All the Things You Are', artist: 'Charlie Parker / Oscar Peterson', focus: 'Complex key modulations, ii-V everywhere, advanced harmony' },
      { title: 'Fly Me to the Moon', artist: 'Miles Davis / John Coltrane', focus: 'Elegant melody, smooth chord changes, romantic ballad feel' },
      { title: 'Girl from Ipanema', artist: 'Stan Getz / João Gilberto', focus: 'Bossa nova swing, Latin jazz foundation, accessible changes' },
      { title: 'So What', artist: 'Miles Davis', focus: 'Modal jazz (Dorian mode), minimalist approach, listening to space' },
      { title: 'Tenor Madness', artist: 'Sonny Rollins / John Coltrane', focus: 'Blues-based changes, tenor saxophone conversation, call and response' },
      { title: 'Take Five', artist: 'Dave Brubeck', focus: '5/4 time (unusual!), Dorian mode, accessible but sophisticated' },
      { title: 'In a Sentimental Mood', artist: 'Duke Ellington / John Coltrane', focus: 'Beautiful melody, chromatic movement, string quartet voicings' },
      { title: 'Giant Steps', artist: 'John Coltrane', focus: 'Advanced harmony (Coltrane changes), bebop vocabulary, true test of jazz language' },
      { title: 'Body and Soul', artist: 'Coleman Hawkins', focus: 'Dense harmony, slow ballad, showcase for rich voicings and emotion' },
      { title: 'Blue in Green', artist: 'Bill Evans / Miles Davis', focus: 'Modal foundation with chromatic coloring, impressionist sound' },
      { title: 'Invitation', artist: 'Bill Evans', focus: 'Gorgeous ii-V movements, sophisticated piano voicings, walking bass foundation' }
    ],

    progressionPath: [
      { level: 'Beginner', goal: 'Learn 3 jazz standards with simple chord changes (like "Girl from Ipanema"). Understand ii-V-I progression in one or two keys. Practice shell voicings (root + 7th) and simple comping. Listen to classic jazz recordings daily—Miles Davis, Oscar Peterson, Bill Evans.' },
      { level: 'Intermediate', goal: 'Master ii-V-I in all 12 keys (both playing and guide tone voice leading). Learn bebop enclosures and chromatic approach tones. Transcribe a solo from a recording. Play four jazz standards fluently. Understand chord-scale relationships (Dorian over minor, Mixolydian over dominant). Work on swing feel in your playing.' },
      { level: 'Advanced', goal: 'Improvise fluent solos over complex changes (like "All the Things You Are" or "Giant Steps"). Comp with confidence, responding to soloists. Play rootless voicings and walking bass. Understand altered scales, tritone subs, and Coltrane changes. Learn to transcribe and master solos by ear. Play in all 12 keys without thinking.' }
    ],

    commonMistakes: [
      '❌ Playing straight eighth notes instead of swinging—kills the jazz feel. LISTEN to recordings. Swing is a feel, not notation.',
      '❌ Ignoring guide tones (3rd and 7th)—these are the foundation of smooth voice leading. Target these notes first.',
      '❌ Comping too much—jazz is about space and listening. Play sparse, syncopated voicings. Let the soloist breathe.',
      '❌ Playing all 7 notes of a scale over a chord—scales are colors, not rules. Land on chord tones, use non-chord tones as passing tones.',
      '❌ Not understanding chord-scale relationships—each chord has a "correct" scale. Know which scale goes with which chord.',
      '❌ Avoiding half-steps and chromatic approach—bebop is BUILT on chromatic motion. Approach targets from half-step away.',
      '❌ Skipping transcription—you can\'t learn jazz language from books. Transcribe solos, learn them by ear, internalize the vocabulary.',
      '❌ Not listening enough—jazz is an aural tradition. Listen to Miles, Coltrane, Parker, Evans, Monk daily. Absorb their language.'
    ]
  }
}
};
