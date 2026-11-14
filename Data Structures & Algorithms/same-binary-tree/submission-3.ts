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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        // check current node val for both trees. if not equal - false;
        // if it is equal - compare left of p to left of q and right of p to right of q
        if(!p && !q) return true;
        if(!p || !q) return false;

        if(p.val !== q.val) return false;
        const left = this.isSameTree(p.left,q.left);
        const right = this.isSameTree(p.right,q.right);
        return left && right;
    }
}
