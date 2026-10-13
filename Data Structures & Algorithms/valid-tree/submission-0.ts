class Solution {
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;

        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        const visited = new Set<number>([0]);
        const stack = [0];
        
        while (stack.length > 0) {
            const node = stack.pop()!;
            for (const nb of adj[node]) {
                if (!visited.has(nb)) {
                    visited.add(nb);
                    stack.push(nb);
                }
            }
        }

        return visited.size === n;
    }
}