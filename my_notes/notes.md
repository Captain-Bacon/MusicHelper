1. Rock: "Drop C" Tuning Error
In rockContent, you listed Drop C tuning as:
C G D G B E
The Error: This looks like you dropped the low E to C, but kept the A string at G? And the rest standard? This would snap strings and make chords impossible to play.
The Correction: Standard "Drop C" (used by System of a Down, Deftones, etc.) is Drop D tuned down one whole step.
Correct Notes: C - G - C - F - A - D
2. Jazz: Altered Scale Spelling
In jazz-draft.js, you spelled the Altered Scale as:
1 - b2 - b3 - b4 - b5 - b6 - b7
The Issue: While theoretically b4 exists in the Super Locrian mode, Jazz musicians never think of it as a b4. They hear it as the Major 3rd. The Altered scale is used over Dominant 7th chords (which have a Major 3rd).
The Correction: Spell it enharmonically so it makes sense for chords:
1 - b9 - #9 - 3 - #11 - b13 - b7
(This helps the student see: "Oh, it's a Dominant chord (1-3-b7) with all the weird tensions added.")
3. R&B: "The 3-to-1 Slide"
In rnb-draft.js, you wrote:
In C: E-Eb-D-C (fast).
The Nuance: This is a chromatic walk-down. A true "3-to-1 slide" usually implies sliding from the minor 3rd to the major 3rd (Blues) or sliding from the 2nd to the 1st.
The Fix: Keep the notes, but rename the Lick to "The 3-2-1 Walkdown" or "Major Pentatonic Descent". It’s a pentatonic run with passing tones.
4. Rock: "Aeolian Mode" Example
In rockContent, you listed Aeolian in E as:
E - F# - G - A - B - C - D
The Issue: Technically correct notes for E Natural Minor.
The Context: However, Rock often uses the Dorian mode (sharpened 6th, C#) or mixes them.
The Fix: Just add a small note: "Note: Classic rock (like AC/DC) often mixes this with Major Pentatonic, so be careful with the C natural note over major chords."
💻 Code Structure & Consistency
Your JavaScript structure is mostly good, but there is one inconsistency that will break your app if you try to loop through these files dynamically.
The Export Mismatch:
File 1 (funk-draft.js): Uses export const funkContent = { 'Funk': { ... } }
File 2, 3, etc.: You pasted them starting with 'R&B': { ... } or 'Neo-Soul': { ... }.
Recommendation:
Standardize every file to export a named constant, or (better for a music app) make them all export a default object so you can import them easily.
Suggested Pattern for all files:
code
JavaScript
// rock.js
export const rockData = {
  id: 'rock', // Add an ID for code reference
  name: 'Rock', // Display name
  theory: { ... },
  rhythm: { ... },
  // ... rest of content
};
