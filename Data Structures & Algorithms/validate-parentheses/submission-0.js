class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let colsedToOpen = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for (let char of s) {
        // Opening bracket → push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // Closing bracket
        else {
            // Check if the top of stack matches
            if (stack.pop() !== colsedToOpen[char]) {
                return false;
            }
        }
   
    }

    return stack.length === 0
        
    }
}
