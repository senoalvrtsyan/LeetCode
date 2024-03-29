/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        auto it1 = head;
        auto it2 = head;

        while(it1 && it2 && it2->next) {
            it1 = it1->next;
            it2 = it2->next->next;
            if (it1 == it2) {
                return true;
            }
        }
        return false;
    }
};