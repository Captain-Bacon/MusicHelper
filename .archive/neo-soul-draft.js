export const neoSoulContent = {
'Neo-Soul': {
  theory: {
    overview: 'Neo-Soul is laid-back sophistication: jazz harmony meets hip-hop pocket, gospel emotional depth with contemporary production. Extended chords (9ths, 11ths, 13ths) are default, but what defines Neo-Soul is the space—playing behind the beat, leaving room for breath, letting chords ring with intentional silence. It\'s groove-conscious arrangement with harmonic complexity. Think D\'Angelo\'s Voodoo, Erykah Badu\'s Mama\'s Gun, Robert Glasper\'s reimagined standards—music that breathes, swings slightly even in straight time, and prioritizes feel over flash.',

    scales: [
      {
        name: 'Dorian Mode',
        formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
        description: 'The Neo-Soul foundation. Minor scale with major 6th. Creates that sophisticated, not-quite-sad sound. Play this over minor 7th and 9th chords.',
        example: 'In A: A - B - C - D - E - F# - G'
      },
      {
        name: 'Mixolydian Mode',
        formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
        description: 'Major scale with flat 7. Use over dominant 7th chords. Creates the "almost resolved" sound—perfect for Neo-Soul\'s sophisticated V7 chords with extensions.',
        example: 'In G: G - A - B - C - D - E - F'
      },
      {
        name: 'Phrygian Mode',
        formula: '1 - b2 - b3 - 4 - 5 - b6 - b7',
        description: 'Exotic, Spanish-influenced minor. The flat 2 is key. Use over dark, minor chords. Creates introspective, melancholic sound.',
        example: 'In E: E - F - G - A - B - C - D'
      },
      {
        name: 'Minor Pentatonic with Chromatic Approach',
        formula: '1 - b3 - 4 - 5 - b7 (plus chromatic passing tones)',
        description: 'The melodic foundation. Lean on this but approach notes chromatically. The chromatic approach tones are what make Neo-Soul solos sound effortless and sophisticated.',
        example: 'In D: D - F - G - A - C (with chromatic approach: D - C# - C - D, etc.)'
      }
    ],

    chromaticApproaches: {
      title: 'Chromatic Approach Tones (The Neo-Soul Secret)',
      explanation: 'Neo-Soul melodies don\'t land directly on scale tones. They approach from a half-step above or below. This creates smooth voice leading and sophisticated, flowing lines.',
      example: 'In C Dorian, landing on the root: Instead of jumping to C, play C# (half-step above) then resolve down to C. Or play B (half-step below) then resolve up to C. The listener hears the resolution.',
      why: 'This is what separates Neo-Soul from straight jazz or blues. It\'s the difference between landing ON the note and sliding INTO the note. Creates the "laid-back" feel—like you\'re gliding through harmony.',
      usage: 'Use approach tones before chord tones (especially the 3rd, 7th, root). In a solo over Dm9: approach D from C#, approach F from E, approach A from G#. Makes every note feel intentional.'
    },

    chordConstruction: {
      description: 'Neo-Soul chords are built from jazz tradition (major, minor, dominant scales) but with emphasis on 9ths, 11ths, and 13ths as standard. The voicings are often tight, clustered (close to Gospel), or sparse with intentional space.',

      triads: {
        explanation: 'Triads are rarely played alone in Neo-Soul. Always extend them.',
        formula: '1 - 3 - 5',
        example: 'C major triad = C-E-G (but this sounds incomplete without extensions)'
      },

      seventhChords: {
        explanation: 'The foundation. All seventh types appear depending on context.',
        major7th: {
          formula: '1 - 3 - 5 - 7',
          example: 'CMaj7 = C-E-G-B',
          sound: 'Resolved, peaceful. Use on I chord.'
        },
        dominant7th: {
          formula: '1 - 3 - 5 - b7',
          example: 'G7 = G-B-D-F',
          sound: 'Tense, wants to resolve. Use on V and secondary dominants.',
          tritone: 'B and F form tritone—the tension in Neo-Soul. Often decorated with extensions (b9, b13) for color.'
        },
        minor7th: {
          formula: '1 - b3 - 5 - b7',
          example: 'Dm7 = D-F-A-C',
          sound: 'Mellow, transitional. Use on ii, iii, vi chords.'
        },
        minorMajor7th: {
          formula: '1 - b3 - 5 - 7',
          example: 'Dm(Maj7) = D-F-A-C#',
          sound: 'Sophisticated, introspective. Neo-Soul secret weapon. Creates ambiguous minor/major quality.',
          neosoulUse: 'Robert Glasper and D\'Angelo use this constantly. It\'s sad and sophisticated at the same time.'
        }
      },

      extensions: {
        whatTheyAre: 'Notes beyond 7th. In Neo-Soul, these are NOT decorative—they ARE the chord. A Neo-Soul Dm7 is really Dm9 or Dm11.',
        naming: '9th = 2nd octave up, 11th = 4th octave up, 13th = 6th octave up. But you play them in close position, not literally an octave away.',
        common: [
          {
            interval: '9th',
            description: 'On EVERYTHING. Dm9, G7#9, CMaj9. Adds shimmer and sophistication. The default extension.',
            neosoulVibe: 'Erykah Badu\'s "Window Seat" opening—that Dmaj9 is pure Neo-Soul.'
          },
          {
            interval: 'b9 (flat 9)',
            description: 'On dominant 7th chords. G7b9 = G-B-D-F-Ab. Sounds dissonant, resolves beautifully.',
            neosoulVibe: 'D\'Angelo uses this in "Untitled (How Does It Feel)"—creates that sophisticated, almost uncomfortable tension.'
          },
          {
            interval: '#9 (sharp 9)',
            description: 'Dominant chord with raised 9th. G7#9 = G-B-D-F-G#. "Jimi chord." Iconic in rock, also used in Neo-Soul.',
            neosoulVibe: 'Less common than b9, but used for edgier, funkier moments.'
          },
          {
            interval: '11th',
            description: 'Adds dreamy, suspended quality. Often played as sus4 (4th, not 11th name). Dm11 = D-F-A-C-G. Huge, open sound.',
            neosoulVibe: 'Used sparingly to create space and ambiguity.'
          },
          {
            interval: '13th',
            description: 'The sophisticated extension. Dm13 = D-F-A-C-E-B (not all notes, just the concept). Creates jazzy, rich sound.',
            neosoulVibe: 'Robert Glasper\'s reimagined standards are full of this. Keeps harmony open and sophisticated.'
          }
        ],
        inPractice: 'Stack in CLOSE POSITION or SPARSE configuration. Don\'t use all notes—select which extensions matter. Neo-Soul is about intentional space, not filling every note.'
      },

      quartalVoicings: {
        description: 'Voicings built in fourths instead of thirds. Creates open, modern sound.',
        concept: 'Play notes 4ths apart instead of 3rds apart. Example: C-F-B (all fourths). Sounds open and airy.',
        neosoulUse: 'Robert Glasper\'s "Covered by Now" uses these constantly. Creates that modern, spacious Neo-Soul sound.',
        practice: 'Take any chord: C-E-G-B. Re-voice as C-F-Bb (fourths). Listen to how it opens up.',
        when: 'Use for ambient, floating harmony. Especially on suspended or extended chords.'
      }
    },

    pianoVoicings: {
      title: 'How to Voice Neo-Soul Chords on Rhodes & Wurlitzer',

      spaceAndMinimalism: {
        concept: 'Neo-Soul is about what you DON\'T play. Space is harmonic.',
        leftHand: 'Root + 7th or root alone. Leave room for air.',
        rightHand: 'One or two extensions in mid-range. Not a full chord—a suggestion of the chord.',
        example: 'Dmaj9: LH = D (just root). RH = F# + E (3rd and 9th). That\'s it. Let it ring.',
        why: 'D\'Angelo\'s Voodoo album is sparse. Notes ring out. Space breathes.'
      },

      rhodesVibe: {
        technique: 'Rhodes piano is BRIGHT. Minimize notes, let tone sing through.',
        touch: 'Lighter touch, let sustain do the work. Don\'t re-voice constantly—let chords breathe.',
        example: 'CMaj9: Play C-E (3rd and root in RH), G (5th in LH). Hold for 4 beats. Just three notes, but the Rhodes makes it lush.',
        feel: 'Play slightly behind the beat. Let the hi-fi recording capture the tone—that\'s the vibe.'
      },

      wurlitzerVibe: {
        technique: 'Wurlitzer is warmer, more intimate than Rhodes.',
        use: 'Often plays comping chords (shorter hits) rather than sustained voicings.',
        example: 'Dm9 - hit it quickly on beat 1, release. Let the bass carry it. Wurlitzer is there for color.',
        syncopation: 'Hit on offbeats (& of 1, & of 2) to complement bass and drums.'
      },

      clusterVoicings: {
        description: 'Gospel-influenced tight voicings in right hand.',
        concept: 'Play 9th, 3rd, 5th tight together (within an octave). Creates tension and shimmer.',
        example: 'Dm9: LH = D (root). RH = E-F-A (3rd, 9th, 5th clustered). That D-E 2nd is the tension.',
        when: 'Use for energy builds or shout sections. Less common than sparse voicings but effective.',
        neosoulArtists: 'Robert Glasper uses this in uptempo standards reimagined. Adds sophistication without losing space.'
      },

      colorTones: {
        description: 'Chromatic passing tones and upper structure triads for color.',
        passingTones: 'Use chromatic tones between chord tones. Example: C going to D, play C-C#-D on beat 4 (quick pass).',
        upperStructure: 'Voicing top 3 notes of a complex chord differently. CMaj7#5 might be voiced as Em (top notes) over C bass.',
        effectOnFeeling: 'Adds sophistication and smooth voice leading. Listeners feel the smoothness without consciously hearing it.'
      }
    },

    guitarVoicings: {
      basic: 'Use jazz voicings (7th chord grips) with extensions added. Major7, minor7, dominant7 shapes.',
      extended: 'Add 9th to basic shapes. Learn "jazz shapes" with added 9th/11th/13th.',
      inversions: 'Use second and third inversions for smooth voice leading. Less common root position.',
      sparseVoicings: 'Play 2-3 notes instead of full chords. Example: on Dm9, play D on low fret, F and A higher up (skip E). Let other notes breathe.',
      cleanTone: 'Neo-Soul guitar is CLEAN. No distortion. Use reverb sparingly. Let the chord ring naturally.',
      dynamics: 'Play quietly. Let the listener lean in. Volume dynamics are as important as pitch dynamics.',
      technique: 'Fingerstyle or hybrid picking for control. Pluck individual strings, not strum. Deliberate, spaced out.',
      comping: 'Play behind the beat, leave space. Respond to vocals and other instruments, don\'t lead. Percussive hits on offbeats.'
    },

    voiceLeadingHarmony: {
      title: 'Neo-Soul Harmonic Rhythm',
      description: 'Chords change slowly (1-2 bars per chord) creating space. Voice leading between chords is smooth and intentional.',
      voiceLeading: 'Move each note minimally between chords. If C-E-G goes to D-F-A (Dm), move C→D, E→F, G→A (each by step). Smooth, inevitable.',
      minimalMovement: 'This is the secret. Jazz moves notes smoothly. Neo-Soul emphasizes this even more.',
      example: 'Progression CMaj9 → Dm9 → G7#9 → CMaj9. Each note in the voicing moves by half- or whole-step only. Sounds like one continuous flow.'
    }
  },

  rhythm: {
    feel: {
      description: 'Neo-Soul is BEHIND THE BEAT. Notes and chords land just slightly after the click. This creates that laid-back, groovy feel even in slow tempos. Think J Dilla\'s drum programming—notes are on grid but feel organic, slightly swung.',
      written: '4/4 time signature',
      pocket: 'Play on the beat, but relax. Don\'t rush. Groove lives in the space AROUND the beat, not ON it.',
      swing: 'Even in straight 16th note rhythms, add slight swing (first note of pair slightly longer). Creates bounce.',
      visual: 'Imagine the beat as the center. You play just AFTER that center—like a pendulum swinging back.',
      important: 'BEHIND THE BEAT is everything. This is what separates Neo-Soul from standard jazz or R&B. D\'Angelo\'s entire sound is built on this.'
    },

    jDillaGroove: {
      description: 'J Dilla (the legendary hip-hop producer) revolutionized groove by programming drums slightly offbeat. Neo-Soul musicians emulate this feel.',
      concept: 'Drums play "on the grid" but slightly behind. This creates human, organic feel even with programmed drums.',
      practice: 'Play a simple rhythm (hi-hat pattern, bass line) straight on grid. Now push it back slightly (30-50ms). Listen to how it swings without technically being swung.',
      neosoulApplication: 'D\'Angelo\'s Voodoo uses J Dilla techniques. Drums are tight but feel loose. This is the pocket.'
    },

    anticlockwiseSwing: {
      description: 'Subtle swing that feels relaxed, not uptight.',
      technique: 'Instead of crisp triplet swing (which sounds "happy"), use softer, later swing. Lay back slightly.',
      effect: 'Creates groove that feels inevitable and natural, not forced.'
    },

    keys: {
      comping: 'Minimal, spaced out. Play every 2-4 beats, not every beat. Let the bass and drums breathe.',
      timing: 'Hit slightly behind the beat. On beat 1, play at beat 1.2 (slightly after). Creates laid-back feel.',
      touch: 'Light touch on Rhodes/Wurlitzer. Don\'t hammer keys. Let sustain sing.',
      fill: 'Between phrases, add quick chromatic approaches or single-note runs. But SPACE is the default.',
      example: 'Dm9 on beat 1 (slightly behind), hold until beat 3 (slightly behind). Just two hits per 4 bars. That\'s Neo-Soul.',
      rhodes: 'The Rhodes is EVERYTHING in Neo-Soul. Use it for sustained, shimmering voicings. Capture that warm analog tone.',
      wurlitzer: 'Warmer alternative to Rhodes. More intimate. Use for comping (shorter hits) or textural parts.'
    },

    guitar: {
      comping: 'Minimal, percussive. Play on offbeats (the "and" of beats) or syncopated rhythms.',
      muting: 'Light palm muting to add percussive texture. Not aggressive, just presence.',
      arpeggios: 'Use fingerstyle arpeggios between chords. Gentle, flowing. One note per beat, not rapid.',
      dynamics: 'Play very quietly. Volume swells create emphasis instead of attack.',
      phrasing: 'Leave space. Play 2-4 notes, rest. Respond to vocals and other instruments.',
      cleanTone: 'Use reverb for space (small amount), no distortion. Emphasize clarity and sustain.',
      behindBeat: 'Play intentionally late. Lay back. Create pocket with bass player.'
    },

    bass: {
      pocketFeel: 'The foundation of Neo-Soul groove. Bass and drums lock in "behind beat" feel.',
      lineConstruction: 'Use root, 5th, 7th, 9th of chords. Skip triadic movements—play roots, intervals.',
      movement: 'Bass lines are sparse. Play when needed to define chord, leave space otherwise.',
      timing: 'Lay back slightly behind kick drum. Create pocket with drummer.',
      technique: 'Clean tone. Slight percussive attack (pick or slap) but primarily melodic sustain.',
      example: 'Dm9 bass: D (beat 1 slightly late) → A (beat 3 slightly late). Just intervals. Hold.',
      jDillaVibe: 'Like J Dilla drums, bass sits in pocket created by feel rather than technical precision.'
    },

    drums: {
      pocket: 'Tight but laid-back. Kick slightly behind beat, snare slightly behind on 2 & 4.',
      hiHats: 'Tight, crisp. Can be programmed straight or with subtle swing. Defines the pulse.',
      vibe: 'Think D\'Angelo\'s Voodoo—live or programmed, drums feel human and groovy, not mechanical.'
    }
  },

  licks: [
    {
      name: 'The Chromatic Approach (The Neo-Soul Move)',
      description: 'Approach any chord tone from a half-step away. This is THE defining Neo-Soul technique.',
      keys: 'In C Dorian, approaching the root: Play B (half-step below) then resolve to C. Or C# (half-step above) then resolve down to C. The approach creates the sophistication.',
      guitar: 'Same concept. In A Dorian, approaching A: play G# or A#, then resolve to A. Use in leads and fills. Every approach should be intentional.'
    },
    {
      name: 'The Chromatic Run (Smooth Lines)',
      description: 'Connect chord tones using chromatic passing tones. Creates flowing, sophisticated melodies.',
      keys: 'From Dm9 to G9: instead of jumping D→G, play D→C#→C→B→Bb→A→G# (or select key tones: D→Db→C→B→G). Fast or slow, just smooth connection.',
      guitar: 'Same technique. Use on one or two strings for clarity. Fingerstyle for control. Each passing tone is intentional, not random.'
    },
    {
      name: 'The Suspended Resolution (sus→major)',
      description: 'Play suspended chord (sus2, sus4), then resolve to major or minor. Creates anticipation and release.',
      keys: 'Csus4→C (F-C-E then C-E-G). Or Dsus2→D (E-D-F# then F#-D-A). Let the sus ring, then resolve.',
      guitar: 'Csus4 barre chord (low E, 3rd-5th frets, then shift to C major). Creates that sophisticated suspend-resolve sound.'
    },
    {
      name: 'The Minor to Major 7th Transition',
      description: 'Move from minor 7th to major 7th. Creates emotional shift—sad to resolved.',
      keys: 'Dm7 (D-F-A-C) → Dm(Maj7) (D-F-A-C#) → DMaj7 (D-F#-A-C#). Each adds color. Use C#→D to resolve at the end.',
      guitar: 'Same progression. Each voicing is a slight reinterpretation of the previous. Creates smooth emotional arc.'
    },
    {
      name: 'The b9 to 7 Slide (Tension and Release)',
      description: 'Play b9 over dominant chord, then slide or resolve to major 7th.',
      keys: 'G7b9 (G-B-D-F-Ab) → GMaj7 or CMaj7 (depending on context). The Ab is tension, resolution brings peace.',
      guitar: 'Hard to voice all notes, but capture G7 with added b9 concept. Focus on G and F with some tension note.'
    },
    {
      name: 'The Quartal Voicing Float',
      description: 'Use fourths instead of thirds. Creates floating, open harmony.',
      keys: 'C-F-B (all fourths). No traditional chord quality, just harmonic space. Let it float. Often used in ambient sections.',
      guitar: 'Play fourths on guitar: C-F (strings 5-4), then F-B (strings 4-2 or so). Creates open, modern sound.'
    },
    {
      name: 'The Finger-Picking Arpeggio (Guitar Essence)',
      description: 'Fingerstyle arpeggios that suggest chords but don\'t define them rigidly.',
      keys: 'Not applicable—this is guitar-specific.',
      guitar: 'In Dm: play D (thumb) - A (index) - F (middle) - A (ring) - repeat slowly. Each note rings independently. Suggests Dm9 without stating it. Incredibly sophisticated sound.'
    },
    {
      name: 'The Ghost Note Fill',
      description: 'Quick, quiet single-note run between chords. Barely heard but adds sophistication.',
      keys: 'At chord change, play a quick chromatic descent (C→B→Bb→A) in left hand during transition. Barely audible but adds voice leading.',
      guitar: 'Quick run on high strings between chord hits. Let the reverb capture it. Don\'t accent it.'
    },
    {
      name: 'The Upper Structure Triad',
      description: 'Voice a chord by playing a different triad on top of a bass note.',
      keys: 'CMaj7#5: play Em triad (E-G-B) over C bass. Sounds sophisticated and ambiguous.',
      guitar: 'Same concept. Play two or three notes that form a triad different from the intended chord quality. Creates harmonic sophistication.'
    },
    {
      name: 'The Maj9 Shimmer (The Erykah Badu Move)',
      description: 'Play Major 9th chord voicing with space. Creates lush, sophisticated sound.',
      keys: 'CMaj9: LH = C (root, very quiet). RH = E-G-D (3rd-5th-9th clustered but open). Let it ring and shimmer.',
      guitar: 'Play CMaj9 voicing emphasizing the open, spacious quality. Each note rings independently. This is Erykah Badu\'s signature sound.'
    }
  ],

  practice: {
    backingTracks: {
      search: '"Neo-Soul backing track" or "Smooth R&B jam" + your key. Or: "D\'Angelo vibe track", "Erykah Badu style progression"',
      listenFor: 'Tight but laid-back drums (slightly behind beat), spacious chords with extensions, room for melody and air',
      recommended: '80-100 BPM for learning, 100-120 BPM for standard Neo-Soul, 60-80 BPM for slow sensual vibe',
      tip: 'Search: "J Dilla-inspired beat" or "Neo-Soul sample loop" for authentic pocket feel. YouTube and BeatStars have extensive collections.'
    },

    exercises: [
      '1. Play any chord (C major, D minor, G7) and practice leaving SPACE. Hit it, then rest. Resist the urge to fill silence.',
      '2. Chromatic approach exercise: Pick any note (C). Play C# (half-step above) then C. Or B (half-step below) then C. Do this for 10 minutes daily in all keys. This IS Neo-Soul.',
      '3. Rhodes/Wurlitzer voicing practice: Take a ii-V-I progression (Dm9 → G9 → CMaj9). Voice with MINIMAL notes: LH = roots only, RH = one extension per chord. Let it ring.',
      '4. Behind-the-beat exercise: Play straight quarter notes on beat with a metronome. Now push it back 30ms. Feel the pocket.',
      '5. Voice leading lines: Take ii-V-I progression. Arrange voicings so each note in the RH moves by step only. CMaj9 (C-E-G-D) → Dm9 (D-F-A-E) → G9 (G-B-D-A). Smooth, inevitable.',
      '6. Fingerstyle arpeggios (guitar): Learn Dm, G, C in fingerstyle. Play one note per beat, let ring. Feel the space between notes.',
      '7. Transcribe D\'Angelo, Erykah Badu, or Robert Glasper vocals/melodies. Listen for chromatic approaches and space. This is THE way to internalize Neo-Soul phrasing.',
      '8. Play a simple 2-chord vamp (Dm9 - G9, repeat). Practice comping over it: play once every 4 beats, varying voicing and approach tones. Space is king.'
    ],

    songs: [
      { title: 'Untitled (How Does It Feel)', artist: 'D\'Angelo', focus: 'Sparse chords, late harp strings, behind-the-beat vocals, minimal but sophisticated' },
      { title: 'Voodoo', artist: 'D\'Angelo', focus: 'J Dilla-influenced pocket, tight drums with laid-back feel, complex chord changes' },
      { title: 'Feel Like Makin\' Love', artist: 'D\'Angelo', focus: 'Rhodes shimmer, simple progressions played sophisticatedly, sensual timing' },
      { title: 'Tyrone', artist: 'Erykah Badu', focus: 'Minimal arrangements, MPC/Rhodes textures, attitude and phrasing over complexity' },
      { title: 'Window Seat', artist: 'Erykah Badu', focus: 'Maj9 opening chord, spacious feel, conversational vocal phrasing' },
      { title: 'Bag Lady', artist: 'Erykah Badu', focus: 'Live band feel, call-and-response with drums, sophisticated simplicity' },
      { title: 'River Man', artist: 'Robert Glasper (reimagined)', focus: 'Jazz standards reimagined with Neo-Soul pocket, voice leading masterclass' },
      { title: 'Afro Blue', artist: 'Robert Glasper', focus: 'Modal harmony, sparse voicings, deep listening (no rush)' },
      { title: 'Shiver', artist: 'Musiq Soulchild', focus: 'Looped groove, layered vocals, organic production feel' },
      { title: 'Come Through', artist: 'H.E.R.', focus: 'Contemporary Neo-Soul, finger percussion, chord stabs on offbeats' },
      { title: 'The Light', artist: 'Common ft. Talib Kweli', focus: 'Neo-Soul and hip-hop fusion, live musicianship, groovy pocket' },
      { title: 'Black & Blue', artist: 'Jill Scott', focus: 'Vocal ad-libs defining rhythm, complex chords under simple melody' },
      { title: 'A Thousand Kisses Deep', artist: 'Robert Glasper', focus: 'Reimagined standard, sophisticated comping, emotional restraint' },
      { title: 'Ultralight Beam', artist: 'Kanye West ft. Chance the Rapper', focus: 'Gospel meets Neo-Soul, choir arrangement, contemporary production' }
    ],

    progressionPath: [
      {
        level: 'Beginner',
        goal: 'Learn basic ii-V-I in C (Dm9 → G9 → CMaj9) with minimal voicings (1-3 notes per chord). Listen to D\'Angelo, Erykah Badu, and Robert Glasper heavily. Practice leaving silence. Understand "behind the beat" concept—record yourself, listen back, identify when you\'re rushing.'
      },
      {
        level: 'Intermediate',
        goal: 'Master chromatic approach tones. Smooth voice leading across changes (each note moves by step). Learn to voice extended chords (9ths, 11ths, 13ths) in close position or sparse configurations. Practice suspended resolutions. Start improvising over vamps with intention—space first, then notes.'
      },
      {
        level: 'Advanced',
        goal: 'Transcribe entire arrangements (not just melodies). Understand upper structure triads and quartal voicings. Play all 12 keys fluently with clean voice leading. Develop personal sound—some players emphasize space, others cluster voicings, others use extended chords heavily. Feel free to blend influences (Gospel clusters + Jazz voice leading + Hip-hop pocket).'
      }
    ],

    commonMistakes: [
      '❌ Playing ON the beat instead of BEHIND it—Neo-Soul groove dies if you rush or land exactly on grid',
      '❌ Overfilling space—leave silence! More silence = more sophisticated. Less is more.',
      '❌ Using full, dense voicings constantly—voice sparingly. Single notes with reverb > full chords every time.',
      '❌ Ignoring chromatic approach tones—these are the DNA of Neo-Soul sophistication. Every landing deserves an approach.',
      '❌ Straight voice leading (triadic intervals)—move by STEP between chords, not thirds or fourths. Smooth, inevitable motion.',
      '❌ Playing without listening to the space created by bass and drums—you\'re one voice in an ensemble. Respect the pocket.',
      '❌ Using distorted guitar tone—clean is everything. Clarity reveals sophistication.',
      '❌ Rushed phrasing—take time. Let each note breathe. Neo-Soul is not "busy," it\'s intentional.',
      '❌ Ignoring dynamics—volume control creates interest. Play quietly, swell occasionally, then return to quiet.',
      '❌ Generic chord substitutions without purpose—every harmonic choice should serve emotion/pocket, not just "sound jazzy"'
    ]
  }
};
