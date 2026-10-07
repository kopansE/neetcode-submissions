class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (!heights || heights.length === 0) return [];

        const rows = heights.length, cols = heights[0].length;
        const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));

        const dfs = (r, c, oceanVisited) => {
            oceanVisited[r][c] = true;

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;

                // Move ONLY uphill (neighbor >= current) and unvisited
                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    !oceanVisited[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, oceanVisited);
                }
            }
        };

        // 1. Flood from Pacific (Top/Left borders) & Atlantic (Bottom/Right borders)
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific);             // Top row -> Pacific
            dfs(rows - 1, c, atlantic);      // Bottom row -> Atlantic
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific);             // Left column -> Pacific
            dfs(r, cols - 1, atlantic);      // Right column -> Atlantic
        }

        // 2. Any cell visited by BOTH oceans is valid
        const result = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}