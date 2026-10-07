class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid || grid.length === 0)
            return 0;
        
        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0;
        
        const bfs = (row, col) => {
            const queue = [[row, col]];
            grid[row][col] = 0;

            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            let currentArea = 1; // Count the starting cell

            while(queue.length > 0){
                const [currRow, currCol] = queue.shift();

                for(const [dr, dc] of directions){
                    const newRow = currRow + dr;
                    const newCol = currCol + dc;
                    
                    // Fixed >= 0 bounds
                    if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1){
                        grid[newRow][newCol] = 0; // Sink immediately on enqueue
                        queue.push([newRow, newCol]);
                        currentArea++;
                    }
                }
            }
            return currentArea;
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === 1){
                    const area = bfs(r, c);
                    if(area > maxArea)
                        maxArea = area;
                }
            }
        }

        return maxArea;
    }
}