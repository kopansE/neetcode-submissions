class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const counts: number[] = new Array(26).fill(0);

        for(let i=0; i<s1.length;i++){
            counts[s1.charCodeAt(i)-97]++;
        }

        let l=0;
        for(let r=0; r<s2.length;r++){

            const currentIndex = s2.charCodeAt(r)-97;
            let leftIndex;
            counts[currentIndex]--;
            if(counts.every(num => num === 0))
                return true;

            while(counts[currentIndex]<0){
                leftIndex = s2.charCodeAt(l)-97;
                counts[leftIndex]++;
                l++;
            }
        }
        return false;
    }
}
