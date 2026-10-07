class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
    let l = 0, r = nums.length-1;
    while(l<=r){
        const mid = Math.floor((l+r)/2);
        if(nums[mid] < target)
            l = mid+1;
        else if( nums[mid] > target)
            r = mid-1;
        else
            return mid;
    }

    return -1;
};
}