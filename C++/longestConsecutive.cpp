class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        std::unordered_set<int> valSet;
    int maxLength = 0;
    for (int num : nums) {
        valSet.insert(num);
    }
    int count = 0;
    for (int num : nums) {
        if (valSet.find(num -1) == valSet.end()) {
           int currentNum = num + 1;
           int currentCount = 1;
           while(valSet.find(currentNum) != valSet.end()) {
               ++currentNum;
               ++currentCount;
           }
           count = std::max(count, currentCount);
        }
    }
    return count;
    }
};