function longestConsecutive(nums: number[]): number {
    const valSet = new Set(nums);
    let maxLength = 0;

    for (const num of nums) {
        if (!valSet.has(num - 1)) {
            let currentNum = num + 1;
            let currentCount = 1;

            while (valSet.has(currentNum)) {
                currentNum++;
                currentCount++;
            }

            maxLength = Math.max(maxLength, currentCount);
        }
    }

    return maxLength;
}
