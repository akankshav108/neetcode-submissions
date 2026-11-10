class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let max = 0

        while(left < right && right < prices.length){
            let buy = prices[left]
            let sell = prices[right]
            let newMax = sell - buy

            if(newMax > max){
                max = newMax
            }
            
            if(prices[left] > prices[right]){
                left = right
            }

            right++
        }

        return max
    }
}
