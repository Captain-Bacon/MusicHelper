# Model 1 Genre Audit (Unified Melodic Vocabulary)

## Blues - ✅ EXCELLENT (Gold Standard)

**What works**:
- Clear scales section with 3 options (Minor Pentatonic, Minor Blues, Major Blues)
- Each scale has formula, description, example, AND usage guidance
- **Critical**: `scalesVsChords` section explicitly explains:
  - "Scales are for LICKS and SOLOS"
  - "CHORDS are built from major scale, not blues scale"
  - "The clash (minor melody over major harmony) IS the blues"
  - `why` field explains gaps in blues scale prevent chord construction

- `chordConstruction` section thoroughly explains:
  - Where chords come from (major scale, natural minor, Dorian)
  - Why dominant 7ths, not major 7ths
  - Extensions (9th, 11th, 13th) explained clearly
  - Piano voicings detailed
  - Crush technique shown

**Why it works**:
1. Answers "when do I use this?" → Licks and solos
2. Answers "why don't chords match?" → Chords from different source
3. Answers "what creates the blues sound?" → The tension between melody and harmony

**User confidence result**: User knows scales are melodic tools, chords follow different rules, tension is intentional.

**Recommendation**: KEEP AS-IS. Use as template for other Model 1 genres.

---

## Pop - ✅ GOOD (Minor addition recommended)

**What works**:
- 4 scales clearly presented (Major, Natural Minor, Major Pentatonic, Minor Pentatonic)
- Each has formula, description, example, AND stylistic guidance
- Descriptions connect to artists and usage:
  - "Pop melodies live here" (Major)
  - "Think Billie Eilish" (Natural Minor)
  - "Ed Sheeran and The Weeknd use this constantly" (Major Pentatonic)
  - "Trap-influenced pop (Ariana Grande)" (Minor Pentatonic)

- `chordConstruction` section explains:
  - Triads as foundation
  - When 7ths are used (warmth without complexity)
  - Sus chords (texture and anticipation)
  - Add9 chords (shimmer)

**What's slightly unclear**:
- Doesn't explicitly state "scales are for melody, chords are separate" like Blues does
- User might wonder "do I use minor pentatonic scale for minor chords?"

**Recommendation**: ADD brief `melodicVsHarmonic` section:
```javascript
melodicVsHarmonic: {
  title: 'Pop Scales: For Melody and Hooks',
  explanation: 'These scales are your MELODIC toolkit—use them for vocal lines, hooks, and instrumental melodies. Pop CHORDS (shown below) are built separately, using standard major/minor harmony.',
  example: 'You might sing a melody using Minor Pentatonic while the band plays major triads underneath. That\'s intentional—creates the modern pop sound.',
  simplicity: 'Pop deliberately keeps melody simple (pentatonic = no wrong notes) while chords provide harmonic foundation. The hook IS the melody.'
}
```

This clarifies without adding complexity. 2-minute addition, significant clarity gain.

---

## Rock - ✅ GOOD (Verify one detail)

**What works**:
- Pentatonic emphasis clear (Minor Pentatonic, Major Pentatonic, Rock Scale with b5, Aeolian)
- Each scale shows formula, description, example
- Explicit "works over power chords" guidance
- "Safe everywhere" language (Minor Pentatonic)
- Technique-forward: "the b5 bend is rock's signature move"

- Power chords section EXCELLENT:
  - Explains why no 3rd (ambiguity is the power)
  - Shows how distortion fills in the sound
  - Connects simplicity to massive sound

**Potential gap**:
- Doesn't explicitly separate "scales for solos" vs "chords for rhythm"
- But context makes it clearer than Pop (power chords section shows chord approach)

**Recommendation**: ADD brief connector:
```javascript
melodicVsRhythmic: {
  title: 'Rock Scales: Lead Playing Toolkit',
  explanation: 'These scales are for LEAD GUITAR and MELODIC LINES. Rock rhythm guitar uses POWER CHORDS (root + 5th, no 3rd) which aren\'t built from these scales—they\'re moveable shapes that work anywhere.',
  pentatonicFreedom: 'Minor Pentatonic works over any power chord progression because power chords are ambiguous (no major/minor quality). This is why rock solos sound confident—the scale matches everything.',
  contrast: 'Blues uses scales over major chords (creating tension). Rock uses scales over neutral chords (creating freedom).'
}
```

This reinforces the power chord section and connects the dots.

---

## Summary & Recommendations

### Blues: ✅ Perfect - no changes

### Pop: ⚠️ Add `melodicVsHarmonic` section (5 lines)
- Clarifies scales are melodic tools
- Prevents "do I use this scale for these chords?" confusion
- 2 minutes to add, significant value

### Rock: ⚠️ Add `melodicVsRhythmic` section (4 lines)
- Connects scales (lead) to power chords (rhythm)
- Reinforces why pentatonic works over power chords
- 2 minutes to add, completes the picture

## Pattern Identified

**What makes Blues excellent**: Explicit "scales vs chords" explanation

**What Pop/Rock need**: Brief connectors that:
1. State "these scales are for melody/solos"
2. State "chords come from different system"
3. Explain why this works (not confusing, intentional)

Total work: ~10 lines of content, 5 minutes
Value: Prevents ALL "do I use this scale over this chord?" confusion

## Implementation Priority

1. Do Jazz/Neo-Soul/Gospel major restructures FIRST (high-complexity, high-value)
2. Add Pop/Rock connectors LAST (low-complexity, nice-to-have)

If time is constrained, Pop/Rock can wait—they're functional without the additions. Jazz/Neo-Soul/Gospel are currently broken/confusing and must be fixed.
