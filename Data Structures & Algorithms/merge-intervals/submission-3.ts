class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]) : number[][]{
	if(!intervals || intervals.length === 0)
		return [];

	intervals.sort((a ,b) => a[0] - b[0]);
	
	const result : number[][] = [ intervals[0] ];

	for(const [start, end ] of intervals.slice(1)){
        const [prevStart, prevEnd] = result [result.length-1];

        if(start <= prevEnd){ //merge intervals
            const maxEnd = Math.max(prevEnd,end);
            result[result.length-1] = [prevStart, maxEnd];
            continue;
    }
    result.push([start,end]);
}
return result;
	
}
}
