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
    maxDepth(root) {
        if( root === null )
            return 0;

        const hasLeft = (root.left !== null);     
        const hasRight = (root.right !== null);     

        if( !hasLeft && !hasRight )
            return 1;
        
        return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
}
