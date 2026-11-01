class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const heap = new MinPriorityQueue();
        for(const num of nums)
            heap.enqueue(num);
            
        while(heap.size() > k)
            heap.dequeue();
        return heap.front();
    }
}
