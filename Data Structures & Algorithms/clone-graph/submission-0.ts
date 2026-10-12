
class Solution {
    cloneGraph(node: Node | null): Node | null {
        if (node === null) return null;

        const visited = new Map<Node, Node>();
        const q: Node[] = [node];

        const start = new Node(node.val);
        visited.set(node, start);

        while (q.length > 0) {
            const originalNode = q.shift()!;

            for (const originNeighbor of originalNode.neighbors) {
                if (!visited.has(originNeighbor)) {
                    const newNeighbor = new Node(originNeighbor.val);
                    visited.set(originNeighbor, newNeighbor);
                    q.push(originNeighbor);
                }

                visited.get(originalNode)!.neighbors.push(
                    visited.get(originNeighbor)!
                );
            }
        }

        return start;
    }
}
