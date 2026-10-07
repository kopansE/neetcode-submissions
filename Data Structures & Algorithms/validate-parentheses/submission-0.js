class Solution {
    /**
     * Checks if the popped character matches the current closing bracket
     * @param {string} stackChar - Character from the stack
     * @param {string} currentChar - Current closing bracket
     * @return {boolean} - Whether they form a valid pair
     */
    matching(stackChar, currentChar) {
        if ((currentChar === '}' && stackChar !== '{') ||
            (currentChar === ']' && stackChar !== '[') ||
            (currentChar === ')' && stackChar !== '(')) {
            return false;
        }
        return true;
    }

    /**
     * Validates if a string of brackets is valid
     * @param {string} s - String containing brackets
     * @return {boolean} - Whether the string is valid
     */
    isValid(s) {
        const stack = [];
        
        for (let index = 0; index < s.length; index++) {
            const currentChar = s.charAt(index);
            
            if (currentChar === '{' ||
                currentChar === '[' ||
                currentChar === '(') {
                stack.push(currentChar);
            } else {
                if (stack.length === 0 || !this.matching(stack.pop(), currentChar)) {
                    return false;
                }
            }
        }
        
        // Check if there are any unclosed brackets left
        return stack.length === 0;
    }
}