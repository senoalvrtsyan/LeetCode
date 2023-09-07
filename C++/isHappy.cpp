class Solution {
public:
    bool isHappy(int n) {
        if (n < 10) {
            return false;
        }
        int currentN = n;
        int sqSum;
        while (currentN != 1) {
            sqSum = 0;
            while (n) {
                int lastDigit = n%10;
                sqSum += (lastDigit * lastDigit);
                n /= 10; 
            }
            currentN = sqSum;
        }
        return true;
    }
};