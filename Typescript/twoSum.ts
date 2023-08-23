/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): number[] => {
    const numsHash: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; ++i) {
        const complement = target - nums[i];
        if (numsHash[complement] !== undefined) {
            return [numsHash[complement], i];
        }
        numsHash[nums[i]] = i;
    }
    return [-1, -1];
};
