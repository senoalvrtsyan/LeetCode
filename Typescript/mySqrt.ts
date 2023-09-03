function mySqrt(x: number): number {
    if (x <= 1) {
        return x;
    }
    
    let left = 1, right = Math.floor(x / 2);
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (mid <= x / mid && (mid + 1) > x / (mid + 1)) {
            return mid;
        } else if (mid > x / mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return right; // Returns the floor of the square root
};