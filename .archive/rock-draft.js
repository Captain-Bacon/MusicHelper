/**
 * Rock Genre Content - Production Ready
 * Comprehensive coverage of Rock theory, rhythm, licks, and practice resources
 * Follows genre-content.js structure with Blues/Gospel depth
 */

export const rockContent = {
  'Rock': {
    theory: {
      overview: 'Rock is built on power and simplicity—heavy rhythms, driving beats, and raw emotional expression. It connects directly to blues (the scales, the bends, the feeling) but amplifies the aggression and adds distortion and layered instrumentation. Rock scales (minor pentatonic, major pentatonic, blues scale) are your foundation, but the character comes from how you attack them: crunchy power chords, sustained bends, and percussive rhythm.',

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
          description: 'Brighter than minor pentatonic. Mix major and minor pentatonic for color (the relative major pentatonic of E minor is G major pentatonic). Creates that "anthem" sound.',
          example: 'In E: E - F# - G# - B - C#'
        },
        {
          name: 'Blues Scale',
          formula: '1 - b3 - 4 - b5 - 5 - b7',
          description: 'Minor pentatonic + the b5 "blue note." The evil half-step bend (b5 to 5) is rock\'s signature move. Use b5 as a bend destination or passing tone.',
          example: 'In E: E - G - A - Bb - B - D'
        },
        {
          name: 'Aeolian Mode (Natural Minor)',
          formula: '1 - 2 - b3 - 4 - 5 - b6 - b7',
          description: 'The full natural minor scale. Heavier and more complex than pentatonic. Rock uses this for longer solo phrases and harmonic content. The b6 is the "dark" note. Note: Classic rock often mixes this with Dorian (raised 6th) or major pentatonic, so be careful with the b6 over major chords—it can clash.',
          example: 'In E: E - F# - G - A - B - C - D'
        }
      ],

      powerChords: {
        title: 'Power Chords: The Foundation of Rock Sound',
        concept: 'A power chord is just root + 5th (no 3rd). This simple structure is why rock is so powerful—it\'s ambiguous (neither major nor minor) and works anywhere.',
        formula: '1 - 5',
        whyNoCritical: 'By omitting the 3rd (which defines major vs minor), power chords are "neither." This lets you play the same shape up and down the neck without changing major/minor feel. Blues uses major 7ths; rock uses 5ths.',
        guitarShape: 'Barre chord: root on low string (E or A), skip the next string, play the 5th on the third string. Example in E: E string 12th fret + G string 12th fret = power chord. Moveable—play it anywhere.',
        keyboardApproach: 'Left hand: root + 5th (octave apart or stacked). Simple, percussive. Rock keys often layer power chords with bass (drums provide root) and minimal right hand.',
        distortionEffect: 'Distortion fills in the overtones—a power chord through heavy distortion sounds THICK and full even though it\'s only two notes. This is why rock embraces simplicity.',
        stacking: 'Add octaves of root and 5th for thicker sound. E root (low) + E (up an octave) + B (5th) + E (octave up). Or just double the root—the 5th provides the "solidness," doubled roots add weight.'
      },

      chordConstruction: {
        description: 'Rock chords range from simple (power chords, triads) to complex (suspended chords, extended blues voicings). The key: solid low end from guitar or bass, minimal right hand on keys.',

        triads: {
          explanation: 'Basic major and minor triads built from scale degrees 1, 3, 5. Rock uses these but almost always with distortion or layering.',
          majorTriad: {
            formula: '1 - 3 - 5',
            example: 'E major = E - G# - B',
            usage: 'Bright, major rock sound. Use for verses and builds.'
          },
          minorTriad: {
            formula: '1 - b3 - 5',
            example: 'E minor = E - G - B',
            usage: 'Darker, heavy sound. The foundation of most rock songs.'
          }
        },

        suspendedChords: {
          explanation: 'Replace the 3rd with the 2nd (sus2) or 4th (sus4). Suspended chords are unresolved—they create tension waiting for resolution.',
          sus2: {
            formula: '1 - 2 - 5',
            example: 'Esus2 = E - F# - B',
            usage: 'Open, ambient. Resolves to E major. Use in solos and atmospheric sections.',
            practice: 'Play Esus2 → E (resolution). The 2nd falling to 3rd creates instant satisfaction.'
          },
          sus4: {
            formula: '1 - 4 - 5',
            example: 'Esus4 = E - A - B',
            usage: 'Edgy, suspended tension. Resolves to E major. More common than sus2 in rock.',
            practice: 'Esus4 → E is a classic rock move. Use it at phrase endings or before vocal entries.'
          }
        },

        seventhChords: {
          explanation: 'Add the b7 to create dominant 7th chords (like blues) or maj7 chords.',
          dominant7th: {
            formula: '1 - 3 - 5 - b7',
            example: 'E7 = E - G# - B - D',
            usage: 'Tension and release. Less common in rock than blues, but appears in blues-rock and classic rock progressions.',
            distortion: 'Through distortion, E7 sounds heavier than E major. The b7 adds grit.'
          },
          major7th: {
            formula: '1 - 3 - 5 - 7',
            example: 'EMaj7 = E - G# - B - D#',
            usage: 'Smooth, sophisticated rock sound. Less aggressive than E major. Use in ballads or prog-rock sections.'
          }
        },

        extendedChords: {
          whatTheyAre: 'Chords beyond the 7th: 9ths, 11ths, 13ths. Rock uses these less than jazz or gospel, but prog-rock and modern rock embrace them.',
          naming: '9th = 2nd octave up, 11th = 4th octave up, 13th = 6th octave up. Names come from theory, not hand position.',
          common: [
            { interval: '9th', description: 'Adds brightness and shimmer. Em9 = E-G-B-D-F#. Sounds modern, less aggressive than Em7.' },
            { interval: 'sus2 with 7th', description: 'Esus2(add7) = E-F#-B-D. Floating, unresolved. Prog-rock and alternative rock use this constantly.' },
            { interval: '11th', description: 'Rare in rock. Creates open, floating sound. More common in prog-rock and experimental sections.' }
          ],
          inPractice: 'Stack extended chords by playing root + 5th in left hand (or bass does this), then add 3rd + 9th in right hand. Close position. In rock, the bass carries most of the harmony—keys can be sparse.'
        }
      },

      progressions: {
        title: 'Common Rock Chord Progressions',
        description: 'Rock progressions are simple (3-4 chords) but powerful. Movement comes from rhythm, dynamics, and production—not complex harmony.',

        iVV: {
          name: 'i - VII - VI (The Minor Rock Vamp)',
          formula: 'i - bVII - VI or i - bVII - VI - V',
          inE: 'Em - D - C or Em - D - C - B',
          usage: 'Hugely popular in hard rock and heavy metal. The bVII (7th degree) is crucial—it\'s NOT the V chord, it\'s the flattened VII.',
          why: 'Creates dark, heavy sound without resolving to the V. Stays in minor key center. Gives that "evil" minor-rock feel.',
          examples: 'Metallica, Nirvana, Led Zeppelin riffs. Play Em - D - C and you\'ll recognize thousands of songs.'
        },

        IVV: {
          name: 'I - IV - V (The Power Progression)',
          formula: 'I - IV - V or I - IV - V - I',
          inE: 'E - A - B or E - A - B - E',
          usage: 'Classic rock ballad structure. Starts with E major, moves away (A tension), peaks (B maximum tension), resolves.',
          why: 'The V chord creates maximum tension—it MUST resolve. Rock uses this for emotional builds and climaxes.',
          variations: 'Add vi (Cm) in second pass: I - IV - V - vi. Creates longer harmonic cycle.'
        },

        bVIIbIII: {
          name: 'bVII - IV - I (The Backwards Progression)',
          formula: 'bVII - IV - I or bVII - IV - I - V',
          inE: 'D - A - E or D - A - E - B',
          usage: 'Modern rock favorite. Starts "wrong" (bVII instead of I), then resolves. Sounds anthemic and big.',
          why: 'The bVII opening creates expectation—listeners know it\'s not the "home" chord yet. When I comes, it\'s satisfying. Great for chorus sections.',
          context: 'Common in pop-rock and arena rock (Foo Fighters, Coldplay, modern alt-rock).'
        },

        iViv: {
          name: 'i - V - i (Minor with Major V)',
          formula: 'i - V - i (or i - IV - V for blues-rock)',
          inA: 'Am - E - Am',
          usage: 'Blues-rock connection. The E major (V) against Am (i) creates tension. Classic blues-rock move.',
          why: 'Rock inherits this from blues. The major V wants to resolve, but rock keeps it ambiguous. Use for driving riffs and solos.',
          practice: 'Play Am - E for 8 bars. Let the tension sit. Add Am pentatonic solo over it.'
        }
      },

      tunings: {
        title: 'Alternative Tunings (Guitar)',
        description: 'Rock often uses drop tunings and alternative tunings to get heavier sounds. Standard tuning = E A D G B E. Drop tunings lower the low E.',

        dropD: {
          name: 'Drop D',
          tuning: 'D A D G B E (lower low E to D)',
          powerChord: 'Drop D lets you play power chords with one finger: D string 12th fret is D power chord (D + A). Instant thickness.',
          songs: 'Metallica, Deftones, most heavy music uses Drop D.'
        },

        dropC: {
          name: 'Drop C',
          tuning: 'C G C F A D (all strings down a whole step from Drop D)',
          usage: 'Heavy, extreme. Lower still than Drop D. More common in metal than rock.',
          context: 'If Drop D sounds muddy, try Drop C for more definition at lower frequencies.'
        },

        openE: {
          name: 'Open E (Bottleneck Tuning)',
          tuning: 'E B E G# B E (play E string and get full E major chord)',
          slides: 'Perfect for slide guitar and bottleneck blues-rock. Classic rock move.',
          context: 'Mud Slide Slim, Derek Trucks, Robert Johnson tradition. Allows easy slide melodies over open strings.'
        }
      },

      distortionAndEffects: {
        title: 'The Role of Distortion in Rock Sound',
        concept: 'Distortion is not just effect—it IS the sound of rock. Distortion adds harmonic content (overtones) to simple chords, making power chords sound thick.',
        history: 'Early rock (Link Wray, Chuck Berry) got distortion by punching holes in amp speakers. Modern distortion comes from pedals, amp gain, or overdrive.',
        light: 'Overdrive (light distortion): Adds crunch and compression. Blues-rock and classic rock use this for aggression without losing note definition.',
        heavy: 'Heavy distortion: Flattens dynamics, adds fuzz, transforms simple chords into walls of sound. Metal, grunge, alternative rock use this.',
        technique: 'Palm muting through distortion creates percussive, rhythmic attack. Pick hits the string (muted with heel of hand) while distortion colors it.',
        keyboards: 'Keys rarely use distortion, but synth distortion or overdriven amp gives prog-rock that heavy, spacious sound. More common in 70s rock.'
      }
    },

    rhythm: {
      feel: {
        description: 'Rock lives on STRAIGHT EIGHTHS—not shuffle, not triplets. Unlike blues, rock drives forward with even subdivision and relentless meter.',
        written: '4/4 time signature (sometimes 7/8 or 5/4 for progressive rock)',
        feels: 'Straight eighths: 1-&-2-&-3-&-4-& (all equal). No triplet swing.',
        visual: 'Count: 1 AND 2 AND 3 AND 4 AND (all notes equally spaced)',
        important: 'Rock is NOT blues. Never shuffle. Keep the rhythm driving and forward-moving. This is what makes rock feel "rock" vs bluesy.',
        backbeat: 'Snare cracks on 2 and 4. Kick drum on 1, 3, and often the "and" of 2/4 (syncopation). Bass guitar locks with kick drum.'
      },

      drivingEighths: {
        description: 'The heartbeat of rock—constant eighth-note pulse (guitar strumming, bass lines, drums on hi-hat).',
        guitarStrumming: 'Down-up-down-up (each eighth note is strummed). Power chords with downstrokes on beats, upstrokes on "and"s.',
        bassLine: 'Eight-note patterns built from root and 5th. Often doubles the guitar riff but adds motion (root to 5th walk, octave jumps).',
        drumHat: 'Hi-hat cymbal plays steady eighths (closed) or straight sixteenths. This is the glue holding tempo together.',
        practice: 'Play a power chord E and strum: down-up-down-up-down-up-down-up. Let it DRIVE. This IS rock rhythm.'
      },

      syncopation: {
        description: 'Rock riffs often skip the beat and accent the "and" or use tied notes across the beat.',
        offsetBeats: 'Play the kick drum on 1-and-2-3-and-4. Syncopated. Creates forward momentum and groove.',
        example: 'Instead of playing power chord on beat 1, play it on the "and" of 4 (tying from previous bar) and again on 1. Creates anticipation.',
        why: 'Syncopation makes rock feel "tight" and groovy. Too straight (beat 1-2-3-4) feels square; syncopated feels modern and powerful.'
      },

      palmMuting: {
        description: 'Rock guitar technique: mute strings with the heel of the picking hand, creating percussive, rhythmic tone.',
        sound: 'Deadened, chunky attack. Power chords through palm muting sound like percussive hits rather than ringing chords.',
        technique: 'Heel of hand touches strings lightly (not hard) while picking. The mute deadens vibration—notes don\'t ring, they "chk-chk-chk."',
        usage: 'Verses (controlled, quiet) vs open (chorus, ringing). Verse: palm muted and quiet. Chorus: open and loud. Instant dynamic shift.',
        practice: 'Play E power chord muted and open: "chk-chk-chk" (muted on 4 eighths) vs E-E-E-E (open on 4 eighths). Hear the difference. This is rock dynamics.'
      },

      pickAttack: {
        description: 'How you pick the string matters. Hard attack sounds aggressive; soft attack sounds flowing.',
        downstroke: 'Pick moving downward (from thicker strings toward thinner). Heavier, more aggressive attack.',
        upstroke: 'Pick moving upward. Lighter, faster, often used on offbeats for bounce.',
        alternatePickingPattern: 'Downstroke on beat, upstroke on "and." Continuous. This creates the driving motion.',
        vibrato: 'Bend the note slightly while holding it, creating pitch wavering. Rock uses this for expression and sustain.',
        practice: 'Play one note repeatedly (down-up-down-up) at tempo. Hear the groove. Now play a riff with the same pick pattern.'
      },

      kickPattern: {
        description: 'Rock kick drum patterns lock with bass guitar. Most common: 1-and-2-3-and-4 (kicks on most beats).',
        doubleKick: 'Two kicks in succession (rapid fire on one beat). Used for emphasis or heavy sections. Metal staple.',
        halfTime: 'Kick only hits beats 1 and 3. Slows perceived tempo, adds weight. Used in heavy riffs and dynamic breaks.',
        why: 'The kick drives the foundation. Bass guitar follows the kick for solidarity. Guitar sits on top, creating layers.'
      }
    },

    licks: [
      {
        name: 'The Pentatonic Box Run',
        description: 'Linear run up the minor pentatonic scale in one position. This is the foundation of rock lead playing.',
        keys: 'In E minor pentatonic (low E root): play E-G-A-B-D ascending, then reverse. Use this as a filler between chord hits. Think of it as a quick phrase that lands back on root.',
        guitar: 'In E: use E string open (E), 3rd fret (G), 5th fret (A), 7th fret (B), 8th fret (D). Play these ascending, then descend. Practice slowly at first, speed up. This is the DNA of rock solos.'
      },
      {
        name: 'The Blues Bend (b5 to 5)',
        description: 'Bend the b5 (evil note) up a half-step to the natural 5. This is rock\'s signature bend—instant recognition.',
        keys: 'Same as blues crush, but with more attitude. Play b5 and 5 close together (or bend b5 UP into 5). Think "bent passion."',
        guitar: 'In A minor pentatonic (E string 1st fret = G, the b3): play the 2nd fret (G#, approaching b5), then bend to B. Or bend the b5 on the G string (1st fret = Bb, the b5) up to B (2nd fret). Hold the bend. Vibrato on it. This IS rock soloing.'
      },
      {
        name: 'The Hammer-On/Pull-Off Lick',
        description: 'Play one note, hammer-on to a higher note (strike next fret without picking), pull-off back down. Three notes, one pick attack.',
        keys: 'Not as applicable on keys (no hammer-on mechanic), but simulate with quick succession of notes.',
        guitar: 'In A: play open A (0 fret), hammer-on to B (2 fret)—strike fret 2 with your finger without picking again. Then pull-off back to A (release pressure and string rings). Three notes, one pick. Classic rock move. Practice until smooth.'
      },
      {
        name: 'The Pentatonic Lick Ending in 5th',
        description: 'Play a pentatonic run but end on the 5th instead of root. Creates tension instead of resolution.',
        keys: 'In C minor pentatonic: C-Eb-F-G-Bb-C, but end on G (the 5th). Hangs there, unresolved. Next musician responds.',
        guitar: 'Same concept. Play up the pentatonic box but stop on the 5th. Let it ring. This creates call-and-response—tension waiting for response. Rock rhythm section can hit it, or the next guitarist responds.'
      },
      {
        name: 'The String Bend and Release',
        description: 'Bend the note, hold it, release back to original pitch. Creates expression and sustain.',
        keys: 'Grace notes or quick succession simulating the bend.',
        guitar: 'Play a note (say 5th fret on B string), push the string upward with your finger, bending pitch up by one or two frets, hold it, then release. The pitch slides back down. Works best with distortion for sustain. Essential rock technique.'
      },
      {
        name: 'The Power Chord Riff',
        description: 'Rhythmic pattern using root and 5th, often with octave doubling for thickness.',
        keys: 'Left hand: root + 5th. Right hand can stay silent or add stabs of root an octave higher. Percussive.',
        guitar: 'Play E power chord (E string 12 fret + G string 12 fret) on beats 1, "and" of 1, 2, "and" of 2. Straight sixteenths. Palm muted. This riff IS rock. Change roots to change the riff.'
      },
      {
        name: 'The Chromatic Approach',
        description: 'Approach a note chromatically (half-step below), then land on target note. Creates tension and resolution.',
        keys: 'Playing into a chord by approaching from half-step below. If targeting E, play Eb then E. Quick succession.',
        guitar: 'Play a note one half-step below your target, then jump to target. In A pentatonic, approach the A from G#. Creates anticipation and tightness in the riff. Commonly used in rock riffs (Hendrix, Van Halen, countless solos).'
      },
      {
        name: 'The Octave Interval Riff',
        description: 'Jump from root to octave of root, creating wide, open sound.',
        keys: 'Left hand plays root low, right hand jumps to root an octave higher, back down. Creates space and power.',
        guitar: 'Root on low E string (say E 12 fret), then jump to same note 12 frets higher on B string (E 12 fret on B string is E an octave up). Creates wide, open, powerful sound. Classic rock texture.'
      },
      {
        name: 'The Pentatonic Position Shift',
        description: 'Play one pentatonic box position, then slide up to next position (same scale, higher notes).',
        keys: 'Transpose up one octave or position mid-phrase. Creates melodic rise.',
        guitar: 'Play E minor pentatonic in first position (around open position), then slide up and play same scale shape starting at 12th fret. Shifts perspective without changing the scale. Creates climbing feel.'
      },
      {
        name: 'The Syncopated Riff (Off-Beat)',
        description: 'Hit the riff on "and" instead of the beat. Creates groove and forward motion.',
        keys: 'Play the left hand bass line on the "and" instead of on 1. Sounds tight and modern.',
        guitar: 'Play power chord riff starting on the "and" of 4 (tying from previous bar), then continuing "and" 1, "and" 2, etc. Syncopates the groove. Instantly more interesting than on-beat playing. This is modern rock.'
      }
    ],

    practice: {
      backingTracks: {
        search: '"Rock Backing Track" + your key (E, A, D most common) or "Hard Rock Riff Backing Track" for heavier tracks',
        listenFor: 'Driving kick drum pattern, steady hi-hat eighths, bass guitar locking with kick, clear power chord progression (often i-VII-VI or I-IV-V)',
        recommended: 'Start at 80-100 BPM (classic rock, blues-rock feel), advance to 120-160 BPM (hard rock, metal), extreme metal 180+ BPM',
        tip: 'Search artist-specific: "Metallica style backing track," "Led Zeppelin riff backing track," "Van Halen speed track"'
      },

      exercises: [
        '1. Practice the minor pentatonic scale in all 12 keys, ascending and descending. Learn all 5 box positions (low E to high E string). This is your foundation.',
        '2. Play a power chord (E5) and practice palm-muted sixteenth notes: "chk-chk-chk-chk" for 8 bars. No variation. Feel the groove.',
        '3. Practice the b5 to 5 bend in one octave until perfectly in tune. Use a tuner. Bend with vibrato. Land precisely on 5.',
        '4. String bends: pick a note, bend it up one full step (2 frets), hold, release. Repeat 10 times. Perfect the pitch. No tuner needed if you can match the original note on return.',
        '5. Hammer-ons and pull-offs: play a note, hammer-on up 2 frets without picking, pull-off back down. 4 beats per note. Make it smooth and connected.',
        '6. Play i-VII-VI progression (Em-D-C or your key) for 8 bars, improvise minor pentatonic solos over it. Mix riffs and single notes.',
        '7. Syncopation drill: play a power chord on beats 1, "and," 2, "and," 3, "and," 4. Straight eighths. Now shift to play on "and" of 4, 1, "and" of 1, 2. Feel the difference.',
        '8. Play I-IV-V progression, swap between palm-muted verses (quiet, tight) and open chorus (ringing, loud). Practice the dynamic shift.'
      ],

      songs: [
        { title: 'Smoke on the Water', artist: 'Deep Purple', focus: 'Classic rock riff, power chords, clean tone, easy to learn foundation' },
        { title: 'Back in Black', artist: 'AC/DC', focus: 'Straight-ahead rock groove, palm-muted verse, dynamic build to chorus, iconic riff' },
        { title: 'Enter Sandman', artist: 'Metallica', focus: 'Drop D tuning, heavy riff, distorted power chords, metal introduction' },
        { title: 'Whole Lotta Love', artist: 'Led Zeppelin', focus: 'Blues-rock foundation, bending technique, syncopation, layered guitar parts' },
        { title: 'Purple Haze', artist: 'Jimi Hendrix', focus: 'Distortion, bending, left-hand muting, blues-rock expression, technical mastery' },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana', focus: 'Alternative rock, quiet verse/loud chorus dynamic, power chords, modern rock feel' },
        { title: 'Eruption', artist: 'Van Halen', focus: 'Technical lead playing, tapping, bending, exotic tuning, rock virtuosity' },
        { title: 'Layla', artist: 'Derek and the Dominos', focus: 'Blues-rock riffs, fingerpicking, emotional bending, classic lead tone' },
        { title: 'Comfortably Numb', artist: 'Pink Floyd', focus: 'Prog-rock, tasteful bending, space and sustain, emotional expression over technique' },
        { title: 'Paranoid', artist: 'Black Sabbath', focus: 'Heavy riffs, minor pentatonic, distortion, doom metal foundation, palm muting' }
      ],

      progressionPath: [
        { level: 'Beginner', goal: 'Learn minor pentatonic scale (E or A as root). Play power chords (E5, A5, D5). Practice i-VII-VI progression. Master palm muting and basic b5 to 5 bend. Simple riffs without distortion.' },
        { level: 'Intermediate', goal: 'Learn all pentatonic positions. Combine major and minor pentatonic. Master bending (full step, half-step, quarter-tone). Play blues-rock progressions (i-IV-V). Add distortion. Learn hammer-ons and pull-offs. Basic syncopation.' },
        { level: 'Advanced', goal: 'Play complex rock riffs (syncopated, dropped tuning). Master lead soloing over rock progressions. Improvise full solos mixing pentatonic licks and note targeting. Play in all keys. Combine techniques (bending + hammer-on + syncopation). Study artist techniques (Hendrix, Clapton, Santana, modern metal). Understand harmonic content beyond pentatonic.' }
      ],

      commonMistakes: [
        '❌ Shuffling eighths (like blues)—rock is STRAIGHT eighths. Drive forward, not swinging.',
        '❌ Playing timidly—rock is about aggression and attitude. Attack the strings. Use distortion. Be bold.',
        '❌ Staying in one pentatonic position—move across the fretboard. Use all 5 positions. Create melodic movement.',
        '❌ Bending out of tune—use a tuner for bend accuracy. A bent note that\'s even slightly off-pitch sounds sloppy.',
        '❌ Overbending (always bending)—silence and straight notes are as powerful. Space is crucial. Call-and-response.',
        '❌ No rhythm feel—rock is GROOVE. Practice with a metronome. Syncopation and pocket matter more than notes.',
        '❌ Ignoring dynamics—quiet verses, loud choruses. Palm muting vs open. Soft bends vs aggressive bends. Dynamics = emotion.',
        '❌ Forgetting the 5th as a landing zone—rock doesn\'t always resolve to root. Land on 5th, hang there, create tension.',
        '❌ Distortion covering sloppiness—heavy distortion doesn\'t hide mistakes; it amplifies them. Play clean, tight, then add distortion.',
        '❌ Not listening to the bass and drums—rock is a team. Guitars lock with bass guitar. Play TOGETHER, not alone.'
      ]
    }
  }
};
