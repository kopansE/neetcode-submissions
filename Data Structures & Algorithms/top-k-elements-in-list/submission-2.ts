class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number,number>();
        for(const num of nums){
            freqMap.set(num,(freqMap.get(num) || 0)+1);
        }

        const buckets :number[][] = [];
        for(let i=0; i<=nums.length;i++){
            buckets.push([]);
        }

        for(const [num, freq] of freqMap){
            buckets[freq].push(num);
        }

        const result: number[] = [];
        for(let i=buckets.length-1; i>=0 && result.length < k; i--){
            if(buckets[i].length > 0){
                for(let num of buckets[i]){
                    result.push(num);
                    if(result.length === k) break;
                }
            }
        }
        return result;
    }
}
