class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        std::unordered_set<int> values;
        bool result = false;
        for (int num : nums)
        {
            if (!values.insert(num).second)
            {
                result = true;
                break;
            }
        }
        return result;
    }
};