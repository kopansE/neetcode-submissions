class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed: string, words: string[]): number {
        let counter = 0;
        let allowedMask = 0;
        for (const ch of allowed)
            allowedMask |= 1 << (ch.charCodeAt(0)-97);

        for(const word of words){
            let currentBits = 0;

            for (const ch of word){
            currentBits |= 1 << (ch.charCodeAt(0)-97);
            }
            if((currentBits & ~allowedMask) === 0) counter++;
        }
        return counter;
    }
}
