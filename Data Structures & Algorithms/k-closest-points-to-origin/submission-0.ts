class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const heap = new MinPriorityQueue(x => x[1]);

        let i=0;
        for(const [x_i, y_i] of points){
            const dist = Math.sqrt(x_i**2 + y_i**2);
            heap.enqueue([i++,dist]);
        }

        const result :number[][] = [];
        for(let j=0; j<k;j++){
            const point = points[heap.dequeue()[0]]
            result.push(point);
        }
        return result;
    }
}
