function maxArea(height: number[]): number {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while (j - i > 0) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
}
