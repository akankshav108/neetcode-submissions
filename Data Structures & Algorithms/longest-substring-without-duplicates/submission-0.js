class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        let start = 0
        let seen = {}

        for(let i = 0; i<s.length; i++){
            let char = s[i]

            if(seen[char] !== undefined){
                start = Math.max(start, seen[char] + 1)
            }

            seen[char] = i

            longest = Math.max(longest, i - start + 1)
        }

        return longest
    }
}
