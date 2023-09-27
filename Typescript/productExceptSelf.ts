function productExceptSelf(nums: number[]): number[] {
    const prefix = new Array(nums.length);
    const postfix = new Array(nums.length);
    const result = new Array(nums.length);

    prefix[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    postfix[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = postfix[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * postfix[i];
    }

    return result;
}
