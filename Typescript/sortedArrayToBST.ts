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
function sortedArrayToBST(nums: number[]): TreeNode | null {
    const sortedArrRecursion = (nums: number[], beg: number, end: number): TreeNode | null => {
        if (beg > end) {
            return null;
        }
        const mid = Math.ceil((beg + end) / 2);
        const root = new TreeNode(nums[mid]);
        root.left = sortedArrRecursion(nums, beg, mid - 1);
        root.right = sortedArrRecursion(nums, mid + 1, end);
        return root;
    }

    return sortedArrRecursion(nums, 0, nums.length - 1);
}