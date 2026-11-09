class TrieNode {
    children: Map<string, TrieNode> = new Map();
    word: string | null = null; // set on the node where a word ends
}

class Solution {
    findWords(board: string[][], words: string[]): string[] {
        if (!board || board.length === 0) return [];

        // 1. Build the trie from all words
        const root = new TrieNode();
        for (const w of words) {
            let node = root;
            for (const ch of w) {
                if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
                node = node.children.get(ch)!;
            }
            node.word = w;
        }

        const rows = board.length, cols = board[0].length;
        const res: string[] = [];
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        // 2. One DFS per cell, walking board and trie together
        const dfs = (r: number, c: number, parent: TrieNode): void => {
            const ch = board[r][c];
            const node = parent.children.get(ch);
            if (!node) return; // no word continues with this letter

            if (node.word !== null) {
                res.push(node.word);
                node.word = null; // don't add the same word twice
            }

            board[r][c] = '#'; // mark as used on this path
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') {
                    dfs(nr, nc, node);
                }
            }
            board[r][c] = ch; // backtrack

            // prune: nothing left to find below this node
            if (node.children.size === 0 && node.word === null) {
                parent.children.delete(ch);
            }
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }
        return res;
    }
}