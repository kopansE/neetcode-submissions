class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let window = "";
        let max = 0;
        for(let i=0; i<s.length;i++){
            if(!window.includes(s[i])){
                window+=s[i];
            }
            else{
                max = Math.max(max,window.length);
                while(window.includes(s[i])){
                    window = window.slice(1,window.length);
                }
                window+=s[i];
            }
        }
        return Math.max(max,window.length);
    }
}
