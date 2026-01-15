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
    formula: 'bVII7 → I7',
    example: 'Bb7 → C7',
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
    formula: 'I → V6/4 → I6 → IV → I',
    example: 'C → G/C → C/E → F → C',
    style: 'Classical',
    difficulty: 'Advanced',
    character: 'Formal, cadential',
    voicing: 'Triads with inversions',
    notes: 'The cadential 6/4 progression: a formal classical ending. V6/4 (second inversion) is treated as a dissonance that resolves to root position I, which then functions as V and resolves again. All over a tonic pedal (C bass note). Found in Mozart, Beethoven. Voice leading is crucial: move minimal distance between chords.'
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

  // Modal/Modern
  {
    formula: 'i7 → bVII7 → bVI7 → bVII7',
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
    formula: 'ii7 → I7',
    example: 'Dm7 → C7',
    style: 'Funk',
    difficulty: 'Beginner',
    character: 'Groovy, modal',
    voicing: '7th chords',
    notes: 'Two-chord Mixolydian vamp. Found in "Superstition" (Stevie Wonder), countless funk tunes. The I7 (dominant 7th on tonic) defines Mixolydian mode. Groove and rhythm are more important than harmonic movement. Let each chord breathe for 2-4 bars. Add extensions (9ths, 13ths) and syncopated rhythms for authentic funk feel.'
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
    formula: 'Vm7 → IM7',
    example: 'Gm7 → CMaj7',
    style: 'Latin Jazz',
    difficulty: 'Intermediate',
    character: 'Suspended, modal',
    voicing: '7th chords',
    notes: 'Two-chord modal vamp from C Dorian or G Aeolian perspective. Common in Latin jazz and bossa nova. The minor v (instead of major V) creates ambiguity - no leading tone. Groove and rhythm carry the music, not harmonic function. Add percussion patterns (clave, bossa rhythm) to define the style. Melody can explore both chords\' related modes.'
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
    formula: 'I → IVadd9 → vi7 → V7sus4 → V7',
    example: 'C → Fadd9 → Am7 → G7sus4 → G7',
    style: 'Singer-Songwriter',
    difficulty: 'Intermediate',
    character: 'Warm, intimate',
    voicing: 'Extended/Sus chords',
    notes: 'Basic progression enhanced with extensions and suspensions. The add9 on IV adds sparkle without full 7th chord density. V7sus4→V7 creates internal motion within the dominant. Common in acoustic pop and singer-songwriter music (James Taylor, Norah Jones). Fingerpicking or slow strumming works best. Voice chord tones in mid-range for warmth.'
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
  }
];

// Filter options
export const styleOptions = ['All', 'Pop', 'Jazz', 'Blues', 'Gospel', 'Classical', 'Rock', 'Funk', 'Jazz Fusion', 'Latin Jazz', 'Neo-Soul', 'Indie', 'Singer-Songwriter', 'R&B', 'Worship'];
export const difficultyOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];
