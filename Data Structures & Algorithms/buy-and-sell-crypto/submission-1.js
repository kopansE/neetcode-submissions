class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currentMin = prices[0];
        let maxDiff = 0;

        for(let i=1; i<prices.length;i++){
            if(prices[i]  < currentMin)
                currentMin = prices[i];
            else{
                maxDiff = Math.max(maxDiff,prices[i]-currentMin);
            }
        }
        return maxDiff;
    }
}
