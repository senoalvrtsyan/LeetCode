function titleToNumber(columnTitle: string): number {
    let result = 0;
    let idx = 0;

    for (let i = columnTitle.length - 1; i >= 0; --i) {
        const d = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result += Math.pow(26, idx) * d;
        ++idx;
    }

    return result;
}
