class Solution {
public:
    bool isPalindrome(string s) 
    {
        // Remove spaces and non-alphanumeric characters and convert to lowercase
        s.erase(std::remove_if(s.begin(), s.end(), [](char c) 
        {
            return !std::isalnum(c);
        }), s.end());
        std::transform(s.begin(), s.end(), s.begin(), ::tolower);

        int idx1 = 0;
        int idx2 = s.length() - 1;
        while (idx1 <= idx2) 
        {
            if (s[idx1] != s[idx2]) 
            {
                return false;
            }
            idx1++;
            idx2--;
        }
        return true;
    }
};