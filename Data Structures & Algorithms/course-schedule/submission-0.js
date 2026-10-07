class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0); // how many arrays into every node
        const adj = Array.from({length: numCourses}, ()=>[]);

        for(const [course,preReq] of prerequisites){
            adj[preReq].push(course);
            indegree[course]++;
        } // build the graph and indegree

        const queue = new Queue();
        for(const index in indegree){
            if(indegree[index] === 0)
                queue.push(index);
        }

        let finished = 0;

        while(!queue.isEmpty()){
            const course = queue.pop();
            finished++;

            for(const nei of adj[course]){
                indegree[nei]--;
                if(indegree[nei]===0)
                    queue.push(nei);
            }

        }
        return finished === numCourses;
    }
}
