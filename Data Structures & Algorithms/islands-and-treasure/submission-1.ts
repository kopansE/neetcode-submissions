class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        if(!grid || grid.length === 0) return;

        const rows = grid.length, cols = grid[0].length;
        const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
        let steps = 1;
        const q :number[][] = [];
        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === 0)
                    q.push([r,c]);
            }
        }

        while(q.length > 0){
            let level = q.length;
            for(let i=0; i<level; i++){
                const [row,col] = q.shift();
                for(const [dr,dc] of directions){
                    const neighborRow = row+dr;
                    const neighborCol = col+dc;

                    if( neighborRow >=0 && neighborRow < rows && 
                        neighborCol >=0 && neighborCol < cols &&
                        grid[neighborRow][neighborCol] === 2147483647){
                            grid[neighborRow][neighborCol] = steps;
                            q.push([neighborRow,neighborCol]);
                        }
                }
            }
            steps++;
        }
    }
}
