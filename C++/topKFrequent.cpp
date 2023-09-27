class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        std::unordered_map<int, int> mp;
        for (int num : nums) {
            ++mp[num];
        }

        std::vector<std::vector<int>> freqVec;
        freqVec.reserve(nums.size() + 1);
        freqVec.resize(nums.size() + 1);
        for (auto pair : mp) {
            freqVec[pair.second].push_back(pair.first);
        }

        std::vector<int> res;
        int foundCount = 0;
        for (int i = freqVec.size() - 1; i >= 0; --i) {
            if (foundCount == k) {
                break;
            }
            if (!freqVec[i].empty()) {
                for (auto elem : freqVec[i]) {
                    res.push_back(elem);
                    ++foundCount;
                }
            }
        }
        return res;
    }
};