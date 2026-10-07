class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = Array(temperatures.length).fill(0);

        for(let i=0; i<temperatures.length;i++){
            const currTmp = temperatures[i];
            while(stack.length > 0 && currTmp > stack[stack.length - 1][0]){
                const [_, stackIndx] = stack.pop();
                result[stackIndx] = i-stackIndx;
            }
            stack.push([currTmp,i]);
        }

        return result;
    }
}
