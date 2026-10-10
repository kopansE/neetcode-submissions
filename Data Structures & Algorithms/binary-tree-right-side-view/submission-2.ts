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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        
        const q : TreeNode[] = [];
        q.push(root);

        const result:number[] = [];

        const bfs = (node : TreeNode | null)=>{
            if(!node)
                return;
            while(q.length > 0){
                const level = q.length;
                for(let i=0; i<level; i++){
                    const current = q.shift();
                    if(i === level - 1) // most right in the row
                        result.push(current.val);
                    if(current.left)
                        q.push(current.left);
                    if(current.right)
                        q.push(current.right);
                }
            }
        }

        bfs(root);
        return result;
    }
}
