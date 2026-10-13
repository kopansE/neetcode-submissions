class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
networkDelayTime(times: number[][], n: number, k: number): number {
    // 1. Build adjacency list
    const graph = new Map<number, [number, number][]>();
    for (const [from, to, w] of times) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from)!.push([to, w]);
    }

    // 2. Heap of [distance, node], ordered by distance
    const heap = new MinPriorityQueue((entry: [number, number]) => entry[0]);
    heap.enqueue([0, k]);
    const visited = new Set<number>();
    let maxTime = 0;

    // 3. Pop closest, finalize it, push its neighbors
    while (!heap.isEmpty()) {
        const [dist, node] = heap.dequeue();
        if (visited.has(node)) continue;
        visited.add(node);
        maxTime = dist;

        for (const [next, w] of graph.get(node) ?? []) {
            if (!visited.has(next)) {
                heap.enqueue([dist + w, next]);
            }
        }
    }

    return visited.size === n ? maxTime : -1;
}}
