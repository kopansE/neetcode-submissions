class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};
        for(let i=1; i<=n;i++) adj[i] = [];

        for(const [u,v,w] of times){
            adj[u].push([v,w]);
        }

        //initialize adj


        const dist = {};
        for(let i=1; i<=n; i++){
            dist[i] = Infinity;
        }
        dist[k] = 0;

        // init dist

        const q = new Queue([ [k,0] ]); // init Queue with [startNode, time]

        while(!q.isEmpty()){ //while q not empty
            const [node, time] = q.pop(); //pop element from q
            // if dist is already set lower the popped element - continue;
            if(dist[node] < time) continue;

            for(const [nei, w] of adj[node]){ //to every neighbor of the node
                if(time + w < dist[nei]){ // check if time+w < current dist to it
                    dist[nei] = time+w; // update
                    q.push([nei,time+w]);
                }
            }
        }

        let res = Math.max(...Object.values(dist));
        return res === Infinity ? -1 : res;
    }
}
