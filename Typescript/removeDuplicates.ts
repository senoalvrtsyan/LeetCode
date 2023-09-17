function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let insertIdx = 1;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] !== nums[i]) {
            nums[insertIdx] = nums[i];
            insertIdx++;
        }
    }
    return insertIdx;
};