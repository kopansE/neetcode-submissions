class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length)
            return false;
        
        const mapS = new Map<string,number>();
        const mapT = new Map<string,number>();

        for(const letter of s){
            const currentCount = mapS.get(letter) ?? 0;
            mapS.set(letter, currentCount + 1);
        }

        for(const letter of t){
            const currentCount = mapT.get(letter) ?? 0;
            if((mapS.get(letter) ?? 0) <= currentCount)
                return false;
            mapT.set(letter, currentCount + 1);
        }
        return true;
    }
}
