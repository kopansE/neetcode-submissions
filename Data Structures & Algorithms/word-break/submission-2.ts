class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const wordSet = new Set(wordDict);
        const memo:Map<string,boolean> = new Map();
        return this.wordBreakHelper(s, wordSet,memo);
    }

    wordBreakHelper(s: string, wordSet: Set<string>,memo:Map<string,boolean>): boolean {
    if(s.length === 0) return true;
    if(memo.has(s)) return memo.get(s);
    let temp = "";
    for(let i=0; i<s.length; i++){
        const ch = s[i];
        temp +=ch; 
        if(wordSet.has(temp) && this.wordBreakHelper(s.slice(i+1), wordSet,memo)){
            memo.set(s,true);
            return true;
        }
    }
    memo.set(s,false);
    return false;
}
}
