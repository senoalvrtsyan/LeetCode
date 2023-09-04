class Solution {
public:
    vector<vector<int>> generate(int numRows) 
    {
        if (numRows == 0) 
        {
            return {{0}};
        }
        if (numRows == 1) 
        {
            return {{1}};
        }
        if (numRows == 2) 
        {
            return {{1}, {1, 1}};
        }

        std::vector<std::vector<int>> res = {{1}, {1, 1}};
        for (int rowIdx = 2; rowIdx < numRows; ++rowIdx) 
        {
            std::vector<int> rowArray = {1};
            for (int i = 1; i < rowIdx; ++i) 
            {
                rowArray.push_back(res[rowIdx - 1][i - 1] + res[rowIdx - 1][i]);
            }
            rowArray.push_back(1);
            res.push_back(rowArray);
        }
        return res;
    }
};