class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        for(let i=0; i < heights.length; i++){
            for(let j=i+1; j<heights.length;j++){
                const waterHeight = Math.min(heights[i],heights[j]);
                const waterWidth = j-i;

                const area = waterHeight*waterWidth;
                if(area > max)
                    max=area;

            }   
        }
        return max;
    }
}
