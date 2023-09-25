/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    const resultList = new ListNode();
    let dummy = resultList;

    while (l1 || l2 || carry) {
        let sum = 0;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        carry = Math.floor(sum / 10);

        const resItem = new ListNode(sum % 10);
        dummy.next = resItem;
        dummy = dummy.next;
    }

    return resultList.next;
}
