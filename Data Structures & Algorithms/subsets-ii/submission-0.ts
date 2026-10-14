class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res: number[][] = [];
        const sortedRes: number[][] = [];
        const subset :number[] = [];
        const dfs = (i : number)=>{
            if(i>=nums.length){
                const sortedSub = [...subset].sort((a,b)=>a-b);
                if(sortedRes.some(arr => arr.toString() === sortedSub.toString())) return;
                res.push([...subset]);
                sortedRes.push([...sortedSub]);
                return;
            }
            subset.push(nums[i]);
            dfs(i+1);
            subset.pop();
            dfs(i+1);
        }
        dfs(0);
        return res;
    }
}
