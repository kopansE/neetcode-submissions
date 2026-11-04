class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let count = 0; 
        const n = s.length;
        for(let i=0;i<n;i++){
            //count odd
            let l=i,r=i;
            while(l>=0 && r<n && s[l]===s[r]){
                count++;
                l--;
                r++;
            }

            //count even 
            l=i, r=i+1;
            while(l>=0 && r<n && s[l]===s[r]){
                count++;
                l--;
                r++;
            }
        }
        return count;
    }
}
