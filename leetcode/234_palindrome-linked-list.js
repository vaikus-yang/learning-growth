/* 
234.回文链表

请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  if (head == null) return true;
  let arr = [];
  let i = 0;

  while (head) {
    arr[i] = head.val;
    head = head.next;
    i++;
  }

  i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] != arr[j]) return false;
    i++;
    j--;
  }
  return true;
};

let linkList = genLinkedList([1, 2]);
console.log(isPalindrome(linkList));
