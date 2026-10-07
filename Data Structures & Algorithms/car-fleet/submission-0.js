class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const combined = [];

        for(let i=0; i<position.length;i++){
            combined.push([position[i],speed[i]]);
        }

       combined.sort((a,b)=> a[0]-b[0]);

    let timeStack = [(target-combined[combined.length-1][0])/combined[combined.length-1][1]];
       for(let i=combined.length-2; i>=0;i--){
            const t = (target-combined[i][0])/combined[i][1]; // dest:speed
            if(timeStack.length > 0 && t>timeStack[timeStack.length-1]){
                timeStack.push(t);
            }
       }
       return timeStack.length;
    }
}
