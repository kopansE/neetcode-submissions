class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        const dp :Map<string,number> = new Map(); // { [index,sum] : amounts to reach the target}

        const dfs=(curr,sum) :number =>{
            if(sum > amount) return 0;
            if(sum === amount) return 1;
            let key = `${curr},${sum}`
            if(dp.has(key)) return dp.get(key);
            
            let overall = 0;

            for(let i=curr; i<coins.length; i++){
                
                overall += dfs(i, sum+coins[i]);
                dp.set(key,overall);
            }
            return overall; 
        }
        return dfs(0,0);
    }
}
