class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const res: number[] = new Array(n).fill(0);
        const stack: number[][] = []; //[ [temp,index] ]
        stack.push([temperatures[0],0])
        
        for(let i=1; i<n; i++){
            const currentTemp = temperatures[i];
            let prevTemp = stack[stack.length-1][0];
            while(currentTemp > prevTemp && stack.length > 0){
                let [_,prevIndx] = stack.pop();
                res[prevIndx] = i-prevIndx;

                if(stack.length === 0)
                    continue;
                prevTemp = stack[stack.length-1][0];
            }
            stack.push([temperatures[i],i]);
        }
            return res;

    }
}
