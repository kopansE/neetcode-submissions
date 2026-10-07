class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sarr = new Int32Array(26);
        const tarr = new Int32Array(26);

        for(const ch of s)
            sarr[ch.charCodeAt(0) - 97]++;

        for(const ch of t)
            tarr[ch.charCodeAt(0)-97]++;

        for(let i=0;i<26;i++)
            if(sarr[i]!==tarr[i])
                return false;
        return true;
    }

}
