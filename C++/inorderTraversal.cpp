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
    vector<int> inorderTraversal(TreeNode* root) 
    {
        vector<int> result;
        stack<TreeNode*> s;
        TreeNode* tmp = root;
        
        while (tmp || !s.empty()) 
        {
            if (tmp) 
            {
                s.push(tmp);
                tmp = tmp->left;
            } 
            else 
            {
                tmp = s.top();
                s.pop();
                result.push_back(tmp->val);
                tmp = tmp->right;
            }
        }
        
        return result;
    }
};