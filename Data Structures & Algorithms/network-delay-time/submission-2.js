class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = {};
        for(let i=1; i<=n;i++) adj[i]=[];

        for(const [u,v,w] of times){
            adj[u].push([v,w]);
        }

        const dist = {};
        for(let i=1; i<=n; i++) dist[i] = Infinity;
        dist[k]=0;

        const q = new Queue([[k,0]]);
        
        while(!q.isEmpty()){
            const [node, time] = q.pop();
            if(dist[node] < time) continue;

            for(const [nei, w] of adj[node]){
                if(time+w < dist[nei]){
                    dist[nei] = time+w;
                    q.push([nei,time+w]);
                }
            }
        }
        const res = Math.max(...Object.values(dist));
        if(res === Infinity) return -1;
        return res;
    }
}
