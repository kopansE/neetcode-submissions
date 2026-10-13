class Solution {
    islandsAndTreasure(grid: number[][]): void {
        if (!grid || grid.length === 0) return;

        const rows = grid.length, cols = grid[0].length;
        const INF = 2147483647;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const q: number[][] = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) q.push([r, c]);
            }
        }

        let head = 0;
        while (head < q.length) {
            const [row, col] = q[head++];
            for (const [dr, dc] of directions) {
                const nr = row + dr, nc = col + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === INF) {
                    grid[nr][nc] = grid[row][col] + 1;
                    q.push([nr, nc]);
                }
            }
        }
    }
}