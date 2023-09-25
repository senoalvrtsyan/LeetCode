class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        std::unordered_map<std::string, std::vector<std::string>> mp;

        for (auto str : strs) {
            auto strCpy = str;
            std::sort(strCpy.begin(), strCpy.end());
            mp[strCpy].push_back(str);
        }

        std::vector<std::vector<std::string>> res;
        for(auto pair : mp) {
            res.push_back(pair.second);
        }
        return res;
    }
};