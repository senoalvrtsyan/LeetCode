function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];
    for (let i = 1; i < strs.length; ++i) {
        const s = strs[i];
        let j = 0;
        while (j < prefix.length && j < s.length && prefix[j] === s[j]) {
            ++j;
        }
        
        prefix = prefix.substring(0, j);
        if (prefix.length === 0) {
            break;
        }
    }
    return prefix;
}