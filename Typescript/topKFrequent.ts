function topKFrequent(nums: number[], k: number): number[] {
    const numToCount = new Map<number, number>();

    for (const num of nums) {
        numToCount.set(num, (numToCount.get(num) || 0) + 1);
    }

    const freqVec = new Array(nums.length + 1).fill(null).map(() => []);
    
    for (const [num, count] of numToCount) {
        freqVec[count].push(num);
    }

    const res = [];
    let foundCount = 0;

    for (let i = freqVec.length - 1; i >= 0; i--) {
        if (foundCount === k) {
            break;
        }
        if (freqVec[i].length > 0) {
            for (const elem of freqVec[i]) {
                res.push(elem);
                foundCount++;
            }
        }
    }

    return res;
}
