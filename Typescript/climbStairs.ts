function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }
    
    const arr: number[] = [];
    arr[1] = 1;
    arr[2] = 2;
    
    for (let i = 3; i <= n; ++i) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return arr[n];
};