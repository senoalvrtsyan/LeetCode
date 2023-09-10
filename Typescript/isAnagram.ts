function isAnagram(s: string, t: string): boolean {
    const hashmap: { [key: string]: number } = {};

    for (let i = 0; i < s.length; ++i) {
        if (!hashmap.hasOwnProperty(s[i])) {
            hashmap[s[i]] = 1;
        } else {
            hashmap[s[i]] += 1;
        }
    }

    for (let i = 0; i < t.length; ++i) {
        if (!hashmap.hasOwnProperty(t[i])) {
            return false;
        }
        hashmap[t[i]] -= 1;
    }

    for (const key in hashmap) {
        if (hashmap.hasOwnProperty(key) && hashmap[key] !== 0) {
            return false;
        }
    }

    return true;
}
