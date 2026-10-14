class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res :number[][] = [];
        const subSet :number[] = [];

        const dfs = (i:number):void => {
            const sum = subSet.reduce( (a,b) => a+b, 0);
            if(sum>target || i>=nums.length) return;
            if(sum === target){res.push([...subSet]); return}
            
            subSet.push(nums[i]);
            dfs(i);
            subSet.pop();
            dfs(i+1);
        }

        dfs(0);
        return res;
    }
}
