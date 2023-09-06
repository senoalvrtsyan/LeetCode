class Solution 
{
public:
    int titleToNumber(string columnTitle) 
    {
        int result = 0;
        int idx = 0;
        for (int i = columnTitle.size() - 1; i >= 0; --i)
        {
            int d = columnTitle[i] - 'A' + 1;
            result += std::pow(26, idx) * d;
            ++idx;
        }
        return result;
    }
};