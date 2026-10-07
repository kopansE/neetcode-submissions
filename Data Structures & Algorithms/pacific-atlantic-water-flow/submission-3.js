class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length, cols = heights[0].length;

        const pacific = [];
        const atlantic = [];

        for(let i=0; i<rows;i++){
            pacific.push(new Array(cols).fill(false));
            atlantic.push(new Array(cols).fill(false));
        }

        const dfs = (r,c,visited)=> {
            visited[r][c] = true;
            const directions = [[1,0],[-1,0],[0,1],[0,-1]];

            for(const [dr,dc] of directions){
                const row = r+dr;
                const col = c+dc;

                if( row>=0 && row < rows && 
                    col>=0 && col < cols &&
                    !visited[row][col] &&
                    heights[row][col]>=heights[r][c]){
                        dfs(row,col,visited);
                    }
            }
        }

        for(let i=0; i<cols;i++){
            dfs(0,i,pacific);
            dfs(rows-1,i,atlantic);
        }
        
        for(let i=0; i<rows; i++){
            dfs(i,0,pacific);
            dfs(i,cols-1,atlantic);
        }

        const result = [];
        for(let i=0; i< rows;i++)
            for(let j=0; j <cols; j++){
                if(pacific[i][j] && atlantic[i][j])
                    result.push([i,j]);
            }
        return result;
    }
}
