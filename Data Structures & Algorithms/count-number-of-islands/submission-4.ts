class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let count = 0;
        const ROWS = grid.length, COLS=grid[0].length;
        
        const dfs = (i,j)=>{
            if(i<0 || j<0 ||i>=ROWS || j>=COLS || grid[i][j] === "0") return;
            grid[i][j] = "0";
            dfs(i+1,j);
            dfs(i-1,j);
            dfs(i,j+1);
            dfs(i,j-1);            
        }

        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                if(grid[r][c] === "1"){
                    count++;
                    dfs(r,c);
                }
            }
        }
        return count;
    }
}
