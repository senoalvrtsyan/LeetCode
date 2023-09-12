function singleNumber(nums: number[]): number {
    let ans = 0;
    for (let x of nums) {
        ans ^= x;
    }
    return ans;
}
