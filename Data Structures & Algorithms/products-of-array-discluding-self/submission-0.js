class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) { // [1,2,4,6]
        const leftArr=[]; // [1]
        const rightArr = [];
        const n = nums.length;

        leftArr.push(1);
        rightArr.push(1);
        for(let i=0;i<n-1;i++){
            const currentVal = nums[i];
            leftArr.push(currentVal*leftArr[i]); //[1,1*1,2*1,4*2] = [1,1,2,8]
        }

        for(let i=n-1; i>0;i--){
            const currentVal = nums[i];
            rightArr.push(currentVal * rightArr[rightArr.length - 1]); //[1,1*6,6*4,24*2] = [1,6,24,48] -> reverse = [48,24,6,1]
        }

        rightArr.reverse();
        const result = [];

        for(let i=0; i<n; i++){
            result.push(leftArr[i]*rightArr[i]);
        }
        return result;
    }
}
