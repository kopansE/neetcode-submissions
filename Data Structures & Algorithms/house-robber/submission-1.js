class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const cache = Array(n).fill(-1);
        
        const dfs = (i) => {
            if (i>= n) {
                return 0;
            }           
            if(cache[i] !== -1){
                return cache[i];
            }            
            return (cache[i] = Math.max(dfs(i +1), nums[i] + dfs(i + 2)));
        };

        return dfs(0);
    }
}
