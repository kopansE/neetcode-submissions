class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const rightArr : number[] = [];
        const leftArr : number[] = [];
        const N = nums.length;
        rightArr.push(1);
        leftArr.push(1);

        for(let i=0; i<N-1;i++){
            rightArr.push(rightArr[i]*nums[i]);
        }

        const reversedNums = nums.reverse();
        for(let i=0; i<N-1;i++){
            leftArr.push(leftArr[i]*reversedNums[i]);
        }

        const result = [];
        for(let i=0;i<N;i++){
            result.push(rightArr[i]*leftArr[N-i-1]);
        }
        console.log(rightArr);
        console.log(leftArr);

        return result;
    }
}
// [1,2,4,6] -> [1,1,2,]
// [6,4,2,1] -> [1]
