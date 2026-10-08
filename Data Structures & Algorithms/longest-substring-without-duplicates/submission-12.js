class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s || s.length === 0)
            return 0;
        let l=0;
        let max = 0;

        let temp = "";
        for(let r=0; r<s.length; r++){
            if(!temp.includes(s[r])){
                temp+=s[r];
                continue;
            }
            max = Math.max(max, r-l);

            while(temp.includes(s[r])){
                temp=temp.slice(1);
                l++;
            }
            temp+=s[r];
        }
        return Math.max(temp.length,max);
    }
}
