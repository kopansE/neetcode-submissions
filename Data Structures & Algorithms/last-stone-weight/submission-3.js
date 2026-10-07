class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1){
            stones.sort((a, b) => b - a);
            stones = this.smashStones(stones);
        }
        return stones.length===1 ? stones[0] : 0;
    }
    smashStones(stones){
        stones[0] -= stones[1];
        stones.splice(1,1); 
        if(stones[0] === 0)
            stones.shift();
        
        return stones;
    }


}
