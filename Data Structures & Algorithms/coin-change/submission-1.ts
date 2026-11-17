class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        let total = 0;
        const map: Map<string, number> = new Map();

        const dfs = (index:number, sum: number):number=>{
            if(sum>amount || index>=coins.length) return Infinity;
            if(sum===amount) return 0;
            if(map.has(`${index},${sum}`)) return map.get(`${index},${sum}`);
            
            const best = Math.min(1+dfs(index,sum+coins[index]) , dfs(index+1,sum));
            map.set(`${index},${sum}`,best);
            return best;
        }
        total = dfs(0,0);
        return total === Infinity ? -1 : total;
    }
}
