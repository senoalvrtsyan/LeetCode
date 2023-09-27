function threeSum(nums: number[]): number[][] {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const output: number[][] = [];

    for (let i = 0; i < n - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates
        }

        let low = i + 1;
        let high = n - 1;

        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high];

            if (sum < 0) {
                low++;
            } else if (sum > 0) {
                high--;
            } else {
                output.push([nums[i], nums[low], nums[high]]);

                const tempIndex1 = low;
                const tempIndex2 = high;

                while (low < high && nums[low] === nums[tempIndex1]) {
                    low++;
                }
                while (low < high && nums[high] === nums[tempIndex2]) {
                    high--;
                }
            }
        }
    }
    return output;
}
