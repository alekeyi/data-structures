var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // input: object
  // output: value
  // constraints: no prototype, no new, use method t_his, and _.extend
  // edge cases: empty objects
  var someInstance = {};
  someInstance.counter = 0
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};



var stackMethods = {push: function(value){
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function(){
    if(this.counter > 0){
      this.counter--;
    }
    return this.storage[this.counter];
  },
  size: function(){
    return this.counter;
  }};


// This test could fail if the word "this" is found inside comments,
// // or if there are opening/closing braces ("{", "}") in comments inside the constructor.

// var constructorStr = patternIs('es6') ? extractClassConstructor(constructor) : constructor.toString();
// assuming(referencesThis).expect(/((?!\/\/).)*(this)/m.test(constructorStr)).to.be.true;
