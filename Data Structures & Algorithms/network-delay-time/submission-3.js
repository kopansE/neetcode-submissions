class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};
        const dist = {};

        for(let i=1;i<=n; i++){
            dist[i] = Infinity;
            adj[i] = [];
        }
        dist[k] = 0;

        for(const [u, v , t] of times){
            adj[u].push([v,t]);
        }
        const q = new Queue( [[k,0]]);

        while(!q.isEmpty()){
            const [node, time] = q.pop();
            if(dist[node] < time) continue;
            
            for(const [nei, w] of adj[node]){
                if(w+time < dist[nei]){
                    dist[nei] = w+time;
                    q.push([nei,w+time]);
                }
            }
        }

        const res = Math.max(...Object.values(dist));
        return res === Infinity ? -1 : res;
    }
}
