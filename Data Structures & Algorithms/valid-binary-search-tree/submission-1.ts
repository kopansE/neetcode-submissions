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
    isValidBST(root: TreeNode | null): boolean {
        const treeArray :number[] = [];

        const inorder = (node: TreeNode | null) : void =>{
            if(!node) return;
            inorder(node.left);
            treeArray.push(node.val);
            inorder(node.right);
        }
        inorder(root);
        for(let i=0; i<treeArray.length-1; i++){
            if(treeArray[i] >= treeArray[i+1]) return false;
        }
        return true;
    }
}
