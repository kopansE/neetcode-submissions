class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const output = [];
        for(let i=0; i<=nums.length-k;i++){
            output.push(this.getMaxFromWindow(nums,k,i));
        }
        return output;
    }

    getMaxFromWindow(nums,k,start){
        let max = nums[start];
        for(let i=start+1; i<start+k;i++){
            if(nums[i] > max){
                max = nums[i];
            }
        }
        return max;
    }
}
