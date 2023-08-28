/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) 
    {
        return recursion(root->left, root->right);
    }

private:
    bool recursion(TreeNode* leftRoot, TreeNode* rightRoot) 
    {
        if (!leftRoot && !rightRoot) 
        {
            return true;
        }
        if ((!leftRoot && rightRoot) || (leftRoot && !rightRoot)) 
        {
            return false;
        }
        if (leftRoot->val != rightRoot->val) 
        {
            return false;
        }
        return recursion(leftRoot->left, rightRoot->right) && recursion(leftRoot->right, rightRoot->left);
    }
};