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
    goodNodes(root: TreeNode | null): number {
        return this.dfs(root,root.val);
    }
    dfs(node: TreeNode | null, max: number) :number{
        if(!node)
            return 0;
        
        let res = node.val >= max ? 1 : 0;
        const maxValue = Math.max(node.val, max);

        res += this.dfs(node.left, maxValue);
        res += this.dfs(node.right, maxValue);

        return res;
    }
}
