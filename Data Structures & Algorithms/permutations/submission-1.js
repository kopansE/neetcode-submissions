class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const permutations = [];
        const serie = [];

        const backtrack = ()=>{
            if(serie.length === nums.length){
                permutations.push([...serie]);
                return;
            }
            for(let number of nums){
                if(!serie.includes(number)){
                    serie.push(number);
                    backtrack();
                    serie.pop();
                }
            }
        }

        backtrack();
        return permutations;
    }
}
