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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        // for each node
        // calc left height
        // calc right right
        // if(Math.abs(left-right) > 1) return false;
        let balanced = true;

        const height = (node:TreeNode | null): number=>{
            if(!node) return 0;
            const left = height(node.left);
            const right = height(node.right);
            if(Math.abs(left-right) > 1) 
                balanced = false;
            return 1+ Math.max(left, right);
        }
        height(root);
        return balanced;
    }
}
