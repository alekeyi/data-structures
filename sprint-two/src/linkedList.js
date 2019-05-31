var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    }else{
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    var prevHead = list.head;
    // list.head = list.head.next;
    // return list.head.value;
    list.head = prevHead.next;
    return prevHead.value;
  };

  list.contains = function(target) {
    var test = false;
    // iterate with a for...in loop thru list object
    for(var node in list){
      // conditional
      // return (list[node].value === target);
      if(list[node].value === target){
        test = true;
      }
    }
    return test;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail is O(1), removeHead is O(1), contains is O(n)
 */
