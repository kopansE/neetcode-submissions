class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const dp : Map<string,number> = new Map(); // { "index,buying" : maxProfit}
        const dfs = (index, buying) :number =>{
            if(index >= prices.length) return 0;

            if(dp.has(`${index},${buying}`)) return dp.get(`${index},${buying}`)!;

            if(buying){
                const buy = dfs(index+1,false) - prices[index];
                const cooldown = dfs(index+1,true);
                dp.set(`${index},${buying}`, Math.max(buy, cooldown));
            }
            else{
                const sell = dfs(index+2,true) + prices[index];
                const cooldown = dfs(index+1,false);
                dp.set(`${index},${buying}`, Math.max(sell,cooldown));
            }
            return dp.get(`${index},${buying}`);
        }

        return dfs(0,true);
    }
}
