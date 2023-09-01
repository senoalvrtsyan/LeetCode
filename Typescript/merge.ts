/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void 
 {
    const nums1Cpy: number[] = [...nums1];
    let pushIdx = -1;
    const loopLength = Math.min(m, n);
    let idx1 = 0;
    let idx2 = 0;
    
    while (idx1 < m && idx2 < n) 
    {
        if (nums1Cpy[idx1] < nums2[idx2]) 
        {
            nums1[++pushIdx] = nums1Cpy[idx1++];
        } 
        else 
        {
            nums1[++pushIdx] = nums2[idx2++];
        }
    }

    while (idx1 < m) 
    {
        nums1[++pushIdx] = nums1Cpy[idx1++];
    }

    while (idx2 < n) 
    {
        nums1[++pushIdx] = nums2[idx2++];
    }
};