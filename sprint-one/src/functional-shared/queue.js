var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // output: object
  // constraints: no prototype, no new, use method t_his, and _.extend
  // edge cases: empty objects
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {enqueue: function(value){
  this.storage[this.counter] = value;
  this.counter++;
},

dequeue: function(){
  var poppedVal = {};
  if (this.storage[0]) {
      poppedVal.result = this.storage[0];
      this.storage[0] = undefined;

      for (var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      if (this.counter > 0){
        this.counter--
      }
    return poppedVal.result;
    }
},

size: function(){
  return this.counter;
}};


