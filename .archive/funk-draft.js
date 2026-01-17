/**
 * Funk Genre Content - Complete Reference
 * Production-ready content for Music Helper
 * Structure follows Blues/Gospel pattern with Funk-specific theory and techniques
 */

export const funkContent = {
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
        keys: 'If using a keyboard wah (usually via keyboard's expression pedal or synth wah), slow sweep on held notes = sustained color. Rapid sweep during runs = texture and excitement.',
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
  }
};
