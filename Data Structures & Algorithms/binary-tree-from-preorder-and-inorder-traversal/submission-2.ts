class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = new Map();

        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preIndex = 0;

        const build = (left, right) => {
            if (left > right) return null;

            const rootVal = preorder[preIndex++];
            const root = new TreeNode(rootVal);
            const mid = inorderMap.get(rootVal);

            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}