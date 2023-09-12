/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
    public:
        bool isPalindrome(ListNode* head) {
              int count = 0;
        auto tmp = head;
        while(tmp) {
            ++count;
            tmp = tmp->next;
        }
        std::vector<int> vals;
        tmp = head;
        for (int i = 0; i < count/2; ++i) {
            vals.push_back(tmp->val);
            tmp = tmp->next;
        }
    
        if (count % 2 != 0)
        {
            tmp = tmp->next;
        }
        while(tmp)
        {
            if (vals.back() == tmp->val) {
                vals.pop_back();
                tmp = tmp->next;
            }
            else {
                return false;
            }
        }
        return true;
        }
    };