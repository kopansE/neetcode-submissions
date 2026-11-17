class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adj: Map<number, number[]> = new Map();

        for (const [node1, node2] of edges) {
            if (!adj.has(node1)) adj.set(node1, []);
            if (!adj.has(node2)) adj.set(node2, []);

            adj.get(node1)!.push(node2);
            adj.get(node2)!.push(node1);
        }

        const found: Set<number> = new Set();
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (found.has(i)) continue;

            // Found a new connected component
            count++;

            const queue: number[] = [i];

            while (queue.length > 0) {
                const node = queue.pop()!;

                if (found.has(node)) continue;

                found.add(node);

                for (const neighbor of (adj.get(node) ?? [])) {
                    if (!found.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }

        return count;
    }
}
