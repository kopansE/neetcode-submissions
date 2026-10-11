class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if(t.length > s.length) return "";
        const need :Map<string,number> = new Map();
        for(const ch of t){
            if(!need.get(ch))
                need.set(ch,0);
            need.set(ch,need.get(ch)+1);
        }

        let missing = t.length;
        let l=0;
        let bestlen = Infinity;
        let bestStart = 0;

        for(let r=0; r<s.length; r++){
            const ch = s[r];
            if(!need.has(ch))
                continue;
            
            if(need.get(ch)! > 0) missing--;
            need.set(ch,need.get(ch)-1);

            while(missing === 0){
                if(r-l+1 < bestlen){
                    bestStart = l;
                    bestlen = r-l+1;
                }

                let out = s[l];
                if(need.has(out)){
                    need.set(out,need.get(out)+1);
                    if(need.get(out)>0)
                        missing++;
                }
                l++;
            }
        }
        if(bestlen === Infinity) return "";
        return s.slice(bestStart, bestStart+bestlen);
    }
}
