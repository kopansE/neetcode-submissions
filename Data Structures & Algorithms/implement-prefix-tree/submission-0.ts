class TrieNode{
    children: Map<string, TrieNode>;
    word : string | null = null;
    
    constructor(){
        this.children = new Map();
        this.word = null;
    }
}
class PrefixTree {
    private root:TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
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
        for(const ch of word){
            const next = node.children.get(ch);
            if(!next) return false;
            node = next;
        }
        return node.word !== null;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let node = this.root;
        for(const ch of prefix){
            if(!node || (!node.children.get(ch) && !(node.word === prefix))) return false;
            node = node.children.get(ch)!;
        }
        return true;
    }
}
