class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
isValidSudoku(board: string[][]): boolean {
    const needed = new Map<string, number>();
    for (let i = 1; i <= 9; i++) needed.set(String(i), 1);

    // returns false if this digit is a duplicate in the current group
    const use = (digit: string, need: Map<string, number>): boolean => {
        if (digit === ".") return true;           // empty cell, skip
        if (!need.has(digit)) return false;       // not a valid digit
        need.set(digit, need.get(digit)! - 1);
        return need.get(digit)! >= 0;
    };

    for (let i = 0; i < 9; i++) {
        const rowNeed = new Map(needed);   // fresh copy per row
        const colNeed = new Map(needed);   // fresh copy per column
        for (let j = 0; j < 9; j++) {
            if (!use(board[i][j], rowNeed)) return false;
            if (!use(board[j][i], colNeed)) return false;
        }
    }

    for (let r = 0; r < 9; r += 3) {
        for (let c = 0; c < 9; c += 3) {
            const boxNeed = new Map(needed);  // fresh copy per box
            for (let i = r; i < r + 3; i++)
                for (let j = c; j < c + 3; j++)
                    if (!use(board[i][j], boxNeed)) return false;
        }
    }

    return true;
}}
