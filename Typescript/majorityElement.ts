function majorityElement(nums: number[]): number {
    const elemCountMap: { [key: number]: number } = {};

    for (const num of nums) {
        if (elemCountMap[num] === undefined) {
            elemCountMap[num] = 1;
        } else {
            elemCountMap[num]++;
        }
    }

    let maxCount = 0;
    let majorityElem = -1;

    for (const num in elemCountMap) {
        if (elemCountMap.hasOwnProperty(num)) {
            const count = elemCountMap[num];
            if (count > nums.length / 2 && count > maxCount) {
                maxCount = count;
                majorityElem = Number(num);
            }
        }
    }

    return majorityElem;
}