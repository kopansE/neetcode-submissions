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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0;
        const dfs = (node:TreeNode | null):number=>{
            if(!node) return 0;
            const heightL = dfs(node.left);
            const heightR = dfs(node.right);
            res = Math.max(res,heightL+heightR);
            return 1+Math.max(heightL,heightR);
        }
        dfs(root);
        return res;
    }
}
