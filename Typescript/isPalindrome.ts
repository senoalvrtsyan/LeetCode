function isPalindrome(s: string): boolean {
    s = s.replaceAll(' ', '').replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
    let idx1 = 0;
    let idx2 = s.length - 1;
    while (idx1 <= idx2) {
        if (s[idx1] !== s[idx2]) {
            return false;
        }
        idx1++;
        idx2--;
    }
    return true;
};