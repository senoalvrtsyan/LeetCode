function intersect(nums1: number[], nums2: number[]): number[] {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Swap the arrays
    }

    const map = new Map<number, number>();

    for (const val of nums1) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    const result: number[] = [];
    let idx = 0;

    for (const val of nums2) {
        const count = map.get(val);
        if (count !== undefined && count > 0) {
            nums1[idx++] = val;
            map.set(val, count - 1);
        }
    }

    return nums1.slice(0, idx);
}
