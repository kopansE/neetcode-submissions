class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length, cols = grid[0].length;
        const directions = [[1,0], [-1,0], [0,1], [0,-1]];

        let fresh = 0;
        const rotten = [];

        for(let r=0; r<rows; r++){
            for(let c=0; c < cols; c++){
                if(grid[r][c] === 2)
                    rotten.push([r,c]);
                
                else if(grid[r][c] === 1)
                    fresh++;
            }
        }
        let time = 0;

        while(rotten.length > 0 && fresh > 0){
            const level = rotten.length;
            for(let i=0; i<level; i++){
                const [row,col] = rotten.shift();
                for(const [dr,dc] of directions){
                    const neiR = row+dr;
                    const neiC = col+dc;

                    if( neiR >=0 && neiR < rows &&
                        neiC >=0 && neiC < cols &&
                        grid[neiR][neiC] === 1){
                            grid[neiR][neiC] = 2;
                            fresh--;
                            rotten.push([neiR,neiC]);
                        }
                }
            }
            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
