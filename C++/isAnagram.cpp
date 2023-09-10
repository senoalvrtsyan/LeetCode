class Solution {
public:
    bool isAnagram(string s, string t) {
        std::unordered_map<char, int> hashmap;
        for (int i = 0; i < s.size(); ++i) {
            if (hashmap.find(s[i]) == hashmap.end()) {
                hashmap[s[i]] = 1;
            }
            else {
                hashmap[s[i]] = hashmap[s[i]] + 1;
            }
        }

        for (int i = 0; i < t.size(); ++i) {
            if (hashmap.find(t[i]) == hashmap.end()) {
                return false;
            }
            hashmap[t[i]] = hashmap[t[i]] - 1;
        }

        for (auto pair : hashmap) {
            if (pair.second != 0) {
                return false;
            }
        }
        return true;
    }
};