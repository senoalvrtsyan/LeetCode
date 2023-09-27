class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        std::vector<int> prefix;
        for (int i = 0; i < nums.size(); ++i) {
            if (i - 1 < 0) {
                prefix.push_back(nums[i]);
            } else {
                prefix.push_back(prefix[i-1] * nums[i]);
            }
        }

        std::vector<int> postfix;
        postfix.reserve(nums.size());
        postfix.resize(nums.size());
        for (int i = nums.size() - 1; i >= 0; --i) {
            if (i + 1 >= nums.size()) {
                postfix[i] = nums[i];
            } else {
                postfix[i] = postfix[i+1] * nums[i];
            }
        }

        std::vector<int> res;
        for (int i = 0; i < nums.size(); ++i) {
            int prefixItem = i - 1 >= 0 ? prefix[i-1] : 1;
            int postfixItem = i + 1 < nums.size() ? postfix[i+1] : 1;
            res.push_back(prefixItem * postfixItem);
        }
        return res;
    }
};