class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [[1,0], [-1,0], [0, 1], [0, -1]];

        let islands = 0;

        const bfs = (r,c)=>{
            
            const q = [[r,c]];
            grid[r][c] = "0";

            while(q.length > 0){
                const [row, col] = q.shift();
                for(const [dr,dc] of directions){
                    const neighborRow = row+dr, neighborCol = col+dc;
                    if( neighborRow >=0 && neighborRow < rows && 
                        neighborCol >=0 && neighborCol < cols &&
                        grid[neighborRow][neighborCol] === "1"){

                            q.push([neighborRow,neighborCol]);
                            console.log(`added neighbor ${[neighborRow,neighborCol]}`)
                            grid[neighborRow][neighborCol] = "0"
                        }
                }
            }
    
        }

        for(let r=0; r<rows;r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === "1"){
                    console.log(`entered ${[r,c]}`)
                    bfs(r,c);
                    islands++;
                }
            }
        }
        return islands;
    }
}
