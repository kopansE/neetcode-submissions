class TrieNode{
    children: Map<string,TrieNode>;
    word: string | null = null;
    constructor(){
        this.children = new Map();
    }
}
class WordDictionary {
    root:TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root;

        for(const ch of word){
            if(!node.children.get(ch))
                node.children.set(ch,new TrieNode());
            node = node.children.get(ch)!;
        }
        node.word = word;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let node = this.root;
        return this.searchHelper(word, node);

    }

    searchHelper(word:string, node: TrieNode) : boolean{
        if(!node) return false;
        if(word.length === 0) return node.word !== null;

        const ch = word[0];
        if(ch === "."){
            for(const child of node.children.values()){
                if(this.searchHelper(word.slice(1), child))
                    return true;
            }
            return false;
        }
        if(!node.children.get(ch)) return false;

        return this.searchHelper(word.slice(1), node.children.get(ch)!);
    }
}

