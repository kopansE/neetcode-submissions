class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Input: temperatures = [30,38,30,36,35,40,28]
        const result = new Array(temperatures.length).fill(0); //[ 1, 4 ,1, 2, 1, 0,0]
        const stack = [];

        for(let i=0; i<temperatures.length;i++){
            const currentTemp = temperatures[i]; //30
            while(stack.length > 0 && currentTemp > stack[stack.length-1][0] ){
                const [_ ,indx] = stack.pop(); //[30,2]
                result[indx] = i-indx; //3-2
            }
            stack.push([currentTemp,i]);//[[38,1]]
        }

        return result;
    }
}
