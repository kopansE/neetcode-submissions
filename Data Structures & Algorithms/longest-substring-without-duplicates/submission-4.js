class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let window="";
        let max=0;

        for(let i=0; i<s.length;i++){
            if(!window.includes(s[i])) // window = "dvf";
                window+=s[i]; // window = "dvf";
            else{
                max = Math.max(max,window.length); // window = "dv"; max = 2; s[i]= "d"
                while(window.includes(s[i])){
                    window = window.slice(1,window.length); // window = "v"; max = 2; s[i]= "d"
                }
                window+=s[i]; // window = "vd"; max = 2;"
            }
        }
        return  Math.max(max,window.length);
    }
}
