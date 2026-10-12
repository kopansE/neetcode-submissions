class Solution {
    buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        const inorderMap = new Map<number, number>();

        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preIndex = 0;

        const build = (left: number, right: number): TreeNode | null => {
            if (left > right) return null;

            const rootVal = preorder[preIndex++];
            const root = new TreeNode(rootVal);
            const mid = inorderMap.get(rootVal)!;

            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        };

        return build(0, inorder.length - 1);
    }
}