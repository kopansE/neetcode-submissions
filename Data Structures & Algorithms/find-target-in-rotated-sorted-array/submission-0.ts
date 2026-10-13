class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
search(nums: number[], target: number): number {
    // Step 1: find the index of the minimum (the rotation point)
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const m = l + Math.floor((r - l) / 2);
        if (nums[m] > nums[r]) {
            l = m + 1;   // drop is to the right of m
        } else {
            r = m;       // m could be the minimum itself, keep it
        }
    }
    const pivot = l;

    // Step 2: search the half that's sorted and could contain the target
    const result = this.binarySearch(nums, target, 0, pivot - 1);
    if (result !== -1) return result;
    return this.binarySearch(nums, target, pivot, nums.length - 1);
}

binarySearch(nums: number[], target: number, l: number, r: number): number {
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) return m;
        if (nums[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}
}
