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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if(!subRoot) return true;
        if(!root) return false;

        if(this.isSameTree(root,subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(root: TreeNode | null, subroot: TreeNode | null){
        if(!root && !subroot) return true;
        if(!root || !subroot) return false;
        if(root.val !== subroot.val) return false;
        return(this.isSameTree(root.left, subroot.left) && this.isSameTree(root.right, subroot.right))
    }
}
