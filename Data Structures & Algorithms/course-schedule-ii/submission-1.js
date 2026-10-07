class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
 const indegree = new Array(numCourses).fill(0);
        const adj = Array.from({length:numCourses}, ()=> []);

        for(const [course, pre] of prerequisites){
            adj[pre].push(course); 
            indegree[course]++;
        }

        const finished = [];

        const queue = [];

        for(const i in indegree){
            if(indegree[i] === 0)
                queue.push(i);
        }

        while(queue.length > 0){
            const pre = queue.shift();
            finished.push(pre);

            for(const course of adj[pre]){
                indegree[course]--;

                if(indegree[course] === 0){
                    queue.push(course);
                }
            }
        }

        return finished.length === numCourses ? finished : [];
   }
}
