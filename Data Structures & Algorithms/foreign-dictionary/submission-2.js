class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const order = [];

        for(let i = 1; i < words.length; i++){
            const word1 = words[i - 1];
            const word2 = words[i];

            for(let j = 0; j < word1.length; j++){
                if(j === word2.length) return "";

                if(word1[j] === word2[j]) continue;

                order.push([word1[j], word2[j]]);
                break;
            }
        }

        // build the graph:
        const graph = new Map();
        const indegree = new Map();

        for(const word of words){
            for(const char of word){
                if(!graph.has(char)) graph.set(char, []);
                if(!indegree.has(char)) indegree.set(char,0)
            }
        }

        for(const [a,b] of order){
            graph.get(a).push(b);
            indegree.set(b, indegree.get(b)+1);
        }

        const orderQueue = [];
        let result = "";
        for(const [char, count] of indegree){
            if(count === 0)
                orderQueue.push(char);
        }

        while( orderQueue.length > 0){
            const level = orderQueue.length;
            for(let i=0; i<level; i++){
                const node = orderQueue.shift();
                result+=node;

                for(const neighbor of graph.get(node) || []){
                    indegree.set(neighbor, indegree.get(neighbor)-1);

                    if(indegree.get(neighbor) === 0)
                        orderQueue.push(neighbor);
                }
            }
        }

        return result.length === indegree.size ? result : "";
    }
}
