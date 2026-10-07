class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0]; // -2
        let currentSum = 0; 

        for(let i=0; i<nums.length;i++){
            currentSum += nums[i]; //-1

            if(currentSum > maxSum) 
                maxSum = currentSum;
            if(currentSum <= 0)
                currentSum = Math.max(nums[i],0); //0 
            
        }

        return maxSum;

    }
}
