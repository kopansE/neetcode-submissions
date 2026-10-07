class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0;

        for(const value of set){
            if(!set.has(value-1)){ //sequence start
                let currentNumber = value;
                let currentLength = 0;

                while(set.has(currentNumber)){
                    currentLength++;
                    currentNumber++;
                } 
                maxLength = Math.max(maxLength,currentLength);
            }
        }

        return maxLength;
    }
}
