# Testing Guide: Genre Theory Restructuring

## What Changed

We restructured genre theory sections to fix the pedagogical issue: **scales presented without context for when/how to use them**.

## Test Plan

### 1. Blues (Unchanged - Verify No Regression)
**Expected**: Should work exactly as before
- Navigate to Genre tab → Blues
- Theory section should show:
  - Overview
  - "The Blues Paradox" box (scales vs chords explanation)
  - 12-Bar Blues Form
  - "Essential Scales" accordion with 3 scales (Minor Pentatonic, Minor Blues, Major Blues)
  - Each scale shows keyboard diagram + note table
  - Blue Notes section below scales
- **Change key selector** to different keys (A, E, G) → verify all examples transpose correctly

### 2. Pop (Small Addition)
**Expected**: New "melodic vs harmonic" explainer before scales
- Navigate to Genre tab → Pop
- Theory section should show:
  - Overview
  - **NEW: Orange/yellow box "Pop Scales: For Melody and Hooks"** explaining scales are for melody, chords separate
  - "Essential Scales" accordion with 4 scales (Major, Natural Minor, Major Pentatonic, Minor Pentatonic)
- **Change key selector** → verify examples transpose
- **Verify**: The new box clarifies "these scales are melodic tools, chords built separately"

### 3. Rock (Small Addition)
**Expected**: New "melodic vs rhythmic" explainer before scales
- Navigate to Genre tab → Rock
- Theory section should show:
  - Overview
  - **NEW: Orange/yellow box "Rock Scales: Lead Playing Toolkit"** explaining scales are for lead/solos, power chords for rhythm
  - "Essential Scales" accordion with 4 scales (Minor Pentatonic, Major Pentatonic, Rock Scale, Aeolian)
- **Change key selector** → verify examples transpose
- **Verify**: The new box connects scales (lead) to power chords (rhythm), explains pentatonic freedom

### 4. Jazz (Major Restructuring)
**Expected**: Completely new structure with chord-scale relationships
- Navigate to Genre tab → Jazz
- Theory section should show:
  - Overview
  - **NEW: Green box "Chord-Scale Theory: The Jazz System"** with detailed explanation
    - Should show example: "ii-V-I in C Major: Dm7 → G7 → CMaj7 uses D Dorian → G Mixolydian → C Ionian"
    - Change key selector → verify example transposes (e.g., in G: Am7 → D7 → GMaj7 uses A Dorian → D Mixolydian → G Ionian)
    - Should explain why (different scales for different chord types)
    - Should contrast with Blues/Rock
  - **NEW: "Scales By Chord Type" accordion** (instead of simple scales list)
    - Should have categories: "For Major 7 Chords", "For Minor 7 Chords", "For Dominant 7 Chords", "For Half-Diminished Chords"
    - Each category shows when to use, character, chord types
    - Each scale shows: keyboard, note table, chord tones, available tensions, sound, usage
  - Practical Application section
  - Guide Tones section (unchanged)
- **Change key selector** to A, E, G → verify all scales transpose to proper roots for each chord function
- **Verify**: User now understands "use D Dorian over Dm7, switch to G Mixolydian over G7" instead of confusion

### 5. Neo-Soul (Major Restructuring)
**Expected**: Similar to Jazz but with chromatic approach emphasis
- Navigate to Genre tab → Neo-Soul
- Theory section should show:
  - Overview
  - **NEW: Green box "Neo-Soul Harmony: Chord-Scale Theory + Chromatic Approach"**
    - Explains two systems: jazz foundation + chromatic approaches
    - Shows example with approach vs jazz approach
    - Contrasts with Jazz and Gospel
  - **NEW: "Scales By Chord Type" accordion** with categories
    - For Minor 7 Chords, For Dominant 7 Chords, For Major 7 Chords
    - Each scale emphasizes "Neo-Soul approach" with chromatic techniques
  - **NEW: "Chromatic Approach Tones" section** explaining the core technique
  - Other sections (voicings, practice, etc.)
- **Change key selector** → verify transposition
- **Verify**: User understands chromatic approaches are what makes Neo-Soul different from Jazz

### 6. Gospel (Major Restructuring)
**Expected**: Chromatic voice-leading model with scales as reference
- Navigate to Genre tab → Gospel
- Theory section should show:
  - Overview
  - **NEW: Green box "Gospel Melody: Chord Tones + Chromatic Motion"**
    - Core idea: not scale-based, chord-tone targeting + chromatic connection
    - How it works (examples for Dm7, G7, CMaj7)
    - Three key techniques: 3-to-1 slide, chromatic walkup, approach tones
    - Contrasts with Jazz, Blues, Neo-Soul
  - **NEW: Orange "Reference Scales" accordion** (instead of simple scales)
    - Title emphasizes "Context, Not Rules"
    - Explanation warns these are REFERENCE, not boundaries
    - Gospel Scale and Mixolydian shown with keyboards
    - **Red warning box at bottom**: "Gospel is CHROMATIC VOICE-LEADING music..."
  - All existing sections (chord construction, piano voicings, guitar voicings, progressions, rhythm, licks, practice) unchanged
- **Change key selector** → verify transposition
- **Verify**: User understands Gospel uses chromatic runs/approaches, scales are just harmonic context

## Success Criteria

After testing, user should be able to answer:

**Before restructuring** (confused):
- "I see 4 scales for Jazz in C. They all have different notes. Which one do I use when?" → No clear answer

**After restructuring** (clear):
- "I'm playing over Dm7 in key of C. What scale?" → D Dorian
- "Now it's G7. What scale?" → G Mixolydian
- "Why not just C major over everything?" → Works but bland, chord-specific scales add color
- "How is Gospel different?" → Gospel uses chromatic motion, not scale-based
- "What about Neo-Soul?" → Jazz chord-scales + chromatic approaches for smoothness

## Common Issues to Check

1. **Key transposition**: Change key selector and verify ALL examples update (progression examples, scale roots, etc.)
2. **Accordion functionality**: Click "Essential Scales" / "Scales By Chord Type" / "Reference Scales" buttons → should expand/collapse
3. **Keyboard diagrams**: Should show correct notes highlighted for each scale in selected key
4. **No JavaScript errors**: Open browser console → should be no errors
5. **Existing genres unchanged**: Blues should work identically to before (no regression)

## Test Sequence

1. Start with Blues → verify no regression
2. Test Pop and Rock → verify small additions appear
3. Test Jazz → verify new structure makes sense, key selector works
4. Test Neo-Soul → verify chromatic emphasis clear
5. Test Gospel → verify chromatic voice-leading model clear
6. Switch between genres multiple times → verify no state issues
7. Change keys in each genre → verify transposition correct

## If Issues Found

Document:
- Which genre?
- Which section?
- What's wrong? (not displaying, wrong content, JS error, etc.)
- Screenshot if visual issue

Then we can fix specific issues.
