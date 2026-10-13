class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        if(!board || board.length === 0) return;

        const directions = [[1,0], [-1,0], [0,1], [0,-1]];
        const q : number[][] =[];
        const rows = board.length, cols = board[0].length;

        for(let i=0;i<cols; i++){
            if(board[0][i] === "O"){
                q.push([0,i]);
                board[0][i] = "S";
            }
            if(board[rows-1][i] === "O"){
                q.push([rows-1,i]);
                board[rows-1][i] = "S";
            }
        }

         for(let i=0;i<rows; i++){
            if(board[i][0] === "O"){
                q.push([i,0]);
                board[i][0] = "S";

            }
            if(board[i][cols-1] === "O"){
                q.push([i,cols-1]);
                board[i][cols-1] = "S";
            }
        }

        while(q.length > 0){
            const [r,c] = q.pop();
            for(const [dr,dc] of directions){
                const nr= r+dr, nc = c+dc;
                if(nr >=0 && nr < rows && nc>=0 && nc< cols && board[nr][nc] === "O"){
                    board[nr][nc] = "S";
                    q.push([nr,nc]);
                }
            }
        }

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols;c++){
                if(board[r][c] === "O")
                    board[r][c] = "X";
            }
        }

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols;c++){
                if(board[r][c] === "S")
                    board[r][c] = "O";
            }
        }        
    }
}
