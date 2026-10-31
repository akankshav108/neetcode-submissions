class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freqCounter = {}

        for(let num of nums){
            freqCounter[num] = (freqCounter[num] || 0) + 1

            if(freqCounter[num] > nums.length / 2){
                return num
            }
        }
    }
}
