var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  console.log(someInstance);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function(){
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
};

queueMethods.size = function(){
  return this.counter;
};


