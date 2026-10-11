/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return [];

        const q : TreeNode[] = [root];
        const result :number [][] = [];
        while(q.length > 0){
            const level = q.length;
            result.push([]);
            for(let i=0; i<level; i++){
                const node = q.shift();
                result[result.length-1].push(node.val);
                if(node.left)
                    q.push(node.left);
                if(node.right)
                    q.push(node.right);
            }
        }
        return result;
    }
}
