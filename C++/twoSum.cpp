class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> numsHashTable;

        for (int i = 0; i < nums.size(); ++i) {
            const int val = target - nums[i];
            const auto itemIt = numsHashTable.find(val);

            if (itemIt != numsHashTable.end()) {
                return {itemIt->second, i};
            }

            numsHashTable[nums[i]] = i;
        }

        return {-1, -1};
    }
};
