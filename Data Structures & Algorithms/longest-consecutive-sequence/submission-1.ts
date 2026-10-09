class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set<number>(nums);
	let max = 0;
	for(let num of numSet){
		let count = 1;
            if(numSet.has(num-1)) continue;
            
            while(numSet.has(num+1)){
                count++;
                num=num+1;
        }
            max = Math.max(max, count);
        }
    return max;
    }
}
