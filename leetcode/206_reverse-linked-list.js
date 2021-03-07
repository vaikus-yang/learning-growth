/* 
206.反转链表

反转一个单链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 1.递归 */
var reverseList = function (head) {
  if (head == null && head.next == null) return head;

  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

/* 2.迭代 */
var reverseList2 = function(head){
    let prev = null;

    while(head){
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}