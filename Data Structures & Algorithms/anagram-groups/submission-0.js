class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i=0; i<strs.length;i++){
            const sorted_str = strs[i].split('').sort().join('');
            if (!map.has(sorted_str)) {
                map.set(sorted_str, []);
                }
                map.get(sorted_str).push(strs[i]);
            }

        return [...map.values()];
    }
}
