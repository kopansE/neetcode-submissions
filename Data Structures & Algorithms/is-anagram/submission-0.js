class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sort_s = s.split('').sort().join('');
        const sort_t = t.split('').sort().join('');

        return sort_s === sort_t;

    }
}
