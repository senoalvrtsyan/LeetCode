class Solution {
public:
    int firstUniqChar(string s) {
        std::unordered_map<char, int> charsCount;
        for (int i = 0; i < s.size(); ++i) {
            ++charsCount[s[i]];
        }
        for(int i = 0; i < s.size(); ++i) {
            if (charsCount.find(s[i])->second == 1) {
                return i;
            }
        }
        return -1;
    }
};