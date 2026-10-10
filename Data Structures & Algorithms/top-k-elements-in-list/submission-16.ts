class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq = new Map<number,number>();
        for(const num of nums){
            freq.set(num, (freq.get(num) || 0)+1);
        }

        const heap = new MaxPriorityQueue(x=>x[1]);
        for(const [num, amount] of freq){
            heap.enqueue([num,amount]);
        }

        const result = [];
        for(let i=0; i<k; i++)
            result.push(heap.dequeue()[0]);

        return result;
    }

}
