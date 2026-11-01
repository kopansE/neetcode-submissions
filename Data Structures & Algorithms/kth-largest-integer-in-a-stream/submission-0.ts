class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    private heap;
    private k;
    constructor(k: number, nums: number[]) {
        this.heap = new MinPriorityQueue();
        this.k = k;
        for(const num of nums){
            this.heap.enqueue(num);        
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.enqueue(val);
        while(this.heap.size() > this.k){
            this.heap.dequeue();
        }
        return this.heap.front();
    }
}
