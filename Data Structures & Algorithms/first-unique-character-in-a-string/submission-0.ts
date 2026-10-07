class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s: string): number {
        // naive - O(n^2) time, O(1) space: double traverse.
        // data structures improvement: use hash table: O(n) time, O(n) space 
        // best: O(n) time O(1) space

        const arr :number[] = new Array<number>(26).fill(0);
        for(const c of s){
            arr[c.charCodeAt(0) - 97]++;
        }

        let i=0;
        for(const c of s){
            if(arr[c.charCodeAt(0) - 97] === 1)
                return i;
            i++;
        }
        return -1;
    }
}
