class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sArray = new Int32Array(26);
        const tArray = new Int32Array(26);

        for(const char of s){
            sArray[char.charCodeAt(0)-97]++;
        }
        for(const char of t){
            tArray[char.charCodeAt(0)-97]++;
        }

        for(let i=0; i<26;i++){
            if(sArray[i]!==tArray[i])
                return false;
        }

        return true;
    }
}
