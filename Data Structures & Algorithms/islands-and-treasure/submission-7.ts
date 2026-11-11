class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const queue:number[][] = [];
        const INF = 2147483647;
        const ROWS = grid.length, COLS=grid[0].length;
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                if(grid[r][c] === 0)
                    queue.push([r,c]);
            }
        }
        
        const dirs = [ [1,0], [-1,0], [0,1], [0,-1] ]
        while(queue.length > 0){
            const size = queue.length; 
            const [r,c] = queue.shift()!;
            for(const [dr,dc] of dirs){
                const nr = r+dr, nc=c+dc;
                if(nr<0 || nr>=ROWS || nc<0 || nc>=COLS || grid[nr][nc] !== INF)
                    continue;
                grid[nr][nc] = grid[r][c] + 1;
                queue.push([nr,nc]);
            }
            
        }
    }
}
