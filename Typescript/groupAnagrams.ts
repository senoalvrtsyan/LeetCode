function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr)!.push(str);
    }

    const result: string[][] = [];
    for (const group of map.values()) {
        result.push(group);
    }

    return result;
}
