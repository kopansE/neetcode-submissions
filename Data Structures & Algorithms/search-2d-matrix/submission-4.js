class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //binary search to find which row
        let top = 0;
        let bottom = matrix.length-1;
        let detectedRow = -1;
        while(top<=bottom){
            const mid = Math.floor((top+bottom)/2);
            if((matrix[mid][0]<=target) && (target <= matrix[mid][matrix[mid].length - 1])){
                detectedRow = mid;
                break;
            }
            else if(matrix[mid][0]>target)
                bottom = mid-1;          
            else
                top = mid+1;
        }

        if(detectedRow === -1)
            return false;
        
        let left=0;
        let right = matrix[detectedRow].length-1;
        
        while(left<=right){
            const mid = Math.floor((left+right)/2);
            if(matrix[detectedRow][mid] === target){
                return true;
            }
            else if(matrix[detectedRow][mid] < target)
                left = mid+1;        
            else
                right = mid-1;
        }


        return false;
    }
}
