class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;

        while(left < right){
            while(left<right && numbers[left] === numbers[left+1])
                left ++;
            
            while(left<right && numbers[right]=== numbers[right-1])
                right --;

            if(numbers[left]+numbers[right] < target)
                left++;
            else if(numbers[left] + numbers[right] > target)
                right --;
            else
                return [left+1,right+1]
        }
    }
}
