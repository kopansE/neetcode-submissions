class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let currentMin = prices[0];
        let bestPrice = 0;
        for(let i=1; i<prices.length;i++){
            if(prices[i] < currentMin){
                currentMin = prices[i];
            }
            bestPrice = Math.max(bestPrice, prices[i]-currentMin);
        }
        return bestPrice;
    }
}
