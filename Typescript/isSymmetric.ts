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

function isSymmetric(root: TreeNode | null): boolean {
    const recursion = (leftRoot: TreeNode | null, rightRoot: TreeNode | null): boolean => {
        if (!leftRoot && !rightRoot) {
            return true;
        }
        if ((!leftRoot && rightRoot) || (leftRoot && !rightRoot)) {
            return false;
        }
        if (leftRoot!.val !== rightRoot!.val) {
            return false;
        }
        return recursion(leftRoot!.left, rightRoot!.right) && recursion(leftRoot!.right, rightRoot!.left);
    };
    return recursion(root!.left, root!.right);
};