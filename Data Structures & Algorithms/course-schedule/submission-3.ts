class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adj: Map<number,number[]> = new Map();
        const indegrees: number[] = new Array(numCourses).fill(0);

        for(const [c,pre] of prerequisites){
            if(!adj.has(pre)) adj.set(pre,[]);
            adj.get(pre).push(c);
            indegrees[c]++;
        }

        const queue: number[] = [];
        for(let i=0; i<numCourses;i++){
            if(indegrees[i] === 0) queue.push(i);
        }

        let head = 0;
        while(head<queue.length){
            const curr = queue[head++];
            const nextCourses:number[] = adj.get(curr);
            if(!nextCourses) continue;
            for(const next of nextCourses){
                indegrees[next]--;
                if(indegrees[next] === 0) queue.push(next);
            }
        }
        return head === numCourses
    }
}
