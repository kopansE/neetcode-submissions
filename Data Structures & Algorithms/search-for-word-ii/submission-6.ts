class TrieNode{
    children: Map<string,TrieNode> = new Map();
    word: string | null = null;
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        // build the prefix tree
        let root = new TrieNode();

        for(const w of words){
            let node = root;
            for(const ch of w){
                if(!node.children.has(ch)) 
                    node.children.set(ch,new TrieNode());
                node = node.children.get(ch)!;
            }
            node.word = w; //this is the check if the curent path of the trie is a final word.
        }

        const ROWS = board.length, COLS = board[0].length;
        const res :string[] = [];
        const dirs :number [][] = [ [1,0], [-1,0], [0,1], [0,-1] ]

        // one dfs per cell->walking board and trie together
        const dfs = (r: number, c: number, parent: TrieNode) : void =>{
            const ch = board[r][c];
            const node = parent.children.get(ch);
            if(!node) return;
            if(node.word!== null){
                res.push(node.word);
                node.word = null;
            }

            board[r][c] = "#";
            for(const [dr,dc] of dirs){
                const nr=r+dr, nc=c+dc;
                if(nr >=0 && nc >= 0 && nr<ROWS && nc<COLS && board[nr][nc] !== "#"){
                    dfs(nr,nc,node);
                }
            }
            board[r][c] = ch;

            //prune: nothing left to find below this node
            if(node.children.size === 0 && node.word === null)
                parent.children.delete(ch);
        }

        for(let r=0; r<ROWS;r++){
            for(let c=0; c<COLS; c++){
                dfs(r,c,root);
            }
        }
        return res;
    }
}
