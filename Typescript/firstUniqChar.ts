function firstUniqChar(s: string): number {
    const charsCount = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charsCount.has(char)) {
            charsCount.set(char, charsCount.get(char)! + 1);
        } else {
            charsCount.set(char, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (charsCount.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}
