

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if storage[index] is empty
    //insert v
  //if storage[index is not empty]
    //create tuple
  var tuple = [k, v]
  if(this._storage[index] === undefined){
    this._storage[index] = [tuple];
    
  }else if (this._storage[index][0][0] === tuple[0]) {
 
    //check for same k
      //if it's the same
      this._storage[index][0][1] = tuple[1]
        //overwrite it somehow
  }else{
    
    this._storage[index].push(tuple)  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through storage
  
  for (var i = 0; i < this._storage[index].length; i++){
    
    //if storage[i][0] is the same as target
    if (this._storage[index][i][0] === k){
      //return storage[i][1]
     
      return this._storage[index][i][1];
      }
    }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through storage[index]
  for (var i = 0; i < this._storage[index].length; i++){
    
    //if storage[index][i] matches the target
    if (this._storage[index][i][0] === k){
      console.log(this._storage[index][i][0])
      //get rid of it
      this._storage[index].splice(i, 1);
      }
    }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */


