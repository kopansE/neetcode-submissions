class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length, COLS = heights[0].length;
        const pacific = Array.from({length:ROWS}, ()=>new Array(COLS).fill(false));
        const atlantic = Array.from({length:ROWS}, ()=>new Array(COLS).fill(false));

        const dirs = [ [1,0], [-1,0], [0,1], [0,-1] ];
        const dfs = (r:number,c:number, ocean:boolean[][]):void=>{
            ocean[r][c] = true;

            for(const [dr,dc] of dirs){
                const nr = r+dr, nc=c+dc;
                if( nr>=0 && nr<ROWS && nc>=0 && 
                    nc<COLS && !ocean[nr][nc] && 
                    heights[nr][nc]>=heights[r][c])
                    dfs(nr,nc,ocean);
            }
        }

        for(let i=0; i<COLS;i++){
            dfs(0,i,pacific);
            dfs(ROWS-1,i,atlantic);
        }

        for(let i=0;i<ROWS;i++){
            dfs(i,0,pacific);
            dfs(i,COLS-1,atlantic);
        }

        let res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}
