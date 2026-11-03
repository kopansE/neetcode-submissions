class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        //for each char:
            //set l&r, start checking sideways. 
        //Input: s = "ababd"

        const n = s.length;
        let longest = "";

        for(let i=0; i<n; i++){
            //odd length
            let l=i, r=i;
            while(l>=0 && r<n && s[l] === s[r]){
                const temp = s.slice(l,r+1);
                if(temp.length > longest.length)
                    longest = temp;
                l--;
                r++;
            }
            // even length
            l=i, r=i+1
            while(l>=0 && r<n && s[l] === s[r]){
                const temp = s.slice(l,r+1);
                if(temp.length > longest.length)
                    longest = temp;
                l--;
                r++;
            }
        }
        return longest;
    }
}
