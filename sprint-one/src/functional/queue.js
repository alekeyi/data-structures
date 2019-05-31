var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0;
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    // if (storage[0]) {
    //   for (var key in storage){
    //     if (key > highest) {
    //       highest = key;
    //       storage[highest + 1] = value;
    //     }
    //   }


    // } else {
    //   storage[0] = value;
    // }
    counter++;
  };

  someInstance.dequeue = function() {
    var poppedVal = {}

    if (storage[0]) {
      poppedVal.result = storage[0];
      storage[0] = undefined;

      for (var key in storage) {
        storage[key - 1] = storage[key];
      }
    if (counter > 0){
      counter--
    }
    return poppedVal.result;
    }






  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};