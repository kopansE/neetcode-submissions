class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const n = nums.length;
        const dp: Map<string,number> = new Map();

        const dfs = (index,sum) : number=>{
            if(index>n) return 0;
            if(index === n && sum === target) return 1;

            const key = `${index},${sum}`
            if(dp.has(key)) return dp.get(key)!;

            const curr = nums[index];
            let overall = 0;
            overall = dfs(index+1,sum+curr) + dfs(index+1,sum-curr);
            dp.set(key, overall)
            return overall;
        }

        return dfs(0,0);
    }
}
