class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = {}

        for(let val of nums){
            counter[val] = (counter[val] || 0) + 1
        }

        const sortedArr = Object.keys(counter).sort((a, b) => counter[b] - counter[a])

        console.log(sortedArr)

        return sortedArr.slice(0,k)
    }
}
