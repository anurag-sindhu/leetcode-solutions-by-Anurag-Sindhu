var hasCycle = function (head) {
  let slowPointer = head;
  let fastPointer = head.next;
  while (slowPointer !== null) {
    if (!fastPointer || fastPointer === null || fastPointer.next === null) {
      return false;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return true;
};
