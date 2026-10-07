class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length)
            return false;
        
        const counts = new Int32Array(26);

        for(let i=0; i<s.length;i++)
        {
            counts[s.charCodeAt(i) - 97] ++;
            counts[t.charCodeAt(i) - 97] --;
        }

        for(let i=0; i<counts.length;i++){
            if(counts[i] !== 0)
                return false;
        }

        return true;
    }
}
