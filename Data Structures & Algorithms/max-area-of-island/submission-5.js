class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0;

        const bfs = (r,c)=>{
            let area = 1;
            const q = [[r,c]];
            grid[r][c] = 0;
            const directions = [[1,0], [-1,0], [0,1], [0,-1]];

            while(q.length > 0){
                const [row,col] = q.shift();
                for(const [dr, dc] of directions){
                    const neighborRow = row+dr;
                    const neighborCol = col+dc;

                    if(neighborRow >= 0 && neighborRow < rows && 
                    neighborCol >= 0 && neighborCol < cols &&
                    grid[neighborRow][neighborCol] === 1){
                        grid[neighborRow][neighborCol] = 0;
                        area++;
                        q.push([neighborRow,neighborCol]);
                    }
                }
            }
            return area;
        }

        for(let r=0; r<rows;r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === 1){
                    const area = bfs(r,c);
                    if(area > maxArea)
                        maxArea = area;
                }
            }
        }
        return maxArea;
    }
}
