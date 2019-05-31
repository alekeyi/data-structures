

// Instantiate a new graph
var Graph = function() {
    // this.nodes = [];
    this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    // this.nodes.push(node);
    this.nodes[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    //input is a target value
    //output is a boolean
    //any edge cases? not really.
    //constraints? we are looking inside of an object

    //initialize a return variable that is a boolean, false;
    var result = false;

    //iterate through object{
    for (var key in this.nodes) {
        console.log(typeof node)
        //if the object contains target value
        if (key === JSON.stringify(node) && this.nodes[key] !== undefined){
        //return variable changes to true
            result = true;
        }
    }
    return result;
    
   
    //return (this.nodes[node] !== undefined);
    // return Object.keys(this.nodes).includes('node');
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    
    
    
    //iterate thru object
    for (var key in this.nodes){
        //if this.node[key] contains node
        if (this.nodes[key].includes(node)){
            //splice node out of array
            this.nodes[key] = this.nodes[key].filter(connectedNode => connectedNode !== node);
        }
    }
    this.nodes[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
 
    return this.nodes[fromNode].includes(toNode)
    
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    //access the key with the same name as fromNode
    //push the toNode to the array stored at fromNode
   
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
        
    
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    //access array, splice toNode from array
    this.nodes[fromNode] = this.nodes[fromNode].filter(connectedNode => connectedNode !== toNode);
    this.nodes[toNode] = this.nodes[toNode].filter(connectedNode => connectedNode !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    //iterate thru object
    for (var key in this.nodes) {
        //for each node, execute callback
        cb.call(this, key);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


