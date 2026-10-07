class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length, cols = grid[0].length;
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        let maxArea = 0;

        const bfs = (r,c) => {
            let area = 1;

            const q = [[r,c]];
            grid[r][c] = 0;

            while(q.length > 0){
                const [row, col] = q.pop();
                for(const [dr,dc] of directions){
                    const neiR = row+dr, neiC = col+dc;

                    if( neiR >= 0 && neiR < rows &&
                        neiC >= 0 && neiC < cols &&
                        grid[neiR][neiC] === 1){
                            q.push([neiR,neiC]);
                            grid[neiR][neiC] = 0;
                            area++;
                        }
                }
            }
            return area;
        }

        for(let r=0; r<rows; r++){
            for(let c=0;c<cols; c++){
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
