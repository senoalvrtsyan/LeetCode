function hammingWeight(n: number): number {
    let count = 0;
    
    while (n) {
        if ((n & 1) === 1) {
            ++count;
        }
        n = n >>> 1; // Use logical right shift to treat n as an unsigned integer
    }

    return count;
}