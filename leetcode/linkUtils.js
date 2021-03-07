function ListNode(val) {
  this.val = val;
  this.next = null;
}

function genLinkedList(vals) {
  let head = new ListNode(0);
  let node = head;

  for (let val of vals) {
    node.next = new ListNode(val);
    node = node.next;
  }

  return head.next;
}

function logLinkedList(head) {
  //1.定义两个变量
  var current = head;
  var listString = "";

  //2.循环获取链表中所有元素
  while (current) {
    listString += "," + current.val;
    current = current.next;
  }

  //返回最终结果
  return listString.slice(1);
}
