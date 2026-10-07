class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0; //0
        let right=nums.length-1; //5
// nums=[-1,0,2,4,6,8]
// target=4
        while(left<=right){
            const mid = Math.floor((right+left)/2);
            if(nums[mid] === target){
                return mid;
            }
            else if(nums[mid] < target){
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
        return -1;
    }
}
