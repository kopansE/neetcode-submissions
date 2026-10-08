class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if(!wordSet.has(endWord) || beginWord === endWord) return 0;

        const q = [beginWord];
        let steps = 1;

        while(q.length > 0){
            const currentLevel = q.length;
            for(let i=0; i<currentLevel;i++){
                const currentWord = q.shift();

                if(currentWord === endWord)
                    return steps;
                
                for(let j=0;j<currentWord.length;j++){
                    const originalChar = currentWord[j];
                    for(let c=97;c<=122;c++){
                        const replacingChar = String.fromCharCode(c);
                        if(originalChar === replacingChar) continue;
                        const replacingWord = currentWord.slice(0,j)+replacingChar+currentWord.slice(j+1);
                        if(wordSet.has(replacingWord)){
                            q.push(replacingWord);
                            wordSet.delete(replacingWord);
                        }

                    }
                }
            }
            steps++;
        }
        return 0;
    }
}
