/**
 * Genre-specific content for theory, rhythm, licks, and practice
 * Organized by genre with instrument-specific guidance
 */

export const genreContent = {
  'Blues': {
    theory: {
      overview: 'Blues is built on tension and release through "blue notes"—notes that bend between major and minor, creating that signature emotional sound. The 12-bar form provides the structure, but the feel comes from how you approach each chord.',

      scales: [
        {
          name: 'Minor Pentatonic Scale',
          formula: '1 - b3 - 4 - 5 - b7',
          description: 'The foundation. Learn this first—5 notes, safe everywhere, always sounds like blues. Every blues solo uses this.',
          example: 'In A: A - C - D - E - G'
        },
        {
          name: 'Minor Blues Scale',
          formula: '1 - b3 - 4 - b5 - 5 - b7',
          description: 'Minor pentatonic + the b5 "blue note." This is THE blues scale. The b5 is the secret sauce—use it as a passing tone or bend into it.',
          example: 'In A: A - C - D - Eb - E - G'
        },
        {
          name: 'Major Blues Scale',
          formula: '1 - 2 - b3 - 3 - 5 - 6',
          description: 'Brighter than minor blues. The movement from b3 to 3 creates that "sweet and sour" blues character. Mix this with minor blues for variety.',
          example: 'In A: A - B - C - C# - E - F#'
        }
      ],

      blueNotes: {
        description: 'The notes that define the blues sound—they create tension against the major chords of the 12-bar progression.',
        notes: [
          { note: 'b3 (flat third)', usage: 'Bend up from b3 to 3 for that crying sound. This is THE blues move.' },
          { note: 'b5 (flat fifth)', usage: 'The "blue note." Use as a quick passing tone or a destination for bends. Don\'t sit on it—move through it.' },
          { note: 'b7 (flat seventh)', usage: 'The foundation. Every dominant chord in blues has this. Play it confidently.' }
        ]
      },

      scalesVsChords: {
        title: 'The Blues Paradox: Minor Scales Over Major Chords',
        explanation: 'Here\'s what creates the blues sound: the scales above are for playing LICKS and SOLOS. But the CHORDS in blues are built from the major scale, not the blues scale. This creates beautiful tension.',
        example: 'You play minor pentatonic (with b3) in your solo, while the band plays major dominant 7th chords (with natural 3). That clash—minor melody over major harmony—IS the blues.',
        why: 'The blues scales have gaps (no 2nd, 6th, or 7th in minor pentatonic). You can\'t build full chords from them. So blues chords come from the major scale, creating the characteristic major/minor ambiguity.'
      },

      chordConstruction: {
        description: 'Blues chords are built from STANDARD SCALES (major, natural minor, Dorian), not from blues scales. This is why we can have 7th chords even though the blues scales don\'t show a 7th degree.',
        majorBlues: 'In MAJOR blues (most common), all chords are dominant 7ths built from the major scale: I7, IV7, V7.',
        minorBlues: 'In MINOR blues (like "Black Magic Woman"), the i7 and iv7 are minor 7th chords (1-b3-5-b7) built from natural minor/Dorian. The V7 is still dominant. Example in C minor: Cm7 (i7), Fm7 (iv7), G7 (V7).',

        triads: {
          explanation: 'Start with the basic major triad—built from scale degrees 1, 3, and 5 of the major scale.',
          formula: '1 - 3 - 5',
          example: 'I chord = Root, Major 3rd, Perfect 5th'
        },

        dominant7th: {
          explanation: 'Add the b7 (flatted 7th scale degree) to the major triad. This creates a dominant 7th chord—the backbone of major blues.',
          formula: '1 - 3 - 5 - b7',
          example: 'I7 chord = Root, Major 3rd, Perfect 5th, Minor 7th',
          why: 'The b7 creates tension (a tritone with the 3rd) that wants to resolve. In blues, we never fully resolve it—that tension IS the blues sound.',
          tritone: 'A tritone is an interval of 3 whole steps (6 half-steps)—exactly half an octave. In C: C7 has E (3rd) and Bb (b7), which form a tritone. This interval sounds unstable and wants to resolve, but in blues we stay on that edge of tension.'
        },

        extensions: {
          whatTheyAre: 'Extensions are notes beyond the 7th. The 7th (b7 in dominant chords) is part of the base chord. Extensions add color without changing the chord\'s function.',
          naming: 'Extensions are named by their theoretical position in the scale, counting up from the root: 9th (the 2nd note, an octave up), 11th (the 4th, an octave up), 13th (the 6th, an octave up). The names come from theory, NOT from how far you stretch your hand.',
          common: [
            { interval: '9th', description: 'The 2nd note of the scale. In C: D is the 9th. Adds brightness and shimmer.' },
            { interval: '11th', description: 'The 4th note of the scale. In C: F is the 11th. Often raised to #11 to avoid clashing with the 3rd.' },
            { interval: '13th', description: 'The 6th note of the scale. In C: A is the 13th. Creates a sophisticated, jazzy blues sound.' }
          ],
          inPractice: 'You DON\'T play these notes an octave higher when voicing chords—you\'d run out of fingers and keyboard space. Instead, you play them in close position (clustered together within comfortable hand reach). The "9th" is just the NAME, not the distance. See "Piano Voicings" section below for how to actually play these.'
        }
      },

      whyDominant7th: {
        question: 'Why dominant 7th and not major 7th?',
        answer: 'Major 7th chords (1-3-5-7) sound too resolved and pretty for blues. The b7 in dominant chords creates the "unresolved yearning" that defines blues. Every I, IV, and V chord in the 12-bar blues is a dominant 7th.',
        comparison: 'In C: CMaj7 (C-E-G-B) sounds complete and peaceful. C7 (C-E-G-Bb) sounds restless and edgy. Blues stays in that restless space.'
      },

      pianoVoicings: {
        title: 'How to Voice Blues Chords on Piano',

        shellVoicing: {
          concept: 'A "shell voicing" plays only the essential notes that define the chord, leaving out less important ones. This creates clarity and leaves room for extensions.',
          leftHand: 'Left hand plays root + b7 (two notes). This is the shell—it defines the dominant 7th quality. Example in C: play C (low) + Bb above it, about an octave apart or less.',
          optional5th: 'You can add the 5th between root and b7 for fuller sound (root + 5th + b7). In C: C + G + Bb. But the 5th is optional—it doesn\'t define major vs minor, so we often skip it for clarity.',
          whySkip5th: 'The 5th is the least important note. It doesn\'t tell you if the chord is major or minor, and it can make the left hand muddy in the low register. The root and b7 are essential—they define "dominant 7th."'
        },

        addingExtensions: {
          rightHand: 'Right hand plays the 3rd plus extensions, all clustered together in close position (within comfortable hand reach, usually within an octave).',
          why3rdInRightHand: 'The 3rd goes in the right hand because it defines major vs minor and needs to be heard clearly in the mid-range where melody lives.',
          whichExtensions: 'Most common in blues: add the 9th and 13th. Skip the 11th (or raise it to #11) because the natural 11th clashes with the 3rd.',
          example: 'In C: C7 with extensions = Left hand: C + Bb (the shell, low register). Right hand: E + D + A (clustered in mid-register). That\'s the 3rd, 9th, and 13th in close position—NOT spread across two octaves.',
          voiceLeading: 'The right hand notes don\'t have to be in "numerical order." You arrange them for smooth voice leading and comfortable hand position. E + D + A might be voiced as D-E-A (low to high on keyboard) or E-A-D depending on context.'
        },

        crushTechnique: {
          description: 'The "crush" - signature blues piano move. Play b3 and 3 simultaneously in the right hand, then release the b3.',
          example: 'In C: play Eb + E together (crunch!), then release the Eb and hold the E. Creates that blues "sweet and sour" sound.',
          when: 'Use this on the backbeat (beats 2 and 4) or at the start of phrases for instant blues flavor.'
        },

        other: 'Use octave tremolo in the bass (rapidly alternating between root and root an octave higher) to add driving energy. Add high octave "pings" on the root between phrases for punctuation.'
      },

      guitarVoicings: {
        basic: 'Use dominant 7th barre chords or "cowboy chords" (open E7, A7, D7). Add the b7 to any major chord to make it blues.',
        learning: 'Learn the 12-bar in open position first, then move to moveable shapes.',
        mixing: 'Mix chord hits with pentatonic licks (call and response with vocals or other instruments).',
        extensions: 'Add the 9th by finding where the 2nd/9th note sits in your chord shape. Instant sophistication.'
      },

      bluesForm: {
        title: 'The 12-Bar Blues Structure',
        description: 'The 12-bar blues is the foundational form. It\'s 12 measures (bars) long, using three chords: I7, IV7, and V7. Once you know this pattern, you can play thousands of blues songs.',
        structure: [
          { bars: '1-4', chord: 'I7', description: 'Start on the I7 chord. Stay here for 4 bars. This establishes "home."' },
          { bars: '5-6', chord: 'IV7', description: 'Move to IV7 for 2 bars. This is the "departure"—creates tension by leaving home.' },
          { bars: '7-8', chord: 'I7', description: 'Return to I7 for 2 bars. Back home, but not resolved yet.' },
          { bars: '9', chord: 'V7', description: 'The V7 for 1 bar. Maximum tension—this REALLY wants to resolve.' },
          { bars: '10', chord: 'IV7', description: 'IV7 for 1 bar. Eases the tension slightly before going home.' },
          { bars: '11-12', chord: 'I7 → V7', description: 'The "turnaround": back to I7, then end on V7 to loop back to the start. Or end on I7 to finish the song.' }
        ],
        quickChange: 'Quick-change blues: moves to IV7 in bar 2 instead of bar 5. Creates earlier movement and more momentum.',
        barNumbers: 'When licks mention "bar 4" or "bars 11-12," they\'re referencing specific moments in this 12-bar cycle.'
      },

      turnaround: {
        description: 'The last 2 bars of the 12-bar blues—where you "turn around" back to the top. This is where blues players show their personality.',
        common: 'I7 → V7 (bars 11-12). Often embellished with chromatic walkdowns or quick licks that resolve to the V7.',
        keys: 'Walk down chromatically in the bass (e.g., in C: C → B → Bb → A → Ab → G) while holding the I7 chord shape.',
        guitar: 'Classic riff: Play the I7, then walk down the 6th string to V7. Or use the "turnaround lick" (descending blues scale phrase landing on V7).'
      },

      typicalKeys: {
        description: 'Blues gravitates toward guitar-friendly keys with open strings and natural vocal ranges.',
        common: 'E, Em, A, Am, G (most common). Also C, D.',
        why: 'E and A let guitarists use open strings for bass notes and easier bends. These keys also fit typical male vocal ranges (chest voice). Historically, early blues guitarists learned in these keys first.',
        avoid: 'Db, Gb, Eb, Ab (less common)',
        whyAvoid: 'Lots of flats = harder guitar fingerings (no open strings to lean on). More common in jazz-influenced blues where piano dominates.'
      }
    },

    rhythm: {
      feel: {
        description: '12/8 shuffle—the heartbeat of blues. Often written in 4/4 but felt as triplets (ONE-da-da TWO-da-da). Like a rolling wheel or a train on tracks.',
        written: '4/4 time signature',
        feels: 'Triplet subdivision: each beat divides into three (quarter note = 3 eighth notes)',
        visual: 'Count: 1-trip-let 2-trip-let 3-trip-let 4-trip-let',
        important: 'DON\'T play straight eighth notes in blues—it kills the feel. Always shuffle.'
      },

      callAndResponse: {
        description: 'Call and response is the conversational structure of blues. You play a phrase (call), rest while it sinks in, then play another phrase (response). This creates space and drama.',
        why: 'Silence is as important as sound in blues. The space between phrases lets each idea breathe. It\'s like a conversation—you don\'t talk over the other person.',
        practice: 'Play a 2-bar lick, rest for 2 bars. The rests are when you listen to the band and let the audience absorb what you played. This is why blues sounds conversational, not like continuous scales.'
      },

      keys: 'Emphasize the shuffle in your left hand bass line. Play root on beat 1, 5th on the "let" of 1, root on beat 2. The "crush" slide (b3→3) on the backbeat. Use tremolo on held chords to keep energy. High octave "pings" on the root between phrases.',

      guitar: 'Keep the shuffle going with your strumming hand—down on the beat, up on the "da" (the last triplet). Palm mute verses, open up for solos. The turnaround is key: learn riffs that walk you back to V7. Mix rhythm chords with pentatonic lead licks (call & response with vocals).',

      backbeat: 'Blues lives on beats 2 and 4 (snare hits). Everything else supports this. When in doubt, accent 2 and 4.'
    },

    licks: [
      {
        name: 'The Bend (b3 to 3)',
        description: 'The signature blues move—bend the b3 up to the major 3rd. This is the "crying" sound.',
        keys: 'Play b3 and 3 simultaneously then release the b3 (the "crush"). Or play them quickly in sequence (grace note).',
        guitar: 'Bend the b3 (usually on the G or B string) up a half-step to the 3. Pre-bend it, then release while picking. Experiment with quarter-tone bends (not quite reaching the 3) for more expression.'
      },
      {
        name: 'Classic Turnaround Lick',
        description: 'The phrase that brings you back to the top of the 12-bar. Happens in bars 11-12.',
        keys: 'Descending chromatic line from the root (or b7) down to the 5th (e.g., in C: C → Bb → A → Ab → G), landing on the V7 chord.',
        guitar: 'Descending blues scale phrase starting on the 5th, ending on the root of V7. Add bends and vibrato. Classic example: B.B. King\'s turnaround in "The Thrill Is Gone."'
      },
      {
        name: 'The Albert King Box Bend',
        description: 'Start with a bent note (b3 bent to 3), release to b3, pull off to root. Three notes, one string.',
        keys: 'Not applicable—use the crush technique instead.',
        guitar: 'On the G string in A blues: Bend 5th fret (C, the b3) up to C# (3), release back to C (b3), pull off to A at 2nd fret. Practice this slowly until it sings.'
      },
      {
        name: 'Sixth Interval Jump',
        description: 'Jump from the root to the 6th—creates a bright, major blues sound against minor pentatonic.',
        keys: 'Play root in left hand, jump to 6th in right hand, then continue up the major blues scale.',
        guitar: 'In A blues: play open A string, jump to F# on the D string (4th fret). Classic move in uptempo blues shuffles.'
      },
      {
        name: 'Quick IV Walk-Up',
        description: 'Walk from I to IV chromatically in bar 4 of the 12-bar. Smooths the transition.',
        keys: 'In C: walk bass C → D → Eb → E (arriving at F chord in bar 5). Play these on beats 1-2-3-4 of bar 4, landing on F in bar 5.',
        guitar: 'Walk up chromatically on the bass strings from I root to IV root. Classic Chicago blues move. In C: C (beat 1) → D (beat 2) → Eb (beat 3) → E (beat 4) → F (bar 5).'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Slow Blues Backing Track 12/8" or "Blues Shuffle Backing Track" + your key',
        listenFor: 'Triplet shuffle feel, heavy snare on 2 and 4, space for you to respond',
        recommended: 'Start at 60-80 BPM (slow blues), work up to 120+ BPM (shuffle)',
        tip: 'Search for artist-specific tracks: "BB King Style Backing Track" or "Stevie Ray Vaughan Blues Backing Track"'
      },

      exercises: [
        '1. Practice the b3 to 3 bend until it\'s perfectly in tune. Use a tuner.',
        '2. Learn 3 turnaround licks and practice them over a backing track',
        '3. Call and response: play a lick, rest, play another lick. Leave space.',
        '4. One-note solo: play an entire 12-bar chorus using only one note (root or 5th) with different rhythms and dynamics',
        '5. Play the 12-bar blues progression in your chosen key while improvising short licks over it'
      ],

      songs: [
        { title: 'Black Magic Woman', artist: 'Santana', focus: 'Minor blues, smooth transitions, modal sound' },
        { title: 'Pride and Joy', artist: 'Stevie Ray Vaughan', focus: 'Texas shuffle, major pentatonic, aggressive attack' },
        { title: 'Sweet Home Chicago', artist: 'Robert Johnson / Blues Brothers', focus: 'Classic 12-bar structure, turnarounds' },
        { title: 'Red House', artist: 'Jimi Hendrix', focus: 'Slow blues, emotional bends, chord melody' },
        { title: 'Stormy Monday', artist: 'T-Bone Walker / Allman Brothers', focus: 'Jazz-influenced blues, 9th chords, smooth voice leading' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn 12-bar blues in A (I7→I7→I7→I7→IV7→IV7→I7→I7→V7→IV7→I7→V7). Memorize minor pentatonic scale. Practice shuffle rhythm.', timeframe: 'Weeks 1-4' },
        { level: 'Intermediate', goal: 'Add turnarounds, play call-and-response with vocals/solos, learn major and minor blues scales, practice the b3→3 bend.', timeframe: 'Months 2-4' },
        { level: 'Advanced', goal: 'Improvise full 12-bar solos, use chord tones as targets, mix major/minor sounds, play rhythm and lead simultaneously (chord melody).', timeframe: 'Months 6+' }
      ],

      commonMistakes: [
        '❌ Playing straight eighth notes instead of shuffle—kills the groove',
        '❌ Staying in one position of the pentatonic scale—sounds repetitive',
        '❌ Overbending notes—subtlety matters, not every note needs a bend',
        '❌ Playing constantly without leaving space—blues is about tension and release',
        '❌ Ignoring the chord changes—your licks should acknowledge I, IV, and V'
      ]
    }
  },

  // Pop genre content
  'Pop': {
    theory: {
      overview: 'Contemporary Pop (2010s-2020s) is built on SIMPLICITY WITH HOOKS. Three or four chords support a memorable melody—the song IS the hook. Chord progressions are predictable by design, allowing listeners to anticipate and participate. Production matters as much as music: synths, programmed drums, and layered vocals define the sound more than traditional instrumentation.',

      scales: [
        {
          name: 'Major Scale',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
          description: 'The foundation. Pop melodies live here. Bright, optimistic, singable. This is THE scale for pop melody.',
          example: 'In C: C - D - E - F - G - A - B'
        },
        {
          name: 'Natural Minor Scale',
          formula: '1 - 2 - b3 - 4 - 5 - b6 - b7',
          description: 'For darker, introspective pop songs. Think Billie Eilish. Sad but still singable—the b3 and b7 soften the major brightness.',
          example: 'In A: A - B - C - D - E - F - G'
        },
        {
          name: 'Major Pentatonic Scale',
          formula: '1 - 2 - 3 - 5 - 6',
          description: 'Five notes. Pure simplicity. No 4th (which can sound clashing) and no b7. Extremely popular in Pop hooks because you literally cannot hit a "wrong" note. Ed Sheeran and The Weeknd use this constantly.',
          example: 'In C: C - D - E - G - A'
        },
        {
          name: 'Minor Pentatonic Scale',
          formula: '1 - b3 - 4 - 5 - b7',
          description: 'Five notes with the "sad" quality. Used for rap-influenced pop, trap-influenced pop (Ariana Grande, Billie Eilish). The b3 and b7 over major chords create the minor-over-major tension.',
          example: 'In A: A - C - D - E - G'
        }
      ],

      melodicVsHarmonic: {
        title: 'Pop Scales: For Melody and Hooks',
        explanation: 'These scales are your MELODIC toolkit—use them for vocal lines, hooks, and instrumental melodies. Pop CHORDS (shown below) are built separately, using standard major/minor harmony.',
        example: 'You might sing a melody using Minor Pentatonic while the band plays major triads underneath. That\'s intentional—creates tension and the modern pop sound.',
        simplicity: 'Pop deliberately keeps melody simple (pentatonic scales have no "wrong" notes) while chords provide harmonic foundation. The hook IS the melody—keep it singable, memorable, based on these simple scales.'
      },

      typicalKeys: {
        description: 'Pop gravitates toward radio-friendly keys that fit common vocal ranges and sound bright in modern production.',
        common: 'C, G, D, A, F, Am, Em, Dm (most common in charts)',
        why: 'These keys fit typical vocal ranges (C3-C6 for mixed voices). C/G/D are "neutral bright"—not too aggressive, not too dark. Digital production works easily in any key, so vocal comfort drives the choice.',
        avoid: 'Keys with many accidentals (F#, Db, Gb, Eb minor)',
        whyAvoid: 'Not avoided for technical reasons (DAWs transpose instantly), but these keys psychologically feel "sharp" or "flat" to casual listeners. Pop aims for accessibility.'
      },

      chordConstruction: {
        description: 'Pop chords are simple triads and 7th chords. The progression matters more than chord complexity. Repetition creates hooks.',

        triads: {
          explanation: 'Pop lives on triads—major and minor. Three notes: root, 3rd, 5th.',
          formula: '1 - 3 - 5',
          example: 'I chord = Root, Major 3rd, Perfect 5th'
        },

        seventh: {
          explanation: 'When pop uses 7ths, they add warmth without complexity.',
          major7th: {
            formula: '1 - 3 - 5 - 7',
            example: 'IMaj7 = Root, Major 3rd, Perfect 5th, Major 7th',
            usage: 'Used on I and IV chords for dreamy, nostalgic feel. Ariana Grande, The Weeknd.'
          },
          dominant7th: {
            formula: '1 - 3 - 5 - b7',
            example: 'V7 = Root, Major 3rd, Perfect 5th, Minor 7th',
            usage: 'Used on V chord to create tension before resolving to I. Found in retro pop (Bruno Mars, Dua Lipa).'
          }
        },

        suspendedChords: {
          explanation: 'Pop uses sus2 and sus4 chords for texture and anticipation. Replace the 3rd with 2nd or 4th.',
          sus2: {
            formula: '1 - 2 - 5',
            usage: 'Bright, open sound. Creates space for vocals. Found in intros and breakdowns.'
          },
          sus4: {
            formula: '1 - 4 - 5',
            usage: 'Anticipation and tension. Often resolves to major triad. The Weeknd, Coldplay use this.'
          }
        },

        add9: {
          explanation: 'Add9 chords = triad + 9th (2nd note). Creates shimmer without full 7th chord complexity.',
          formula: '1 - 3 - 5 - 2',
          usage: 'Everywhere in modern pop. Adds color while staying simple. Taylor Swift, Ed Sheeran.'
        }
      }
    },

    rhythm: {
      feel: {
        description: 'Four-on-the-floor beats (kick on every beat), syncopated melodies on top, trap-influenced hi-hats. Pop feels MODERN and PROGRAMMED—precise, not swinging.',
        written: '4/4 time signature',
        important: 'The kick drives the song. Straight eighth or sixteenth notes in hi-hats.'
      }
    },

    licks: [
      {
        name: 'The Pop Vocal Riff',
        description: 'A 1-4 bar melody hook using major pentatonic. Single line, super singable. This is THE pop melody technique.',
        keys: 'Use the 1-3-5-6 notes from major pentatonic. Play stepwise patterns like 1-3-1-3-5-6-5 over your I-V-vi-IV progression. Keep it simple—the simpler the hook, the more memorable.',
        guitar: 'Single-note line on one or two strings. Clean tone, let each note ring. Add slight delay for space. Think Ed Sheeran, The Weeknd.'
      },
      {
        name: 'The Add9 Arpeggio',
        description: 'Broken chord pattern using add9 voicings. Creates shimmering, modern texture.',
        keys: 'Play 1-3-5-2 ascending (add9 arpeggio), then descend. Repeat this pattern over each chord in your progression. The 2nd (9th) adds that "sparkle" sound.',
        guitar: 'Pick individual notes of add9 chord shape. Use open strings where possible for ringing sustain. Popular in Coldplay, The Weeknd\'s production.'
      },
      {
        name: 'Pentatonic Hook',
        description: 'Simple 2-3 note melodic cell repeated with variation. The foundation of pop songwriting.',
        keys: 'Pick any 2-3 notes from major pentatonic (1-2-3-5-6). Repeat the SAME cell with different rhythm each time. Example: 1-3-5, 1-3-5, 1-3-5 but vary the timing.',
        guitar: 'Stay in one position. Simplicity is the point—let the rhythm and production do the work. This is how hooks are born.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Pop Backing Track" + your key. Or "I-V-vi-IV backing track"',
        listenFor: 'Four-on-the-floor kick, syncopated hi-hats, space for melody',
        recommended: '90-110 BPM (slower), 120+ BPM (dance pop)'
      },

      exercises: [
        '1. Learn I-V-vi-IV in your key. Write a simple 4-bar melody hook.',
        '2. Play pentatonic scales in your key.',
        '3. Improvise melodies over I-V-vi-IV using major pentatonic.'
      ],

      songs: [
        { title: 'Shake It Off', artist: 'Taylor Swift', focus: 'I-V-vi-IV progression, ultra-simple melody' },
        { title: 'Levitating', artist: 'Dua Lipa', focus: 'Major pentatonic melody, disco-pop groove' },
        { title: 'Blinding Lights', artist: 'The Weeknd', focus: 'Minimal progression, synth arpeggios' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn I-V-vi-IV. Write simple melody hooks using pentatonic.' },
        { level: 'Intermediate', goal: 'Learn multiple pop progressions. Add sus2 and add9 textures.' },
        { level: 'Advanced', goal: 'Understand production techniques. Write complete pop songs.' }
      ],

      commonMistakes: [
        '❌ Using too many chords—stick to 2-4 chords',
        '❌ Making melody too complex—keep it simple and singable',
        '❌ Ignoring production—beat/drums/synths matter as much as chords'
      ]
    }
  },

  'Jazz': {
    theory: {
      overview: 'Jazz is built on harmonic sophistication and conversational melody. The ii-V-I progression is the foundation. Extended chords (7ths, 9ths, 11ths, 13ths) are essential. The language is chord-scale relationships—different scales for different chords, not one scale for the whole song.',

      chordConstruction: {
        description: 'Jazz uses extended chords as the default—7th chords are basic, 9ths, 11ths, and 13ths are standard color. Triads sound incomplete and un-jazzy. Understanding chord construction is essential because chord-scale theory connects scales to chord types.',

        triads: {
          explanation: 'Three-note chords: root, 3rd, 5th. Jazz rarely uses plain triads—they sound bare. But understanding triads is the foundation.',
          formula: '1 - 3 - 5',
          example: 'C major triad = C - E - G',
          why: 'The 3rd determines major (happy) vs minor (sad). The 5th provides stability. But triads lack sophistication—jazz adds more.'
        },

        seventhChords: {
          explanation: 'Add the 7th scale degree to the triad. The 7th defines the chord\'s harmonic function. This is where jazz starts.',
          formula: '1 - 3 - 5 - 7',
          types: 'Four main types: Maj7 (1-3-5-7), m7 (1-b3-5-b7), Dom7 (1-3-5-b7), m7b5 (1-b3-b5-b7)',
          example: 'In C: CMaj7 = C-E-G-B, Dm7 = D-F-A-C, G7 = G-B-D-F, Bm7b5 = B-D-F-A',
          why: 'The 7th determines function: Maj7 = stable, resolved, "home." Dom7 = tension, wants to resolve. m7 = transitional, moving. m7b5 = fragile, unstable.',
          sound: 'Maj7 sounds pretty and complete. Dom7 sounds tense and unresolved. m7 sounds smooth and jazzy. m7b5 sounds dark and searching.'
        },

        extensions: {
          explanation: 'Extensions add notes beyond the octave: 9th (2nd octave higher), 11th (4th octave higher), 13th (6th octave higher). Jazz players use extensions constantly for color and sophistication.',
          formula: '1 - 3 - 5 - 7 - 9 - 11 - 13',
          example: 'Cmaj13 contains: C (root), E (3rd), G (5th), B (7th), D (9th), F (11th), A (13th)—all 7 notes of C major scale stacked in 3rds',
          voicing: 'You rarely play all 7 notes. Pick root + 3rd + 7th (defines the chord) + one or two extensions for color. Example: C-E-B-D (CMaj9 voicing).',
          why: 'Extensions add harmonic richness without changing the chord\'s function. CMaj7, CMaj9, CMaj13 all function as "I" chord—extensions just add color.',
          tensions: 'Available tensions depend on chord type. Major 7 chords can use 9 and 13 freely, but 11 clashes (half-step above 3rd). Dominant 7 chords can alter tensions (b9, #9, #11, b13) for color.'
        },

        practical: {
          title: 'Why This Matters for Chord-Scale Theory',
          explanation: 'Every scale in jazz is chosen to match a chord TYPE. When you see Dm7, you know: root (D), minor 3rd (F), 5th (A), minor 7th (C). The scale you choose (D Dorian) contains those chord tones PLUS the available extensions (9, 11, 13). That\'s the connection—scales provide chord tones + color notes.',
          example: 'Dm7 uses D Dorian (D-E-F-G-A-B-C). Chord tones: D-F-A-C. Extensions: E (9th), G (11th), B (13th). All safe to use. That\'s why D Dorian works over Dm7.'
        }
      },

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

      typicalKeys: {
        description: 'Jazz keys are driven by horn instruments (Bb and Eb instruments) and the expectation that musicians can play in all 12 keys.',
        common: 'C, F, Bb, Eb, G, Dm, Am (horn-friendly and piano-friendly)',
        why: 'Bb and Eb are "concert pitch" keys for saxophones and trumpets (Bb instruments read C, sound Bb). F and Bb are also comfortable for piano. But jazz musicians practice all 12 keys—transposing ii-V-I around the circle of fifths is standard training.',
        avoid: 'None—jazz players are expected to handle all keys',
        whyAvoid: 'Jazz culture values fluency in all 12 keys. If you can\'t play a standard in F#, you\'re not ready for the bandstand. However, Bb, F, Eb, and C appear most often in the Real Book because they\'re horn-friendly.'
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
        important: 'Swing is feel-based, learned by listening to recordings.'
      }
    },

    licks: [
      {
        name: 'The ii-V-I Bebop Line',
        description: 'The most important lick in jazz.',
        keys: 'In C: Dm7 (F-E-D-C#) → G7 (B-Bb-A-G#) → CMaj7 (E-D-C#-B). Guide tones with chromatic approaches.',
        guitar: 'Play guide tones with chromatic approach notes.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Jazz ii-V-I backing track" or jazz standards by name',
        listenFor: 'Walking bass, swinging hi-hat, clear chord changes',
        recommended: '120 BPM (medium), 200+ BPM (bebop), 60-80 BPM (ballad)'
      },

      exercises: [
        '1. Learn ii-V-I in all 12 keys with guide tones.',
        '2. Practice bebop enclosure.',
        '3. Learn three jazz standards.',
        '4. Transcribe a solo from a recording.'
      ],

      songs: [
        { title: 'Autumn Leaves', artist: 'Bill Evans / Miles Davis', focus: 'Classic ii-V-I progression' },
        { title: 'All the Things You Are', artist: 'Charlie Parker', focus: 'Complex key modulations' },
        { title: 'So What', artist: 'Miles Davis', focus: 'Modal jazz, Dorian mode' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn 3 simple standards. Understand ii-V-I in 1-2 keys.' },
        { level: 'Intermediate', goal: 'Master ii-V-I in all 12 keys. Learn bebop enclosures.' },
        { level: 'Advanced', goal: 'Improvise over complex changes. Play rootless voicings.' }
      ],

      commonMistakes: [
        '❌ Playing straight eighths instead of swinging',
        '❌ Ignoring guide tones',
        '❌ Comping too much—leave space',
        '❌ Not listening enough to recordings'
      ]
    }
  },

  'Gospel': {
    theory: {
      overview: 'Gospel is built on rich harmonic movement and emotional expression. Extended chords (9ths, 11ths, 13ths) are the default—not fancy additions. The sound comes from chromatic voice leading, cluster voicings, and the constant push-pull of tension and release. Where blues stays on the I7 chord, Gospel keeps moving.',

      melodicApproach: {
        title: 'Gospel Melody: Chord Tones + Chromatic Motion',
        coreIdea: 'Gospel melody doesn\'t stay in scales—it moves through CHORD TONES connected by CHROMATIC RUNS. You\'re not "in G Mixolydian," you\'re "targeting G7 chord tones and approaching them chromatically with runs and slides."',

        howItWorks: {
          explanation: 'Over a Gospel progression (Dm7 → G7 → CMaj7), you target the chord tones of each chord and connect them with chromatic passing tones and runs. The motion IS the Gospel sound.',
          dm7Example: 'Target D, F, A, C (Dm7 chord tones). Connect them with chromatic motion—E-Eb-D, F-E-F, G-Ab-A.',
          g7Example: 'Target G, B, D, F (G7 chord tones). Use the 3-to-1 slide: B-Bb-A-Ab-G. Or chromatic walkup: F-F#-G.',
          cmaj7Example: 'Target C, E, G, B (CMaj7 chord tones). Land on root with the 3-to-1: E-Eb-D-Db-C. This is THE Gospel ending.'
        },

        threeKeyTechniques: {
          threeToOneSlide: {
            name: 'The 3-to-1 Chromatic Slide',
            formula: '3 - b3 - 2 - b2 - 1 (or just 3 - b3 - 2 - 1)',
            description: 'From scale degree 3, descend chromatically to root. THE signature Gospel lick.',
            inC: 'E - Eb - D - Db - C (or E - Eb - D - C for quicker version)',
            when: 'End of phrases, landing on I chord, turnarounds. Gospel pianists do this every 4 bars.',
            why: 'Creates inevitable, smooth resolution. The chromatic descent (half-steps) pulls strongly to the root.',
            practice: 'Learn in all 12 keys. This appears in EVERY Gospel song. Literally every one.'
          },

          chromaticWalkup: {
            name: 'Chromatic Walkup to Next Chord',
            description: 'Walk up chromatically to the root (or 5th) of the next chord. Fast 16th notes.',
            example: 'C to G7: play C-C#-D-D#-E-F-F#-G (landing on G7 in next bar)',
            when: 'Last beat of the measure, connecting one chord to the next.',
            why: 'Fills space, creates forward momentum, builds energy.',
            speed: 'FAST. Practice slowly, speed up until it sounds like a blur. Gospel runs are quick.',
            practice: 'Pick two chords. Find chromatic path between their roots. Walk it in 16th notes until automatic.'
          },

          chromaticApproachTones: {
            name: 'Half-Step Approaches to Chord Tones',
            description: 'Don\'t land directly on chord tones—approach from half-step above or below.',
            example: 'Landing on C (root of CMaj7): approach from B (below) or Db (above). Creates smooth, inevitable resolution.',
            overG7: 'Over G7, approach B (3rd) from Bb. Approach F (7th) from E or Gb. These are guide tones—most important to target.',
            why: 'Half-step motion is STRONG. It creates expectation and smooth voice leading.',
            practice: 'Over any chord, play chord tones approached chromatically. Don\'t jump—glide into every important note.'
          }
        },

        vsJazz: 'Jazz uses chord-scale theory (stay in D Dorian over Dm7, switch to G Mixolydian over G7). Gospel uses chord-tone targeting + chromatic motion. More freedom, more runs, more "churchy" energy.',

        vsBlues: 'Blues uses one scale over the whole progression (minor pentatonic/blues scale). Gospel changes focus with each chord, following the harmony closely with chromatic connection.',

        vsNeoSoul: 'Neo-Soul uses chromatic approaches for smoothness and laid-back feel (one half-step, then resolve). Gospel uses chromatic RUNS for energy and excitement (8-note chromatic walkup at full speed).',

        keyInsight: 'Gospel melody is FUNCTIONAL, not scalar. You\'re creating voice-leading between chords, not playing scales. The 3-to-1 slide, chromatic walkups, and approach tones are your tools. Scales are just reference—the motion is what matters.'
      },

      typicalKeys: {
        description: 'Gospel is keyboard-driven and modulation-heavy. Keys are chosen for emotional impact and ease of modulating up (half-step or whole-step key changes).',
        common: 'C, Db, D, Eb, E, F, Ab (modulation-friendly, organ-friendly)',
        why: 'Gospel songs often modulate UP for energy—C to Db (half-step) or C to D (whole-step). Starting in C, Db, or D sets up multiple modulations. Black-key clusters (Db, Eb, Ab) sound "expensive" on piano. Organ players favor these keys for rich harmonics.',
        avoid: 'Keys far from C (F#, B) unless modulating TO them',
        whyAvoid: 'Gospel pianists learn in C first, build outward. F# and B are endpoints of modulations (you arrive there after multiple key changes), not starting points. Also, congregational singing favors mid-range keys (C-F).'
      },

      referenceScales: {
        title: 'Reference Scales (Context, Not Rules)',
        explanation: 'These scales show the HARMONIC CONTEXT for Gospel—which notes fit the underlying chords. But don\'t think "I\'m playing in this scale now." Gospel is CHROMATIC—you use all 12 notes as passing tones, runs, and connectors. The scales just show the framework.',

        gospelScale: {
          name: 'Gospel Scale',
          formula: '1 - 2 - b3 - 3 - 4 - 5 - 6 - b7',
          description: 'Major scale + blues notes (b3 and b7). Contains both major and minor colors—the Gospel duality.',
          example: 'In C: C - D - Eb - E - F - G - A - Bb',
          usage: 'This shows available melodic colors. The b3→3 movement (Eb to E) is quintessentially Gospel—that "sweet and sour" sound.',
          context: 'You see this scale and think: "I can slide from Eb to E for Gospel flavor." Not "I must stay within these 8 notes."',
          chromatic: 'But remember: Gospel uses ALL 12 notes. This scale is a reference, not a boundary.'
        },

        mixolydian: {
          name: 'Mixolydian Mode',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
          description: 'Major with b7. Shows available notes when sitting on dominant 7th chords.',
          example: 'In G: G - A - B - C - D - E - F',
          usage: 'When Gospel vamps on a V7 chord (G7) for multiple bars, these notes fit the harmony.',
          context: 'Useful when you\'re sustaining one dominant chord. But between chords? Chromatic runs.',
          extensions: 'G7 chord = G-B-D-F. Mixolydian adds 9th (A), 13th (E) as safe extensions. But b9 (Ab) is also Gospel—not in Mixolydian but used constantly.'
        },

        caveat: 'Gospel is CHROMATIC VOICE-LEADING music. You\'re not "in a scale"—you\'re moving between chord tones using chromatic glue. If you try to "stay in Gospel scale" or "stay in Mixolydian," you\'ll miss the chromatic runs that define the sound. Use the scales as reference for harmonic context, but think "chord tones + chromatic motion" when you play.'
      },

      colorTones: {
        description: 'Gospel uses chromatic tones for color and voice leading—they\'re passing tones and tension notes, not defining characteristics like Blues.',
        notes: [
          { note: 'b3 (flat third)', usage: 'Quick slide from b3 to 3 in runs. Creates the "churchy" sound. More passing tone than destination. The Eb→E slide in C is iconic Gospel.' },
          { note: 'b7 (flat seventh)', usage: 'The sound of dominant 7th chords (every V7). Gospel sits on this tension longer than Blues, building anticipation before resolving.' },
          { note: 'b9 (flat ninth)', usage: 'The "illegal" note. Play b9 over dominant chords for maximum tension. Kirk Franklin uses this CONSTANTLY. Sounds "wrong" but resolves beautifully. On G7, play Ab (b9) in cluster with B (3rd)—extreme dissonance, perfect resolution to C.' }
        ],
        chromaticContext: 'These are not "scale degrees"—they\'re CHROMATIC TENSIONS. You use them for color, then resolve. Gospel doesn\'t avoid "wrong" notes—it leans into dissonance and resolves it with voice leading.'
      },

      harmonyVsBlues: {
        title: 'Gospel vs Blues: Harmony in Motion',
        explanation: 'Blues stays on one chord (I7) for 4 bars. Gospel moves CONSTANTLY—ii7 → V7 → I in 2 bars, often with chromatic passing chords in between.',
        example: 'In C: Dm7 (ii) → G7 (V) → CMaj7 (I) is the foundation. But Gospel adds: Dm7 → Db7 → CMaj7 (chromatic approach). Or: Dm7 → G7 → CMaj7 → Am7 → D7 → GMaj7 (immediate re-pivot to new key).',
        why: 'Gospel inherited Blues\' emotional core but added Jazz\'s harmonic sophistication. More chords = more opportunities for tension and release = more emotional peaks.',
        melodicImplication: 'Because chords change every 1-2 bars, Gospel melody must TRACK the harmony. You can\'t play one scale over everything—you must follow the chord progression with chord-tone targeting and chromatic connection.'
      },

      chordConstruction: {
        description: 'Gospel chords are built from major and minor scales, but extended chords (9ths, 11ths, 13ths) are DEFAULT. If you play triads in Gospel, it sounds empty.',

        triads: {
          explanation: 'Basic building block: 1-3-5. Gospel RARELY plays bare triads—they sound too simple.',
          formula: '1 - 3 - 5',
          example: 'C major triad = C-E-G (but you\'ll almost never play this in Gospel without extensions)'
        },

        seventh: {
          explanation: 'The 7th is ALWAYS there. Major 7th (I, IV) vs Dominant 7th (V, secondary dominants) vs Minor 7th (ii, iii, vi).',
          major7th: {
            formula: '1 - 3 - 5 - 7',
            example: 'CMaj7 = C-E-G-B. Stable, resolved sound. Use on I and IV chords.',
            sound: 'Complete, peaceful. This is "home" in Gospel.'
          },
          dominant7th: {
            formula: '1 - 3 - 5 - b7',
            example: 'G7 = G-B-D-F. Tense, wants to resolve. Use on V chord and secondary dominants.',
            sound: 'Unresolved yearning. Sits on this tension, then releases to Major7th.',
            tritone: 'The 3rd and b7 form a tritone (B and F in G7). Gospel exploits this—holds it, decorates it with b9 and 13th, then resolves.'
          },
          minor7th: {
            formula: '1 - b3 - 5 - b7',
            example: 'Dm7 = D-F-A-C. Mellow, sets up the V7. Use on ii, iii, vi chords.',
            sound: 'Transitional, moving toward resolution.'
          }
        },

        extensions: {
          whatTheyAre: 'Gospel REQUIRES extensions. They\'re not decorative—they ARE the Gospel sound. 9ths, 11ths, 13ths are standard, not advanced.',
          naming: '9th = 2nd octave up, 11th = 4th octave up, 13th = 6th octave up. But in Gospel, you play them in close position (clustered), not literally an octave higher.',
          common: [
            { interval: '9th', description: 'On everything. Dm9 instead of Dm7. G9 instead of G7. CMaj9 instead of CMaj7. Adds shimmer and fullness.' },
            { interval: 'b9', description: 'The SECRET. On dominant chords only (V7). G7b9 has Ab over G7. Sounds dissonant alone but resolves perfectly. Kirk Franklin, Tye Tribbett, Israel Houghton—they all use this.' },
            { interval: '11th', description: 'Adds dreamy, suspended quality. Often played as sus4 (4th, not 11th name) on minor chords. Dm11 = D-F-A-C-G. Huge, open sound.' },
            { interval: '13th', description: 'The jazzy sound. Dominant chords with 13th (G13 = G-B-D-F-E) sound sophisticated. If you add b9 AND 13th (G7b9b13), maximum tension—resolves like magic.' }
          ],
          inPractice: 'Stack these in CLOSE POSITION. Left hand: root + 7th (shell). Right hand: 3rd + extensions clustered together. The cluster (2nds, tight voicing) creates the Gospel tension.'
        }
      },

      clusterVoicing: {
        title: 'The Cluster Voicing Secret (Why Gospel Sounds "Expensive")',
        concept: 'Play notes close together (2nds, not 3rds) in the right hand. This creates dissonance that defines modern Gospel sound.',
        why: 'Spreading notes out in 3rds sounds "pretty." Clustering them in 2nds sounds TENSE. Gospel thrives on tension → release.',
        example: 'CMaj9: Left hand = C + B (root and 7th). Right hand = D-E-G (9th, 3rd, 5th) clustered tight. That D-E (9th to 3rd) is a 2nd—it creates the shimmer.',
        Kirk: 'Kirk Franklin stacks 9ths, 11ths, 13ths in the right hand, all within an octave. Not "C major with extensions"—more like "C with a cluster of sound."',
        practice: 'Take any Major7 chord. Left hand: root + 7th. Right hand: play 9th, 3rd, 5th as close together as comfortable. Feel the tension. Now resolve to the I chord—that\'s Gospel.'
      },

      pianoVoicings: {
        title: 'How to Voice Gospel Chords on Piano',

        shellVoicing: {
          concept: 'Left hand plays only essential notes (root + 7th). This is the foundation.',
          leftHand: 'Root + 7th. For Major7: root + major 7th (C + B for CMaj7). For Dominant7: root + b7 (G + F for G7). For Minor7: root + b7 (D + C for Dm7).',
          why: 'Leaves room for the right hand to add extensions without mud. The left hand is the anchor; right hand is the color.'
        },

        rightHandClusters: {
          concept: 'Right hand plays 3rd + extensions in CLOSE POSITION (within an octave, often within a 6th).',
          CMaj9Example: 'CMaj9: LH = C + B (shell). RH = D-E-G (9th, 3rd, 5th clustered). Or E-G-D (3rd, 5th, 9th). Arrange for smoothest voice leading.',
          G7b9Example: 'G7b9: LH = G + F (shell). RH = Ab-B-D (b9, 3rd, 5th clustered). That Ab-B is a minor 3rd—very tight, very tense. Resolves to CMaj9 beautifully.',
          voiceLeading: 'Move the right hand cluster with MINIMAL motion between chords. If CMaj9 (E-G-D) goes to Dm9 (F-A-E), each note moves by step. Smooth voice leading is the Gospel secret.'
        },

        leftRightRightPattern: {
          concept: 'The Gospel comp pattern: Left (bass note) → Right → Right (bounce the right hand cluster twice).',
          feel: 'Left-RIGHT-right, Left-RIGHT-right. The left hand is on the beat, right hand is on the "and" and the next "and." Creates bounce and syncopation.',
          example: 'Count: 1 (left) & (right) 2 (right) & (left) 3 (right) & (right) 4 (right). OR: 1 (left) & (right) 2 & (left) 3 (right) & 4 (right). Vary the pattern—it\'s a feel, not a rule.',
          practice: 'Start slow. Left hand on beats 1 and 3, right hand bounces on "and" of 1, beat 2, "and" of 3, beat 4. This is the heartbeat of Gospel piano.',
          Kirk: 'Kirk Franklin\'s piano parts use this constantly. The right hand "chatter" over a solid left hand bass line.'
        },

        chokeTechnique: {
          description: 'Play the chord, immediately release (staccato). Creates percussive, rhythmic punctuation.',
          when: 'On backbeat (beats 2 and 4) for emphasis. Or at the end of a phrase to "choke" the sound and create space.',
          sound: 'Like a snare hit but harmonic. Adds attack and clarity in dense mixes.',
          practice: 'Play CMaj9, release immediately. Feel the "choke." Now do it on beat 2 of a Gospel progression—instant Gospel rhythm.'
        },

        runs: {
          description: 'Quick scalar passages connecting chords. Gospel runs are FAST and CHROMATIC.',
          ascending: 'Chromatic walkup to the next chord. In C going to G7: play C-C#-D-D#-E-F-F#-G, landing on G7. Use chromatic notes as glue.',
          descending: 'Gospel "fall" or "cascading run." Start high (9th or 13th of the chord), cascade down the scale to root. Use major scale + chromatic passing tones.',
          threeToOne: 'The signature Gospel run: start on 3rd of the scale, slide chromatically down to root. In C: E-Eb-D-Db-C (or just E-Eb-D-C). Play this FAST. Instant Kirk Franklin.',
          practice: 'Learn the 3-to-1 run in all 12 keys. It appears EVERYWHERE in Gospel—ends of phrases, turnarounds, between chords.'
        },

        tremoloAndRepeatingNotes: {
          description: 'Rapid repetition of notes or chords for energy and intensity.',
          tremolo: 'Rapidly alternate between two notes (usually root and 5th, or root and octave) in the left hand. Builds tension.',
          rightHandRepeat: 'Repeat the right hand cluster rapidly (16th notes) while left hand holds the bass. Creates urgency and drive.',
          when: 'During builds, before key changes, in the "shout" section. Maximum energy.'
        }
      },

      guitarVoicings: {
        basic: 'Use Major7, Dominant7, and Minor7 chord shapes. Add 9ths and sus4 chords for Gospel flavor.',
        extensions: 'Add the 9th to any chord. Dm9, G9, CMaj9. Learn the "jazz shapes" with added 9ths—they\'re Gospel staples.',
        sus: 'Sus2 and sus4 chords (replace 3rd with 2nd or 4th) create open, ambiguous sound. Asus2, Dsus4. Resolving sus → major is classic Gospel move.',
        openVoicings: 'Spread the chord across all 6 strings for huge, ringing sound. Use open strings where possible. Very common in contemporary worship (Hillsong, Elevation).',
        rhythmTechnique: 'Muted strumming with quick accents. Palm mute the verses, open up for chorus. Syncopated strumming (hitting on the "and" not the beat) is key.',
        mixing: 'Gospel guitar is often rhythmic, not solo-focused. Comp with the keys, add fills between vocal phrases, play chord stabs on 2 and 4.'
      },

      progressions: {
        title: 'Gospel Harmonic Movement (Not 12-Bar)',
        description: 'Gospel uses VAMPS—short 2-4 bar sections that repeat. The progression moves constantly, not sitting on one chord for bars.',

        iiVI: {
          name: 'ii7 → V7 → I (The Foundation)',
          formula: 'ii7 → V7 → IMaj7',
          inC: 'Dm7 → G7 → CMaj7',
          why: 'The fundamental Gospel progression. Creates strong sense of resolution. Happens constantly—end of every phrase, every turnaround.',
          extensions: 'Make it Dm9 → G7b9 → CMaj9. Now it sounds expensive.'
        },

        amenCadence: {
          name: 'The Amen Cadence (IV → I)',
          formula: 'IVMaj7 → IMaj7',
          inC: 'FMaj7 → CMaj7',
          why: 'The sound of "A-men" at the end of hymns. Gentle, resolved. Very common in traditional Gospel.',
          variation: 'IV → iv → I (FMaj7 → Fm7 → CMaj7). The iv (minor four) adds melancholy before resolving. Stolen from Blues, used constantly in Gospel.'
        },

        chromaticApproach: {
          name: 'Chromatic Approach Chord',
          concept: 'Play a chord a half-step above or below your target, then resolve.',
          example: 'Going to CMaj7? Play Db7 (half-step above), then CMaj7. The Db7 is a "chromatic approach" or "tritone sub."',
          sound: 'Creates surprise and sophistication. The Db7 "shouldn\'t" go to C, but it does—smooth voice leading makes it work.',
          common: 'Dm7 → Db7 → CMaj7 (approach the I from above). Or: Dm7 → G7 → Gb7 → FMaj7 (approach the IV from above).'
        },

        vamp: {
          name: 'The Gospel Vamp',
          description: 'A 2-4 bar section that repeats indefinitely. The band locks into the vamp while the lead improvises.',
          common: 'IMaj7 → VIMaj7 → IIMaj7 → V7 (in C: CMaj7 → AMaj7 → DMaj7 → G7). Repeat forever. Or: I → IV → V → IV (repeat).',
          when: 'End of songs, "shout" sections, builds. The vamp creates hypnotic, trance-like groove. Energy keeps building with each repeat.',
          technique: 'Add fills, runs, and rhythmic variations each time through. Never play it exactly the same twice.'
        },

        secondaryDominants: {
          name: 'Secondary Dominants (Dominant of the Dominant)',
          concept: 'Treat any chord as if it\'s the I, and play its V7. Creates temporary key changes.',
          example: 'In C, going to Dm7 (the ii)? Play A7 (the V of Dm) first. So: A7 → Dm7. You\'ve temporarily treated Dm as the I.',
          sound: 'Adds harmonic richness. Creates more tension points. Gospel uses these CONSTANTLY.',
          notation: 'Written as V7/ii (five of two), V7/vi (five of six), etc. In C: A7 is V7/ii, E7 is V7/vi.'
        },

        modulation: {
          name: 'Key Change / Modulation',
          description: 'Change the key of the song, usually up a half-step or whole-step. Creates energy and excitement.',
          when: 'Final chorus, "shout" section, to build intensity.',
          technique: 'Common move: ii7 → V7 of NEW key → I of new key. In C going to Db: Ebm7 → Ab7 → DbMaj7. Instant lift.',
          halfStep: 'C to Db (half-step up). Smooth, sophisticated.',
          wholeStep: 'C to D (whole-step up). Bigger lift, more dramatic.'
        }
      },

      turnarounds: {
        description: 'Gospel turnarounds are called "Gospel turns"—quick ii-V-I moves or chromatic runs that reset back to the I chord.',
        common: 'ii7 → V7 → I with chromatic walkup in the last beat. In C: Dm7 (2 beats) → G7 (2 beats) → chromatic run (C-C#-D-D#-E-F-F#-G) → CMaj7.',
        threeToOneRun: 'End any phrase with the 3-to-1 chromatic slide: E-Eb-D-Db-C (landing on C chord). This IS Gospel.',
        descendingBass: 'Walk the bass down chromatically from I to V: C → B → Bb → A → Ab → G (landing on G7 as the V). Classic Gospel turnaround.'
      }
    },

    rhythm: {
      feel: {
        description: 'Gospel lives on the BACKBEAT (beats 2 and 4). Heavily syncopated—anticipations, offbeat accents. "Shout feel" sections use dotted rhythms and driving 16th notes.',
        written: '4/4 time signature, but FELT as syncopated and anticipatory.',
        backbeat: 'Beats 2 and 4 are everything. Snare hits, hand claps, chord chokes—all on 2 and 4.',
        syncopation: 'Play notes BEFORE the beat (anticipate) or on the "and" (offbeat). This creates the bounce and forward momentum.',
        shoutFeel: 'In uptempo Gospel (the "shout" section), use dotted rhythms: LONG-short-LONG-short. Sounds like: BOM-ba-BOM-ba. Creates driving, ecstatic energy.'
      },

      callAndResponse: {
        description: 'Inherited from Blues. Choir sings a line, congregation responds. Piano plays a phrase, choir answers. Creates dialogue and participation.',
        why: 'Gospel is communal, not solo performance. Call-and-response invites participation—it\'s conversation, not lecture.',
        practice: 'Play a 2-bar chord progression, leave 2 bars of space. Listen to how the silence creates expectation. Now fill the space with a run or respond with vocals.'
      },

      keys: {
        compPattern: 'Left-RIGHT-right, Left-RIGHT-right (left hand on beat, right hand bounces on offbeats). This is the Gospel piano heartbeat.',
        choke: 'Choke chords (staccato hits) on beats 2 and 4 for percussive punctuation. Instant Gospel feel.',
        runs: 'Fill the space between vocal phrases with chromatic runs (3-to-1, ascending walkups). Never leave dead space—Gospel piano is BUSY.',
        tremolo: 'Rapid repetition of bass notes or right hand chords during builds. Creates urgency and intensity.',
        shout: 'In shout sections, pound 16th notes in the right hand (cluster chords repeated rapidly) while left hand drives the bass. Maximum energy.'
      },

      guitar: {
        strumming: 'Muted, syncopated strumming. Hit on the "and" of beats, not the beats themselves. Creates bounce.',
        accents: 'Accent beats 2 and 4 (open up the mute, strum louder). Matches the backbeat.',
        chordStabs: 'Quick, staccato chord hits on 2 and 4. Let the chord ring just briefly, then mute. Percussive and tight.',
        fills: 'Add single-note fills or small runs between vocal phrases. Don\'t overplay—leave space for vocals and keys.',
        openStrings: 'Use open strings for big, ringing chords. Very common in contemporary worship. Capo to change key while keeping open string voicings.'
      },

      handClaps: {
        description: 'Congregation hand claps on beats 2 and 4. This IS Gospel—if there are no claps, it doesn\'t feel like church.',
        why: 'Participation, energy, communal worship. The claps drive the rhythm and unite the congregation.'
      }
    },

    licks: [
      {
        name: 'The Chromatic Walkup (THE Gospel Move)',
        description: 'Walk up chromatically to the target note (usually 5th or root of next chord). This is the sound everyone recognizes as Gospel.',
        keys: 'In C: going to G7, play C-C#-D-D#-E-F-F#-G on beat 4 (16th notes), landing on G7 in next bar. FAST. Practice slowly, speed up until it\'s a blur.',
        guitar: 'Walk up on bass strings (low E or A string) chromatically to the root of next chord. Or use chromatic passing tones on inner strings between chord tones.'
      },
      {
        name: 'The 3-to-1 Slide (Kirk Franklin\'s Signature)',
        description: 'Start on scale degree 3, slide chromatically down to 1. THE Gospel piano ending lick.',
        keys: 'In C: E-Eb-D-Db-C (fast). Or just E-Eb-D-C (4 notes). Play this at the end of EVERY phrase. Literally every Gospel pianist uses this. It\'s the law.',
        guitar: 'Slide on the B or high E string from 3rd to root. In C: slide from G (3rd) down to E (root on high E string). Quick, subtle.'
      },
      {
        name: 'The Cluster Voicing Choke',
        description: 'Play a cluster chord (9th, 3rd, 5th tight in right hand), then immediately release (choke). Creates percussive, tense hit.',
        keys: 'CMaj9: LH = C+B, RH = D-E-G (tight cluster). Hit it, choke it (release immediately). Do this on beat 2 or 4 for instant Gospel rhythm.',
        guitar: 'Not applicable—use chord stabs (quick muted strums) instead.'
      },
      {
        name: 'The Tritone Substitution',
        description: 'Replace V7 with bII7 (the chord a tritone away). Sounds "wrong" but resolves perfectly due to shared tritone.',
        keys: 'In C: instead of G7 → CMaj7, play Db7 → CMaj7. The Db7 is the tritone sub. Shared tritone (F and B) creates smooth voice leading.',
        guitar: 'Rare on guitar (harder to voice), but try it: instead of G7, play Db7 (barre chord). Land on CMaj7. Sounds jazzy and sophisticated.'
      },
      {
        name: 'The Amen Ending (IV → I)',
        description: 'The classic Gospel ending. Play IV → I (or IV → iv → I for extra emotion).',
        keys: 'In C: FMaj7 → CMaj7. Or FMaj7 → Fm7 → CMaj7 (the minor four adds melancholy). Add a 3-to-1 run on the CMaj7 for proper ending.',
        guitar: 'Strum IV chord (F), let it ring, then resolve to I (C). Add sus4 (Csus4 → C) on the I for extra resolution.'
      },
      {
        name: 'The Gospel Turnaround (ii → V → I with chromatic bass)',
        description: 'Play ii7 → V7 → I while the bass walks down chromatically.',
        keys: 'In C: Dm7 → G7 → CMaj7, but bass line walks C → B → Bb → A → Ab → G → (land on C). Creates smooth, inevitable pull back to I.',
        guitar: 'Walk bass notes on low E or A string while strumming ii-V-I chords above. Chromatic bass line is the secret.'
      },
      {
        name: 'Secondary Dominant Lick (V7/vi)',
        description: 'Play the dominant of the vi chord (E7 in C) to create temporary tension, then resolve to vi (Am).',
        keys: 'In C: play E7 → Am7 → Dm7 → G7 → CMaj7. The E7 (V of Am) is the secondary dominant. It "shouldn\'t" be in C major, but it works—adds color.',
        guitar: 'Same progression. E7 barre chord to Am7. Sounds sophisticated and jazzy.'
      },
      {
        name: 'The Ascending Run (Chromatic Scale Fragment)',
        description: 'Quick ascending chromatic run to next chord. Fills space, builds energy.',
        keys: 'Play chromatic scale fragment (5-8 notes) ascending to the root of next chord. Fast 16th notes. In C going to F: play C-D-Eb-E-F (landing on F chord).',
        guitar: 'Chromatic run on one string (usually G or B string) between chords. Quick, understated.'
      },
      {
        name: 'The Descending "Fall" (Cascading Run)',
        description: 'Start high (9th or 13th), cascade down to root. Gospel pianists do this at phrase endings.',
        keys: 'In CMaj9: start on D (9th), cascade down C major scale to C root. Add chromatic passing tones (C-B-Bb-A-Ab-G-F#-F-E-Eb-D-Db-C). Fast and flashy.',
        guitar: 'Descending scale run on high strings. Start on 12th fret, walk down to open position. Let it ring.'
      },
      {
        name: 'The b9 Secret (Flat Nine Over Dominant)',
        description: 'Add b9 to any dominant 7th chord. Sounds dissonant alone, but resolves like butter.',
        keys: 'G7b9: LH = G+F (shell), RH = Ab-B-D (b9, 3rd, 5th cluster). That Ab is the "illegal" note—it clashes with G, but when it resolves to C (Ab moves down to G), it sounds intentional and beautiful.',
        guitar: 'Hard to voice on guitar. Try G7 with added Ab note if you can reach it. More common on keys.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Gospel Backing Track" or "Worship Backing Track" + your key. Or: "ii-V-I Gospel progression"',
        listenFor: 'Strong backbeat on 2 & 4, syncopated piano comping (left-right-right), space for vocal phrases',
        recommended: 'Medium tempo (80-100 BPM) for learning, uptempo (120-140 BPM) for shout feel practice',
        tip: 'Search artist-specific: "Kirk Franklin style track", "Tye Tribbett Gospel progression", "Israel Houghton worship track"'
      },

      exercises: [
        '1. Practice left-right-right comp pattern (left hand on 1 & 3, right hand bounces on offbeats) until it\'s automatic',
        '2. Learn the 3-to-1 chromatic slide (3-b3-2-b2-1) in all 12 keys. Play it at the end of every phrase.',
        '3. Practice ii7 → V7 → I in all 12 keys with extensions (Dm9 → G7b9 → CMaj9). Focus on smooth voice leading.',
        '4. Chromatic walkup exercise: Play I chord, then chromatically walk up to V chord (8 16th notes). Repeat in all keys.',
        '5. Cluster voicing practice: Build Major9 chords with cluster in right hand (9th, 3rd, 5th tight). Feel the tension.',
        '6. Play a 4-bar vamp (I-vi-ii-V) and repeat 8 times, adding different runs and fills each time. Never play it the same twice.'
      ],

      songs: [
        { title: 'Take Me to the King', artist: 'Tamela Mann', focus: 'Traditional Gospel, Amen cadence, emotional builds' },
        { title: 'Stomp', artist: 'Kirk Franklin', focus: 'Contemporary Gospel, syncopation, shout feel, b9 chords' },
        { title: 'Break Every Chain', artist: 'Tasha Cobbs Leonard', focus: 'Vamp structure, congregational call-and-response' },
        { title: 'I Smile', artist: 'Kirk Franklin', focus: 'Modern Gospel pop, extended chords, chromatic movement' },
        { title: 'My Tribute (To God Be the Glory)', artist: 'Andraé Crouch', focus: 'Classic Gospel, ii-V-I progression, rich harmony' },
        { title: 'Oh Happy Day', artist: 'Edwin Hawkins Singers', focus: 'Traditional meets contemporary, vamp sections, modulation' },
        { title: 'Gracefully Broken', artist: 'Tasha Cobbs Leonard', focus: 'Slow, emotional, heavy use of sus chords and Major7' },
        { title: 'Intentional', artist: 'Travis Greene', focus: 'Contemporary worship, syncopated rhythm, modulations' },
        { title: 'Precious Lord, Take My Hand', artist: 'Thomas Dorsey (performed by Mahalia Jackson)', focus: 'Traditional Gospel, simple but powerful, IV-I resolution' },
        { title: 'Alpha and Omega', artist: 'Israel & New Breed', focus: 'Vamp-based, driving 16ths, shout feel, key changes' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn ii7-V7-I in 3 keys (C, G, F). Practice left-right-right comp pattern. Play simple Major7 and Dominant7 chords with extensions (add 9ths).' },
        { level: 'Intermediate', goal: 'Add chromatic walkups/walkdowns. Learn cluster voicings (tight 9ths in right hand). Practice 3-to-1 slide in all keys. Play 4-bar vamps and add fills. Learn Amen cadence and secondary dominants.' },
        { level: 'Advanced', goal: 'Master b9 chords over dominants. Smooth voice leading across ii-V-I-vi-ii-V progressions. Improvise runs (chromatic, 3-to-1, cascading falls) in real-time. Play in all 12 keys. Modulate up by half-step or whole-step mid-song.' }
      ],

      commonMistakes: [
        '❌ Playing triads without extensions—sounds empty in Gospel. Always add 9ths.',
        '❌ Playing on the beat instead of syncopating—kills the Gospel feel. Anticipate, play on the "and."',
        '❌ Ignoring the backbeat (2 & 4)—Gospel lives here. Clap, choke, accent beats 2 and 4.',
        '❌ Sparse left hand—Gospel bass line moves constantly. Walk, jump octaves, fill the low end.',
        '❌ Playing the same voicing every time—voice leading is KEY. Move each note minimally between chords.',
        '❌ Skipping the b9 on dominant chords—this is the secret sauce. It sounds "wrong" but it\'s RIGHT.',
        '❌ No space between phrases—even Gospel, which is busy, needs breath. Call-and-response requires rests.'
      ]
    }
  },

  'Classical': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  },

  'Rock': {
    theory: {
      overview: 'Rock is built on power and simplicity—heavy rhythms, driving beats, and raw emotional expression. The foundation is pentatonic scales (borrowed from early American music), power chords, and distortion. Where other genres use complex harmony, rock gets its character from HOW you play: aggressive attack, sustained bends, palm-muted rhythm, and the wall of sound created by distortion. Rock is visceral—it hits you physically before intellectually.',

      scales: [
        {
          name: 'Minor Pentatonic Scale',
          formula: '1 - b3 - 4 - 5 - b7',
          description: 'The backbone of rock lead playing. Five notes, safe everywhere, works over power chords. Learn this in all positions on your instrument—rock solos are pentatonic licks strung together.',
          example: 'In E: E - G - A - B - D'
        },
        {
          name: 'Major Pentatonic Scale',
          formula: '1 - 2 - 3 - 5 - 6',
          description: 'Brighter than minor pentatonic. Mix major and minor pentatonic for color (the relative major pentatonic of E minor is G major pentatonic). Creates that "anthem" sound—big, uplifting choruses.',
          example: 'In E: E - F# - G# - B - C#'
        },
        {
          name: 'Rock Scale (Minor Pentatonic + b5)',
          formula: '1 - b3 - 4 - b5 - 5 - b7',
          description: 'Minor pentatonic + the b5 "tension note." The half-step bend (b5 to 5) is rock\'s signature move. Use b5 as a bend destination or chromatic passing tone for edge and aggression.',
          example: 'In E: E - G - A - Bb - B - D'
        },
        {
          name: 'Aeolian Mode (Natural Minor)',
          formula: '1 - 2 - b3 - 4 - 5 - b6 - b7',
          description: 'The full natural minor scale. Heavier and darker than pentatonic. Rock uses this for longer solo phrases and when you need more melodic options. The b6 is the "dark" note that gives minor its heavy character.',
          example: 'In E: E - F# - G - A - B - C - D'
        }
      ],

      melodicVsRhythmic: {
        title: 'Rock Scales: Lead Playing Toolkit',
        explanation: 'These scales are for LEAD GUITAR and MELODIC LINES (solos, riffs, vocal melodies). Rock rhythm guitar uses POWER CHORDS (root + 5th, no 3rd) which aren\'t built from these scales—they\'re moveable shapes that work anywhere.',
        pentatonicFreedom: 'Minor Pentatonic works over any power chord progression because power chords are ambiguous (neither major nor minor). This is why rock solos sound confident—the scale matches everything.',
        contrast: 'Blues uses minor scales over major chords (creates tension). Rock uses pentatonic scales over neutral power chords (creates freedom and simplicity).'
      },

      typicalKeys: {
        description: 'Rock is guitar-centric—keys with open strings dominate because they enable power chords, bends, and aggressive attack.',
        common: 'E, A, D, G, Em, Am, Dm (guitar open-string keys)',
        why: 'E and A let guitarists use the low open E and A strings as drones and bass notes. Power chords are easiest in these keys. Drop-D tuning makes D especially powerful. Open strings sustain longer and bend easier.',
        avoid: 'Db, Ab, Gb, B (keys with many flats)',
        whyAvoid: 'No open strings available = harder fingerings, less sustain, awkward power chord shapes. Rock guitarists learn in E/A first, so these keys feel natural. Flat keys are more common in horn-based rock (Chicago, Blood Sweat & Tears).'
      },

      powerChords: {
        title: 'Power Chords: The Foundation of Rock Sound',
        concept: 'A power chord is just root + 5th (no 3rd). This simple structure is why rock is so powerful—it\'s ambiguous (neither major nor minor) and works anywhere.',
        formula: '1 - 5',
        whyNo3rd: 'By omitting the 3rd (which defines major vs minor), power chords are "neither." This lets you play the same shape up and down the neck without worrying about key changes or chord quality. Pure, simple, moveable.',
        guitarShape: 'Barre shape: root on low string (E or A), skip the next string, play the 5th two strings higher. Example in E: low E string 12th fret + D string 14th fret = E5 power chord. Play it anywhere on the neck—the shape is the same.',
        keyboardApproach: 'Left hand: root + 5th (octave apart or stacked). Simple, percussive. Rock keys often layer power chords with bass (which provides low-end weight) while the right hand stays minimal or adds octave hits.',
        distortionEffect: 'Distortion fills in the overtones—a power chord through heavy distortion sounds THICK and full even though it\'s only two notes. This is why rock embraces simplicity. Fewer notes + distortion = massive sound.',
        stacking: 'Add octaves for thickness. Play root (low) + 5th + root (octave up). Or double the root in two octaves. The 5th provides the "solidness," doubled roots add weight and presence.'
      },

      chordConstruction: {
        description: 'Rock chords range from simple (power chords, triads) to textured (suspended chords, occasional 7ths). The key: solid low end from guitar or bass, distortion for thickness, rhythmic precision.',

        triads: {
          explanation: 'Basic major and minor triads built from scale degrees 1, 3, 5. Rock uses these for cleaner passages, verses, or when you need chord quality (major vs minor) to be clear.',
          majorTriad: {
            formula: '1 - 3 - 5',
            example: 'E major = E - G# - B',
            usage: 'Bright, major rock sound. Use for anthemic choruses and uplifting sections.'
          },
          minorTriad: {
            formula: '1 - b3 - 5',
            example: 'E minor = E - G - B',
            usage: 'Darker, heavier sound. The foundation of most rock songs in minor keys.'
          }
        },

        suspendedChords: {
          explanation: 'Replace the 3rd with the 2nd (sus2) or 4th (sus4). Suspended chords create tension—they sound unresolved, waiting for the payoff.',
          sus2: {
            formula: '1 - 2 - 5',
            example: 'Esus2 = E - F# - B',
            usage: 'Open, ambient. Resolves to E major. Use in atmospheric sections, intros, or to create space before a heavy riff.',
            practice: 'Play Esus2 → E (resolution). The 2nd falling to 3rd creates instant satisfaction. This move appears in countless rock songs.'
          },
          sus4: {
            formula: '1 - 4 - 5',
            example: 'Esus4 = E - A - B',
            usage: 'Edgy, suspended tension. Resolves to E major. More common than sus2 in rock—the 4th wants to fall to the 3rd.',
            practice: 'Esus4 → E is a classic rock move. Use it at phrase endings or before vocal entries for dramatic effect.'
          }
        },

        seventhChords: {
          explanation: 'Add a 7th to create richer chords. Rock uses these sparingly—they add sophistication without losing edge.',
          dominant7th: {
            formula: '1 - 3 - 5 - b7',
            example: 'E7 = E - G# - B - D',
            usage: 'Adds grit and tension. Through distortion, E7 sounds heavier and edgier than plain E major. Use for transitions or when you need harmonic movement.',
            distortion: 'The b7 creates a tritone with the 3rd, adding natural dissonance. Distortion amplifies this—makes the chord sound dirty and aggressive.'
          },
          major7th: {
            formula: '1 - 3 - 5 - 7',
            example: 'EMaj7 = E - G# - B - D#',
            usage: 'Smooth, sophisticated rock sound. Less aggressive than plain major. Use in ballads, clean passages, or progressive rock sections where you want harmonic color.'
          }
        },

        extendedChords: {
          whatTheyAre: 'Chords beyond the 7th: 9ths, 11ths, 13ths. Rock uses these less than jazz or gospel, but prog-rock, alternative rock, and modern rock embrace them for texture.',
          naming: '9th = 2nd octave up, 11th = 4th octave up, 13th = 6th octave up. Names come from theory, not hand position.',
          common: [
            { interval: '9th', description: 'Adds brightness and shimmer. Em9 = E-G-B-D-F#. Sounds modern, less aggressive than Em7. Use for atmospheric sections.' },
            { interval: 'sus2 with 7th', description: 'Esus2(add7) = E-F#-B-D. Floating, unresolved. Prog-rock and alternative rock use this constantly—it hangs in space.' },
            { interval: '11th', description: 'Rare in rock. Creates open, floating sound. More common in progressive rock and experimental sections where you want ambiguity.' }
          ],
          inPractice: 'Stack extended chords by playing root + 5th in left hand (or bass handles this), then add 3rd + 9th in right hand. In rock, the bass carries most of the harmony—keys and guitar can be sparse and focused.'
        }
      },

      progressions: {
        title: 'Common Rock Chord Progressions',
        description: 'Rock progressions are simple (3-4 chords) but powerful. The movement comes from rhythm, dynamics, and production—not complex harmony. Repeat the same chords for the entire song, varying the intensity.',

        iVIIVI: {
          name: 'i - bVII - VI (The Minor Rock Vamp)',
          formula: 'i - bVII - VI or i - bVII - VI - bVII',
          inEm: 'Em - D - C or Em - D - C - D',
          usage: 'Hugely popular in hard rock and heavy metal. The bVII (flatted 7th scale degree) is crucial—it\'s NOT the V chord (which would be B in E minor), it\'s the chord built on the b7 (D in E minor).',
          why: 'Creates dark, heavy sound without traditional resolution. Stays in the minor zone. Gives that "driving" minor-rock feel without needing dominant function.',
          examples: 'Metallica, Nirvana, Led Zeppelin. Play Em - D - C and you\'ll recognize thousands of songs. This IS the sound of minor key rock.'
        },

        IVVI: {
          name: 'I - IV - V (The Power Progression)',
          formula: 'I - IV - V or I - IV - V - IV',
          inE: 'E - A - B or E - A - B - A',
          usage: 'Classic rock structure. Starts at home (I), moves away (IV = tension), peaks (V = maximum tension), then can resolve or loop back.',
          why: 'The V chord creates maximum tension—it wants to resolve back to I. Rock uses this for emotional builds, climaxes, and anthemic choruses.',
          variations: 'Add vi (C#m in E major) for a longer cycle: I - IV - V - vi. Or go I - V - vi - IV for the "pop-rock" sound (more major, more uplifting).'
        },

        bVIIIVI: {
          name: 'bVII - IV - I (The Backwards Progression)',
          formula: 'bVII - IV - I or bVII - IV - I - V',
          inE: 'D - A - E or D - A - E - B',
          usage: 'Modern rock favorite. Starts "away from home" (bVII instead of I), creates expectation, then resolves. Sounds anthemic and big.',
          why: 'The bVII opening creates anticipation—listeners know it\'s not the "home" chord yet. When I arrives, it\'s satisfying and powerful. Great for chorus sections and big moments.',
          context: 'Common in pop-rock and arena rock (Foo Fighters, Coldplay, modern alt-rock). The bVII gives it an edge without being as dark as full minor progressions.'
        },

        iVI: {
          name: 'i - V (Minor Power Vamp)',
          formula: 'i - V (or i - IV - V)',
          inAm: 'Am - E or Am - Dm - E',
          usage: 'Two-chord simplicity. The E major (V) against Am (i) creates tension and drive. Minimal, powerful, hypnotic.',
          why: 'Rock thrives on repetition. Two chords, repeated endlessly with intensity and variation in dynamics. The major V against minor i adds edge.',
          practice: 'Play Am - E for 8 bars straight. Let the tension sit. Solo over it with A minor pentatonic. The two chords never fully resolve—that\'s the point.'
        }
      },

      tunings: {
        title: 'Alternative Tunings (Guitar)',
        description: 'Rock often uses drop tunings to get heavier, thicker sounds. Standard tuning = E A D G B E (low to high). Drop tunings lower strings for easier power chords and deeper tone.',

        dropD: {
          name: 'Drop D',
          tuning: 'D A D G B E (lower the low E string down to D)',
          powerChord: 'Drop D lets you play power chords with one finger: barre across D-A-D strings at any fret = instant power chord. Example: 12th fret = D power chord (D + A + D). Massive, thick tone.',
          songs: 'Metallica, Deftones, Soundgarden, most heavy music uses Drop D for that low-end punch.'
        },

        dropC: {
          name: 'Drop C',
          tuning: 'C G C F A D (all strings down a whole step from Drop D)',
          usage: 'Even heavier. Lower still than Drop D. More common in metal and hard rock for maximum low-end weight.',
          context: 'If Drop D sounds muddy on your amp, try Drop C for more definition at lower frequencies. The lower you go, the more critical your tone becomes.'
        },

        openE: {
          name: 'Open E',
          tuning: 'E B E G# B E (strum open strings and get full E major chord)',
          slides: 'Perfect for slide guitar. Lay a bottleneck or slide across strings at any fret = instant major chord. Great for textural, atmospheric rock and slide solos.',
          context: 'Derek Trucks, slide-based rock. Allows easy slide melodies over open drone strings. Creates ringing, open soundscapes.'
        }
      },

      distortionAndEffects: {
        title: 'The Role of Distortion in Rock Sound',
        concept: 'Distortion is not just an effect—it IS the sound of rock. Distortion adds harmonic overtones to simple chords, making power chords sound thick and full. What starts as two notes becomes a wall of sound.',
        history: 'Early rock guitarists got distortion accidentally (overdriven tube amps, damaged speakers). They realized it added power and aggression. Modern distortion comes from pedals, amp gain, or digital processing.',
        light: 'Overdrive (light distortion): Adds crunch and compression. Classic rock uses this for aggression without losing note definition. Think AC/DC, early Zeppelin.',
        heavy: 'Heavy distortion: Flattens dynamics, adds saturation, transforms simple chords into massive walls of sound. Grunge, metal, alternative rock use this. Think Nirvana, Metallica.',
        technique: 'Palm muting through distortion creates percussive, rhythmic attack. The muted string + distortion = tight, controlled power. This is the verse/riff sound of rock.',
        keyboards: 'Keys rarely use distortion in rock, but overdriven synths or distorted electric pianos appear in 70s prog-rock for that heavy, spacious sound. Modern alternative rock sometimes uses bitcrushed keys.'
      }
    },

    rhythm: {
      feel: {
        description: 'Rock lives on STRAIGHT EIGHTHS—even subdivision, relentless forward drive. The pulse is constant, unswung, metronomic. This is what makes rock feel powerful and driving.',
        written: '4/4 time signature (occasionally 7/8, 5/4, or 6/8 in progressive rock)',
        feels: 'Straight eighths: 1-&-2-&-3-&-4-& (all equal spacing). No triplet feel, no swing.',
        visual: 'Count: 1 AND 2 AND 3 AND 4 AND (all notes equally spaced, like a machine)',
        important: 'The straight eighth feel is essential. Any swing or shuffle changes the character entirely—keeps it driving and modern.',
        backbeat: 'Snare hits hard on beats 2 and 4. Kick drum on 1, 3, and often syncopated "and" of 2/4. Bass guitar locks with kick drum for solidarity.'
      },

      drivingEighths: {
        description: 'The heartbeat of rock—constant eighth-note pulse across all instruments (guitar strumming, hi-hat, bass lines).',
        guitarStrumming: 'Down-up-down-up on every eighth note. Power chords with downstrokes on beats, upstrokes on "and"s. Creates relentless drive.',
        bassLine: 'Eighth-note patterns built from root and 5th. Often doubles the guitar riff but adds motion (root to 5th walk, octave jumps, rhythmic punctuation).',
        drumHat: 'Hi-hat cymbal plays steady eighths (closed) or straight sixteenths. This is the glue holding tempo together—never stops, always driving.',
        practice: 'Play a power chord (E5) and strum: down-up-down-up-down-up-down-up for 4 bars straight. Let it DRIVE. Feel the relentless forward motion. This IS rock rhythm.'
      },

      syncopation: {
        description: 'Rock riffs often skip the strong beat and accent the "and" or use tied notes across the bar line. This creates groove and forward momentum.',
        offsetBeats: 'Play the kick drum on 1-and-2-3-and-4 (hits on "and" of 1 and 3). Syncopated kick creates groove and bounce.',
        example: 'Instead of hitting power chord on beat 1, play it on the "and" of 4 (from previous bar), tie across the bar line, hit again on "and" of 1. Creates anticipation and tightness.',
        why: 'Syncopation makes rock feel "in the pocket" and groovy. Too straight (beat 1-2-3-4 only) feels square; syncopated feels modern and powerful.'
      },

      palmMuting: {
        description: 'Rock guitar technique: rest the heel of your picking hand lightly on the strings near the bridge, creating percussive, muted tone.',
        sound: 'Deadened, chunky "chk-chk" attack. Power chords through palm muting sound like percussive hits rather than ringing sustained chords.',
        technique: 'Heel of hand touches strings lightly (not hard pressure) while picking. The strings vibrate but are dampened—notes don\'t ring out, they "choke."',
        usage: 'Verses (controlled, tight) vs choruses (open, ringing). Palm mute the verse for tension, open up for the chorus. Instant dynamic shift and impact.',
        practice: 'Play E power chord alternating: muted eighths ("chk-chk-chk-chk") for 4 bars, then open ringing eighths (E-E-E-E) for 4 bars. Hear the difference. This is rock dynamics 101.'
      },

      pickAttack: {
        description: 'How you pick the string matters as much as what you play. Hard attack = aggressive; soft attack = flowing.',
        downstroke: 'Pick moving downward (toward floor). Heavier, more aggressive attack. Use for palm-muted riffs and power chord hits.',
        upstroke: 'Pick moving upward. Lighter, faster, often used on offbeats ("and") for bounce and flow.',
        alternatePickingPattern: 'Downstroke on beats, upstroke on "and"s. Creates continuous, even motion. This is the foundation of rock rhythm playing.',
        vibrato: 'Slightly bend/shake the string while holding a note, creating pitch wavering. Rock uses vibrato for sustain and expression—especially on lead lines.',
        practice: 'Play one note repeatedly (down-up-down-up) at 120 BPM. Lock in the groove. Now play a simple riff with the same pick pattern and feel how it drives.'
      },

      kickPattern: {
        description: 'Rock kick drum patterns lock with the bass guitar. The kick provides the foundation—the "thump" you feel physically.',
        common: 'Kick on beats 1-and-2-3-and-4 (hits on most beats plus syncopated "and"s). Drives relentlessly.',
        doubleKick: 'Two rapid kick hits in succession (16th notes on one beat). Used for emphasis or heavy sections. Metal uses this extensively.',
        halfTime: 'Kick only on beats 1 and 3. Slows perceived tempo, adds weight and space. Used in heavy riffs and dynamic breaks to create contrast.',
        why: 'The kick is the foundation. Bass guitar follows the kick for a united low end. Guitar sits on top. This layering creates the "wall of sound."'
      }
    },

    licks: [
      {
        name: 'The Pentatonic Box Run',
        description: 'Linear run up the minor pentatonic scale in one position. This is the foundation of rock lead playing—connecting chords with melodic motion.',
        keys: 'In E minor pentatonic: play E-G-A-B-D ascending, then reverse descending. Use as filler between chord hits or as a solo phrase that lands back on the root.',
        guitar: 'In E minor pentatonic box 1 (open position): E string open (E), 3rd fret (G), 5th fret (A), 7th fret (B), D string 5th fret (D). Ascend, then descend. Practice slowly, build speed. This is the DNA of rock solos.'
      },
      {
        name: 'The Half-Step Bend (b5 to 5)',
        description: 'Bend the b5 (tension note) up a half-step to the natural 5. This is rock\'s signature bend—instant edge and aggression.',
        keys: 'Play the b5 and 5 in quick succession (grace note approach) or cluster them together for tension. Think aggressive, not smooth.',
        guitar: 'In A minor pentatonic: the b5 is Eb. Play it on the G string (1st fret), then bend up a half-step to E (2nd fret). Hold the bend, add vibrato. This IS rock soloing—gritty, expressive, powerful.'
      },
      {
        name: 'The Hammer-On/Pull-Off Lick',
        description: 'Play one note with the pick, hammer-on to a higher note (strike fret with finger without picking again), pull-off back down. Three notes, one pick attack—creates smooth, legato phrasing.',
        keys: 'Not directly applicable on keys, but simulate with quick succession of notes (fast, connected).',
        guitar: 'In A: open A string (pick this note), hammer-on to 2nd fret (B) by striking the fret with your finger without picking, pull-off back to open A by releasing finger quickly. Three notes, one pick. Practice until smooth and even. Essential rock technique.'
      },
      {
        name: 'The Pentatonic Ending on 5th',
        description: 'Play a pentatonic run but end on the 5th instead of the root. Creates tension instead of resolution—leaves the listener hanging.',
        keys: 'In C minor pentatonic: C-Eb-F-G-Bb-C, but stop on G (the 5th). Let it hang, unresolved. Creates call-and-response space.',
        guitar: 'Same concept—play up the pentatonic box but stop on the 5th. Let it ring. Don\'t resolve. This creates tension that the next section or musician can resolve.'
      },
      {
        name: 'The String Bend and Release',
        description: 'Bend the string up (raising pitch), hold it, release back to original pitch. Creates expression, sustain, and emotional weight.',
        keys: 'Simulate with pitch bend wheel or quick grace notes approaching the target.',
        guitar: 'Play any note (e.g., B string 5th fret), push the string upward with your finger, bending pitch up one or two semitones. Hold the bend (add vibrato). Release slowly, letting pitch slide back down. Essential for expressive rock solos.'
      },
      {
        name: 'The Power Chord Riff',
        description: 'Rhythmic pattern using root and 5th, often with palm muting for tightness and percussive attack.',
        keys: 'Left hand: root + 5th. Right hand can stay silent or add stabs of root an octave higher. Keep it percussive and tight.',
        guitar: 'Play E power chord (E string + D string, same fret) on straight sixteenth notes with palm muting. Pattern: hit on 1-and-2-and-3-and-4-and. This riff IS rock. Change the root to change the riff.'
      },
      {
        name: 'The Chromatic Approach',
        description: 'Approach your target note from a half-step below (or above), then land on target. Creates tension and snap.',
        keys: 'Playing into a chord by approaching from a half-step. Targeting E? Play Eb then E in quick succession.',
        guitar: 'Play one fret below your target note, then jump to target. In A pentatonic, approach A from G#. Creates tightness and intentionality. Used constantly in rock riffs (Hendrix, Van Halen, every rock soloist).'
      },
      {
        name: 'The Octave Interval Jump',
        description: 'Jump from root to root an octave higher, creating wide, open, powerful sound.',
        keys: 'Left hand plays root low, right hand jumps to root an octave (or two octaves) higher, back down. Creates space and bigness.',
        guitar: 'Root on low E string (e.g., 12th fret = E), jump to same note an octave higher on a higher string. Creates wide, open, powerful texture. Classic rock move for riffs and melodies.'
      },
      {
        name: 'The Pentatonic Position Shift',
        description: 'Play one pentatonic box position, then slide/jump to the next position higher on the neck. Creates melodic ascent and excitement.',
        keys: 'Transpose up one octave or shift register mid-phrase. Creates rising energy.',
        guitar: 'Play E minor pentatonic box 1 (open position), then slide up and play box 2 (starting around 5th fret), then box 3 (around 7th fret). Same scale, different positions. Creates climbing, building solo lines.'
      },
      {
        name: 'The Syncopated Riff',
        description: 'Hit the riff on "and" (offbeat) instead of the beat. Creates groove, tightness, and forward motion.',
        keys: 'Play the left hand bass note on the "and" instead of on the beat. Sounds immediately tighter and more modern.',
        guitar: 'Play power chord riff starting on the "and" of 4 (tied from previous bar), continuing on "and" 1, "and" 2, etc. Syncopates the groove. Makes it groove instead of just marching. This is modern rock rhythm.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Rock Backing Track" + your key (E, A, D most common) or "Hard Rock Backing Track" for heavier feel',
        listenFor: 'Driving kick drum, steady hi-hat eighths, bass locking with kick, clear power chord progression (often i-bVII-VI or I-IV-V)',
        recommended: 'Start 80-100 BPM (classic rock), advance to 120-160 BPM (hard rock), extreme 180+ BPM (speed metal)',
        tip: 'Search artist-specific: "Metallica style backing track," "Led Zeppelin backing track," "Van Halen backing track"'
      },

      exercises: [
        '1. Learn minor pentatonic in all 12 keys, ascending and descending. Learn all 5 box positions (up and down the neck). This is your foundation.',
        '2. Power chord workout: Play E5 with palm-muted sixteenth notes for 8 bars straight: "chk-chk-chk-chk" with no variation. Build stamina and feel the pocket.',
        '3. Half-step bend practice: Bend the b5 to 5 in one position until perfectly in tune. Use a tuner to check. Bend with vibrato. Land precisely.',
        '4. String bend control: Pick a note, bend it up one full step (2 frets), hold steady, release. Repeat 10 times. Perfect the pitch and control.',
        '5. Hammer-on/pull-off drill: Play a note, hammer-on up 2 frets, pull-off back down. 4 beats per cycle. Make it smooth, even, and connected.',
        '6. Progression workout: Play i-bVII-VI (Em-D-C or your key) for 8 bars, improvise minor pentatonic solos over it. Mix short riffs and held notes.',
        '7. Syncopation practice: Play power chord on beats 1-and-2-and-3-and-4 (straight eighths). Now shift to "and" of 4, 1, "and" of 1, 2. Feel the groove shift.',
        '8. Dynamic control: Play I-IV-V progression. Palm mute the verse (quiet, tight, controlled). Open up for the chorus (ringing, loud, powerful). Master the dynamic shift.'
      ],

      songs: [
        { title: 'Smoke on the Water', artist: 'Deep Purple', focus: 'Classic rock riff, power chords, simple and iconic, perfect beginner foundation' },
        { title: 'Back in Black', artist: 'AC/DC', focus: 'Straight-ahead rock groove, palm-muted verse, open chorus, dynamic contrast' },
        { title: 'Enter Sandman', artist: 'Metallica', focus: 'Drop D tuning, heavy riffing, palm muting, distorted power chords' },
        { title: 'Whole Lotta Love', artist: 'Led Zeppelin', focus: 'Classic rock riff, string bending, syncopation, layered guitars' },
        { title: 'Purple Haze', artist: 'Jimi Hendrix', focus: 'Distortion, bending technique, chromatic approaches, technical expression' },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana', focus: 'Alternative rock, quiet/loud dynamics, simple but powerful power chord progression' },
        { title: 'Eruption', artist: 'Van Halen', focus: 'Technical lead playing, two-hand tapping, bending, rock virtuosity' },
        { title: 'Layla', artist: 'Derek and the Dominos', focus: 'Rock riff construction, slide guitar, emotional bending and phrasing' },
        { title: 'Comfortably Numb', artist: 'Pink Floyd', focus: 'Prog-rock, tasteful bending, sustain and space, emotion over speed' },
        { title: 'Paranoid', artist: 'Black Sabbath', focus: 'Heavy riffs, minor pentatonic, distortion, doom sound, palm muting' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn minor pentatonic (E or A as root). Play power chords (E5, A5, D5). Learn i-bVII-VI progression. Master palm muting. Basic half-step bends. Simple riffs, minimal distortion.' },
        { level: 'Intermediate', goal: 'Learn all 5 pentatonic positions. Mix major and minor pentatonic. Master bending (full step, half-step, with vibrato). Play I-IV-V and i-bVII-VI progressions. Add distortion. Hammer-ons and pull-offs. Basic syncopation and offbeat riffs.' },
        { level: 'Advanced', goal: 'Play complex rock riffs (syncopated, drop tuning, fast). Master lead soloing over all rock progressions. Improvise full solos mixing pentatonic patterns and chromatic approaches. Play in all keys. Combine techniques (bending + hammer-on + syncopation). Develop your own sound and phrasing.' }
      ],

      commonMistakes: [
        '❌ Swinging or shuffling the eighths—rock is STRAIGHT. Drive forward with even subdivision.',
        '❌ Playing timidly—rock demands aggression and attitude. Attack the strings, use distortion, commit fully.',
        '❌ Staying in one pentatonic box—move across the neck. Use all 5 positions for melodic range and variety.',
        '❌ Bending out of tune—even slightly off-pitch bends sound sloppy. Use a tuner, develop your ear, nail the pitch.',
        '❌ Overbending—not every note needs a bend. Straight notes, silence, and space are just as powerful.',
        '❌ No sense of rhythm—rock is GROOVE-based. Practice with a metronome. Pocket and timing matter more than which notes you play.',
        '❌ Ignoring dynamics—quiet verses, loud choruses. Palm muting vs open chords. Soft approach vs aggressive attack. Dynamics = emotion.',
        '❌ Always resolving to the root—try landing on the 5th or other scale degrees. Create tension, leave phrases hanging.',
        '❌ Using distortion to hide mistakes—distortion reveals sloppiness. Play tight and clean first, then add gain.',
        '❌ Not listening to bass and drums—rock is ensemble playing. Guitar locks with bass and drums. Listen and play TOGETHER.'
      ]
    }
  },

  'Funk': {
    theory: {
      overview: 'Funk is built on the groove—the hypnotic power of rhythm over harmony. Every note lands on or relates to "the one" (beat 1), creating a locked-in pocket where timing is more important than melody. The foundation is syncopation: anticipating beats, landing on upbeats, creating tension through rhythmic displacement. Extended chords (7th, 9th, 11th chords) provide the harmonic color, but the FEEL comes from ghost notes, muted rhythmic hits, and perfectly-placed silence. Funk players treat their instruments like percussion—every note has a rhythmic purpose.',

      scales: [
        {
          name: 'Dorian Mode',
          formula: '1 - 2 - b3 - 4 - 5 - 6 - b7',
          description: 'The Funk foundation. Minor with a raised 6th, giving it a brighter, less dark character than natural minor. The b7 connects to the dominant chords of Funk grooves. Play over minor 7th chords.',
          example: 'In F: F - G - Ab - Bb - C - D - Eb'
        },
        {
          name: 'Minor Pentatonic Scale',
          formula: '1 - b3 - 4 - 5 - b7',
          description: 'The workhorse. Simple, safe, always fits. Use this for fast licks and solos over dominant 7th chords. James Brown and Parliament-Funkadelic built their sound on this scale.',
          example: 'In F: F - Ab - Bb - C - Eb'
        },
        {
          name: 'Mixolydian Mode',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - b7',
          description: 'Major scale with b7. Use over dominant 7th and 9th chords. Brighter than Dorian but still has that b7 tension. Perfect for groove-focused soloing where you want major tonality but Funk attitude.',
          example: 'In C: C - D - E - F - G - A - Bb'
        },
        {
          name: 'Blues Scale (Minor)',
          formula: '1 - b3 - 4 - b5 - 5 - b7',
          description: 'Minor pentatonic + the b5 "blue note." The b5 is perfect for Funk—use it as a quick passing tone in rapid syncopated passages. Adds darkness and edge to your licks.',
          example: 'In F: F - Ab - Bb - B - C - Eb'
        }
      ],

      characteristicNotes: {
        description: 'These intervals define the Funk sound—they create tension in the groove and connect melodies to "the one."',
        notes: [
          { note: '1 (The One)', usage: 'THE most important note in Funk. Every phrase, lick, and section should emphasize beat 1 or anticipate it. The pocket is built around beat 1 as the anchor.' },
          { note: 'b7 (Flat Seventh)', usage: 'In every dominant 7th and 9th chord. Creates unresolved tension that defines Funk harmony. Play it confidently on beat 1 or as a ghost note rhythmic punctuation.' },
          { note: 'b3 (Flat Third)', usage: 'Gives minor chords their darkness. Use in fast runs or as rhythmic filler (ghost notes). Sliding from b3 to 3 creates a characteristic Funk color.' },
          { note: '4th (Perfect Fourth)', usage: 'Often raised or suspended (sus4). Creates ambiguity and forward momentum. Part of why Dorian sounds funky instead of sad.' }
        ]
      },

      theOne: {
        title: 'The One: Funk\'s Rhythmic Foundation',
        explanation: 'Funk is obsessed with beat 1. Not just playing on the beat—anticipating it, landing slightly behind it, building tension toward it. Every player locks into the same point in time: THE ONE. This creates the pocket.',
        example: 'In a standard 4-bar groove: beat 1 is the anchor. Bass lands hard on 1 (or anticipates it 16th note early). Drums hit the kick and snare to emphasize 1. Keys play a chord stab on 1. Guitar mutes and releases on 1. Everything points back to THE ONE.',
        why: 'When everyone agrees on when "one" is, the groove locks. Melody and lead playing happens AROUND this anchor. That\'s why Funk grooves feel so hypnotic—they\'re built on collective precision, not individual expression.'
      },

      chordConstruction: {
        description: 'Funk chords are built from major and minor scales, favoring dominant 7ths, minor 7ths, and extensions (9ths, 11ths). Harmony serves the groove—chords change for rhythmic punctuation or to emphasize "the one," not just for traditional harmonic function.',

        dominant7th: {
          explanation: 'The backbone of Funk harmony. Root + Major 3rd + Perfect 5th + b7. Creates tension that wants to resolve, but in Funk we STAY on this tension—that unresolved restlessness IS the Funk sound.',
          formula: '1 - 3 - 5 - b7',
          example: 'F7 = F - A - C - Eb',
          why: 'The b7 creates a tritone with the 3rd. This interval is unstable, edgy, restless. Funk loves this tension. Never resolve it completely—the tension IS the groove.',
          funkTwist: 'In Funk, you don\'t resolve V7 to I. You STAY on the I7 (dominant 7th on the tonic). Example: F7 - F7 - F7 - F7 (4 bars). That tension drives the groove.'
        },

        minor7th: {
          explanation: 'Root + b3 + 5 + b7. The second most common chord in Funk. Darker than dominant 7th, creates a vamp-like effect. Often used in minor-key Funk grooves.',
          formula: '1 - b3 - 5 - b7',
          example: 'Fmin7 = F - Ab - C - Eb'
        },

        extensions: {
          whatTheyAre: 'Notes beyond the 7th. In Funk, extensions are NOT decorative—they\'re the color of the groove. A simple F7 sounds hollow. F9, F11, F13 sound like Funk.',
          naming: '9th = 2nd octave up, 11th = 4th octave up, 13th = 6th octave up. In Funk, you play these in close position (clustered), not literally an octave higher.',
          common: [
            { interval: '9th', description: 'Add to everything: F9, Fmin9, F7#9 ("the Hendrix chord"). Adds shimmer and width. The 9th is brighter than the 2nd, so it adds sparkle to darker chords.' },
            { interval: '11th', description: 'Often avoided on major chords (it clashes with 3rd) unless raised to #11. Gives a suspended, open quality. Fmin11 sounds dreamy.' },
            { interval: '13th', description: 'The sophisticated choice. F13 or Fmin13 sound modern and jazzy. Adds complexity and color without losing groove focus.' }
          ],
          inPractice: 'Play F9 in close position: F (root, low) - A (3rd, mid) - Eb (b7, mid) - G (9th, mid-high). All clustered within an octave. The chord sounds "thick" and Funky, not spread out.'
        }
      },

      syncopation: {
        title: 'Syncopation: The Rhythmic Engine of Funk',
        description: 'Funk is all about playing AROUND the beat: anticipations (early), offbeats (late), ghost notes (filler). Every syncopated rhythm builds toward "the one."',
        example: 'Standard beat: 1-2-3-4. Funk syncopation: anticipate 1 (play 16th note before beat 1), land on the "and" of 2 (early), ghost note on 3, land hard on 4 (setting up the next 1). The "displacement" creates tension.',
        why: 'Perfect timing sounds robotic. Syncopation creates FEEL. When bass plays slightly early or drums drag slightly behind, the groove gets human, swinging, alive. Funk players think about WHERE they sit relative to the beat: early (anticipate), late (lay back), right on it (pocket). Never boring.'
      },

      pianoVoicings: {
        title: 'How to Voice Funk Chords on Keys/Clavinet',

        chordStabs: {
          concept: 'Short, percussive chord hits. Keys (especially Clavinet) are treated as rhythm instruments in Funk, not melody instruments.',
          approach: 'Play full chords (root + 3 + 5 + 7 + extensions) in right hand, release quickly (staccato). Let the chord attack snap and ring for a moment, then release.',
          example: 'F9 stab: play F-A-C-Eb-G all together, hit it, release. Hard attack, short decay. Like a percussive punch.',
          when: 'On the downbeat (1), on backbeats (2 & 4), on the "and" (syncopated). Creates the groove signature for Keys.',
          clavinet: 'Clavinet (Hohner electronic clavier) is THE Funk keys sound. It has a percussive attack and can be played staccato for that snappy, punchy character. Herbie Hancock\'s "Chameleon" (Clavinet), Parliament "Funkadelic" riffs—all Clavinet.'
        },

        comping: {
          concept: 'Sparse, rhythmic accompaniment. Don\'t play constantly—create space and groove.',
          approach: 'Play a chord on beat 1, maybe another on the "and" of 2, then rest. Let the bass and drums establish the groove. Keys fill in the spaces, not cover the whole timeline.',
          example: 'In F7: play F7 on beat 1 (full stab), rest beat 2, quick F7 stab on beat 3 (or "and" of 3), rest beat 4. Simple, tight, lets the groove breathe.',
          groove: 'The space IS the groove. Silence is as important as sound.'
        },

        ghostNotes: {
          description: 'Light, muted notes played between the main chord stabs. Low volume, rhythmic filler. Creates the "busy" Funk feel without overwhelming.',
          keys: 'Play low F (root) lightly between main chords. In a 16th note grid: main stab on 1, ghost note on "e" of 1 (16th), rest, ghost note on "and," rest. Creates constant movement around the groove.',
          effect: 'Adds texture and urgency without taking focus from the main groove.'
        },

        walkingBass: {
          description: 'Left hand moves chromatically or through scale tones, connecting chords. Creates forward momentum.',
          approach: 'Instead of holding one bass note, walk stepwise: in F7, play F (beat 1), Ab (beat 2), A (beat 3), Bb (beat 4), then C (beat 1 of next bar). Each note is a stepping stone to "the one."',
          effect: 'Creates hypnotic, forward-driving energy. Simple technique with huge impact.'
        },

        organTechnique: {
          description: 'Hammond B3 organ is classic Funk keys. Use the drawbars to create the classic warm, wheeling Funk tone.',
          approach: 'Set drawbars for warm but punchy tone (avoid full 16\'s and 8\' settings—use 5\'s and 2\'s for bite). Play full chord stabs with attack, use the foot pedal bass for low pocket.',
          classics: 'Jon Lord (Deep Purple, "Smoke on the Water"—not Funk, but classic organ licks), Billy Preston (Beatles), Gregg Allman (Allman Brothers).'
        }
      },

      guitarVoicings: {
        basic: 'Single-note grooves, power chords, muted rhythm. Funk guitar is about rhythm, not complicated voicings.',
        extensions: 'Add the b7, 9th, 11th as passing tones or rhythmic fills. F7 → Fmin9 → F7. Keep it simple, let the rhythm do the work.',
        mutedRhythm: 'Palm mute (lightly touch strings with palm while picking) for that percussive "chick-chick-chick" sound. This IS Funk guitar. Control dynamics: mute tight, unmute loose, mute again.',
        wah: 'The wah pedal (sweeping filter) is classic Funk guitar. Rock it slowly (filter sweep) during holds, quickly (rapid filter sweep) during fast passages for that "talking" guitar effect. Jimi Hendrix ("Voodoo Child"), Isaac Hayes—all wah.',
        singleNoteGrooves: 'Instead of chords, play single notes that outline the chord (root, 3rd, 5th, 7th) in rhythmic patterns. Phrasing matters more than voicing. Create space and pocket, not fullness.'
      },

      funkForms: {
        title: 'Funk Song Structure: The Vamp',
        description: 'Unlike Blues (12-bar) or Gospel (ii-V-I), Funk often uses ONE chord or a 2-chord vamp that repeats indefinitely. The energy comes from rhythmic development, not harmonic change.',
        oneChordVamp: {
          example: 'F7 (8 bars) - F7 (8 bars) - F7 (8 bars). The same chord for minutes at a time.',
          why: 'Forces focus on rhythm, groove, syncopation. Players develop the groove rhythmically (adding ghost notes, changing mute patterns, adding texture) without moving chords.',
          songs: '"Superstition" (Stevie Wonder - F Phrygian vamp), "Chameleon" (Herbie Hancock - F minor vamp)'
        },
        twoChordVamp: {
          example: 'F7 (4 bars) - Bb7 (4 bars) - repeat. Or I7 - IV7 (like Blues, but the vamp repeats indefinitely instead of cycling through a 12-bar form).',
          why: 'Creates harmonic movement but stays locked in the groove. The IV chord (subdominant) adds color, then returns to I for stability.',
          songs: '"Get Up (Offa That Thing)" (James Brown - F7 and Bb7 vamp)'
        },
        development: {
          description: 'The Funk form is minimal. What matters is DEVELOPMENT. The groove stays the same, but:',
          elements: [
            'Layers build: drums start with kick, add snare, add hi-hats, add percussion, add bass line',
            'Keys enter with stabs, then comp, then syncopated comping',
            'Guitar enters with muted rhythm, then adds single-note fills',
            'Texture changes: tight/loose, muted/open, simple/complex',
            'Dynamic shifts: drops (all elements stop except one), builds (elements layer back in)',
            'Turnarounds: 4-8 bar sections where everything breaks the groove, then snaps back to the vamp'
          ]
        },
        soloSection: {
          description: 'Band locks into the vamp (usually 8-32 bars). Soloist (horn, voice, guitar) improvises over the groove.',
          structure: 'Lead plays a phrase (call), band holds the vamp (response), lead plays another phrase, repeat. The vamp is the foundation—lead solos AROUND it, not against it.',
          timing: 'Call-and-response timing is crucial. The solo must land on "the one" at the end of each phrase, connecting to the vamp\'s beat 1.'
        }
      },

      turnarounds: {
        description: 'In a vamp-based Funk song, turnarounds break the groove and reset. Instead of smooth transitions (Blues), Funk turnarounds are syncopated, rhythmic hits.',
        common: 'Quick series of chord stabs (2-4 bars) that drop out before the main vamp resumes. Example: F7 stab → rest → Bb7 stab → rest → syncopated mini-lick → back to the F7 vamp.',
        keys: 'Rapid chromatic or diatonic runs (ascending or descending) that land on beat 1 of the new section. Or percussive stabs that punctuate the rhythm.',
        guitar: 'Muted rhythmic scratches or quick single-note licks that snap back to the groove pocket.'
      }
    },

    rhythm: {
      feel: {
        description: '16th note subdivision with syncopation. Funk is written in 4/4 but FELT with constant 16th note motion: kick, snare, hi-hats, ghost notes, all happening in the 16th grid. The swing comes from where notes sit in that grid—early (anticipate), late (lay back), locked in (pocket).',
        written: '4/4 time signature, but treat as 16th note grid',
        grid: 'Each beat divides into four 16th notes: 1-e-and-a 2-e-and-a 3-e-and-a 4-e-and-a. Funk lives in the "and" and "a" (the offbeats and syncopations).',
        important: 'The groove is in the POCKET—the precise relationship between where the drums sit (usually slightly behind), where the bass sits (sometimes anticipating), where the kick sits (often landing on 1 and the "and" of 3, creating the pocket). Master pocket before worrying about fancy techniques.'
      },

      syncOpation: {
        description: 'Playing intentionally early (anticipation) or late (lay back) to create tension and momentum.',
        anticipation: 'Play a note 16th note BEFORE the beat. Example: in a 4/4 groove, kick plays on beat 1, but also plays on the "a" before beat 2 (the 16th note right before). This pulls the listener forward.',
        layBack: 'Play a note slightly AFTER the beat. The snare sits just behind beat 2. This creates drag and swagger.',
        interplay: 'Kick anticipates, snare lays back, bass lands right on the beat. These micro-timing variations (10-20 milliseconds) create the groove. That\'s why Funk is hard to play perfectly—it requires collective precision and control.'
      },

      ghostNotes: {
        description: 'Light, often muted rhythmic notes that fill space. Low volume, purely rhythmic function. The ghost notes create constant motion and urgency.',
        whenUsed: 'Constantly. On every instrument (drums: toms, cymbals; keys: low bass notes; guitar: muted strings; bass: muted plucks between main notes). Ghost notes are NOT mistakes—they\'re core technique.',
        effect: 'Creates the "busy" Funk texture. Even when the groove is simple, ghost notes add complexity and movement.'
      },

      pocket: {
        title: 'The Pocket: Where Funk Lives',
        description: 'The pocket is the precise relationship between kick, snare, bass, and hi-hats—how they interlock in the 16th grid to create the groove\'s feel. "In the pocket" = locked in tight. "Out of the pocket" = loose or sloppy.',
        example: 'Classic Funk pocket (inspired by James Brown): Kick plays beat 1, rest of beat 2-3, plays "and" of 3 (anticipating beat 4). Snare hits beat 2 and 4 (backbeat). Bass walks but lands on beat 1 and emphasizes the "and" of 3 (creating forward momentum to beat 4). Hi-hats play crisp 16ths throughout. The interlock of these elements = the pocket.',
        why: 'When the pocket is tight, the groove LOCKS. Dancers feel it immediately. Even a simple groove (one chord, basic beat) becomes hypnotic when played with pocket precision. This is why James Brown, Parliament-Funkadelic, and Tower of Power are so funky—they had POCKET.'
      },

      keys: {
        compStyle: 'Sparse, rhythmic hits. Play a chord stab on beat 1, maybe another on the "and," then rest. Don\'t fill every space—let bass and drums drive the pocket.',
        ghostNotesTechnique: 'Play low root notes lightly between main chords, creating constant movement without overwhelming.',
        dynamics: 'Control volume carefully. Stabs hit hard (full volume), ghost notes are light (30-40% volume). This dynamic range is crucial.',
        clavinet: 'If using Clavinet (the classic Funk keys), use the percussive attack. Hit the keys harder for that snappy, punchy sound. Light fingers = weak Funk.',
        walksAndRuns: 'Between chord stabs, quick ascending or descending runs (major scales or Dorian modes) that land on the next beat 1.'
      },

      guitar: {
        palmMute: 'Light touch with the palm of your picking hand while playing. Creates that muted "chick" sound. Most important Funk guitar technique.',
        dynamics: 'Mute tight (15-handed, just barely touching) for soft ghost notes. Unmute (relax palm) for open, ringing notes. Back to mute for next ghost note. Constant on/off dynamics.',
        singleNote: 'Instead of full chords, play individual notes (root, 3rd, 5th, 7th) that outline the groove. Phrasing and timing matter more than voicing.',
        rhythmFocus: 'Funk guitar is rhythm-first. Your job is not to play fast—it\'s to be locked in the pocket with the kick and bass. Space and timing > speed and complexity.',
        wah: 'Use the wah pedal for rhythmic color. Slowly sweep the wah while holding a note (creates that singing, filtering effect). Or use rapid wah sweeps during fast licks.',
        percussiveHits: 'Tap the guitar body or strings (not picking) to create percussive sounds. Add texture beyond note playing.'
      },

      bass: {
        pocketDriven: 'Bass and kick are partners. When kick lands on 1, bass supports it or anticipates it. The bass line walks through scale tones, creating movement while respecting "the one."',
        walkingLine: 'In F7: start on F (beat 1), walk through chord tones or passing tones: F → G → Ab → A → Bb (beat 1 of next bar). Each note a stepping stone.',
        syncopation: 'Land on the "and" of beats, anticipate with 16th notes, create ghost notes with light muting. The bass is equally rhythmic and melodic.',
        slaps: 'Open string (thumb) for attack, then pull-offs (snapping technique) for rhythmic fills. Slap bass (popularized by Larry Graham, Louis Johnson) is a Funk signature on bass guitar.',
        pocket: 'Lock with the kick drum precisely. That interlock = the groove. One 16th note of drift and it sounds sloppy.'
      },

      drums: {
        kickDrive: 'The kick drum establishes "the one" and drives forward momentum. It often plays OFF the beat (anticipations, 16th note divisions) to create pocket tension.',
        classicPattern: 'Beat 1 (heavy), rest, "and" of 3 (creates forward pull to beat 4), beat 4 (light). Creates the pocket. Variation: beat 1, "and" of 2, beat 3, "and" of 4 (four-on-the-floor with pocket twist).',
        snare: 'Emphasizes beats 2 and 4 (backbeat). Often plays with dynamics: louder on 2, softer on 4 (or vice versa). Can add ghost notes (soft taps) between main hits.',
        hiHats: 'Crisp, consistent 16th notes throughout. Tight closed hi-hats for the pocket feel. Can open briefly (between main notes) for texture.',
        toms: 'Ghost notes and fills. Adds motion and texture. In Funk, fill patterns are syncopated and rhythmic, not melodic.'
      }
    },

    licks: [
      {
        name: 'The Syncopated Rhythm Lick (The Foundation)',
        description: 'A short rhythmic phrase (2-4 notes) that emphasizes "the one" and creates syncopation. Every Funk player uses this constantly.',
        keys: 'In F: play F (root, beat 1), quick ghost note on "and" of 1, F again on "and" of 2 (syncopated). Repeat or vary rhythm. The key is landing back on beat 1 with impact. This IS Funk rhythm.',
        guitar: 'Same principle: open F note (beat 1), muted rhythmic scratches on "and" of 1-2-3, land back on F (beat 1 of next measure). The scratches are ghost notes—light, rhythmic filler.',
        bass: 'F (beat 1), quick G on 16th after beat 1 (ghost note), Ab on "and" of 2, back to F on beat 3. The lick creates motion between "the ones."'
      },
      {
        name: 'The Clavinet Stab',
        description: 'The classic Funk keys move: play a full chord with percussive attack, release quickly. Creates the signature snappy, punchy Funk texture.',
        keys: 'F9 chord: hit all notes together (left hand root, right hand 3-7-9 cluster), full volume, then immediately release/dampen. Attack is everything. That percussive snap = Funk. Repeat the stab with rhythmic spacing (beat 1, "and" of 2, beat 4) not constantly.',
        effect: 'Creates the groove signature. One well-timed stab is more Funky than four sloppy ones. This is signature Herbie Hancock / Stevie Wonder technique.'
      },
      {
        name: 'The Ghost Note Grove (Rhythm Master)',
        description: 'Rapid, light notes (mostly muted) that create motion and urgency. Not a melody—a rhythm texture.',
        keys: 'Low F note repeated lightly on 16ths: F (light) - rest - F (light) - rest - F - rest - F - rest, creating constant rhythmic pulse in background while main grooves happen above.',
        guitar: 'Palm-muted string (low E), pluck lightly on 16th note grid. Not loud enough to be a "note," just rhythmic texture. Creates that "tick-tick-tick-tick" Funk urgency.',
        bass: 'Same technique: low muted notes filling the 16th grid, creating urgency and pocket lock with the kick drum.'
      },
      {
        name: 'The Chromatic Approach (Smooth Transition)',
        description: 'Quick chromatic walkup or walkdown that connects two main groove points. Creates smooth motion and sophistication.',
        keys: 'In F-Bb progression: ending on F (beat 1), then quick chromatic run F-F#-G-G#-A-Bb (landing on Bb for next section). Fast ascending run, very smooth.',
        guitar: 'Same: quick chromatic run on one string connecting groove elements. In F-Bb: F → F# → G → G# → A → Bb. Subtle but sophisticated.'
      },
      {
        name: 'The Bass Line Walk (Foundation Groove)',
        description: 'Stepwise bass line that connects chord tones and passing tones. Creates hypnotic forward momentum.',
        keys: 'Over F7: F (beat 1) → G (beat 2) → Ab (beat 3) → A (beat 4) → Bb (next beat 1). Creates constant motion toward "the one."',
        bass: 'Same concept but played on bass instrument. Key is timing: each note sits relative to the beat. If kick is on beat 1, bass might anticipate slightly (sit just before beat 1). This interlock = pocket.'
      },
      {
        name: 'The Muted Scratch (Texture Master)',
        description: 'Rapid, percussive scratches on muted strings/keys. Creates urgency and texture without pitch content.',
        guitar: 'Palm mute fully, rapid rhythmic strumming (up-down-up-down on 16ths). The sound is pure rhythm, no clear pitch. Adds energy and drives the groove forward.',
        keys: 'Similar on a synth: rapid muted stabs (low volume, staccato) that create rhythmic texture. Or use the wah pedal with rapid sweeps for texture.',
        effect: 'Fills space, adds complexity without overloading. Essential Funk texture technique.'
      },
      {
        name: 'The Wah Pedal Rhythm (Guitar/Keys Signature)',
        description: 'Use the wah pedal as a rhythmic tool, not just a sound effect. Sweep the filter slowly or rapidly to add color.',
        guitar: 'Hold a chord or single note, sweep the wah pedal SLOWLY (once per beat) to create that singing, filtering effect. Or use rapid wah sweeps (multiple sweeps per beat) during fast passages for urgency.',
        keys: 'If using a keyboard wah (usually via keyboard\'s expression pedal or synth wah), slow sweep on held notes = sustained color. Rapid sweep during runs = texture and excitement.',
        classic: 'Jimi Hendrix ("Voodoo Child"), Isaac Hayes—the wah became a Funk signature because it\'s so rhythmic and interactive.'
      },
      {
        name: 'The Syncopated Fill (Transition Master)',
        description: 'A rhythmic passage that breaks the main groove and leads into a new section. Lands back on "the one" of the new section with emphasis.',
        keys: 'Main groove: F7 vamp 4 bars. Then: quick ascending run (F-G-Ab-A-Bb, landing on Bb section). Or: syncopated rhythmic hits (F stab, rest, F stab, rest, F stab) that anticipate the beat, creating tension before the next section.',
        guitar: 'Quick single-note lick or muted rhythmic pattern that breaks from the main groove, creates excitement, and lands on beat 1 of the new section.',
        effect: 'Adds energy and prevents groove monotony. Keeps the pocket fresh.'
      },
      {
        name: 'The Call-and-Response Hook (Groove Leader)',
        description: 'A short, memorable phrase that the lead (horn, voice) plays, answered by a rhythmic response from the band. This IS Funk structure.',
        keys: 'Lead: ascending 4-note lick (example: F-Ab-C-Eb landing on beat 1 of next bar). Response: band locks back into vamp with added emphasis or rhythmic variation. Repeat with different lead phrases.',
        guitar: 'Same: short single-note lick, then band responds with tighter pocket or rhythmic change.',
        example: '"Get Up (Offa That Thing)" (James Brown): James shouts a phrase, the band responds with a groove hit. Repeated throughout the song. This IS call-and-response Funk.'
      },
      {
        name: 'The Slap Bass Groove (Bass Signature)',
        description: 'Percussive technique: thumb slaps open strings, fingers pull-off for snapping rhythm. Extremely Funk.',
        bass: 'Open F string: thumb SLAP (hard percussive attack), ring. Then finger pull-off on same string (snapping sound). Alternate with pitched notes (F, Ab, Bb) using normal plucking. Example: SLAP-ring, pull-off, F (plucked), Ab (plucked). Creates rhythmic and pitched interplay.',
        technique: 'Slap technique requires specific hand position and muting control. This is signature bass Funk (Larry Graham, Louis Johnson).',
        songs: 'Parliament-Funkadelic basslines, Praxis, Weather Report—all feature slap bass as core technique.'
      },
      {
        name: 'The Pocket Lock (Groove Master)',
        description: 'The ultimate Funk technique: kick drum, snare, bass, and hi-hats all playing their individual rhythms that interlock perfectly, creating one unified pocket.',
        example: 'Kick: beats 1, "and" of 3. Snare: beats 2, 4. Bass: walks F-G-Ab-A (filling the grid). Hi-hats: constant 16ths. When all four interlock EXACTLY, the pocket is locked. One 16th note of drift and it breaks.',
        why: 'This is why James Brown\'s "Sex Machine," Tower of Power\'s "What Is Hip," Parliament\'s "Flashlight"—these songs are HYPNOTIC. The pocket is LOCKED. It\'s not technically complex, but it requires group precision.',
        practice: 'Learn the simple groove pocket first (kick-snare pattern + simple walking bass). Lock it in with a metronome on the "and" of 3 (where the kick hits). That single pocket point is where the groove lives.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Funk Backing Track" or "Funk Groove" + your key. Or search specific artists: "James Brown style," "Parliament-Funkadelic," "Tower of Power"',
        listenFor: 'Tight pocket (kick, snare, bass locked together), syncopated rhythms, emphasis on "the one," 16th note motion (ghost notes, hi-hats), minimal chord changes (usually 1-2 chords)',
        recommended: '80-100 BPM for learning basic pocket, 110-130 BPM for standard Funk, 140+ BPM for uptempo Funk grooves',
        tip: 'Find backing tracks with SIMPLE grooves first (F7 vamp for 8+ bars). Master the pocket at slow tempos before adding complexity. The groove matters more than speed.'
      },

      exercises: [
        '1. Pocket practice: Set metronome to 80 BPM. Kick: beat 1, "and" of 3. Snare: beats 2, 4. Hi-hats: constant 16ths. Lock in for 2 minutes without speeding up or dragging.',
        '2. Ghost note control: On low F string or note, play 16th note rhythmic pattern alternating between full volume and ghost note (muted, 30% volume). Develop control and dynamics.',
        '3. One-chord vamp: Play F7 for 4 bars. Repeat 10 times without stopping. Add variations (add ghost notes on repetition 3, add muted rhythmic scratches on repetition 5, etc.).',
        '4. Syncopation study: Play any scale (pentatonic, Dorian, Mixolydian) in STRAIGHT 16th notes (mechanical). Then SAME scale, but with syncopation: anticipate some notes, lay back others, add ghost notes. Feel the difference.',
        '5. Call-and-response: Play a 2-bar phrase in the pocket. Rest 2 bars (letting groove lock in). Play another phrase. Repeat 5 times. Focus on phrasing timing with the groove—ending right on "the one."',
        '6. Pocket variations: Lock pocket for 4 bars, then "break" it slightly (add an unexpected note, shift the kick pattern), then snap back to the pocket for 4 bars. Learn to control the pocket deliberately.',
        '7. Multi-instrument pocket: If possible with band/group, focus on interlock: kick lays foundation, bass locks with kick, snare sits on backbeat, hi-hats fill. Each instrument is essential to the collective pocket.'
      ],

      songs: [
        { title: 'Superstition', artist: 'Stevie Wonder', focus: 'F Phrygian vamp, pocket-focused, minimal changes, clavinet stabs' },
        { title: 'Sex Machine', artist: 'James Brown', focus: 'Classic Funk pocket, call-and-response, simple progression, syncopation mastery' },
        { title: 'What Is Hip?', artist: 'Tower of Power', focus: 'Tight pocket, horn section stabs, bass pocket lock, sophisticated harmony' },
        { title: 'Flashlight', artist: 'Parliament-Funkadelic', focus: 'Syncopated bass groove, vocoder/effects, locked rhythm, electronic Funk' },
        { title: 'Chameleon', artist: 'Herbie Hancock', focus: 'F minor vamp, clavinet texture, groove-focused improvisation, sophisticated harmony' },
        { title: 'Papa Was a Rolling Stone', artist: 'The Temptations', focus: 'Motown Funk, pocket-driven, vocal call-and-response, foundation study' },
        { title: 'Moanin\'', artist: 'Art Blakey & The Jazz Messengers', focus: 'Hard Bop/Proto-Funk, pocket emphasis, horn head melody' },
        { title: 'Chicken Shack Boogie', artist: 'Johnny Otis', focus: 'Early R&B/Proto-Funk, 12-bar form with Funk attitude, rhythm focus' },
        { title: 'Cold Sweat', artist: 'James Brown', focus: 'Prototype Funk, minimal chords (one-chord vamp), pure rhythm and pocket' },
        { title: 'I Want You (Back)', artist: 'Jackson 5', focus: 'Pop-Funk crossover, accessible pocket, bass line study, call-and-response vocals' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn a 1-chord Funk vamp in F7 (8+ bars). Master the basic pocket: kick on 1 & "and" of 3, snare on 2 & 4, bass walks F-G-Ab-A. Understand "the one" and how it anchors the groove. Play pentatonic scale over vamp.' },
        { level: 'Intermediate', goal: 'Add syncopation: anticipate beats, lay back slightly, add ghost notes. Learn a 2-chord vamp (F7 and Bb7). Practice call-and-response phrasing with the groove. Study Stevie Wonder and James Brown grooves. Develop pocket control at different tempos.' },
        { level: 'Advanced', goal: 'Master pocket in all 12 keys. Play complex Funk grooves with multiple rhythmic layers. Understand harmonic progression in Funk (ii-V resolution, secondary dominants). Improvise solos that land on "the one" consistently. Study Tower of Power and Parliament-Funkadelic complexity. Play with real Funk recordings (backing tracks) and lock the pocket with professional musicians.' }
      ],

      commonMistakes: [
        '❌ Playing ON the beat instead of AROUND it—kills the pocket. Learn to anticipate and lay back for tension.',
        '❌ Playing constantly (no rests)—Funk is about space. Silence IS rhythm.',
        '❌ Ignoring "the one"—every phrase and lick must relate to beat 1. The anchor is everything.',
        '❌ Over-complicating the chord progression—Funk lives on 1-2 chords. Simplicity + pocket = hypnotic.',
        '❌ Weak dynamics (no contrast between muted and open, light and heavy)—Funk requires dynamic control. Ghost notes should be 30% volume, stabs should be 100%.',
        '❌ Playing fast without pocket—speed means nothing if you\'re not locked in. Slow Funk pocket > fast sloppy playing.',
        '❌ Forgetting the bass-kick interlock—the pocket only locks when kick and bass are partners. One is not enough; they must support each other.',
        '❌ No syncopation (playing straight)—Funk without syncopation sounds like R&B or straight rock. Learn to play early and late relative to the beat.',
        '❌ Ghost notes sounding too loud—they should be purely rhythmic texture, almost inaudible. Control muting/damping.',
        '❌ Ignoring call-and-response structure—Funk is conversational. Lead plays, space opens, band responds. Learn to listen and leave space.'
      ]
    }
  },

  'Jazz Fusion': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  },

  'Latin Jazz': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  },

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

      typicalKeys: {
        description: 'Neo-Soul leans toward mellow, mid-range keys that support laid-back grooves and avoid aggressive brightness.',
        common: 'D, Dm, Em, A, Am, G, C (mid-range, not too bright)',
        why: 'These keys sit in a "warm" range—not as bright as E/F#, not as dark as Bb/Ab. D and A are guitar/keys-friendly without being as aggressive as E. Minor keys (Dm, Em, Am) dominate Neo-Soul for introspective, late-night vibe. Hip-hop influence (sampling, loops) means keys often match source material.',
        avoid: 'Very bright keys (F, F#, B) or very dark keys (Ab, Db)',
        whyAvoid: 'Neo-Soul aesthetic is "laid-back cool," not bright or aggressive. F/F# feel too urgent. Ab/Db can feel too formal (classical/gospel overtones). The sweet spot is D-G range for that effortless, behind-the-beat sound.'
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
  },

  'Indie': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  },

  'Singer-Songwriter': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  },

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
  },

  'Worship': {
    theory: {
      overview: 'Modern Worship (2000s-present) is built on SIMPLICITY and DYNAMICS. Four-chord progressions support singable melodies that build from intimate whispers to anthemic declarations. The goal is congregational participation—everyone must be able to follow. Space, texture, and emotional arc matter more than harmonic complexity.',

      melodicVsHarmonic: {
        title: 'Scales: For Melody and Vocals',
        explanation: 'Worship melodies use major or natural minor scales throughout—simple, singable, predictable. The CHORDS add color (add9, sus4, inversions) while melody stays accessible. Your job as a musician is to support the congregation, not showcase complexity.',
        example: 'A worship song in G major uses the G major scale for melody from start to finish. Chords might be G-D-Em-C (I-V-vi-IV), but the melody never leaves G major. Simplicity enables congregational singing.',
        why: 'Congregations aren\'t trained musicians. If the melody is too complex or unpredictable, people can\'t follow. Worship prioritizes participation over sophistication.'
      },

      scales: [
        {
          name: 'Major Scale',
          formula: '1 - 2 - 3 - 4 - 5 - 6 - 7',
          description: 'The foundation of 90% of worship songs. Bright, uplifting, singable. Learn this first—everything else builds from here.',
          example: 'In G: G - A - B - C - D - E - F#'
        },
        {
          name: 'Natural Minor Scale',
          formula: '1 - 2 - b3 - 4 - 5 - b6 - b7',
          description: 'For introspective, contemplative worship moments. Darker than major but still accessible. Often used in bridge sections or reflective songs.',
          example: 'In Em: E - F# - G - A - B - C - D'
        },
        {
          name: 'Major Pentatonic Scale',
          formula: '1 - 2 - 3 - 5 - 6',
          description: 'Five notes, no wrong notes. Perfect for instrumental fills and ambient guitar lines. Removes the 4th and 7th (potential clash points) for maximum safety.',
          example: 'In G: G - A - B - D - E'
        }
      ],

      chordConstruction: {
        description: 'Worship chords are triads with EXTENSIONS for color and space. Add9 and sus chords create the "open, airy" worship sound. Inversions create smooth bass movement.',

        triads: {
          explanation: 'The foundation—root, 3rd, 5th. Worship rarely plays bare triads (they sound empty), but understanding triads is essential before adding extensions.',
          formula: '1 - 3 - 5',
          example: 'G major triad = G - B - D',
          why: 'The 3rd defines major vs minor. The 5th provides stability. But in worship, we almost always add color.'
        },

        add9: {
          explanation: 'Add the 9th (2nd note of the scale) to a triad. This is THE worship chord—creates shimmer and space without complexity.',
          formula: '1 - 3 - 5 - 2',
          example: 'Gadd9 = G - B - D - A (root, 3rd, 5th, plus the 9th)',
          why: 'The 9th adds brightness and "air" without changing the chord\'s function. Gadd9 still feels like a G chord—just more beautiful.',
          sound: 'Open, shimmering, spacious. This is the sound of modern worship.',
          usage: 'Use on I, IV, and V chords. Every worship song uses add9 chords. Literally every one.'
        },

        sus2: {
          explanation: 'Replace the 3rd with the 2nd. Creates ambiguity (neither major nor minor) and space.',
          formula: '1 - 2 - 5',
          example: 'Gsus2 = G - A - D',
          why: 'No 3rd means no defined major/minor quality. Creates openness and anticipation.',
          sound: 'Suspended, floating, waiting. Perfect for intros and ambient moments.',
          usage: 'Use in intros, interludes, or when building from quiet to loud. Creates space before resolving to major.'
        },

        sus4: {
          explanation: 'Replace the 3rd with the 4th. Creates tension that wants to resolve to major.',
          formula: '1 - 4 - 5',
          example: 'Gsus4 = G - C - D',
          why: 'The 4th creates tension (it wants to fall to the 3rd). Suspending resolution builds anticipation.',
          sound: 'Tense, anticipatory, building. Resolves beautifully to major triad.',
          usage: 'Use before key moments—right before the chorus hits, before the bridge resolves. Hold the sus4, then release to major for emotional impact. Hillsong, Bethel, Elevation Worship use this constantly.',
          practice: 'Play Gsus4 for 2 bars, then resolve to G. Feel the release. That\'s worship dynamics.'
        },

        inversions: {
          explanation: 'Play a different chord tone in the bass instead of the root. Creates smooth, ascending/descending bass lines.',
          slashChords: 'Written as "Chord/Bass": C/E means C major chord with E in the bass.',
          example: 'G → G/B → C creates ascending bass: G → B → C. Smooth, connected movement.',
          why: 'Root position chords (root in bass) can sound static. Inversions create melodic bass movement that guides the song forward.',
          common: [
            { voicing: 'I/III', example: 'G/B in the key of G', usage: 'Ascending bass line from I to IV' },
            { voicing: 'I/V', example: 'G/D in the key of G', usage: 'Descending bass line, often before V chord' },
            { voicing: 'IV/VI', example: 'C/A in the key of G', usage: 'Creates movement within IV chord' }
          ],
          usage: 'Found in EVERY worship progression. G → G/B → C → D (ascending bass: G-B-C-D) is quintessential worship movement.'
        },

        seventh: {
          explanation: 'Add the 7th for warmth without jazz complexity. Worship uses 7ths sparingly—mainly on ii and V chords.',
          major7th: {
            formula: '1 - 3 - 5 - 7',
            example: 'Gmaj7 = G - B - D - F#',
            usage: 'Occasionally on I or IV for dreamy, reflective moments. Not as common as add9.'
          },
          dominant7th: {
            formula: '1 - 3 - 5 - b7',
            example: 'D7 = D - F# - A - C',
            usage: 'On V chord when you want stronger pull to I. Creates tension before resolution.'
          },
          minor7th: {
            formula: '1 - b3 - 5 - b7',
            example: 'Em7 = E - G - B - D',
            usage: 'On vi chord (Em7 in G major) for smooth, mellow quality. Common in worship progressions.'
          }
        }
      },

      typicalKeys: {
        description: 'Worship keys are chosen for VOCAL RANGE (congregational singing) and GUITAR PLAYABILITY (open chords, capo usage).',
        common: 'G, C, D, A, E, Em, Am (most common). Also F, Bb.',
        why: 'G, C, D, A fit typical congregational vocal ranges (comfortable for both men and women). G, C, D, E allow guitarists to use open chords—critical for ambient textures and sustained ringing. Keys like D and A also work well with capo (capo 2 in C shapes = D, capo 4 = E, capo 7 = A).',
        avoid: 'Keys with many flats (Db, Gb, Eb, Ab)',
        whyAvoid: 'Difficult for guitar (no open strings, awkward barre chords). Piano can handle any key, but worship is guitar-driven. If the guitarist struggles, the texture suffers.'
      },

      pianoVoicings: {
        title: 'How to Voice Worship Chords on Keys/Piano',

        ambientPads: {
          concept: 'Worship keys play PADS—sustained chords that create atmosphere. Not rhythmic comping like jazz or percussive hits like rock. Hold chords, let them ring, create space.',
          leftHand: 'Left hand plays root + 5th (optional add 3rd) in low register. Simple, solid foundation.',
          rightHand: 'Right hand plays the color—3rd, 5th, plus extensions (9th, 2nd for sus2, 4th for sus4). Cluster them in mid-register for warmth.',
          example: 'For Gadd9: Left hand: G + D (root + 5th, low). Right hand: B + D + A (3rd, 5th, 9th, clustered). Let it ring.',
          sustain: 'Sustain pedal is ESSENTIAL. Hold it down, let chords bleed into each other slightly. Creates the "wash" of worship sound.'
        },

        dynamics: {
          concept: 'Worship is ALL about dynamics—the build from quiet to loud is the emotional journey.',
          quiet: 'Start minimal. Left hand: root only or root + 5th. Right hand: 3rd + one extension, played softly in mid-register. Lots of space between notes.',
          building: 'Add notes gradually. Both hands fuller. Play slightly louder, add rhythmic pulse (quarter notes instead of whole notes).',
          anthemic: 'Full voicings, both hands. Play in higher register for brightness. Sustain pedal down, let it roar. This is the peak—the congregation is singing loudly, you support with full sound.',
          example: 'Verse 1: minimal (root + 5th in left, 3rd + 9th in right). Chorus 1: fuller. Chorus 2: anthemic. Bridge: strip back. Final chorus: maximum fullness.'
        },

        textures: {
          title: 'Creating Space with Delays and Arpeggios',
          delays: 'If you have a delay pedal (or keyboard delay effect), use it. Set dotted eighth note delay. Play simple patterns—they repeat and create ambient texture automatically.',
          arpeggios: 'Don\'t always play block chords. Arpeggiate—play notes of the chord one at a time (low to high, or high to low). Creates movement within sustained harmony.',
          example: 'Gadd9: instead of hitting G-B-D-A together, play G (low) → D → B → A (high), slowly, with sustain pedal. The notes overlap and create a wash.'
        }
      },

      guitarVoicings: {
        title: 'How to Voice Worship Chords on Guitar',

        openChords: {
          concept: 'Worship guitar is built on OPEN CHORDS—letting open strings ring creates the ambient, spacious sound.',
          common: 'G, C, D, Em, Am—learn these first. Add fingers to create add9 and sus chords.',
          add9Shapes: 'Gadd9: play G major (320003), add the 9th—pinky on 3rd fret of high E (320033). Cadd9: x32033. Dsus2: xx0230. Let open strings ring.',
          why: 'Open strings create natural sustain and harmonic richness. Barre chords sound too closed and controlled for worship—you want openness.'
        },

        ambientTechniques: {
          delay: 'Use a delay pedal set to dotted eighth notes (sync to tempo if possible). Play simple patterns—the delay creates cascading echoes that fill space.',
          reverb: 'Use reverb generously. Long decay times (2-3 seconds). Creates the "cathedral" sound of worship.',
          volume: 'Use a volume pedal or your guitar\'s volume knob. Swell chords in from silence (turn volume to 0, strum, roll volume up). Creates pad-like textures.',
          arpeggios: 'Don\'t always strum. Pluck individual strings (fingerstyle) to create delicate, sparse textures. Perfect for verses and intros.'
        },

        capoUsage: {
          concept: 'Capo lets you play in harder keys using easy open chord shapes.',
          example: 'Song in A? Capo 2, play G shapes. Song in Bb? Capo 3, play G shapes. Song in E? Capo 4, play C shapes (or no capo, play E shapes).',
          why: 'Maintains open string resonance in any key. Critical for ambient worship sound.',
          tip: 'Learn I-V-vi-IV in G shapes (G-D-Em-C). Use capo to transpose. Works in 90% of worship songs.'
        },

        inversions: {
          concept: 'Use triads on D-G-B strings (middle strings) to play inversions and stay above bass.',
          example: 'For C chord: instead of x32010 (full chord), play xx0553 (C major triad on D-G-B strings). Higher register, cleaner separation from bass/keys.',
          why: 'When keys/piano are playing pads in mid-range, playing full guitar chords in the same range creates mud. Inversions on high strings sit above the mix.',
          practice: 'Learn major and minor triads on D-G-B strings. Move them around the neck for different chords and inversions.'
        }
      }
    },

    rhythm: {
      feel: {
        description: 'Worship rhythm is built on SPACE and DYNAMICS. Straight 4/4 time, but the feel is atmospheric—sustain, delay, and reverb create the "wash." Not about driving groove like rock or funk—it\'s about creating space for the congregation to enter.',
        written: '4/4 time signature (occasionally 6/8 for ballads)',
        feels: 'Straight eighth notes or quarter notes. No swing, no triplets. Steady and predictable.',
        important: 'The KEY is dynamics—playing softer or louder is more important than rhythmic complexity. Start quiet, build gradually, peak at the right moment, then pull back.'
      },

      buildAndRelease: {
        description: 'Worship songs follow a DYNAMIC ARC—the emotional build from intimate to anthemic and back. This is the core of worship musicianship.',
        structure: [
          { section: 'Intro', dynamic: 'Quiet, sparse', approach: 'Minimal chords, ambient guitar, space' },
          { section: 'Verse 1', dynamic: 'Intimate', approach: 'Simple accompaniment, support vocals, don\'t overplay' },
          { section: 'Chorus 1', dynamic: 'Building', approach: 'Fuller chords, add instruments, increase volume slightly' },
          { section: 'Verse 2', dynamic: 'Slightly fuller than V1', approach: 'Add subtle layers, maintain interest' },
          { section: 'Chorus 2', dynamic: 'Anthemic', approach: 'Full band, congregation singing loudly, peak energy' },
          { section: 'Bridge', dynamic: 'Strip back or peak', approach: 'Either return to intimate (rebuild), or sustain anthem (keep energy)' },
          { section: 'Final Chorus', dynamic: 'Maximum fullness', approach: 'Everyone singing, full instrumentation, emotional climax' },
          { section: 'Outro', dynamic: 'Resolve, fade', approach: 'Return to sparse, let it breathe, end peacefully' }
        ],
        why: 'The build IS the song. Worship isn\'t about showing off—it\'s about guiding people through an emotional/spiritual journey. Dynamics create that journey.'
      },

      keys: {
        description: 'Piano/keys create the PAD—sustained chords that fill space without dominating.',
        technique: 'Use sustain pedal. Play whole notes or half notes (long durations). Don\'t play busy rhythms—let chords ring. Add arpeggios or delays for texture, but mostly: SUSTAIN.',
        dynamics: 'Start with right hand only (quiet). Add left hand as it builds. Play higher register for choruses (brightness). Lower register for verses (warmth).',
        listen: 'Listen to the drums and vocals. Your job is to fill the space between them—not too much, not too little.'
      },

      guitar: {
        description: 'Electric guitar creates AMBIENT TEXTURE—delays, reverbs, swells. Acoustic guitar provides RHYTHMIC FOUNDATION—strumming patterns that support the song.',
        electric: 'Use delay (dotted eighth) and reverb (long decay). Play simple patterns—single notes, arpeggios, chord swells. Let the effects do the work. Think U2\'s The Edge—space and texture, not speed and complexity.',
        acoustic: 'Fingerpicking for verses (delicate, intimate). Open strumming for choruses (full, driving). Use dynamics—strum softer in verses, harder in choruses. The right hand controls the energy.',
        balance: 'If both electric and acoustic are playing, acoustic drives rhythm (strumming), electric adds ambience (delays, pads). Stay out of each other\'s frequency range.'
      }
    },

    licks: [
      {
        name: 'The Ascending Bass Line',
        description: 'Use inversions to create a smooth bass line that ascends from I to IV.',
        keys: 'In G: G (root position: G in bass) → G/B (first inversion: B in bass) → C (root position: C in bass). Bass line: G → B → C (smooth ascent).',
        guitar: 'In G: play G (320003) → G/B (x20033) → C (x32010). The bass notes on the low E and A strings create the ascending line.',
        when: 'Common in verses and pre-choruses. Creates forward momentum and anticipation.',
        practice: 'Learn in G first (most common worship key), then transpose to C, D, A using the same pattern.'
      },
      {
        name: 'The Sus4 Resolve',
        description: 'Hold a sus4 chord, then resolve to major for emotional release.',
        keys: 'In G: Play Gsus4 (G-C-D) for 2-4 beats, then resolve to G major (G-B-D). The C falling to B creates the resolution.',
        guitar: 'In G: Gsus4 (330013) held, then G major (320003). Feel the 4th (C on B string, 1st fret) release to 3rd (B, open string).',
        when: 'Before a big moment—right before the chorus hits, or at the end of a bridge before the final chorus. Build anticipation with the sus4, release with the resolution.',
        practice: 'Hold the sus4 longer than feels natural. Let tension build. Then release. That\'s the worship moment.'
      },
      {
        name: 'The Ambient Arpeggio',
        description: 'Pluck chord tones individually with delay to create cascading texture.',
        keys: 'In Gadd9: Play the notes separately: G (low) → B → D → A (high), slowly, with sustain pedal. Notes overlap and create a wash.',
        guitar: 'In Gadd9 (320033): Pluck strings individually—low E (3), A (2), D (0), G (0), B (3), high E (3). With delay, each note repeats and creates ambient texture.',
        when: 'Intros, interludes, quiet moments. Perfect when the worship leader is speaking or praying.',
        practice: 'Set your delay to dotted eighth notes (if possible). Play slowly—one note per beat. Let the delay fill the space.'
      },
      {
        name: 'The Volume Swell',
        description: 'Strum a chord with volume at zero, then roll volume up to create a pad-like swell.',
        keys: 'Not applicable—piano doesn\'t have volume swells like guitar.',
        guitar: 'Gadd9: Turn guitar volume to 0. Strum the chord. Immediately roll volume knob to 10. The chord swells in from silence. With delay and reverb, it sounds like a synth pad.',
        when: 'Creates ethereal, atmospheric moments. Perfect for intros or when building from silence.',
        practice: 'Requires practice to time the volume swell with the strum. Strum first, THEN roll volume. Not simultaneously.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Worship Backing Track" + key, or "Hillsong style backing track," or "Bethel Music backing track"',
        listenFor: 'Slow to medium tempo (70-80 BPM for ballads, 120-140 BPM for anthems). Listen for the build—quiet verses, big choruses. Drums should be simple and steady.',
        recommended: '70-80 BPM (intimate worship/ballad), 120-140 BPM (anthemic worship)',
        tip: 'Search by specific chord progression: "I V vi IV backing track" or "1 5 6 4 backing track G major"'
      },

      exercises: [
        '1. Learn I-V-vi-IV in G major (G-D-Em-C). Practice with clean tones first, then add delay/reverb.',
        '2. Practice dynamic control: play the same chord progression 3 times—quiet (verse), medium (pre-chorus), loud (chorus).',
        '3. Learn add9 and sus chords in G, C, D, A. These are 90% of worship voicings.',
        '4. Practice ascending bass lines using inversions: I → I/III → IV, I → I/V → IV (common worship movements).',
        '5. Play along with worship backing tracks. Focus on WHEN to play and WHEN NOT to play—space matters more than notes.'
      ],

      songs: [
        { title: 'What A Beautiful Name', artist: 'Hillsong Worship', focus: 'I-V-vi-IV progression in D, simple melody, dynamic build' },
        { title: 'Goodness of God', artist: 'Bethel Music', focus: 'Ascending bass lines, sus4 chords, congregational singability' },
        { title: '10,000 Reasons (Bless The Lord)', artist: 'Matt Redman', focus: 'Simple strumming patterns, add9 chords, space and dynamics' },
        { title: 'Oceans (Where Feet May Fail)', artist: 'Hillsong United', focus: 'Ambient guitar textures, minimalism, gradual build' },
        { title: 'How Great Is Our God', artist: 'Chris Tomlin', focus: 'Classic worship structure, I-V-vi-IV, easy for beginners' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn I-V-vi-IV progression in G major. Understand basic add9 and sus chords. Play simple strumming patterns or sustained pads.' },
        { level: 'Intermediate', goal: 'Master inversions for smooth bass lines. Use delay and reverb effectively. Control dynamics—play quiet verses, big choruses. Learn 3-5 common worship songs.' },
        { level: 'Advanced', goal: 'Lead worship musically—know when to build, when to pull back, when to sustain. Create ambient textures with delays and arpeggios. Play in multiple keys with ease. Serve the song and congregation, not your ego.' }
      ],

      commonMistakes: [
        '❌ Playing too busy—worship is about SPACE. If you\'re playing constantly, you\'re overplaying.',
        '❌ Ignoring dynamics—playing the same volume throughout. The build from quiet to loud IS the emotional journey.',
        '❌ Using distortion or aggressive tones—worship guitar should be clean, ambient, or lightly driven. Not metal.',
        '❌ Forgetting the congregation—your job is to SUPPORT singing, not showcase your skills. If people can\'t hear themselves sing, you\'re too loud.',
        '❌ Playing the same intensity in every section—verses should be intimate, choruses anthemic. Differentiate or it sounds flat.',
        '❌ Not using sustain pedal (keys) or delay/reverb (guitar)—these effects are ESSENTIAL for worship texture. Without them, it sounds dry and unfinished.'
      ]
    }
  },

  'Lo-Fi': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  },

  'Cinematic': {
    theory: { overview: 'Coming soon...' },
    rhythm: { feel: { description: 'Coming soon...' } },
    licks: [],
    practice: { backingTracks: {}, exercises: [], songs: [] }
  }
};

export default genreContent;
