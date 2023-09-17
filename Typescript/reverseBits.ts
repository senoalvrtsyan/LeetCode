function reverseBits(n: number): number {
    const arr: number[] = Array(32).fill(0);
    let i = 0;

    while (n !== 0) {
        const rem = n % 2;
        arr[i] = rem;
        n = Math.floor(n / 2);
        i++;
    }

    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans += arr[i] * Math.pow(2, 32 - 1 - i);
    }

    return ans;
}




