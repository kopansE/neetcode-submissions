class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const indexmap = {};
        for(let i=0; i<nums.length; i++){
            indexmap[nums[i]] = i;
        }
        for(let i=0; i<nums.length;i++){
            const diff = target-nums[i];

            if(indexmap[diff] !== undefined && indexmap[diff] !== i){
                return [i,indexmap[diff]];
            }
        }

        return [];
    }
}
