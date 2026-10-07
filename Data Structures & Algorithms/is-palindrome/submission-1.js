class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        while(left < right){
            // ========= skip non alpha numeric values ==========
            while(left < right && !this.isAlphaNum(s[left]))
                left++;
            
            while(left < right && !this.isAlphaNum(s[right]))
                right--;
            
            if(s[left].toLowerCase() !== s[right].toLowerCase())
                return false;
            
            left ++;
            right --;
        }
        return true;        
    }

    isAlphaNum(ch){
        const code = ch.charCodeAt(0);
        return ((code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122)) 
    }
}
