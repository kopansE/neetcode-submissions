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
maxPathSum(root: TreeNode | null): number {
    let max = -Infinity;

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;

        const left = Math.max(0, dfs(node.left));   // ignore negative branches
        const right = Math.max(0, dfs(node.right));

        max = Math.max(max, node.val + left + right); // path that bends at this node

        return node.val + Math.max(left, right);     // straight path up to the parent
    };

    dfs(root);
    return max;
}}
