class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adj = new Map<number,number[]>();
        const indegrees = new Array(numCourses).fill(0); 
        for(let i=0; i<=numCourses;i++)
            adj.set(i,[]);

        for(const [course, pre] of prerequisites){
            adj.get(pre).push(course);
            indegrees[course]++;
        }
        // indegrees [0, 0] , adj = [ [0, []] ]
        const q :number[] = [];
        let finished = 0;

        for(let i=0; i<numCourses;i++){
            if(indegrees[i] === 0)
                q.push(i);
        }

        while(q.length > 0){
            let level = q.length;
            for(let i=0;i<level;i++){
                const currentCourse = q.shift();
                finished += 1;
                for(const neighbor of adj.get(currentCourse)){
                    indegrees[neighbor]-=1;

                    if(indegrees[neighbor] === 0)
                        q.push(neighbor);
                }
            }
        }
        return finished === numCourses;
    }
}
