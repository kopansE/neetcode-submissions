class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        if (!word || word.length === 0) return true;

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === word[0]) {
                    if (this.dfs(board, word, row, col, 0)) return true;
                }
            }
        }

        return false;
    }

    dfs(board, word, row, col, index){
        if(index === word.length)
            return true;
        
        

        if( row < 0 || row >= board.length || 
            col < 0 || col >= board[0].length || 
            board[row][col] !== word[index])
            return false;
        
        const temp = board[row][col];
        board[row][col] = '#'; // mark as visited

        const found = this.dfs(board, word, row+1, col, index+1) ||
                this.dfs(board, word, row, col+1, index+1) ||
                this.dfs(board, word, row-1, col, index+1) ||
                this.dfs(board, word, row, col-1, index+1)
        
        board[row][col] = temp; // restore
        
        return found;
    }
}