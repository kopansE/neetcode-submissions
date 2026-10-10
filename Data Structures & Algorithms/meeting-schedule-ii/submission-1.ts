/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        if(!intervals || intervals.length === 0) return 0;
        intervals.sort( (a,b) => a.start-b.start);

        const heap = new MinPriorityQueue();

        for(const {start, end} of intervals){
            if(!heap.isEmpty() && heap.front() <= start ){
                heap.dequeue();
            }
            heap.enqueue(end);
        }

        return heap.size();
    }
}
