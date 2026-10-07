/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class Solution {
    /**
     * Inverts a binary tree
     * @param {TreeNode} root - The root node of the tree
     * @return {TreeNode} - The root node of the inverted tree
     */
    invertTree(root){
        // Base case: if root is null, return null
        if (root === null) {
            return null;
        }

        // Store the original left and right nodes
        const tempLeft = root.left;
        const tempRight = root.right;

        // Swap the left and right children
        root.left = this.invertTree(tempRight);
        root.right = this.invertTree(tempLeft);

        return root;
    }
}