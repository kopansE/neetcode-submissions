class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let min = prices[0];
        for(const price of prices){
            if(price<min){
                min=price;
            }
            max = Math.max(max,price-min);
        }
        return max;
    }
}
