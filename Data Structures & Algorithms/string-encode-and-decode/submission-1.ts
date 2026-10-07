class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let response = "";
        for(const str of strs){
            response+=str.length+"#"+str;
        }
        return response;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
   decode(str: string): string[] {
        const result: string[] = [];
        let index = 0; // 1. Move 'index' out of the for loop header

        while (index < str.length) {
            let lengthStr: string = "";
            while (str[index] !== "#") {
                lengthStr += str[index];
                index++; // 2. Fix infinite loop: increment index while reading length
            }
            
            index++; // 3. Skip past the '#' character

            const length: number = parseInt(lengthStr);
            let currentWord = "";
            const wordEnd = index + length;
            
            while (index < wordEnd) { // 4. Read 'length' characters starting AFTER '#'
                currentWord += str[index];
                index++;
            }
            
            result.push(currentWord);
            // 5. 'index' is now already positioned at the start of the next item
        }

        return result;
    }
}
