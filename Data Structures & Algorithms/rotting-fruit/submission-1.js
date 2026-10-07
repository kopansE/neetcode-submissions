class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if(!grid || grid.length === 0) return -1;
        const rotten = [];
        const rows = grid.length, cols = grid[0].length;
        let freshAmount = 0;
        const directions = [[1,0],[-1,0], [0,1], [0,-1]];

        for(let r=0; r<rows;r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === 2)
                 rotten.push([r,c]);

                if(grid[r][c] === 1)
                    freshAmount++;
            }
        }

        if(freshAmount === 0)
            return 0;

        let time = 0;

        while(rotten.length > 0 && freshAmount > 0){
            const currentLevelSize = rotten.length;
            for(let i=0;i<currentLevelSize;i++){
                const [row, col] = rotten.shift();
                for(const [dr,dc] of directions){
                    const neighborRow = row+dr;
                    const neighborCol = col+dc;
                    
                    if( neighborRow >= 0 && neighborRow < rows && 
                        neighborCol >= 0 && neighborCol < cols && 
                        grid[neighborRow][neighborCol] === 1){
                            grid[neighborRow][neighborCol] = 2;
                            rotten.push([neighborRow,neighborCol]);
                            freshAmount--;
                        }
                }
            }
            time++;

        }
        return freshAmount === 0 ? time : -1;
    }
}
