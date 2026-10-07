class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let response = "";
        for (let s of strs) {
            // Store as: length + delimiter + string
            response += s.length + "#" + s;
        }
        return response; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            // Find the delimiter to determine how many digits the length has
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            // Parse the length and move pointer past the '#'
            let length = parseInt(str.substring(i, j));
            i = j + 1;

            // Extract the actual string based on the parsed length
            res.push(str.substring(i, i + length));

            // Move pointer to the start of the next encoded block
            i += length;
        }
        return res;
    }
}