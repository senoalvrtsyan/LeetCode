function missingNumber(nums: number[]): number {
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
    }

    let nRangeSum = 0;
    for (let i = 0; i < nums.length + 1; ++i) {
        nRangeSum += i;
    }
    return nRangeSum - sum;
}
