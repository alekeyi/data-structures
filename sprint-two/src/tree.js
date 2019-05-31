var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // newTree.children = null;  // fix me
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to,from){
  for(var key in from){
    to[key] = from[key];
  }
}

var treeMethods = {addChild: function(value) {
  this.children.push(Tree(value));

},

contains: function(target) {
  var result = false;

  // if(this.value === target){
  //   result = true;
  // }else if(this.children.length > 0){
  //   for(var i = 0; i < this.children.length; i++){
  //     if(children[i].value.contains(this, target)){
  //       result = true;
  //     }
  //   }
  // }

  findThis(this);
  return result;

  function findThis(child){
    if(child.value === target){
      result = true;
    }else if(child.children.length > 0){
      child.children.forEach(node => findThis(node));
    }
  }


}};





/*
 * Complexity: What is the time complexity of the above functions?
 addChild is O(1), contains is O(n) [because it is not a self-balancing binary-search tree]
 */
