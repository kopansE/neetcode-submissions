class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if(nums.length === 0)
            return 0;
        if(nums.length === 1)
            return nums[0];
        if(nums.length === 2)
            return Math.max(nums[1],nums[0]);
        

        const maxValue : number[] = new Array(nums.length).fill(-1);
        maxValue[0] = nums[0];
        maxValue[1] = Math.max(nums[1],nums[0]);;

        for(let i=2; i<nums.length;i++){
            maxValue[i] = Math.max(maxValue[i-2]+nums[i], maxValue[i-1]);
        }

        return maxValue[maxValue.length-1];
    }
}
