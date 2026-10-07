class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (!heights || heights.length === 0) return [];

        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        const rows = heights.length, cols = heights[0].length;

        // 1. Correct flattening: rows * cols
        const adj = Array.from({ length: rows * cols }, () => []);

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                for (const [dr, dc] of directions) {
                    const neighborR = r + dr, neighborC = c + dc;
                    if (
                        neighborR >= 0 && neighborR < rows &&
                        neighborC >= 0 && neighborC < cols &&
                        heights[r][c] >= heights[neighborR][neighborC]
                    ) {
                        // FIX: r * cols + c (not r * c + r)
                        adj[r * cols + c].push(neighborR * cols + neighborC);
                    }
                }
            }
        }

        // 2. Traversal helper for Pacific
        const canReachPacific = (startNode) => {
            const queue = [startNode];
            const visited = new Set([startNode]);

            while (queue.length > 0) {
                const curr = queue.shift();
                const r = Math.floor(curr / cols);
                const c = curr % cols;

                // Border check
                if (r === 0 || c === 0) return true;

                for (const neighbor of adj[curr]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            return false;
        };

        // 3. Traversal helper for Atlantic
        const canReachAtlantic = (startNode) => {
            const queue = [startNode];
            const visited = new Set([startNode]);

            while (queue.length > 0) {
                const curr = queue.shift();
                const r = Math.floor(curr / cols);
                const c = curr % cols;

                // Border check
                if (r === rows - 1 || c === cols - 1) return true;

                for (const neighbor of adj[curr]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            return false;
        };

        // 4. Collect coordinates where both are reachable
        const result = [];
        for (let i = 0; i < adj.length; i++) {
            if (canReachPacific(i) && canReachAtlantic(i)) {
                result.push([Math.floor(i / cols), i % cols]);
            }
        }

        return result;
    }
}