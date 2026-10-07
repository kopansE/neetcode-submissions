class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums: number[]): boolean {
        if(nums.length % 2 !== 0)
            return false;
        
        let mask = 0n;

        for(const num of nums){
            mask ^= (1n<< BigInt(num));
        }

        return mask === 0n;
    }
}
