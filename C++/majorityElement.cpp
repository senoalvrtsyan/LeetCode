class Solution {
    public:
        int majorityElement(vector<int>& nums) 
        {
            std::unordered_map<int, int> elemCountMap;
            for (const auto& num : nums) 
            {
                if (elemCountMap.find(num) == elemCountMap.end())
                {
                    elemCountMap[num] = 1;
                }
                else
                {
                    ++elemCountMap[num];
                }
            }
    
            int maxCount = 0;
            int elem = -1;
            for (const auto& elemCount : elemCountMap)
            {
                if (elemCount.second > nums.size() / 2) 
                {
                    if (elemCount.second > maxCount)
                    {
                        maxCount = elemCount.second;
                        elem = elemCount.first;
                    }
                }
            }
            return elem;
        }
    };