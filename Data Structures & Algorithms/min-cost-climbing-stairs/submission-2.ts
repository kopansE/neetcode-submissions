class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const n = cost.length;
        if(n<=2)
            return Math.min(...cost);
        
        const payment:number[] = new Array(n).fill(-1);
        payment[0] = cost[0];
        payment[1] = cost[1];

        for(let i=2; i<n;i++){
            if(i<n-1){
                payment[i] = Math.min(payment[i-1]+cost[i],payment[i-2]+cost[i]);
                continue;
            }
            payment[i] = Math.min(payment[i-1],payment[i-2]+cost[i]);
                        
        }

        return payment[n-1];
    }
}
