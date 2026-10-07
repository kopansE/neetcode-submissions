class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        // step 1: init all vars and queue of 2 elements tuples
        const rows = grid.length;
        const cols = grid[0].length;
        const INF = 2147483647;
        const queue: [number, number][] = [];

        // step 2: push all 0s to queue
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if(grid[r][c] === 0)
                    queue.push([r,c]);
            }
        }

        let head = 0;

        function bfs(r: number, c:number, dist :number) : void{
            if (r < 0 || c < 0 || r >= rows || c >= cols) return;
            if (grid[r][c] !== INF) return;
            grid[r][c] = dist;
            queue.push([r, c]);
        }

        while(head < queue.length){
            const [r,c] = queue[head++];
            const dist = grid[r][c] + 1;
            bfs(r-1,c,dist);
            bfs(r+1,c,dist);
            bfs(r,c-1,dist);
            bfs(r,c+1,dist);
        }
    }
}