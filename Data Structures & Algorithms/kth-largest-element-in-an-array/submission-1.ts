class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        nums.sort((a,b)=>b-a);
        return nums[k-1];
    }
}
