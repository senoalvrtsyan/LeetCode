class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int sum = 0;
        for (int i = 0; i < nums.size(); ++i) {
            sum += nums[i];
        }

        int nRangeSum = 0;
        for (int i = 0; i < nums.size() + 1; ++i) {
            nRangeSum += i;
        }
        return nRangeSum - sum;
    }
};