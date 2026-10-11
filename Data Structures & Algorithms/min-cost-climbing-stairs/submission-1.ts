class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        if(cost.length === 1)
            return cost[0];
        if(cost.length === 2)
            return Math.min(cost[0],cost[1]);
            
        const payment : number[] = new Array(cost.length).fill(-1);

        payment[0] = cost[0];
        payment[1] = cost[1];
        for(let i=2;i<cost.length;i++){
            
            payment[i] = i+1 === cost.length ? Math.min(payment[i-1],payment[i-2]+cost[i]) : Math.min(payment[i-1]+cost[i],payment[i-2]+cost[i]);

        }
        return payment[payment.length-1];

    }
}
