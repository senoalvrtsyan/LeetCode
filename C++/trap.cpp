class Solution {
public:
    int trap(vector<int>& height) {
        
        int waterUnit = 0;
        std::vector<int> maxLeftArr;
        int maxLeft = 0;
        maxLeftArr.push_back(maxLeft);
        maxLeftArr.reserve(height.size());
        for (int i = 1; i < height.size(); ++i) {
            maxLeft = std::max(maxLeft, height[i-1]);
            maxLeftArr.push_back(maxLeft);
        }
        std::vector<int> maxRightArr;
        maxRightArr.reserve(height.size());
        maxRightArr.resize(height.size());
        int maxRight = 0;
        maxRightArr[height.size() - 1] = maxRight;
        for (int i = height.size() - 2; i >= 0; --i) {
            maxRight = std::max(maxRight, height[i + 1]);
            maxRightArr[i] = maxRight;
        }

        for (int i = 0; i <= height.size() - 1; ++i) {
            int unit = std::min(maxRightArr[i], maxLeftArr[i]) - height[i];
            if (unit >= 0) {
                waterUnit += unit;
            }
        }
        return waterUnit;
    }
};