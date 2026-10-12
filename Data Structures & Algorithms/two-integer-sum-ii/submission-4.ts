class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l=0, r=numbers.length-1;
        while(l<r){
                
            if(numbers[l] + numbers[r] < target){
                while(numbers[l]===numbers[l+1]) l++;
                l++;
                continue;
            }
            if(numbers[l] + numbers[r] > target){
                while(numbers[r]===numbers[r-1]) r--;
                r--;
                continue;
            }
            return [l+1,r+1];
        }
    }
}
