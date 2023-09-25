function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    
    let result = 0;  // Length of the longest substring found so far.
    let start = 0;   // Start index of the current substring with unique characters.

    // Track if a character is in [start, i]. We use a boolean array with 256 possibilities.
    // More generic, but slower, would be to use a Set in TypeScript.
    const charsInSubstring: boolean[] = new Array(256).fill(false);

    for (let i = 0; i < s.length; i++) {
        // Advance `start` until [start, i] contains only unique characters.
        // This means s[i] cannot be in [start, i-1].
        while (charsInSubstring[s.charCodeAt(i)]) {
            charsInSubstring[s.charCodeAt(start)] = false;
            start++;
        }

        charsInSubstring[s.charCodeAt(i)] = true;
        
        // Is this our new longest substring?
        result = Math.max(result, i - start + 1);
    }

    return result;
}
