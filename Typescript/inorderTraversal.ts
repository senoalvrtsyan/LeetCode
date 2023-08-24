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

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let tmp: TreeNode | null = root;
    
    while (tmp || stack.length) {
        if (tmp) {
            stack.push(tmp);
            tmp = tmp.left;
        } else {
            tmp = stack.pop()!;
            result.push(tmp.val);
            tmp = tmp.right;
        }
    }
    
    return result;
};