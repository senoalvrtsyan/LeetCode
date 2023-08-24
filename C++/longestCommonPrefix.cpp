class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) 
    {
        if (strs.empty()) 
        {
            return "";
        }

        string prefix = strs[0];
        for (int i = 1; i < strs.size(); ++i) 
        {
            string s = strs[i];
            int j = 0;
            while (j < prefix.length() && j < s.length() && prefix[j] == s[j]) 
            {
                ++j;
            }
            prefix = prefix.substr(0, j);
            if (prefix.empty()) 
            {
                break;
            }
        }
        return prefix;
    }
};