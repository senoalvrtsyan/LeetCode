function trap(height: number[]): number {
    if (height.length <= 2) {
        return 0;
    }

    let waterUnit = 0;
    const maxLeftArr = new Array(height.length);
    let maxLeft = 0;

    for (let i = 1; i < height.length; i++) {
        maxLeft = Math.max(maxLeft, height[i - 1]);
        maxLeftArr[i] = maxLeft;
    }

    const maxRightArr = new Array(height.length);
    let maxRight = 0;
    maxRightArr[height.length - 1] = maxRight;

    for (let i = height.length - 2; i >= 0; i--) {
        maxRight = Math.max(maxRight, height[i + 1]);
        maxRightArr[i] = maxRight;
    }

    for (let i = 0; i < height.length; i++) {
        const unit = Math.min(maxRightArr[i], maxLeftArr[i]) - height[i];
        if (unit >= 0) {
            waterUnit += unit;
        }
    }

    return waterUnit;
}
