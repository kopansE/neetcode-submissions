class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0);
        const adj = Array.from({length: numCourses}, ()=>[]);

        for(const [course,pre] of prerequisites){
            adj[pre].push(course);
            indegree[course]++;
        }

        const q = [];
        const order = [];

        for(const index in indegree)
            if(indegree[index] === 0)
                q.push(index);

        while(q.length > 0){
            const course = q.pop();
            order.push(course);
            for(const neighbor of adj[course]){
                indegree[neighbor]--;
                if(indegree[neighbor] === 0)
                    q.push(neighbor);
            }
        }
        return order.length === numCourses ? order : [];
    }
}
