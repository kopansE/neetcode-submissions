class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const graph: Map<number,[number,number][]> = new Map();
        for(const [start ,to, w] of times){
            if(!graph.has(start)) graph.set(start,[]);
            graph.get(start)!.push([to,w]);
        }

        const heap = new MinPriorityQueue((entry: [number, number]) => entry[0]);
        heap.enqueue([0,k]);

        const visited: Set<number> = new Set();
        let maxTime = 0;

        while(!heap.isEmpty()){
            const [dist,node] = heap.dequeue();
            if(visited.has(node)) continue;
            visited.add(node);
            
            maxTime = dist;
            for(const [next,w] of graph.get(node) ?? []){
                if(!visited.has(next)){
                    heap.enqueue([w+dist,next]);
                }
            }
        }
        return visited.size === n ? maxTime : -1;
    }
}
