class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const graph: Map<number, [number,number][]> = new Map();
        for(const [f,to,w] of times){
            if(!graph.has(f)) graph.set(f,[]);
            graph.get(f)!.push([to,w]);
        }

        const heap = new MinPriorityQueue((entry: [number,number])=>entry[0]);
        heap.enqueue([0,k]);

        const visited: Set<number> = new Set();
        let maxTime = 0;
        while(!heap.isEmpty()){
            const [dist,curr] = heap.dequeue();
            if(visited.has(curr)) continue;

            visited.add(curr);
            maxTime = dist;

            for(const [next,w] of graph.get(curr) ?? []){
                if(!visited.has(next)){
                    heap.enqueue([dist+w,next]);
                }
            }
        }
        return visited.size === n ? maxTime : -1;
    }
}
