class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsWindex = nums.map((num, index) => [num, index]);                  
        console.log(numsWindex)
        numsWindex.sort((a,b)=> a[0]-b[0]);

        let left = 0, right = numsWindex.length-1;
        while(left < right){
            const value = numsWindex[left][0] + numsWindex[right][0];
            if(value === target)
                return [numsWindex[left][1], numsWindex[right][1]]; 
            else if (value < target)
                left++;
            else
            right --;
        }
        return [0,0];
    }
}
