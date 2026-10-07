class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numWindex = nums.map((val,index)=>[val,index]).sort((a,b)=> a[0]-b[0]);
        let right = 0;
        let left = numWindex.length - 1;
        while (right < left){
            if(numWindex[right][0] + numWindex[left][0] === target)
                return [numWindex[right][1],numWindex[left][1]];
            else if (numWindex[right][0] + numWindex[left][0] < target){
                right ++;
            }
            else{left --;}
        }

        return [0,0];
    }
}
