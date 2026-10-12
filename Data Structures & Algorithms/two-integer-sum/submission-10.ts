class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numWidx: number[][] = nums.map((x,i)=>[x,i]);
        numWidx.sort((a,b) => a[0]-b[0]);

        let l=0, r=nums.length-1;


        while(l<r){
            const leftVal = numWidx[l][0], rightVal = numWidx[r][0];
            const needed = leftVal+rightVal - target;
            if(needed > 0){ r--; continue;}
            if(needed < 0){ l++; continue;}
            return [numWidx[l][1],numWidx[r][1]]
        }
        return [];
    }
}
