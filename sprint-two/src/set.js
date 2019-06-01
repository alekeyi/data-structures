var Set = function() {
  var set = Object.create(setPrototype);
  this._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!_storage.includes(item)){
    _storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return (_storage.includes(item));
};

setPrototype.remove = function(item) {
  _storage.splice(_storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
