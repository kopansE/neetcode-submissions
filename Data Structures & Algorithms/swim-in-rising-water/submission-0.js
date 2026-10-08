class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const rows = grid.length, cols = grid[0].length;
        // 1. Track the minimum time to reach each cell
        const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const q = new Queue([[0, 0]]);
        dist[0][0] = grid[0][0];

        while (!q.isEmpty()) {
            const [r, c] = q.pop();

            for (const [dr, dc] of directions) {
                const neiR = r + dr, neiC = c + dc;

                if (neiR >= 0 && neiR < rows && neiC >= 0 && neiC < cols) {
                    // Time to reach neighbor through (r, c)
                    const nextTime = Math.max(dist[r][c], grid[neiR][neiC]);

                    // Only push if we found a strictly better path
                    if (nextTime < dist[neiR][neiC]) {
                        dist[neiR][neiC] = nextTime;
                        q.push([neiR, neiC]);
                    }
                }
            }
        }

        return dist[rows - 1][cols - 1];
    }
}