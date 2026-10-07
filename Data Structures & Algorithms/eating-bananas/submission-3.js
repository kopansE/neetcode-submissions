class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        //find max number 
        let max = -1;
        for(let i=0;i<piles.length;i++){
            if(piles[i] > max)
                max = piles[i];
        }
        
        let left = 1;
        let right = max;

        
        while(left <= right){
            const mid = Math.floor((right+left)/2);

            if(this.solves(piles,h,mid) && !this.solves(piles,h,mid-1))
                return mid;
            
            else if(this.solves(piles,h,mid-1))
                right = mid-1;   
            
            else 
                left=mid+1;
        }

        return max;
    }

    solves(piles, h, k){
        let count = 0;
        for(let i=0; i<piles.length; i++){
            count+=(Math.ceil(piles[i]/k));
            if(count > h)
                return false;
        }
        return true;
    }
}
