class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
    let j = s.length - 1;

    while (i < j) {

        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++;
            continue;
        }

        if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--;
            continue;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
    }
}
