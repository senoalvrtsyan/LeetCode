class Solution {
public:
    vector<int> plusOne(vector<int>& digits) 
    {
        int carry = 0;
        int lastIdx = digits.size() - 1;

        if (digits[lastIdx] < 9) 
        {
            ++digits[lastIdx];
        } 
        else 
        {
            int val = digits[lastIdx] + 1;
            digits[lastIdx] = val % 10;
            carry += val / 10;
        }

        if (carry) 
        {
            for (int i = digits.size() - 2; i >= 0; --i) 
            {
                int val = digits[i] + carry;
                digits[i] = val % 10;
                carry = val / 10;

                if (!carry) 
                {
                    break;
                }
            }

            if (carry) 
            {
                digits.insert(digits.begin(), carry);
            }
        }

        return digits;
    }
};