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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const arr : number[] = [];

        const inorder = (node) :void=>{
            if(!node) return;
            inorder(node.left);
            arr.push(node.val);
            inorder(node.right);
        }

        inorder(root);
        return arr[k-1];
    }
}
