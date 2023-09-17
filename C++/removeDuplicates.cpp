class Solution {
public:
    int removeDuplicates(vector<int>& nums) 
    {
        if (nums.empty()) 
        {
            return 0;
        }

        int insertIdx = 1;
        for (int i = 1; i < nums.size(); ++i) 
        {
            if (nums[i - 1] != nums[i])
            {
                nums[insertIdx] = nums[i];
                insertIdx++;
            }
        }
        return insertIdx;
    }
};