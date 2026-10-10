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
        if(!root) return true;
        let balanced = true;
        
        const height = (root) =>{
            if(!root) return 0;

            const left = height(root.left);
            const right = height(root.right);

            if(Math.abs(left-right) > 1) balanced = false;

            return 1+Math.max(left,right);
            
        }
        height(root);
        return balanced;
    }
}
