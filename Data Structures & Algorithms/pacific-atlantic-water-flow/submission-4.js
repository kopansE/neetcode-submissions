class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length, cols = heights[0].length;
        const pacific = Array.from({length: rows},  () => new Array(cols).fill(false));
        const atlantic = Array.from({length: rows}, () =>  new Array(cols).fill(false));
        const directions = [[1,0], [-1,0], [0, 1], [0,-1]];

        const dfs = (r,c,visited)=>{
            visited[r][c] = true;

            for(const [dr,dc] of directions){
                const neiR = r+dr;
                const neiC = c+dc;

                if( neiR >= 0 && neiR < rows &&
                    neiC >= 0 && neiC < cols && 
                    !visited[neiR][neiC] &&
                    heights[neiR][neiC] >= heights[r][c]){
                        dfs(neiR,neiC,visited);
                    }
            }
        }

        for(let i=0; i<cols; i++){
            dfs(0,i,pacific);
            dfs(rows-1,i,atlantic);
        }

        for(let i=0; i<rows; i++){
            dfs(i,0,pacific);
            dfs(i,cols-1,atlantic);
        }

        const result = [];

        for(let r=0;r<rows;r++){
            for(let c=0; c<cols; c++){
                if(pacific[r][c] && atlantic[r][c])
                    result.push([r,c]);
            }
        }

        return result;
    }
}
