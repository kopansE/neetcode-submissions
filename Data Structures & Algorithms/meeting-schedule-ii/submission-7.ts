/**
 * Definition of Interval:
 * class Interval {
 *     start: number;
 *     end: number;
 *     constructor(start: number, end: number) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    minMeetingRooms(intervals: Interval[]): number {
        const starts = intervals.map(i => i.start).sort((a, b) => a - b);
        const ends = intervals.map(i => i.end).sort((a, b) => a - b);

        let rooms = 0;
        let e = 0; // index of the earliest meeting that hasn't ended yet

        for (const s of starts) {
            if (ends[e] <= s) {
                e++;      // a meeting ended in time -> reuse its room
            } else {
                rooms++;  // all rooms are busy -> need a new one
            }
        }

        return rooms;
    }
}