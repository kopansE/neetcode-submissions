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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return [];
        const level:number[][] = [];
        const q:TreeNode[] = []; //[3,4,5]
        q.push(root);

        while(q.length > 0){
            let rank = q.length; //2
            const arr:number[] = [];   //[]         
            for(let i=0; i<rank;i++){
                const node = q.shift()!; //3
                arr.push(node.val); //[2,3]
                if(node.left)  q.push(node.left); //6
                if(node.right) q.push(node.right);//7
            }
            level.push(arr);
        }
        return level; //[ [1], []]
    }
}
