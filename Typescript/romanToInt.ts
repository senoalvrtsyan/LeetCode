/**
 * @param {string} s 
 * @returns {number}
 */
function romanToInt(s: string): number {
    let ans = 0;
    const mp: { [key: string]: number } = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (mp[s[i]] < mp[s[i + 1]]) {
            ans -= mp[s[i]];
        } else {
            ans += mp[s[i]];
        }
    }

    ans += mp[s[s.length - 1]]; // Add the value of the last character
    return ans;
}