# Pop and Rock Additions

## Pop - Add after `scales` array, before `chordConstruction`:

```javascript
melodicVsHarmonic: {
  title: 'Pop Scales: For Melody and Hooks',
  explanation: 'These scales are your MELODIC toolkit—use them for vocal lines, hooks, and instrumental melodies. Pop CHORDS (shown below) are built separately, using standard major/minor harmony.',
  example: 'You might sing a melody using Minor Pentatonic while the band plays major triads underneath. That\'s intentional—creates tension and the modern pop sound.',
  simplicity: 'Pop deliberately keeps melody simple (pentatonic scales have no "wrong" notes) while chords provide harmonic foundation. The hook IS the melody—keep it singable, memorable, based on these simple scales.'
},
```

**Rationale**:
- Clarifies scales are melodic tools, not chord sources
- Explains why minor melody over major chords works (intentional tension)
- Emphasizes Pop's simplicity-focused aesthetic
- 4 sentences, high clarity gain

---

## Rock - Add after `scales` array, before `powerChords`:

```javascript
melodicVsRhythmic: {
  title: 'Rock Scales: Lead Playing Toolkit',
  explanation: 'These scales are for LEAD GUITAR and MELODIC LINES (solos, riffs, vocal melodies). Rock rhythm guitar uses POWER CHORDS (root + 5th, no 3rd) which aren\'t built from these scales—they\'re moveable shapes that work anywhere.',
  pentatonicFreedom: 'Minor Pentatonic works over any power chord progression because power chords are ambiguous (neither major nor minor). This is why rock solos sound confident—the scale matches everything.',
  contrast: 'Blues uses minor scales over major chords (creates tension). Rock uses pentatonic scales over neutral power chords (creates freedom and simplicity).'
},
```

**Rationale**:
- Connects scales (lead) to power chords (rhythm)
- Explains why pentatonic works everywhere (power chords are ambiguous)
- Contrasts with Blues to clarify the difference
- 3 sentences, completes the picture

---

## Implementation notes:

Both additions are brief (3-4 sentences), high-value clarifications. They prevent "do I use this scale for these chords?" confusion without adding complexity.

Position them BETWEEN scales and chord construction sections to serve as a bridge/transition.
