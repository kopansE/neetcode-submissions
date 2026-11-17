class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
countComponents(n: number, edges: number[][]): number {
    const parent: number[] = Array.from(
        { length: n },
        (_, i) => i
    );

    const size: number[] = new Array(n).fill(1);

    let count = n;

    // Find the root of a node (with path compression)
    const find = (x: number): number => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    // Merge two groups
    const union = (a: number, b: number): void => {
        let rootA = find(a);
        let rootB = find(b);

        if (rootA === rootB) return;

        // Union by size
        if (size[rootA] < size[rootB]) {
            [rootA, rootB] = [rootB, rootA];
        }

        parent[rootB] = rootA;
        size[rootA] += size[rootB];

        count--;
    };

    for (const [a, b] of edges) {
        union(a, b);
    }

    return count;
}}
