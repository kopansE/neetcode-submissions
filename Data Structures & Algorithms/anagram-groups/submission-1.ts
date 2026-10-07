class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramGroups = new Map<string,string[]>();

        for(const str of strs){
            const sortedStr = [...str].sort((a,b)=>a.localeCompare(b)).join('');
            const group = anagramGroups.get(sortedStr) ?? [];
            group.push(str);
            anagramGroups.set(sortedStr,group);
        }

        return [...anagramGroups.values()];
    }
}
