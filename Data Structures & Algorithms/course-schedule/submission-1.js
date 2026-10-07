class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0);
        const adj = Array.from({length:numCourses}, ()=> []);

        for(const [course, pre] of prerequisites){
            adj[pre].push(course); 
            indegree[course]++;
        }

        let finished = 0;

        const queue = [];

        for(const i in indegree){
            if(indegree[i] === 0)
                queue.push(i);
        }

        while(queue.length > 0){
            const pre = queue.shift();
            finished++;

            for(const course of adj[pre]){
                indegree[course]--;

                if(indegree[course] === 0){
                    queue.push(course);
                }
            }
        }

        return finished === numCourses;
    }
}