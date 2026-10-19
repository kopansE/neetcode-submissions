class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
         const res:number[][] = [];
         candidates.sort((a,b)=>a-b);

         const dfs = (i, currentArray, total) : void =>{
            if(total === target)
               { 
                res.push([...currentArray]);
                return;
                }
            if(total > target || i >= candidates.length) return;

            // include cadidates[i]
            currentArray.push(candidates[i]);
            dfs(i+1, currentArray, total+candidates[i]);
            currentArray.pop();

            //skip candidates[i] and duplicates
            while(candidates[i] === candidates[i+1])
                i++;
            
            dfs(i+1,currentArray,total);
         }

         dfs(0,[],0);
        return res;
    }
}
