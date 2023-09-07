function plusOne(digits: number[]): number[] {
    let carry = 0;
    let lastIdx = digits.length - 1;

    if (digits[lastIdx] < 9) {
        ++digits[lastIdx];
    } else {
        const val = digits[lastIdx] + 1;
        digits[lastIdx] = val % 10;
        carry += Math.floor(val / 10);
    }

    if (carry) {
        for (let i = digits.length - 2; i >= 0; --i) {
            const val = digits[i] + carry;
            digits[i] = val % 10;
            carry = Math.floor(val / 10);

            if (!carry) {
                break;
            }
        }

        if (carry) {
            return [carry, ...digits];
        }
    }

    return digits;
};