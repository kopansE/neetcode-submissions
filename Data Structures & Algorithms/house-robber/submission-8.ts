class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;
        if(n<=2)
            return Math.max(...nums);
        
        const money = new Array(n).fill(0);
        money[0] = nums[0];
        money[1] = Math.max(nums[0],nums[1]);

        for(let i=2;i<n;i++){
            money[i] = Math.max(money[i-2]+nums[i],money[i-1])
        }

        return money[n-1];
    }
}
