class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack: number[][] = [] // [index, height]
        let max = 0; 
        const width = heights.length;
        for(let i=0; i<heights.length;i++){
            let stackSize = stack.length;
            let h = heights[i];
            let start = i;
            while(stackSize > 0 && h < stack[stackSize-1][1]){
                const [index,height] = stack.pop();
                start = index;
                max=Math.max(max,height*(i-index));
                stackSize--;
            }
            stack.push([start,h]);
        }

        for(const [i,h] of stack){
            max = Math.max(max, h*(width-i));
        }

        return max;
    }
}
