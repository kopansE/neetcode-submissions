class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;
        if(n<=2)
            return Math.max(...nums);
        
        const dfs = (start,end)=>{
            const maxVal : number[] = new Array(n).fill(-1);
            maxVal[start] = nums[start];
            maxVal[start+1] = Math.max(nums[start],nums[start+1]);
            
            for(let i=start+2;i<end;i++){
                maxVal[i] = Math.max(nums[i]+maxVal[i-2],maxVal[i-1]);
            }
            return maxVal[end-1];
        }

        return Math.max(dfs(0,n-1),dfs(1,n))
    }
}
