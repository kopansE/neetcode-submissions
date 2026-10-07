class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0)
            return 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const visited = new Set();
        let islands = 0;

        const bfs = (row,col)=>{
            const q = [];
            visited.add(`${row},${col}`);
            q.push([row,col]);

            while(q.length > 0){
                const [currRow, currCol] = q.shift();

                // Check all 4 directions (up, down, left, right)
                const neighbors = [
                    [currRow - 1, currCol], // Up
                    [currRow + 1, currCol], // Down
                    [currRow, currCol - 1], // Left
                    [currRow, currCol + 1]  // Right
                ];

                for (const [r, c] of neighbors) {
                    const key = `${r},${c}`;
                    if (
                        r >= 0 && r < rows &&
                        c >= 0 && c < cols &&
                        grid[r][c] === "1" &&
                        !visited.has(key)
                    ) {
                        q.push([r, c]);
                        visited.add(key);
                    }
                }
            }
        }

        for(let row=0;row<rows;row++){
            for(let col=0; col<cols; col++){
                if(grid[row][col] === "1" && !visited.has(`${row},${col}`)){
                    bfs(row,col);
                    islands++;
                }
            }
        }
        return islands;
    }
}