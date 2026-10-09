class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        if(!intervals || intervals.length === 0) return [newInterval];
        let inserted = false;

        for(let i=0; i<intervals.length; i++){
            const [start,end] = intervals[i];
            if(newInterval[0] <= start){
                intervals.splice(i,0,newInterval);
                inserted = true;
                break;
            }
        }
        if(!inserted) intervals.push(newInterval);

        const result: number [][] = [intervals[0]];
        for(const [start,end] of intervals.slice(1)){
            const [prevStart, prevEnd] = result[result.length-1];
            if(start <= prevEnd){
                const maxEnd = Math.max(prevEnd,end);
                result[result.length-1] = [prevStart,maxEnd];
                continue;
            }
            result.push([start,end]);
        }
        return result;
    }
}
