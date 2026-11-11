class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        if(!grid || grid.length === 0) return 0;
        
        let ROWS = grid.length, COLS = grid[0].length;
        let maxArea = 0;

        const dfs = (i,j): number =>{
            if(i<0 || i>=ROWS || j<0 || j>=COLS || grid[i][j] === 0) return 0;

            grid[i][j] = 0;
            let area = 1 + dfs(i+1,j) + dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1);
            if(area > maxArea) maxArea = area;
            return area;
        }

        for(let r=0; r<ROWS; r++){
            for(let c=0; c<COLS; c++){
                if(grid[r][c] === 1)
                    dfs(r,c);
            }
        }
        return maxArea;
    }
}
