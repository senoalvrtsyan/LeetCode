function containsDuplicate(nums: number[]): boolean {
    const values: Set<number> = new Set();
    
    for (const num of nums) {
        if (values.has(num)) {
            return true;
        }
        
        values.add(num);
    }

    return false;
}
