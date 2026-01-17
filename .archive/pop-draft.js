/**
 * Pop Genre Content (Contemporary 2010s-2020s)
 * Complete production-ready object following the established structure
 */

export const popContent = {
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

      chordConstruction: {
        description: 'Pop uses simple triads and 7ths as the foundation. Extensions like 9ths and sus chords add texture, but aren\'t required. The art of Pop is making 4 chords sound fresh through rhythm, production, and melody.',

        triads: {
          explanation: 'Three notes: 1-3-5. Major triads (uppercase I, IV, V) are happy. Minor triads (lowercase i, iii, vi) are mournful. Pop oscillates between them.',
          formula: '1 - 3 - 5',
          example: 'I chord (C major) = C-E-G. vi chord (A minor) = A-C-E. The I and vi share notes (C and E) but feel totally different due to the root.'
        },

        seventh: {
          explanation: 'Adding the 7th creates motion. Major 7th (1-3-5-7, written as Maj7) is resolved and sophisticated. Dominant 7th (1-3-5-b7, written as 7) is tense.',
          major7th: {
            formula: '1 - 3 - 5 - 7',
            example: 'CMaj7 = C-E-G-B',
            sound: 'Sophisticated, jazzy. Common on the IV chord in pop (FMaj7). Signals upscale production.'
          },
          dominant7th: {
            formula: '1 - 3 - 5 - b7',
            example: 'G7 = G-B-D-F',
            sound: 'Tension without resolution. Less common in modern pop than jazz or blues. When used, signals funk/dance influence.'
          }
        },

        extensions: {
          whatTheyAre: 'Extensions (9, 11, 13) add color without changing the chord type. In Pop, they\'re usually subtle flavoring, not the focus.',
          naming: '9th = 2nd (octave up), sus2 = add the 2nd. sus4 = replace 3rd with 4th. add9 = keep the 3rd and add the 2nd.',
          common: [
            { interval: 'sus2 / add9', description: 'Replace 3rd with 2nd (sus2) or keep both (add9). Ambiguous, modern sound. Csus2 = C-D-G. Cadd9 = C-E-G-D. Very pop.' },
            { interval: 'sus4', description: 'Replace 3rd with 4th. Csus4 = C-F-G. Hanging, unresolved quality. Used as a turnaround or transition (sus4 → major 3rd).' },
            { interval: '9th (without sus)', description: 'Keep the 3rd, add the 9th. Cadd9 with extended voicing. Adds shimmer without changing major/minor identity.' }
          ],
          inPractice: 'In pop production, extensions are often played by synth pads or in the production mix rather than by a single instrument. Keys might play CMaj7, while strings add the extension shimmer in the background.'
        }
      },

      commonProgressions: {
        title: 'The Pop Progressions (They\'re Called Progressions But They\'re Really Vamps)',
        description: 'Pop repeats the same 4 chords (or 2-3 chords) over and over. The repetition IS the point—it\'s hypnotic. The melody and production carry the song, not chord movement.',

        IVvi: {
          name: 'I - V - vi - IV (The Most Famous Pop Progression)',
          formula: 'I → V → vi → IV',
          inC: 'C → G → Am → F',
          why: 'This is it. THE pop progression. It cycles through major, minor, and back. Works in any key. Every pop song from 2009-2019 used this.',
          usage: 'Taylor Swift, Katy Perry, Maroon 5, basically everyone. It works because it sounds both happy and sad, creating emotional depth with simple chords.',
          variation: 'Sometimes written as I-V-vi-IV-I (adding an extra I) or looped endlessly without resolving.'
        },

        viIVIV: {
          name: 'vi - IV - I - V (The "Sad Pop" Progression)',
          formula: 'vi → IV → I → V',
          inC: 'Am → F → C → G',
          why: 'Starts on the minor chord (sad) before the payoff (I). Creates build. Minor opening = immediate emotional hook.',
          usage: 'Adele, Ariana Grande, ballads. Inversions of the famous progression—same chords, different starting point.'
        },

        IviIVV: {
          name: 'I - vi - IV - V (The Power Progression)',
          formula: 'I → vi → IV → V',
          inC: 'C → Am → F → G',
          why: 'Start on I (home), immediately move to vi (sadness), then climb (IV, V). Emotional arc in 4 bars.',
          usage: 'Dua Lipa, The Weeknd, modern pop-R&B. Very similar to I-V-vi-IV but starts different.'
        },

        IVI: {
          name: 'I - V - I - V (The Minimal Two-Chord Vamp)',
          formula: 'I → V (repeat)',
          inC: 'C → G → C → G...',
          why: 'Drops the minor and just oscillates major-dominant. Hypnotic, dance-pop, electronic. The V wants to resolve to I, creating forward momentum.',
          usage: 'EDM-influenced pop, dance pop. "Don\'t Stop Believin\'," Dua Lipa, The Weeknd\'s more electronic stuff.'
        },

        viVI: {
          name: 'vi - I (The Minor Anchor)',
          formula: 'vi → I (repeat)',
          inC: 'Am → C',
          why: 'Two chord minimal. Modern minimalism. The shift from minor to major is the entire emotional arc.',
          usage: 'Billie Eilish, lo-fi pop, introspective singer-songwriter adjacent pop.',
          extensions: 'Often with sus2 or add9 chords (Asus2 → Csus2) for ethereal quality.'
        }
      },

      harmonyVsLead: {
        title: 'Pop Harmony: Chords Serve the Melody, Not Vice Versa',
        explanation: 'In Jazz, the chords are complex and the melody fits inside them. In Pop, the melody is THE hook, and chords provide simple support. Chord changes happen on beat 1 of each bar, leaving space for the melody to breathe.',
        example: 'In C major: Cmaj7 for 4 bars while the vocal melody sings C-E-C-E-G-A-G (6 notes). The chords don\'t change because the melody doesn\'t need them to. Simplicity is beautiful.',
        why: 'Pop is about SINGABILITY. The listener should immediately remember and be able to sing the song. Complex chords distract from this goal.'
      }
    },

    rhythm: {
      feel: {
        description: 'Four-on-the-floor beats (kick on every beat), syncopated melodies on top, trap-influenced hi-hats (skipping some beats for swagger). Pop feels MODERN and PROGRAMMED—precise, not swinging.',
        written: '4/4 time signature',
        feels: 'Straight eighth notes or sixteenth notes in hi-hats (no shuffle). Kick drum on beats 1, 2, 3, 4 in most pop songs.',
        visual: 'BUM-BUM-BUM-BUM (kick), with TSSSS hi-hats syncopating above (skipping beat 2, landing on beat 3 for swagger).',
        important: 'The kick drives the song. If the kick is programmed well, the song feels modern. If the kick is weak, the whole thing falls apart. This is production, not just music theory.'
      },

      fourOnTheFloor: {
        description: 'The kick drum hits on every beat (1-2-3-4). This is the definition of modern pop, dance pop, and electronic music.',
        why: 'It\'s hypnotic and forward-driving. No syncopation needed—the constant pulse carries the song. Boring if done alone, brilliant when layered with synths and vocals.',
        example: 'Every Dua Lipa, The Weeknd, Ariana Grande, Taylor Swift dance pop track. The kick is CONSTANT. Sometimes it even hits on the "and" (offbeats) for extra energy.'
      },

      syncopatedMelody: {
        description: 'While the kick is straight, the melody ANTICIPATES or OFFSETS the beat. This creates tension against the rigid structure.',
        why: 'The melody pushes and pulls against the grid. The listener feels this as "cool" or "modern" without understanding why.',
        example: 'The kick hits on 1-2-3-4, but the vocal melody hits on the "and" of 1, lands on beat 2, then skips to the "and" of 3. Constant syncopation against steady drums.'
      },

      trapInfluence: {
        description: 'Hi-hat patterns borrowed from trap and hip-hop. Rapid 16th notes with strategic silences create swagger and sophistication.',
        why: 'Makes pop feel contemporary and "street." The silence (resting on beat 2) creates space for the melody to soar.',
        pattern: 'TSSSS-t-TSSSS-t (hi-hat), landing on beat 3 for the signature trap sound.'
      },

      keys: {
        description: 'Synth pad textures provide harmony. Arpeggios add movement without taking up space. Piano or bright keys add melodic elements.',
        pads: 'Long, sustained synth sounds that sit underneath (often programmed with subtle swells). These do the harmonic heavy lifting.',
        arpeggios: 'Bright, fast-moving arpeggios (notes of the chord played quickly, one at a time). Think "chasing the beat" feeling. Very common in Chainsmokers-style electronic pop.',
        pianoMelody: 'A simple piano line that doubles or complements the vocal melody. Example: four-bar vocal loop gets a piano countermelody on the second loop.'
      },

      guitar: {
        description: 'Less common than keys in modern pop production. When used, it\'s usually acoustic and rhythmic (strumming) or ambient texture.',
        acoustic: 'Strummed on offbeats (and of 1, and of 3) over the steady kick. Creates organic contrast to programmed drums.',
        electric: 'Clean tones, often with effects (chorus, delay). Arpeggios or single-note fills. Very Coldplay / indie-pop.',
        rhythm: 'Usually muted or fingerpicked to stay out of the way. The kick and synths are the stars.'
      }
    },

    licks: [
      {
        name: 'The Pop Vocal Riff (Pentatonic Melody)',
        description: 'A 1-4 bar melody hook using major or minor pentatonic. Single line, super singable. This IS the lick—it\'s what listeners remember.',
        keys: 'In C major pentatonic (C-D-E-G-A): play C-E-C-E-G-A-G over a 4-bar I-V-vi-IV progression. The simplicity is the point.',
        guitar: 'Single-note line on one string. In C: open C string → 2nd fret (D) → 4th fret (E), etc. Clean tone, let each note ring.'
      },

      {
        name: 'The Add9 Stab (Sus2 Texture)',
        description: 'Play a sus2 or add9 chord quickly (percussive hit), then release. Creates modern, suspended feel.',
        keys: 'Cadd9: left hand plays C (root), right hand plays E-G-D (3rd, 5th, 9th). Hit it on beat 1 of bar 2, let it ring or choke. Asus2: A-E-B (root, 5th, 2nd). Very modern.',
        guitar: 'Strum Asus2 (A-E-B via open strings or barre). Hit the chord cleanly, sometimes palm-mute for attitude.'
      },

      {
        name: 'The Synth Arpeggio (Chasing the Beat)',
        description: 'Play chord notes quickly, one at a time, creating a rippling effect. Modern, energetic, fills space.',
        keys: 'In Cmaj7: play E-G-B-C-E rapidly (16th notes), using a bright synth. Lands on beat 1 of next bar. This is VERY 2010s Chainsmokers / MGMT style.',
        guitar: 'Fingerpick the notes of a chord rapidly. Gives the effect of movement even on a repeated chord.'
      },

      {
        name: 'The Melody Leap (Octave Jump for Impact)',
        description: 'Jump from a low note to an octave higher suddenly. Creates drama and emphasis.',
        keys: 'Play C (low), then jump to C (high) on beat 3. Or: play low A, jump to high E. The leap catches the ear.',
        guitar: 'Jump from low E string to high E string on the same note. Creates a sudden "lift."'
      },

      {
        name: 'The Pentatonic Bend (Subtle Expression)',
        description: 'Bend a note within the pentatonic scale. Not as extreme as blues bends. Just a quarter-step or half-step for flavor.',
        keys: 'Play E, bend up to F (quarter-step). Release to E. Modern, subtle. Adds humanization to synth lines.',
        guitar: 'Bend a pentatonic note slightly for expression. E to F, D to Eb. Not a full half-step bend like blues—more subtle.'
      },

      {
        name: 'The Rhythmic Call-and-Response (Vocal/Instrument Conversation)',
        description: 'Vocal sings 2 bars, instrument plays a response for 2 bars. Creates dialogue and engagement.',
        keys: 'Vocal sings A-B-C-D (4 notes) over Dm7. Keys respond with A-B-A-G (counter-melody) over Dm7 next bar. Back and forth.',
        guitar: 'Vocal sings, guitar plays a short fill (4-6 notes) in response. Simple but effective for keeping listener engaged.'
      },

      {
        name: 'The Sus4 Turnaround (IV - IV sus4 - IV)',
        description: 'Play a chord, replace 3rd with 4th, back to original. Creates tension and release in a single bar.',
        keys: 'FMaj7 → Fsus4 → FMaj7. The sus4 (F-C-Bb) feels hanging; resolving back to F (F-A-C-Bb) gives relief.',
        guitar: 'Strum F major, lift finger off 3rd, back to F. Creates a moment of suspension and resolution.'
      },

      {
        name: 'The Anticipation (Melody Hits Before the Chord)',
        description: 'The melody plays the first note of the next chord a half-beat early. Creates forward momentum.',
        keys: 'Chord is on beat 1 (C major). Vocal sings the G on the "and" of beat 4 (half a beat early). The ear anticipates the chord change.',
        guitar: 'Similar: vocal sings the next chord\'s root a half-beat early. Creates flow and connection.'
      },

      {
        name: 'The Harmonic Stab (Bright Synth Hit)',
        description: 'A short, bright synthesizer sound (usually a pad or pluck) that punctuates key moments. Production more than musicality.',
        keys: 'Synth hit on beat 2 and 4, hitting a chord tone (E, G, B in CMaj7). Very percussive, very pop. Like a "ding" or "cha" sound.',
        guitar: 'Less applicable—this is a synth/production thing. But could be a clean electric guitar with heavy effects.'
      },

      {
        name: 'The Chromatic Passing Tone (Bridge Connection)',
        description: 'Quick chromatic note between two chord tones. Smooths the transition, adds sophistication.',
        keys: 'Going from C to G: play C → C# (passing tone) → D → D# → E → F → F# → G. Makes the jump feel connected.',
        guitar: 'Quick passing tone on one string while moving between chords. Very subtle but adds fluidity.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Pop Backing Track" + your key. Or search "I-V-vi-IV backing track" (the most common progression)',
        listenFor: 'Four-on-the-floor kick drum, syncopated hi-hats, space for melody, modern production',
        recommended: 'Try 90-110 BPM first (slower modern pop), then 120+ BPM (danceable pop)',
        tip: 'Search artist-specific: "Taylor Swift style backing track," "Weeknd pop beat," "Ariana Grande instrumental"'
      },

      exercises: [
        '1. Sing the I-V-vi-IV progression in your key. The hook is THE melody—write 4 bars that repeat. Listeners should be able to sing it after one play.',
        '2. Play pentatonic scales (major and minor) in your key. These are your safe zones—every note works over the common pop progressions.',
        '3. Improvise a melody over a 4-bar I-V-vi-IV progression using only the major pentatonic scale. No wrong notes, just rhythm and phrasing.',
        '4. Learn the sus2 and add9 chord voicings. These are the modern textures—play them as stabs or sustained pads.',
        '5. Analyze a current pop song (check out the "Essential Songs" list). Map the chords (usually 4 repeating), find the vocal melody hook (usually 4 bars), identify the production elements (kick pattern, synth sounds).',
        '6. Write a 4-bar hook melody that repeats over I-V-vi-IV. Sing it until it\'s sticky. That\'s what pop is—repetition and simplicity.'
      ],

      songs: [
        { title: 'Shake It Off', artist: 'Taylor Swift', focus: 'I-V-vi-IV progression, ultra-simple melody, infectious rhythm' },
        { title: 'Levitating', artist: 'Dua Lipa', focus: 'Major pentatonic melody, disco-pop groove, four-on-the-floor production' },
        { title: 'Blinding Lights', artist: 'The Weeknd', focus: 'Minimal vi-IV progression, synth arpeggios, trap-influenced hi-hats' },
        { title: 'Don\'t Start Now', artist: 'Dua Lipa', focus: 'Funk-pop, syncopated rhythm, dance production' },
        { title: 'Drivers License', artist: 'Olivia Rodrigo', focus: 'Minimal progression, emotional melody, intimate production (rare for pop)' },
        { title: 'Shape of You', artist: 'Ed Sheeran', focus: 'Loop-based production, simple chord progression, percussion-focused' },
        { title: '...Baby One More Time', artist: 'Britney Spears', focus: 'Classic I-V-vi-IV, earworm hook, synth-pop production' },
        { title: 'Havana', artist: 'Camila Cabello ft. Young Thug', focus: 'Latin-pop rhythm, retro vibes, song-within-a-song structure' },
        { title: 'Peaches', artist: 'Justin Bieber ft. Daniel Caesar & Giveon', focus: 'Trap-pop, R&B influenced, minimal chords (vi-IV loop)' },
        { title: 'As It Was', artist: 'Harry Styles', focus: 'Modern production, playful rhythm, major key energy' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn I-V-vi-IV in your key (e.g., C-G-Am-F). Sing it repeatedly until you can do it automatically. Write a simple 4-bar melody hook using only the major pentatonic scale (C-D-E-G-A). Play these with a backing track.' },
        { level: 'Intermediate', goal: 'Learn major and minor pentatonic scales in your key. Improvise melodies over pop progressions (try vi-IV-I-V and I-V-I-V patterns too). Add sustain/texture with sus2 and add9 chords. Learn how to arrange the same progression multiple ways (different voicings, different instruments).' },
        { level: 'Advanced', goal: 'Understand how production (drums, synths, processing) shapes the pop sound more than chords/melody alone. Write a complete pop song (verse, chorus, bridge) using standard progressions but making it feel fresh through arrangement. Study modern pop production techniques (layering, synth textures, automation). Play across multiple genres by shifting scale (minor pentatonic for darker pop, major pentatonic for bright pop).' }
      ],

      commonMistakes: [
        '❌ Using too many chords—pop is about repetition. Stick to 2-4 chords per section and let them repeat.',
        '❌ Making the melody too complex—pop hooks are simple (4-8 notes max). If the listener can\'t sing it immediately, it\'s not a pop song.',
        '❌ Ignoring the production—the beat/drums/synths matter AS much as the chord and melody. Weak production kills a great hook.',
        '❌ Changing chords every bar—modern pop typically changes chords EVERY 4 BARS (or even longer). Give each chord space to breathe.',
        '❌ Fighting the repetition—pop listeners WANT repetition. They want to sing along. Embrace the loop.',
        '❌ Not syncopating the rhythm—straight, boring rhythm kills pop. The kick is straight, but melodies and hi-hats should syncopate.',
        '❌ Overcomplicating harmony—Maj7, m7b5, and extended chords are rare in pop. Stick to major triads, minor triads, sus2, and sus4. Keep it simple.'
      ]
    }
  }
};
