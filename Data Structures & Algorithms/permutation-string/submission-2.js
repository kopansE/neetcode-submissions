class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const freq = {};
    for (const c of s1) {
        freq[c] = (freq[c] || 0) + 1;
    }

    let left = 0;
    let needed = s1.length;

    for (let right = 0; right < s2.length; right++) {
        const c = s2[right];

        if (freq[c] > 0) needed--;
        freq[c] = (freq[c] || 0) - 1;

        if (right - left + 1 > s1.length) {
            const leftChar = s2[left];
            if (freq[leftChar] >= 0) needed++;
            freq[leftChar]++;
            left++;
        }

        if (needed === 0) return true;
    }

    return false;
}

}
