class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxCount = 0;
        let maxLen = 0;
        let counts = {};

        for(let right=0; right <s.length;right++){
            counts[s[right]] = (counts[s[right]] || 0) + 1;
            maxCount = Math.max(maxCount,counts[s[right]]);

            if(right-left+1-maxCount> k){
                counts[s[left]]--;
                left++;
            }
            maxLen = Math.max(maxLen,right-left+1);
        }
    return maxLen;
    }
}
