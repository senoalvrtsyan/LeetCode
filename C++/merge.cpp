class Solution {
    public:
        void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) 
        {
            vector<int> nums1Cpy(nums1);
            int pushIdx = -1;
            int idx1 = 0;
            int idx2 = 0;
            
            while (idx1 < m && idx2 < n) 
            {
                if (nums1Cpy[idx1] < nums2[idx2]) 
                {
                    nums1[++pushIdx] = nums1Cpy[idx1++];
                }
                else 
                {
                    nums1[++pushIdx] = nums2[idx2++];
                }
            }
    
            while (idx1 < m) 
            {
                nums1[++pushIdx] = nums1Cpy[idx1++];
            }
    
            while (idx2 < n) 
            {
                nums1[++pushIdx] = nums2[idx2++];
            }
        }
    };