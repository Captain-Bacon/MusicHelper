/**
 * Curated chord progressions with musicality notes
 * Organized by style, difficulty, and character
 */

export const chordProgressions = [
  // Pop Progressions
  {
    formula: 'I → V → vi → IV',
    example: 'C → G → Am → F',
    style: 'Pop',
    difficulty: 'Beginner',
    character: 'Uplifting, memorable',
    voicing: 'Triads',
    notes: 'Known as the "Axis progression." Used in countless pop songs like "Don\'t Stop Believin\'" (Journey), "With or Without You" (U2), and "Let It Be" (Beatles). The deceptive resolution to vi creates momentum while IV→I loops back satisfyingly. Try varying the rhythm on the IV chord to create different feels.'
  },
  {
    formula: 'I → vi → IV → V',
    example: 'C → Am → F → G',
    style: 'Pop',
    difficulty: 'Beginner',
    character: 'Nostalgic, classic',
    voicing: 'Triads',
    notes: 'The "50s progression" or "doo-wop changes." Found in "Stand By Me" (Ben E. King), "Blue Moon" (various), and thousands of early rock/pop songs. The vi chord creates a gentle descent before building tension with IV→V. Works beautifully with walking bass lines.'
  },
  {
    formula: 'vi → IV → I → V',
    example: 'Am → F → C → G',
    style: 'Pop',
    difficulty: 'Beginner',
    character: 'Melancholic, emotional',
    voicing: 'Triads',
    notes: 'Starting on vi creates a darker, more introspective mood than its I-V-vi-IV cousin. Used in "Grenade" (Bruno Mars), "Apologize" (OneRepublic). The vi→IV movement by descending thirds feels smooth and inevitable. Great for verses that need emotional weight.'
  },
  {
    formula: 'I → V → vi → iii → IV → I → IV → V',
    example: 'C → G → Am → Em → F → C → F → G',
    style: 'Pop',
    difficulty: 'Intermediate',
    character: 'Epic, cinematic',
    voicing: 'Triads',
    notes: 'The "Pachelbel progression" (Canon in D). Longer 8-chord sequence creates a sense of journey. Used in "Basket Case" (Green Day), "Let It Go" (Frozen). The descending bass line (if you use root position) is the secret sauce. Works with both slow ballads and upbeat pop-punk.'
  },
  {
    formula: 'I → IVMaj7 → vi7 → V7',
    example: 'C → FMaj7 → Am7 → G7',
    style: 'Pop',
    difficulty: 'Intermediate',
    character: 'Smooth, sophisticated',
    voicing: '7th chords',
    notes: 'Adding 7ths to a basic I-IV-vi-V creates a more refined, adult-contemporary sound. The maj7 on IV is particularly lush. Found in R&B and sophisticated pop. Try voice-leading the 7ths smoothly (move them by step to the next chord tone) for maximum smoothness.'
  },

  // Jazz Progressions
  {
    formula: 'ii7 → V7 → IMaj7',
    example: 'Dm7 → G7 → CMaj7',
    style: 'Jazz',
    difficulty: 'Intermediate',
    character: 'Warm, resolved',
    voicing: '7th chords',
    notes: 'The fundamental jazz cadence. The ii-V creates a smooth approach to I through the cycle of fifths. Used as a turnaround, ending, or harmonic rhythm pattern. The tritone in V7 (B-F) resolves outward (C-E in CMaj7). Master this and you can play through 90% of jazz standards.'
  },
  {
    formula: 'IMaj7 → vi7 → ii7 → V7',
    example: 'CMaj7 → Am7 → Dm7 → G7',
    style: 'Jazz',
    difficulty: 'Intermediate',
    character: 'Smooth, flowing',
    voicing: '7th chords',
    notes: 'The "jazz circle progression." All roots descend by fifths (or up by fourths). Used in "Autumn Leaves," "Fly Me to the Moon." Creates strong forward motion through the cycle. Practice voice-leading where each 7th resolves down by step to the 3rd of the next chord.'
  },
  {
    formula: 'bVII7 → IMaj7',
    example: 'Bb7 → CMaj7',
    style: 'Jazz',
    difficulty: 'Advanced',
    character: 'Hip, unexpected',
    voicing: '7th chords',
    notes: 'The "backdoor resolution" or "backdoor ii-V." The bVII7 functions as a substitute for ii-V, approaching I from above instead of below. Creates a darker, bluesier sound than a standard resolution. Found in bebop and modal jazz. The bVII is borrowed from C minor (parallel minor).'
  },
  {
    formula: 'ii7 → bII7 → IMaj7',
    example: 'Dm7 → Db7 → CMaj7',
    style: 'Jazz',
    difficulty: 'Advanced',
    character: 'Sophisticated, tense',
    voicing: '7th chords',
    notes: 'Tritone substitution: bII7 (Db7) replaces V7 (G7). They share the same tritone (F-B / B-F) but resolve differently. Creates chromatic bass motion (D→Db→C). Used extensively in bebop and modern jazz. The altered tensions on bII7 (b9, #9, #11) add spice.'
  },
  {
    formula: 'IIIMaj7 → VIMaj7 → IIMaj7 → VMaj7',
    example: 'EMaj7 → AMaj7 → DMaj7 → GMaj7',
    style: 'Jazz',
    difficulty: 'Advanced',
    character: 'Bright, modal',
    voicing: 'Maj7 chords',
    notes: 'Coltrane Changes fragment (from "Giant Steps"). All major 7th chords whose roots are major thirds apart. Creates a bright, constantly modulating sound. Extremely challenging to improvise over as the key center shifts every chord. Practice slowly, thinking of each chord as a temporary key.'
  },

  // Blues Progressions
  {
    formula: 'I7 → I7 → I7 → I7 → IV7 → IV7 → I7 → I7 → V7 → IV7 → I7 → V7',
    example: 'C7 → C7 → C7 → C7 → F7 → F7 → C7 → C7 → G7 → F7 → C7 → G7',
    style: 'Blues',
    difficulty: 'Beginner',
    character: 'Classic, driving',
    voicing: 'Dominant 7ths',
    notes: 'The 12-bar blues foundation. All dominant 7th chords create bluesy tension. Bars 9-10 (V7→IV7) is the "turnaround." The final V7 sets up the loop. Found in countless blues, rock, and jazz tunes. Each chord can be embellished with blues scale licks. Don\'t rush - let it breathe.'
  },
  {
    formula: 'I7 → IV7 → I7 → I7 → IV7 → IV7 → I7 → I7 → V7 → IV7 → I7 → V7',
    example: 'C7 → F7 → C7 → C7 → F7 → F7 → C7 → C7 → G7 → F7 → C7 → G7',
    style: 'Blues',
    difficulty: 'Beginner',
    character: 'Immediate tension',
    voicing: 'Dominant 7ths',
    notes: 'Quick-change blues: moves to IV7 in bar 2 instead of bar 5. Creates earlier harmonic movement. Common in Chicago blues and jump blues. That early IV7 creates a "question" that gets "answered" when we return to I7. Gives the progression more momentum from the start.'
  },
  {
    formula: 'i7 → i7 → i7 → i7 → iv7 → iv7 → i7 → i7 → V7 → iv7 → i7 → V7',
    example: 'Cm7 → Cm7 → Cm7 → Cm7 → Fm7 → Fm7 → Cm7 → Cm7 → G7 → Fm7 → Cm7 → G7',
    style: 'Blues',
    difficulty: 'Intermediate',
    character: 'Dark, brooding',
    voicing: 'Minor 7ths',
    notes: 'Minor blues: i and iv are minor 7th chords, V stays dominant. Found in "The Thrill Is Gone" (B.B. King), "Stormy Monday." The minor tonality creates a sadder, more introspective mood. The V7 resolving to i7 (major to minor) is particularly poignant. Use Dorian mode for soloing.'
  },
  {
    formula: 'IMaj7 → vi7 → ii7 → V7 → IVMaj7 → #iv°7 → IMaj7 → vi7 → ii7 → V7 → IMaj7 → ii7 → V7',
    example: 'CMaj7 → Am7 → Dm7 → G7 → FMaj7 → F#dim7 → CMaj7 → Am7 → Dm7 → G7 → CMaj7 → Dm7 → G7',
    style: 'Blues',
    difficulty: 'Advanced',
    character: 'Sophisticated, bebop, jazz blues',
    voicing: '7th chords',
    notes: 'Jazz blues (12 bars) - bebop harmonic substitutions over blues structure. Bars 1-4 use I-vi-ii-V instead of static I7. Bar 5 is IVMaj7 (not IV7). Bar 6 adds #iv°7 diminished passing chord. Bars 7-12 continue with ii-V movements. This is Charlie Parker, Dizzy Gillespie territory - blues harmony reharmonized with bebop changes. The diminished passing chord (#iv°7 = F#dim7) connects IV and I chromatically. Each ii-V creates mini-resolutions within the blues form. Soloing requires knowing chord tones and bebop vocabulary, not just blues scale. This teaches that blues and jazz are cousins - same form, different harmonic sophistication.'
  },
  {
    formula: 'I7 → I7 → I7 → I7 → IV7 → #iv°7 → I7 → vi7 → ii7 → V7 → I7 → V7',
    example: 'C7 → C7 → C7 → C7 → F7 → F#dim7 → C7 → Am7 → Dm7 → G7 → C7 → G7',
    style: 'Blues',
    difficulty: 'Intermediate',
    character: 'Swinging, jump blues, enhanced',
    voicing: 'Dominant 7ths',
    notes: '12-bar blues with passing diminished and turnaround ii-V. This bridges basic blues and jazz blues. Bars 1-5 are traditional, bar 6 adds #iv°7 (F#dim7) as a chromatic passing chord between IV7 and I7. Bars 9-10 (ii-V instead of just V-IV) create a jazzier turnaround. Found in jump blues, early jazz, swing bands. The diminished chord adds sophistication without requiring full reharmonization. Guitar/piano: the F#dim7 is just F#-A-C-Eb (can also think of it as Am7b5 = A-C-Eb-F#). This teaches how to gradually jazz-ify basic blues - add one chromatic element at a time. Works for blues that wants to swing harder.'
  },
  {
    formula: 'I7 → I7 → IV7 → I7 → V7 → IV7 → I7 → V7',
    example: 'C7 → C7 → F7 → C7 → G7 → F7 → C7 → G7',
    style: 'Blues',
    difficulty: 'Beginner',
    character: 'Concise, rock blues, driving',
    voicing: 'Dominant 7ths or Power chords',
    notes: '8-bar blues - shorter form than standard 12-bar. Each section is compressed: tonic (2 bars), subdominant (1 bar), tonic (1 bar), turnaround (4 bars). Found in early rock and roll, rockabilly, and when you need a shorter blues form. The faster harmonic rhythm makes it more driving and urgent than 12-bar. Common in "Johnny B. Goode" style rock, blues-rock. Guitar: works great with power chords (just root-5th-octave) for rock approach, or full 7th chords for traditional blues. The brevity means you get to the turnaround quicker - good for uptempo feels. This teaches that blues form is flexible - can be 8, 12, 16, 24 bars depending on the song\'s needs.'
  },

  // Gospel Progressions
  {
    formula: 'I → bIII → IV → iv',
    example: 'C → Eb → F → Fm',
    style: 'Gospel',
    difficulty: 'Intermediate',
    character: 'Soulful, churchy',
    voicing: 'Triads',
    notes: 'Chromatic walkdown (in bass: C→B→Bb→A if using inversions). The bIII is borrowed from parallel minor, iv is a minor plagal. Creates a deeply emotional, gospel sound. Found in "Oh Happy Day" and countless gospel standards. Voice the bIII carefully to avoid clashes with melody.'
  },
  {
    formula: 'IV → iv → I',
    example: 'F → Fm → C',
    style: 'Gospel',
    difficulty: 'Beginner',
    character: 'Tender, "Amen"',
    voicing: 'Triads',
    notes: 'The plagal cadence with minor iv twist. Known as the "Amen cadence" because it\'s used to harmonize "A-men" at the end of hymns. The chromaticism (A→Ab) creates a bittersweet resolution. More gentle than V→I. Perfect for endings or quiet moments. Add 7ths for more soul.'
  },
  {
    formula: 'I → iii7 → vi7 → ii7 → V7 → I',
    example: 'C → Em7 → Am7 → Dm7 → G7 → C',
    style: 'Gospel',
    difficulty: 'Intermediate',
    character: 'Uplifting, classic',
    voicing: '7th chords',
    notes: 'Gospel turnaround using diatonic 7th chords descending in thirds. The iii7→vi7 movement is particularly sweet. Found in traditional and contemporary gospel. Try adding passing chords between each (like III7 between iii7 and vi7) for a more sophisticated sound. Works great at slow tempos with sustained chords.'
  },
  {
    formula: 'I with chromatic bass descent',
    example: 'C → C/B → C/Bb → C/A',
    style: 'Gospel',
    difficulty: 'Intermediate',
    character: 'Smooth, soulful, chromatic',
    voicing: 'Slash chords with chromatic bass',
    notes: 'Chromatic bass line turnaround under sustained tonic harmony. The C major triad stays constant in upper voices while bass descends chromatically (C-B-Bb-A). Creates smooth motion leading into a resolution or different chord. The I/Bb (C/Bb) is a chromatic passing sonority - not diatonic but sounds right in gospel context. The I/A often resolves to IV (F) or vi (Am). Found in traditional Black gospel, especially piano-driven arrangements. Keys/organ: left hand walks the bass chromatically, right hand sustains the triad. This teaches gospel chromaticism - the chromatic bass line is a signature sound, creating smooth voice leading and soulful movement.'
  },
  {
    formula: 'IMaj7 → bIIIMaj7 → IVMaj7 → IVm7',
    example: 'CMaj7 → EbMaj7 → FMaj7 → Fm7',
    style: 'Gospel',
    difficulty: 'Advanced',
    character: 'Modern, sliding, emotional',
    voicing: 'Maj7 chords',
    notes: 'Parallel major 7th chords with chromatic movement. The bIII (Eb) is borrowed from parallel minor but voiced as Maj7, creating lush chromaticism. The final IVm7 adds the minor plagal twist. This is modern gospel harmony - sophisticated voicings, chromatic movement, emotional weight. Found in contemporary gospel choir arrangements and Kirk Franklin productions. The parallel Maj7 voicings (same shape, different roots) slide chromatically. Keys/piano: voice these as close position Maj7s in right hand for maximum shimmer. The chromaticism (E natural to Eb, A to Ab) creates the emotional pull. This bridges traditional gospel chromaticism with contemporary R&B voicings.'
  },
  {
    formula: 'I → V/vi → vi → V/ii → ii → V7 → I',
    example: 'C → E7 → Am → A7 → Dm → G7 → C',
    style: 'Gospel',
    difficulty: 'Advanced',
    character: 'Sophisticated, churchy, harmonic',
    voicing: 'Triads with secondary dominants',
    notes: 'Traditional gospel with secondary dominants for harmonic richness. Each diatonic chord (vi, ii) is preceded by its own dominant (V/vi = E7, V/ii = A7). This creates a chain of temporary tonicizations - each chord feels like a mini-key center. The chromatic notes (G#, C#) in the dominants add tension and color. Found in Golden Age gospel (Thomas Dorsey, Mahalia Jackson era). Organ/piano: the secondary dominants should be emphatic - let that G# in E7 ring out before resolving to Am. This teaches functional gospel harmony at its most sophisticated - every chord approached with intention, maximum harmonic movement.'
  },
  {
    formula: 'I → vi → IVMaj7 → I/V → V7sus4 → V7',
    example: 'C → Am → FMaj7 → C/G → G7sus4 → G7',
    style: 'Gospel',
    difficulty: 'Intermediate',
    character: 'Contemporary, building, anticipatory',
    voicing: 'Mixed voicings',
    notes: 'Contemporary gospel progression that builds anticipation through bass movement and suspension. The I-vi provides gentle descent, IVMaj7 adds sophistication, I/V (second inversion) over dominant bass creates tension, V7sus4 suspends that tension, finally V7 releases it. Common in contemporary praise music and modern gospel arrangements. The bass line ascends (C-A-F-G) creating upward momentum. The sus4 is crucial - often held for a full bar or more to create worship moment anticipation. Choir often holds during sus4 before releasing on V7. This is the bridge between traditional Black gospel and contemporary white worship music - harmonically sophisticated, emotionally building, congregation-friendly.'
  },

  // Versatile/Classical
  {
    formula: 'I → IV → I → V',
    example: 'C → F → C → G',
    style: 'Classical',
    difficulty: 'Beginner',
    character: 'Simple, stable',
    voicing: 'Triads',
    notes: 'The most basic tonic-subdominant-dominant progression. Foundation of Western harmony for 300+ years. The IV provides contrast without leaving home, V creates tension for resolution. Found in folk songs, hymns, classical period music. Can sound bland if overused, but forms the backbone of functional harmony.'
  },
  {
    formula: 'I → IV → vii° → iii',
    example: 'C → F → Bdim → Em',
    style: 'Classical',
    difficulty: 'Intermediate',
    character: 'Elegant, flowing',
    voicing: 'Triads',
    notes: 'Classical sequence with diminished passing chord. The vii° provides smooth voice leading between IV and iii. Found in Baroque and Classical period music. The diminished chord creates tension that resolves nicely to iii. All roots descend by third except vii°→iii (ascending fourth). Try in slow, arpeggiated texture.'
  },
  {
    formula: 'I → I6/4 → V7 → I',
    example: 'C → C/G → G7 → C',
    style: 'Classical',
    difficulty: 'Advanced',
    character: 'Formal, cadential',
    voicing: 'Triads with inversions',
    notes: 'The cadential 6/4 progression: a formal classical ending. I6/4 (second inversion tonic) is treated as a dissonance that resolves to V7, which then resolves to I. The I6/4 functions as an embellishing chord over the dominant bass. Found in Mozart, Beethoven. Voice leading is crucial: move minimal distance between chords.'
  },
  {
    formula: 'i → V7/iv → iv → vii°7/V → V7 → i',
    example: 'Cm → C7 → Fm → F#dim7 → G7 → Cm',
    style: 'Classical',
    difficulty: 'Advanced',
    character: 'Dramatic, chromatic',
    voicing: 'Triads and 7ths',
    notes: 'Minor key progression with secondary dominants. V7/iv (C7) tonicizes the iv chord, vii°7/V (F#dim7) leads strongly to V. The chromaticism (C natural, F#) creates drama against the Cm backdrop. Found in Romantic era music. The diminished 7th can resolve multiple ways - experiment with inversions.'
  },
  {
    formula: 'i → iv → bII6 → V7 → i',
    example: 'Am → Dm → Bb/D → E7 → Am',
    style: 'Classical',
    difficulty: 'Advanced',
    character: 'Poignant, Romantic, chromatic',
    voicing: 'Triads with chromatic notes',
    notes: 'The Neapolitan sixth chord progression. The bII6 (Bb major in first inversion = Bb/D) is the "Neapolitan sixth" - a major chord built on the lowered second scale degree, used in first inversion. The Db (lowered 2nd) and F create a dark, chromatic color against Am. Resolves to V7 before tonic. Found in Beethoven, Chopin, Romantic opera. The name comes from the Neapolitan opera school. Voice leading: the Db resolves down by half-step to C# (3rd of E7), the F common tone stays. This is one of the most expressive chromatic chords in Classical harmony - creates a yearning, deeply emotional quality. Often used in tragic or passionate moments.'
  },
  {
    formula: 'i → iv → bVI7 → V → i',
    example: 'Am → Dm → F7 → E → Am',
    style: 'Classical',
    difficulty: 'Advanced',
    character: 'Intense, chromatic, Romantic',
    voicing: 'Augmented 6th chord',
    notes: 'German augmented sixth chord progression (notated as bVI7 for the parser). The German augmented 6th is built on bVI with an augmented 6th interval from bass to soprano (in Am: F to D#). The chord F-A-C-D# is enharmonically like a dominant 7th (F7), but the D# resolves UP to E while F resolves down to E (both voices converge on dominant note). Found in Brahms, Wagner, late Romantic music. This is maximum chromatic tension before dominant. The "German" designation is historical. Voice in four parts: bVI bass, inner voices, and raised 4th scale degree on top. The augmented 6th interval creates magnetic pull inward. This teaches chromatic predominant harmony - chords that intensify the approach to V.'
  },
  {
    formula: 'IMaj7 → IVMaj7 → vii°7 → iii7 → vi7 → ii7 → V7 → IMaj7',
    example: 'CMaj7 → FMaj7 → Bdim7 → Em7 → Am7 → Dm7 → G7 → CMaj7',
    style: 'Classical',
    difficulty: 'Intermediate',
    character: 'Flowing, sequential, Jazz-influenced',
    voicing: '7th chords',
    notes: 'Descending circle of fifths sequence with 7th chords. Roots descend by fifths (or ascend by fourths): C-F (up 4th), F-B (down 5th), B-E (down 5th), E-A (down 5th), A-D (down 5th), D-G (down 5th), G-C (down 5th). This is functional harmony in its purest form - every chord is a mini-dominant leading to the next. Found in Baroque sequences (Bach), Classical period, and jazz as "rhythm changes." Voice lead each 7th down by step to the 3rd of the next chord. The vii°7 (Bdim7) can be substituted with V7/iii (B7). This pattern can start anywhere in the cycle and continue as long as desired. Teaches the circle of fifths as harmonic progression - the most fundamental motion in Western tonal music.'
  },
  {
    formula: 'I → bIII → IV → iv',
    example: 'C → Eb+ → F → Fm',
    style: 'Classical',
    difficulty: 'Advanced',
    character: 'Colorful, Romantic, chromatic',
    voicing: 'Augmented triad',
    notes: 'Romantic progression with augmented triad (bIII+). The Eb augmented triad (Eb-G-B natural) functions as a chromatic pivot - the B natural creates an augmented 5th. This chord has ambiguous function - could resolve multiple directions because augmented triads divide the octave equally. Here it moves to IV (F), then to iv (Fm) for the minor plagal. Found in Liszt, Wagner, French Impressionists. The augmented triad sound is shimmering, unstable, colorful. Voice the B natural carefully - it wants to resolve upward to C. This teaches post-Classical chromatic harmony - augmented triads as color chords, not just altered dominants. The progression moves from bright (I) through chromatic color (bIII+) to plagal resolution (IV-iv-I implied). This is Romantic harmony - emphasizing color and emotion over strict function.'
  },

  // Modal/Modern
  {
    formula: 'i7 → bVII7 → bVIMaj7 → bVII7',
    example: 'Dm7 → C7 → BbMaj7 → C7',
    style: 'Rock',
    difficulty: 'Intermediate',
    character: 'Powerful, anthemic',
    voicing: '7th chords',
    notes: 'Dorian progression borrowed from modal folk music. All chords except i7 are from D Dorian (natural 6th in minor). Used in "Scarborough Fair," "Mad World," "Get Lucky." The major IV (bVII in relation to i) is the signature Dorian sound. Avoids the V7→i resolution, creating a floating, modal feel instead.'
  },
  {
    formula: 'I → bVII → bVI → bVII',
    example: 'C → Bb → Ab → Bb',
    style: 'Rock',
    difficulty: 'Intermediate',
    character: 'Bold, driving',
    voicing: 'Power chords/Triads',
    notes: 'Mixolydian vamp (major key with b7). Found in "Sweet Child O\' Mine" (intro), "Royals." The bVII instead of vii° gives a rock sound, bVI adds more darkness. All roots descend by whole step. Works great with distorted guitar power chords (just root and fifth). Emphasize the flat 7th (Bb) in melody for modal character.'
  },
  {
    formula: 'bVI → bVII → I',
    example: 'Ab → Bb → C',
    style: 'Rock',
    difficulty: 'Beginner',
    character: 'Epic, resolving',
    voicing: 'Triads/Power chords',
    notes: 'The "Mario cadence" or "backdoor progression." Borrowed from C minor (parallel minor). Creates a powerful build-up and resolution. Found in "Livin\' on a Prayer," countless rock anthems. Stronger and more satisfying than IV→V→I because the roots ascend by whole steps. Great for choruses and climactic moments.'
  },
  {
    formula: 'I → IV → V',
    example: 'A → D → E',
    style: 'Rock',
    difficulty: 'Beginner',
    character: 'Classic, driving, fundamental',
    voicing: 'Power chords or triads',
    notes: 'The most basic rock progression - I-IV-V. Foundation of rock and roll, blues rock, classic rock. This is tonic-subdominant-dominant in its purest form. Found in "Wild Thing," "Louie Louie," countless three-chord rock songs. Guitar: power chords (root-5th-octave) are standard - no 3rd gives it that raw rock sound. The three chords usually get 2 or 4 bars each. Can be played in any order (I-IV-V, I-V-IV, etc.) or repeated endlessly. This teaches that you don\'t need complex harmony to rock - energy, rhythm, and attitude matter more than chord changes. Every rock guitarist must know this progression cold.'
  },
  {
    formula: 'i → bVII → bVI → V',
    example: 'Am → G → F → E',
    style: 'Rock',
    difficulty: 'Intermediate',
    character: 'Dark, descending, dramatic',
    voicing: 'Power chords or triads',
    notes: 'Minor key descending progression with major V at the end. The i-bVII-bVI descent feels like falling, then V creates tension for resolution back to i. Found in "Stairway to Heaven" intro, countless rock ballads and epics. The major V (E major) in Am creates harmonic minor flavor - that G# leading tone. Guitar: works great with fingerpicking (arpeggiated) or power chords. This progression often starts acoustic/quiet and builds to electric/loud - the dynamics are part of the drama. The descent creates melancholy, the V creates anticipation. Classic "epic rock" progression.'
  },
  {
    formula: 'i → bVI → bIII → bVII',
    example: 'Em → C → G → D',
    style: 'Rock',
    difficulty: 'Intermediate',
    character: 'Modal minor, Aeolian, alternative',
    voicing: 'Power chords',
    notes: 'Pure Aeolian (natural minor) rock progression - no V chord, stays modal. The bVI, bIII, bVII are all diatonic to natural minor. This is grunge, alternative rock, 90s sound. Found in "Smells Like Teen Spirit" (similar movement), Alice in Chains, Soundgarden. All major chords (bVI, bIII, bVII) against minor tonic creates the alternative rock sound - dark but not sad. Power chords almost mandatory - the ambiguity of no 3rd fits the aesthetic. Downtuning (drop D, etc.) common. This is post-punk harmony - rejects traditional resolution. The lack of V-i resolution means it just circulates, never fully resolves. Creates tension that groove and dynamics must sustain.'
  },
  {
    formula: 'bV → I',
    example: 'Gb5 → C5',
    style: 'Rock',
    difficulty: 'Intermediate',
    character: 'Metal, tritone, dissonant',
    voicing: 'Power chords',
    notes: 'The tritone power chord resolution - heavy metal territory. The bV to I is a tritone apart (Gb to C = 6 semitones), creating maximum dissonance and tension. Found in Black Sabbath, thrash metal, doom metal. The bV (Gb5) is chromatic - not from any normal scale relative to C. Power chords (5th interval, no 3rd) essential - triads would clash too much. This is the sound of heavy metal - dark, dissonant, powerful. Often used as a riff element, not whole progression. Guitar: downtuned (drop D or lower), high gain distortion, palm muting. The chromaticism and dissonance is the point - this isn\'t functional harmony, it\'s sonic assault. Teaches that rock can embrace dissonance and chromaticism for effect.'
  },
  {
    formula: 'ii7 → I7',
    example: 'Dm7 → C7',
    style: 'Funk',
    difficulty: 'Beginner',
    character: 'Groovy, modal',
    voicing: '7th chords',
    notes: 'Two-chord Mixolydian vamp. Found in "Superstition" (Stevie Wonder), countless funk tunes. The I7 (dominant 7th on tonic) defines Mixolydian mode. Groove and rhythm are more important than harmonic movement. Let each chord breathe for 2-4 bars. Add extensions (9ths, 13ths) and syncopated rhythms for authentic funk feel.'
  },
  {
    formula: 'I7',
    example: 'E7#9',
    style: 'Funk',
    difficulty: 'Beginner',
    character: 'Raw, primal, hypnotic',
    voicing: 'Dominant 7#9',
    notes: 'The one-chord funk vamp - it\'s not about harmony, it\'s about RHYTHM. Found in "I Got You (I Feel Good)" (James Brown), "Sex Machine," "Thank You (Falettinme Be Mice Elf Agin)" (Sly Stone). The #9 (the "Hendrix chord") adds bite and tension that never resolves. The groove IS the music - lock with the drummer on beat 1 ("the One"). Guitar: muted 16th-note scratches. Keys: staccato stabs on 2 and 4, add 9th and 13th for color. Common mistake: overplaying - space and pocket matter more than notes.'
  },
  {
    formula: 'iv7 → i7',
    example: 'Fm7 → Cm7',
    style: 'Funk',
    difficulty: 'Beginner',
    character: 'Dark, New Orleans, swampy',
    voicing: 'Minor 7th chords',
    notes: 'Minor funk/Dorian groove. Found in "Cissy Strut" (The Meters), "Shining Star" (Earth Wind & Fire). This is the darker side of funk - New Orleans second line feel. The iv-i in minor creates a hypnotic, laid-back vamp. Use Dorian mode (natural 6th) not pure Aeolian. Guitar: use the Dorian 6th (A in Cm7) in riffs. Keys: Rhodes with tremolo, emphasize the 9th. The groove is more behind-the-beat than major funk. Let it breathe and swagger.'
  },
  {
    formula: 'IVMaj7 → iii7 → IVMaj7 → V7',
    example: 'FMaj7 → Em7 → FMaj7 → G7',
    style: 'Funk',
    difficulty: 'Intermediate',
    character: 'Churchy, uplifting, contemporary',
    voicing: 'Maj7/7th chords',
    notes: 'Gospel-funk hybrid pioneered by Kirk Franklin, used in contemporary gospel and neo-soul. Combines church harmony (major 7th chords) with funk groove. The IVMaj7 is the tonic feel (think Lydian), iii7 provides minor color, V7 creates turnaround tension. This is the bridge between traditional gospel and modern R&B/funk. Keys: organ-style sustained chords or Rhodes. Guitar: clean tone, chord melody fills. The rhythm section should groove hard while the harmony stays sophisticated. Common in praise & worship bands trying to sound current.'
  },
  {
    formula: 'I7 → bVII7 → bVI7 → bV7',
    example: 'C7 → Bb7 → Ab7 → Gb7',
    style: 'Funk',
    difficulty: 'Intermediate',
    character: 'Chromatic, psychedelic, P-Funk',
    voicing: 'Dominant 7ths',
    notes: 'Chromatic descending funk - P-Funk/Parliament/Funkadelic territory. Found in "Flash Light," "Atomic Dog." All dominant 7th chords descending by whole steps creates a chromatic, slightly disorienting vamp. This isn\'t functional harmony - it\'s color and movement. The parallel motion of the same chord quality descending is hypnotic. Bass: the chromatic descent is crucial (C-Bb-Ab-Gb). Keys: Clavinet or synth with wah filter. Guitar: envelope filter, octave pedals. This is psychedelic funk - embrace the weirdness, lock the groove, let synths go wild on top.'
  },

  // Extended/Jazz Fusion
  {
    formula: 'IMaj7 → II7 → IIIMaj7 → #IVm7b5',
    example: 'CMaj7 → D7 → EMaj7 → F#m7b5',
    style: 'Jazz Fusion',
    difficulty: 'Advanced',
    character: 'Bright, constantly shifting',
    voicing: 'Extended chords',
    notes: 'Lydian-based progression: each chord comes from major scale starting on that root. Creates a bright, modern jazz sound. All roots ascend by major seconds, constantly shifting tonal center. Used in "Windows" (Chick Corea). Add 9ths, 11ths, 13ths freely. Each chord is its own momentary key - think horizontally, not functionally.'
  },
  {
    formula: 'I7sus4',
    example: 'Bb7sus4',
    style: 'Jazz Fusion',
    difficulty: 'Intermediate',
    character: 'Hypnotic, funky, suspended',
    voicing: 'Sus4 with extensions',
    notes: 'The "Chameleon" vamp (Herbie Hancock). One chord, infinite groove. The sus4 suspends the 3rd, creating harmonic ambiguity - is it Bb Mixolydian? Eb major? Both? Neither? The tension never resolves, creating a hypnotic, trance-like quality. Bass: syncopated, synth bass works best. Keys: layered synth textures - one voice plays the sus4 chord (Bb-Eb-F-Ab), another plays melodic fragments using Bb Mixolydian or Dorian. Add 9th (C) and 13th (G) for color. The funk groove carries everything - tight 16th notes on drums. This teaches that one chord + groove + texture = complete music. Don\'t overplay - let the groove breathe.'
  },
  {
    formula: 'Quartal: D-G-C | E-A-D | F-Bb-E',
    example: 'D-G-C | E-A-D | F-Bb-E',
    style: 'Jazz Fusion',
    difficulty: 'Advanced',
    character: 'Open, modern, ambiguous',
    voicing: 'Stacked perfect 4ths',
    notes: 'Quartal harmony - chords built from perfect 4ths instead of thirds. Used by McCoy Tyner, Chick Corea, modern jazz. These voicings have no clear major/minor quality - they\'re neither, creating an open, modern sound. Each "chord" is just three notes stacked in 4ths (D-G-C is C-to-G-to-D = two 4ths). The progression here is the whole structure moving up by whole steps. Keys: use these voicings in left hand for comping, right hand plays melodic lines. Guitar: these shapes are very playable - one finger per fret across 3 strings. This is post-bop harmony - we\'ve moved beyond tertian (3rd-based) chords. Think modal, think McCoy Tyner behind Coltrane. The ambiguity is the point.'
  },
  {
    formula: 'bVIIMaj7 → IVMaj7 → IMaj7',
    example: 'BbMaj7#11 → FMaj7#11 → CMaj7#11',
    style: 'Jazz Fusion',
    difficulty: 'Advanced',
    character: 'Floating, Lydian, ethereal',
    voicing: 'Maj7#11 chords',
    notes: 'All Lydian major 7th chords (#11 is the defining Lydian color) descending by fifths, but starting on bVII. This avoids functional harmony entirely - no dominants, no resolutions, just floating Lydian colors. Used in modern fusion and film scores. The #11 (raised 4th) gives each chord a bright, unresolved quality. Voice with the #11 prominently in the upper structure. The bVII-IV-I bass movement is downward by fifths but feels modal, not functional. Think Pat Metheny, modern fusion soundscapes. Each chord is its own self-contained Lydian universe. Add extensions freely (9th, 13th) but the #11 is non-negotiable - that\'s the Lydian signature.'
  },
  {
    formula: 'Em11 → A7sus4 → DMaj9 → GMaj13',
    example: 'Em11 → A7sus4 → DMaj9 → GMaj13',
    style: 'Jazz Fusion',
    difficulty: 'Advanced',
    character: 'Smooth, contemporary, sophisticated',
    voicing: 'Extended chords',
    notes: 'Contemporary fusion progression heavy with extensions and suspensions. The Em11 (no 3rd emphasized) to A7sus4 creates ambiguity before "resolving" to DMaj9. But the GMaj13 immediately takes us elsewhere - this isn\'t functional. Every chord has at least 5 notes. The sus4 delays resolution, the 9ths/11ths/13ths add shimmer. Found in smooth jazz, contemporary jazz-pop fusion (Bob James, David Benoit). Keys: voice the extensions in the upper register - basic triad/7th in left hand, extensions (9-11-13) in right. Guitar: use shell voicings + extensions on top strings. This is the "smooth jazz" sound - sophisticated but accessible. The extensions make it jazzy, the groove makes it fusion.'
  },
  {
    formula: 'Vm7 → IM7',
    example: 'Gm7 → CMaj7',
    style: 'Latin Jazz',
    difficulty: 'Intermediate',
    character: 'Suspended, modal',
    voicing: '7th chords',
    notes: 'Two-chord modal vamp from C Dorian or G Aeolian perspective. Common in Latin jazz and bossa nova. The minor v (instead of major V) creates ambiguity - no leading tone. Groove and rhythm carry the music, not harmonic function. Add percussion patterns (clave, bossa rhythm) to define the style. Melody can explore both chords\' related modes.'
  },
  {
    formula: 'IMaj7 → IVm6 → iii7 → bIII7 → ii7 → V7 → IMaj7',
    example: 'FMaj7 → Bbm6 → Am7 → Ab7 → Gm7 → C7 → FMaj7',
    style: 'Latin Jazz',
    difficulty: 'Advanced',
    character: 'Sophisticated, flowing, romantic',
    voicing: 'Extended 7th chords',
    notes: 'The "Girl from Ipanema" progression - the DNA of bossa nova. The IVm6 (borrowed from parallel minor) creates the characteristic bittersweet color. The bIII7 is a chromatic passing chord leading to ii7. This is harmonically dense - every two bars brings new harmonic color. Voice leading is crucial: move inner voices by half-steps and whole-steps. Keys: use shell voicings (root-3rd-7th) in left hand, add 9ths in right. Guitar: thumb plays bass notes on beats 1 and 2, fingers play chords on off-beats (bossa pattern). The rhythm is as important as the harmony - that syncopated "dum-chi-chi-dum-chi" pattern defines bossa.'
  },
  {
    formula: 'i7 → iv7 → V7 → i7',
    example: 'Cm7 → Fm7 → G7 → Cm7',
    style: 'Latin Jazz',
    difficulty: 'Intermediate',
    character: 'Driving, Afro-Cuban, cyclical',
    voicing: 'Dominant 7th/Minor 7th',
    notes: 'Afro-Cuban montuno pattern - the foundation of salsa and mambo. This is the harmonic vamp under the montuno piano pattern. The i-iv in minor creates a darker, more intense feel than Brazilian styles. The V7 resolving to i7 (major to minor) is particularly strong. Bass: play tumbao pattern (syncopated, anticipating beat 1). Keys: montuno is a rhythmic piano pattern - arpeggiate the chords with specific rhythm (tresillo or cinquillo). Guitar: typically not featured in traditional Afro-Cuban, but can play rhythmic comping. Clave rhythm (2-3 or 3-2) is the organizing principle - everything locks to clave. This is more African-influenced than bossa - harder, more percussive.'
  },
  {
    formula: 'IMaj7 → ii7 → iii7 → #iii°7 → ii7 → V7 → IMaj7',
    example: 'CMaj7 → Dm7 → Em7 → E#dim7 → Dm7 → G7 → CMaj7',
    style: 'Latin Jazz',
    difficulty: 'Advanced',
    character: 'Bright, carnival, celebratory',
    voicing: 'Extended 7th chords',
    notes: 'Samba progression with chromatic passing diminished. Different from bossa - samba is faster, more energetic, more carnival than beach. The ascending diatonic 7th chords (I-ii-iii) create upward momentum, the #iii°7 is a chromatic passing chord back to ii7. This creates a "question and answer" phrase structure. Bass: samba bass pattern emphasizes beats 2 and 3, creating forward propulsion. Percussion: surdo drum pattern (low-high-low on beats 1-2-1.5) drives the feel. Guitar: rhythm guitar plays 16th-note patterns with muted strings. Samba is celebration music - bright, major, rhythmically complex. The harmony is simpler than bossa, the rhythm is more complex.'
  },
  {
    formula: 'IMaj7 → bVIMaj7 → bVIIMaj7 → VMaj7',
    example: 'CMaj7 → AbMaj7 → BbMaj7 → GMaj7',
    style: 'Latin Jazz',
    difficulty: 'Intermediate',
    character: 'Modal, floating, contemporary',
    voicing: 'Maj7 chords',
    notes: 'Contemporary Latin jazz using parallel major 7th chords - modal interchange from multiple sources. The bVI and bVII create a floating, non-functional sound. All major 7ths (no dominants) means no strong resolutions - this is about color and texture. Found in modern Brazilian jazz (Hermeto Pascoal) and fusion. The parallel motion creates a dreamy quality. This can work with various Latin rhythms - bossa, samba, or even Afro-Cuban. Voice these as close position major 7ths, moving the entire shape in parallel. Melody should emphasize Lydian or Mixolydian modes for each chord. This is the "new" Latin jazz - less functional harmony, more modal exploration.'
  },
  {
    formula: 'IMaj9 → bVIMaj9 → IVMaj9 → bIIIMaj9',
    example: 'CMaj9 → AbMaj9 → FMaj9 → EbMaj9',
    style: 'Neo-Soul',
    difficulty: 'Advanced',
    character: 'Lush, modern',
    voicing: '9th chords',
    notes: 'Parallel major 9th chords descending by thirds and seconds. Creates a dreamy, floating quality. The bVI and bIII are borrowed from parallel minor. Found in contemporary R&B and neo-soul (D\'Angelo, Erykah Badu). Voice the 9ths on top for shimmer. Use extended techniques like chord melody and rhythmic displacement.'
  },
  {
    formula: 'FMaj7/G → Em7/A → Dm9 → G13',
    example: 'FMaj7/G → Em7/A → Dm9 → G13',
    style: 'Neo-Soul',
    difficulty: 'Advanced',
    character: 'Floating, ambiguous, Voodoo-era',
    voicing: 'Slash chords',
    notes: 'Slash chord progression - D\'Angelo "Voodoo" territory. Slash chords (upper structure over different bass) create harmonic ambiguity and richness. FMaj7/G functions as G11 without the 3rd - suspended, floating. Em7/A is A11 - same idea. These aren\'t clear dominants, they\'re textures. The bass note is as important as the chord above it. Keys: left hand plays bass note, right hand voices the chord. The independence between bass and harmony creates the neo-soul sound. Guitar: challenging - requires big stretches or two-hand tapping. This progression lives in the space between jazz and R&B. The groove should be behind the beat, quantization should be loose. Think "Untitled (How Does It Feel)" production aesthetic.'
  },
  {
    formula: 'Am7 (bass: A → Ab → G → Gb) → FMaj9',
    example: 'Am7 → FMaj9 (with chromatic bass)',
    style: 'Neo-Soul',
    difficulty: 'Intermediate',
    character: 'Sophisticated, smooth, Erykah Badu',
    voicing: 'Sustained chord with moving bass',
    notes: 'Chromatic bass line under sustained harmony. The Am7 chord stays constant in the upper voices while the bass walks chromatically downward (A-Ab-G-Gb) before resolving to FMaj9. This creates motion without changing the harmony - the movement is horizontal (bass line) not vertical (chord changes). Found in "On & On" (Erykah Badu), contemporary R&B. Bass: the chromatic descent should be smooth and purposeful, not rushed. Keys: sustain Am7 in right hand with gentle reattacks, left hand/bass plays the line. This teaches separation of harmonic rhythm (slow) from melodic rhythm (active). The chromaticism creates tension that releases when arriving at F.'
  },
  {
    formula: 'Bm11 → E7alt → AMaj7 → DMaj9 → GMaj13 → CMaj9',
    example: 'Bm11 → E7alt → AMaj7#11 → DMaj9 → GMaj13 → CMaj9#11',
    style: 'Neo-Soul',
    difficulty: 'Advanced',
    character: 'Complex, jazz-influenced, gospel-tinged',
    voicing: 'Extended chords with alterations',
    notes: 'Robert Glasper territory - where jazz, gospel, and hip-hop intersect. This progression draws from jazz (ii-V movement, altered dominants), gospel (major 7th richness), and hip-hop (the groove and production). The E7alt (altered dominant with b9, #9, b13) creates tension before AM7#11. Roots descend by fifths (B-E-A-D-G-C) creating forward motion. Each chord is heavily extended - this isn\'t simple R&B, it\'s harmonically sophisticated. Keys: Glasper-style voicings emphasize 9ths and 11ths, often omitting 5ths. Think "Black Radio" production - acoustic piano with hip-hop drums and production. This is the intellectual side of neo-soul, requires jazz chops to execute convincingly.'
  },
  {
    formula: 'i9 → iv11 → bVIIMaj7 → bIIIMaj9',
    example: 'Cm9 → Fm11 → BbMaj7#11 → EbMaj9',
    style: 'Neo-Soul',
    difficulty: 'Advanced',
    character: 'Dark, sophisticated, Aeolian-Dorian',
    voicing: 'Extended minor chords',
    notes: 'Minor neo-soul progression blending Aeolian and Dorian. The Im9 and IVm11 establish minor tonality, but the major IV (IVm11 is from Dorian while bVIIMaj7#11 is from Aeolian - we\'re modal mixing). All chords heavily extended (9ths, 11ths). This is darker than major-key neo-soul - introspective, late-night feel. The #11 on bVIIMaj7 adds a Lydian shimmer to an already colorful chord. Found in contemporary R&B that leans toward hip-hop and trip-hop influences. The production should be spacious - reverb, subtle compression, let the extensions ring. This teaches how to make minor progressions sophisticated without resorting to dominant-tonic resolution.'
  },

  // Singer-Songwriter/Indie
  {
    formula: 'I → iii → vi → IV',
    example: 'C → Em → Am → F',
    style: 'Indie',
    difficulty: 'Beginner',
    character: 'Bittersweet, contemplative',
    voicing: 'Triads',
    notes: 'Descending thirds progression. Similar to I-V-vi-IV but with iii replacing V creates a softer, less driven feel. Used in indie folk and singer-songwriter music. The iii→vi movement is smooth and melancholic. Works well with fingerpicking guitar patterns. Add sus2/sus4 chords for modern indie flavor.'
  },
  {
    formula: 'I → Isus4 → I → Isus2',
    example: 'C → Csus4 → C → Csus2',
    style: 'Indie',
    difficulty: 'Beginner',
    character: 'Dreamy, ambient',
    voicing: 'Sus chords',
    notes: 'Single-chord texture using suspensions. Found in indie/ambient music (Bon Iver, Sigur Rós). The sus4 and sus2 create gentle dissonance and release within tonic harmony. Often used with delay/reverb effects and arpeggiated patterns. Not really a "progression" but a textural approach - rhythm and timbre become the interest.'
  },
  {
    formula: 'I → V/vi → vi → III → IV → i',
    example: 'D → E → F#m → A → G → Dm',
    style: 'Indie',
    difficulty: 'Intermediate',
    character: 'Epic, building, post-rock',
    voicing: 'Triads with dynamics',
    notes: 'Post-rock build progression - starts sparse, builds to climax. The V/vi (E) creates upward motion before vi (F#m). The III (A major) is borrowed from F# minor\'s relative major. The shift from major (D-E-A-G) to minor tonic (Dm) at the end is unexpected and powerful. Found in Explosions in the Sky, Mogwai, This Will Destroy You. Start quiet with arpeggios, gradually add instruments and volume. The progression often repeats multiple times, building intensity each cycle. Guitar: use reverb and delay generously. Drums enter gradually. The climax is when all instruments hit together at full volume - the harmony creates the emotional arc. This teaches that dynamics and orchestration are as important as the chords themselves.'
  },
  {
    formula: 'I → bVII → I',
    example: 'E5 → D5 → E5 (E drone throughout)',
    style: 'Indie',
    difficulty: 'Beginner',
    character: 'Hypnotic, shoegaze, droning',
    voicing: 'Power chords with drone',
    notes: 'Shoegaze/drone indie progression. Power chords (5th intervals, no 3rd) move over a constant drone note (E pedal tone throughout). The ambiguity of power chords + drone creates a wall of sound - you hear both E major and E minor implications simultaneously. Found in My Bloody Valentine, Slowdive, modern shoegaze. Guitar: heavy reverb, chorus/flanger, play through noise. The E string drones continuously (open or with e-bow) while power chords move above. Tuning often non-standard (all strings tuned to E or open tunings). This isn\'t about harmonic movement - it\'s about texture, timbre, and the hypnotic effect of small changes over a constant drone. Let dissonance and consonance blur together.'
  },
  {
    formula: 'I → IVadd9 → vi7 → V7sus4 → V7',
    example: 'C → Fadd9 → Am7 → G7sus4 → G7',
    style: 'Singer-Songwriter',
    difficulty: 'Intermediate',
    character: 'Warm, intimate',
    voicing: 'Extended/Sus chords',
    notes: 'Basic progression enhanced with extensions and suspensions. The add9 on IV adds sparkle without full 7th chord density. V7sus4→V7 creates internal motion within the dominant. Common in acoustic pop and singer-songwriter music (James Taylor, Norah Jones). Fingerpicking or slow strumming works best. Voice chord tones in mid-range for warmth.'
  },
  {
    formula: 'I → I/VII → I/VI → I/V',
    example: 'D → D/C# → D/B → D/A',
    style: 'Singer-Songwriter',
    difficulty: 'Intermediate',
    character: 'Introspective, descending, melancholy',
    voicing: 'Slash chords with descending bass',
    notes: 'Descending bass line under sustained tonic harmony - James Taylor "Fire and Rain" technique. The chord (D major triad) stays constant while the bass descends chromatically or diatonically. Creates motion without leaving home - introspective, meditative. The I/VI (D/B) is actually vi in first inversion, creating a pivot moment. Guitar: fingerstyle works best - thumb walks down bass notes while fingers maintain the triad. Keys: left hand bass line, right hand sustains or gently reattacks the chord. This teaches that harmonic interest can come from voice leading (bass motion) rather than chord changes. Found throughout 70s singer-songwriter canon (Carole King, Joni Mitchell). The descending bass feels like a slow exhale.'
  },
  {
    formula: 'i → bVII → bVI → bVII',
    example: 'Am → G → F → G',
    style: 'Singer-Songwriter',
    difficulty: 'Beginner',
    character: 'Modal, folk, earthy',
    voicing: 'Triads',
    notes: 'Aeolian/Dorian modal progression - pure folk influence. No V chord (no G# leading tone), so we stay in modal territory. This is the sound of folk revival, Celtic music, modal singer-songwriter (Sandy Denny, Nick Drake). The bVII gives it that non-functional, modal feel - we never resolve with dominant-tonic motion. Guitar: works beautifully in DADGAD or open tunings where the drone strings reinforce the modal center. Keys: emphasize the open 5th (A-E drone) under the changes. Melody should use natural minor (Aeolian) or Dorian (with natural 6th). This isn\'t pop or jazz - it\'s older, more connected to traditional folk music. Let it be simple and direct.'
  },
  {
    formula: 'Dsus2 → Dsus2/F# → Gadd9 → Asus4',
    example: 'Dsus2 → Dsus2/F# → Gadd9 → Asus4',
    style: 'Singer-Songwriter',
    difficulty: 'Intermediate',
    character: 'Open, ringing, alternative tuning sound',
    voicing: 'Sus2/add9 chords',
    notes: 'Alternative-tuning aesthetic without requiring retuning - Nick Drake/Paul Simon territory. Sus2 and add9 voicings create an open, ringing quality that mimics DADGAD or open D tuning. No 3rds in the sus2 and Asus4 chords means ambiguous major/minor quality. The Dsus2/F# creates smooth bass motion up (D-F#-G-A). Guitar: let strings ring together, use open strings where possible even in barre positions. Fingerstyle with thumb bass, fingers on treble strings. The lack of clear major/minor creates a floating, meditative quality. This is sophisticated folk - influenced by British folk revival and world music. Think "Pink Moon," "Duncan." The open voicings are the signature - resist the urge to fill in 3rds.'
  },
  {
    formula: 'IMaj7 → IVMaj7/III → ii7 → IVMaj7 → iii7 → vi7 → ii7 → V7',
    example: 'CMaj7 → FMaj7/E → Dm7 → FMaj7 → Em7 → Am7 → Dm7 → G7',
    style: 'Singer-Songwriter',
    difficulty: 'Advanced',
    character: 'Sophisticated, jazzy, Brazilian-influenced',
    voicing: 'Maj7/7th chords',
    notes: 'Sophisticated singer-songwriter progression with jazz and bossa nova influence - Paul Simon, Joni Mitchell in her jazz phase. The FMaj7/E (IVMaj7/III) creates chromatic bass motion (C-E-F) and adds harmonic density. The long sequence of 7th chords (ii-IV-iii-vi-ii-V) circles through diatonic harmony without rushing. This is intellectual singer-songwriter - harmonically aware, drawing from jazz vocabulary. Voice leading matters: each 7th should resolve smoothly. Guitar: requires jazz chord voicings, difficult to finger cleanly. Keys: shell voicings in left hand, melody/extensions in right. This is the bridge between folk and jazz - still song-focused, but harmonically sophisticated. Requires strong musicianship to not sound pretentious.'
  },

  // R&B Progressions
  {
    formula: 'IMaj7 → iii7 → vi7 → ii7',
    example: 'CMaj7 → Em7 → Am7 → Dm7',
    style: 'R&B',
    difficulty: 'Intermediate',
    character: 'Smooth, sophisticated',
    voicing: '7th chords',
    notes: 'Classic R&B progression descending by thirds. Creates a smooth, flowing feel with rich voice leading. Found in "Isn\'t She Lovely" (Stevie Wonder) and countless R&B ballads. All chords are diatonic 7ths - the sophistication comes from rhythm, groove, and vocal delivery. Try adding 9ths for extra shimmer. Works beautifully at slow-medium tempos with a steady backbeat.'
  },
  {
    formula: 'vi7 → V7 → IMaj7 → IVMaj7',
    example: 'Am7 → G7 → CMaj7 → FMaj7',
    style: 'R&B',
    difficulty: 'Intermediate',
    character: 'Resolving, satisfying',
    voicing: '7th chords',
    notes: 'The vi-V-I-IV turnaround common in R&B and soul. Starting on vi creates a minor feel that brightens when resolving to I. The IVMaj7 extends the resolution rather than returning to vi. Used in "Killing Me Softly," "Cruisin\'." The Maj7 chords (I and IV) are crucial for the sophisticated R&B sound. Emphasize the beat subdivision and syncopation.'
  },
  {
    formula: 'IMaj7 → bIIIMaj7 → IVMaj7 → V7',
    example: 'CMaj7 → EbMaj7 → FMaj7 → G7',
    style: 'R&B',
    difficulty: 'Advanced',
    character: 'Colorful, contemporary',
    voicing: 'Maj7/7th chords',
    notes: 'Modern R&B with borrowed bIII chord (modal interchange from parallel minor). The chromatic movement (E natural to Eb) creates a sophisticated, contemporary color. Found in neo-soul and modern R&B production. The bIII is unexpected but resolves smoothly to IV. Add 9ths and 11ths for current sound. Works with both laid-back grooves and uptempo tracks.'
  },
  {
    formula: 'ii7 → V7 → iii7 → vi7',
    example: 'Dm7 → G7 → Em7 → Am7',
    style: 'R&B',
    difficulty: 'Intermediate',
    character: 'Circular, hypnotic',
    voicing: '7th chords',
    notes: 'Continuous cycle progression - can loop indefinitely. Each chord resolves down a fifth (or up a fourth), creating perpetual forward motion. Common in R&B vamps and grooves where harmony takes a backseat to rhythm and vocals. Found in "Use Me" (Bill Withers), uptempo R&B. The lack of tonic (I) creates tension that groove and melody must resolve. Let it breathe and lock into the pocket.'
  },
  {
    formula: 'IMaj9 → #IVm7b5 → iii9 → bVIMaj9',
    example: 'CMaj9 → F#m7b5 → Em9 → AbMaj9',
    style: 'R&B',
    difficulty: 'Advanced',
    character: 'Jazzy, sophisticated',
    voicing: '9th chords',
    notes: 'Contemporary R&B with jazz influences. The #IVm7b5 (Lydian chord) and bVIMaj9 (borrowed from parallel minor) add harmonic sophistication. Found in Anderson .Paak, H.E.R., modern R&B production. Each chord should shimmer with extensions. Voice leading is critical - move smoothly between 7ths and 9ths. This progression lives in the space between R&B and jazz, needs skilled players to execute cleanly.'
  },

  // Worship Progressions
  {
    formula: 'I → V → vi → IV',
    example: 'C → G → Am → F',
    style: 'Worship',
    difficulty: 'Beginner',
    character: 'Anthemic, uplifting',
    voicing: 'Triads',
    notes: 'The foundational modern worship progression. Used in "How Great Is Our God," "10,000 Reasons," countless worship songs. The same progression as pop\'s I-V-vi-IV but typically played with open voicings and sustained dynamics. Start soft in verses, build to chorus. Add sus2/sus4 chords for ambient worship texture. Works with acoustic guitar, piano, or full band.'
  },
  {
    formula: 'vi → IV → I → V',
    example: 'Am → F → C → G',
    style: 'Worship',
    difficulty: 'Beginner',
    character: 'Introspective, building',
    voicing: 'Triads',
    notes: 'Same chords as previous but starting on vi creates a more contemplative, minor-inflected mood. Used in "Oceans (Where Feet May Fail)," worship songs that begin introspectively and build. Starting on minor chord allows for emotional journey from darkness to light. The final V creates anticipation for the loop back to vi, or can resolve to I for a brighter section.'
  },
  {
    formula: 'I → V/vi → vi → V/IV → IV',
    example: 'C → E7 → Am → D7 → F',
    style: 'Worship',
    difficulty: 'Advanced',
    character: 'Emotional, dramatic',
    voicing: 'Triads with secondary dominants',
    notes: 'Worship progression enhanced with secondary dominants for emotional impact. The V/vi (E7) and V/IV (D7) create strong pull to their targets, intensifying the harmonic movement. Found in more sophisticated worship arrangements. The chromatic notes (G# in E7, F# in D7) add drama without leaving the worshipful character. Use strategically in bridge or climactic moments.'
  },
  {
    formula: 'I → I/III → IV → IVm',
    example: 'C → C/E → F → Fm',
    style: 'Worship',
    difficulty: 'Intermediate',
    character: 'Tender, reflective',
    voicing: 'Triads with bass movement',
    notes: 'Ascending bass line progression with emotional minor iv. The I/III (first inversion) creates smooth bass motion (C→E→F). The shift from IV to IVm is deeply expressive - the chromaticism (A→Ab) creates a poignant moment. Found in worship ballads and intimate songs. The minor iv is borrowed from parallel minor, creates "ache" before resolving. Try as a bridge or pre-chorus for emotional contrast.'
  },
  {
    formula: 'I → IVadd9 → I/V → V',
    example: 'C → Fadd9 → C/G → G',
    style: 'Worship',
    difficulty: 'Beginner',
    character: 'Open, spacious',
    voicing: 'Add9 chords',
    notes: 'Simple progression with add9 extensions for ambient worship texture. The IVadd9 (Fadd9) adds shimmer without 7th chord density. Second inversion I (C/G) creates anticipation before resolving to V. This progression emphasizes space and atmosphere over complexity. Common in modern ambient worship (Bethel, Hillsong United). Use with pad sounds, delayed guitars, sparse drums. Let each chord breathe for 2-4 bars.'
  },
  {
    formula: 'vi → I/V → IV → I',
    example: 'Am → C/G → F → C',
    style: 'Worship',
    difficulty: 'Beginner',
    character: 'Ascending, hopeful',
    voicing: 'Triads',
    notes: 'Ascending bass line progression (A→G→F→C descending OR voice as Am→C/E→F→C for E→F→C ascending). Creates a sense of rising, reaching upward - perfect metaphor for worship. The resolution from vi to I (minor to major) represents moving from struggle to victory. Found in many worship songs that tell a journey story. Simple but effective. The inverted I chord provides smooth voice leading.'
  },
  {
    formula: 'I → ii7 → IV → V7sus4 → V7',
    example: 'C → Dm7 → F → G7sus4 → G7',
    style: 'Worship',
    difficulty: 'Intermediate',
    character: 'Building, anticipatory',
    voicing: '7th chords',
    notes: 'Worship progression with building tension through V7sus4→V7 resolution. The sus4 chord suspends resolution, creating anticipation - often held for a full bar or more before releasing to V7. Common in worship songs before a key change or climactic chorus. The ii7 adds sophistication without losing accessibility. Works in both contemplative and celebratory contexts. Time the sus4 resolution with the worship moment.'
  },

  // Lo-Fi / Anime Progressions
  {
    formula: 'IVMaj7 → V7 → iii7 → vi7',
    example: 'FMaj7 → G7 → Em7 → Am7',
    style: 'Lo-Fi',
    difficulty: 'Intermediate',
    character: 'Nostalgic, bittersweet, "Anime"',
    voicing: '7th/9th chords',
    notes: 'The "Royal Road" (Ōdō Shinkō) - the DNA of Japanese Pop and modern Lo-Fi/Chillhop. It avoids the tonic (I) to create a sense of eternal floating. The magic happens at the iii7 (Em7)—instead of resolving the tension of the V7, it moves to a melancholic minor 3rd. Keys: Use "Rhodes" or felt piano sounds. Roll the chords (don\'t hit them hard). Add a high melody note to the Em7 to make it cry. Guitar: Use "Shell Voicings" (Root-3rd-7th) to save your fingers. Slide into the chords from a half-step below.'
  },
  {
    formula: 'IVMaj7 → III7 → vi7 → v7 → I7',
    example: 'FMaj7 → E7 → Am7 → Gm7 → C7',
    style: 'Lo-Fi',
    difficulty: 'Advanced',
    character: 'Groovy, smooth, urban',
    voicing: '7th/9th chords',
    notes: 'The "Just the Two of Us" progression. Essential for Grover Washington vibes and Lo-Fi beats. It uses a Secondary Dominant (III7) to pull to vi, then immediately sets up a "2-5" (Gm7-C7) to loop back to the start. Keys: Voice the E7 with a b9 or #9 (altered dominant) for that sophisticated jazz tension. Guitar: This is a thumb-over workout. Keep the rhythm tight and percussive on the backbeat.'
  },
  {
    formula: 'im7 → IVMaj7 → bVIIMaj7 → IIIMaj7',
    example: 'Am7 → DMaj7 → GMaj7 → CMaj7',
    style: 'Lo-Fi',
    difficulty: 'Intermediate',
    character: 'Jazzy, Nujabes, contemplative',
    voicing: 'Maj7/m7 chords',
    notes: 'Nujabes-style progression - blending modal jazz and hip-hop. The im7 establishes minor tonality, but then all major 7th chords (IV, bVII, III) create floating, modal ambiguity. This isn\'t functional - it\'s about color and mood. The IVMaj7 over minor tonic is Dorian, bVII is Aeolian, III is unexpected brightness. Found in "Feather," "Aruarian Dance" - Nujabes\' signature sound. Production: dusty Rhodes or Wurlitzer, vinyl crackle, boom-bap drums. The harmony should breathe - don\'t rush chord changes. Each chord is 2-4 bars. This is jazzy without being jazz - hip-hop soul with sophisticated harmony. Voice the Maj7 chords in close position for warmth.'
  },
  {
    formula: 'IIMaj7 → bVIMaj7 → IMaj7 → VMaj7',
    example: 'DMaj7 → AbMaj7 → CMaj7 → GMaj7',
    style: 'Lo-Fi',
    difficulty: 'Advanced',
    character: 'Floating, modal interchange, dreamy',
    voicing: 'Maj7 chords',
    notes: 'Heavy modal interchange lo-fi progression. All major 7th chords, but from different sources: IIMaj7 (Lydian), bVIMaj7 (Aeolian/borrowed), IMaj7 (tonic), VMaj7 (Mixolydian). The bVI creates the characteristic lo-fi "drop" - that unexpected chromatic shift. No functional harmony, pure color changes. This is post-Nujabes, contemporary chillhop. The parallel Maj7 quality creates consistency while roots shift unexpectedly. Production: low-pass filter on everything, tape saturation, dusty vinyl samples. Drums should be behind the beat, slightly swung. Bassline can be simple (just roots) or absent. The harmony IS the vibe - each chord change is a new emotional color, not a resolution.'
  },

  // Cinematic / Atmosphere Progressions
  {
    formula: 'i → bIII → bVI → bVII',
    example: 'Am → C → F → G',
    style: 'Cinematic',
    difficulty: 'Beginner',
    character: 'Spanish, intense, descending',
    voicing: 'Triads/7ths',
    notes: 'The Andalusian Cadence - "Hit the Road Jack" or "Flamenco" descent. While simple, the steady walk down creates an inevitable pull toward the dominant (E7). Used in Surf Rock, Tango, and dramatic film scores. Keys: Staccato "stabs" on the off-beats (Tango style) or fast arpeggios. Guitar: Palm mute the descent to build tension, then let the E7 ring out open.'
  },
  {
    formula: 'i → iMaj7 → i7 → i6',
    example: 'Cm → Cm(Maj7) → Cm7 → Cm6',
    style: 'Cinematic',
    difficulty: 'Intermediate',
    character: 'Spy, mystery, sorrow',
    voicing: 'Moving internal voice',
    notes: 'Line Cliché progression found in "James Bond," "Stairway to Heaven," and "My Funny Valentine." The chord doesn\'t change, but one voice descends chromatically (C → B → Bb → A). It creates motion while standing still. Keys: Keep the triad steady in the right hand, move the changing note with your thumb (or in the bass). Guitar: Keep the barre chord fixed and just move one finger down the B or G string.'
  },
  {
    formula: 'I → bIII → #IV → VI',
    example: 'C → Eb → F# → A',
    style: 'Cinematic',
    difficulty: 'Intermediate',
    character: 'Heroic, space-age, disjointed',
    voicing: 'Major Triads',
    notes: 'Chromatic Mediants - moving major chords by minor thirds (3 semitones). There is no "key" here—each chord feels like a modulation to a new world. Used by Hans Zimmer and John Williams for space/heroic themes. Keys: Play these as big, open triads. Use the sustain pedal to blur the transition slightly. Guitar: Slide the exact same barre chord shape up and down the neck (3 frets at a time). The "sameness" of the shape vs. the "weirdness" of the harmony is the effect.'
  },
  {
    formula: 'i → iv → i (with bVI bass) → V',
    example: 'Am → Dm → Am/F → E (building dynamics)',
    style: 'Cinematic',
    difficulty: 'Intermediate',
    character: 'Epic, building, trailer music',
    voicing: 'Orchestral voicings',
    notes: 'Epic trailer build progression - starts minimal, builds to massive climax. The im-iv creates dark, minor foundation. The Am/F (first inversion over bVI bass) adds harmonic richness and bass momentum. V creates anticipation. But the real cinematic element is DYNAMICS and ORCHESTRATION: start with solo piano or strings, gradually add brass, percussion, choir. Each repetition gets louder and fuller. Used in Hans Zimmer ("Inception," "Interstellar"), Two Steps From Hell. The progression may repeat 4-8 times, building each time. At climax, all instruments hit V with huge percussion hit. This teaches that in film music, HOW you play matters more than WHAT you play. The harmonic progression is simple - the arrangement creates the epic feeling.'
  },
  {
    formula: 'IMaj7 → #IVMaj7 → IMaj7',
    example: 'CMaj7 → F#Maj7 → CMaj7',
    style: 'Cinematic',
    difficulty: 'Intermediate',
    character: 'Floating, suspended, ambient',
    voicing: 'Maj7 chords with reverb',
    notes: 'Ambient cinematic progression using Lydian tritone relationship. The #IV (F#) is a tritone away from tonic (C), creating maximum harmonic distance while staying within Maj7 quality. This is harmonically ambiguous - no functional resolution, just floating between two distant tonal centers. Found in ambient film scores (Jóhann Jóhannsson, Hildur Guðnadóttir). Voice these as sustained, open-voiced Maj7 chords - let them ring and overlap. Add strings with slow attack, pad synths, reverb/delay. The tritone relationship creates tension without dissonance - it\'s strange but not harsh. This isn\'t narrative music - it\'s atmosphere, texture, suspended time. Works for scenes of contemplation, space, vastness, or emotional ambiguity.'
  },
  {
    formula: 'i → V/iv → iv → bVII → bIII → bVI → bII → V',
    example: 'Dm → A7 → Gm → C → F → Bb → Eb → A',
    style: 'Cinematic',
    difficulty: 'Advanced',
    character: 'Dramatic, chromatically rich, complex',
    voicing: 'Full orchestral',
    notes: 'Chromatic dramatic progression for heightened tension - modern film scoring. The V/iv (A7) tonicizes the iv chord, the bVII-bIII-bVI descent uses borrowed chords from parallel major. The bII (Eb) is a Neapolitan chord creating chromatic tension (Eb is a half-step above D). Final V builds to resolution. This is post-Romantic film harmony - drawing from Wagner, Mahler, but in cinematic context. Used in dramatic moments, plot twists, reveals. The chromatic bass movement (D-A-G-C-F-Bb-Eb-A) creates forward motion. Orchestration: low brass and strings for darkness, high woodwinds for tension, percussion punctuates chord changes. This teaches advanced chromatic harmony in service of drama - every chord heightens emotion. Requires sophisticated players and orchestration to not sound muddy.'
  }
];

// Filter options
export const styleOptions = ['All', 'Pop', 'Jazz', 'Blues', 'Gospel', 'Classical', 'Rock', 'Funk', 'Jazz Fusion', 'Latin Jazz', 'Neo-Soul', 'Indie', 'Singer-Songwriter', 'R&B', 'Worship', 'Lo-Fi', 'Cinematic'];
export const difficultyOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];
