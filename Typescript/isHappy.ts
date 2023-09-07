function isHappy(n: number): boolean {
    if (n < 10) {
        return n === 1 || n === 7; // 1 and 7 are the only single-digit happy numbers
    }

    function getNext(n: number): number {
        let sqSum = 0;
        while (n > 0) {
            const digit = n % 10;
            sqSum += digit * digit;
            n = Math.floor(n / 10);
        }
        return sqSum;
    }

    let slow = n;
    let fast = getNext(n);

    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}
