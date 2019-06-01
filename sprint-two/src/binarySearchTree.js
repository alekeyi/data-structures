class BinarySearchTree {

    constructor (value) {
        //this.root = null;
        this.left = {};
        this.right = {};
        this.value = value;
        
    };

    insert (value) {
        var newNode = new BinarySearchTree(value)
        //if value is less than this.node
        if (value < this.value){
            
            //if this.left is empty
            if (Object.keys(this.left).length === 0){
                
                //set this.left to contain a new tree with the passed value
                this.left = newNode
                
                //this.left.'newtree'.root = this.node
            
            //if this.left is not empty
            } else {
               
                //set this.left.insert(value)
                this.left.insert(value);

            }
               
        //if the value is greater than this.node
        } else {
            //if this.right is empty
            if (Object.keys(this.right).length === 0){
                
               //set this.right to contain a new tree with the passed value
               this.right = newNode
               //this.right.'newtree'.root = this.node
            
            //if this.right is not empty
            } else {
                
                //set this.right.insert(value)
                this.right.insert(value);
            }
        }

        
   };

    contains (value) {
        //initialize a result variable with a value of false
        var result = false
        
        //if this is equal to passed value
        if (value === this.value){
            //result is true
            result = true;
            
        //otherwise if value is less than this
        } else if (value < this.value && Object.keys(this.left).length > 0) {
            
            //this.left.contains(value)
           return this.left.contains(value);
        //else if value is greater than this
        } else if (value > this.value && Object.keys(this.right).length > 0) {
            console.log(this.right)
            //this.right.contains(value)
            return this.right.contains(value);
        } 
        console.log(result)
        return result;
    };

    depthFirstLog (cb) {
        cb(this.value);
        //if left has object with keys
        if(Object.keys(this.left).length > 0){
            //then use callback function on left
            this.left.depthFirstLog(cb);
        }
        //if right has obj with keys
        if(Object.keys(this.right).length > 0){
            //then use cb function on right
            this.right.depthFirstLog(cb);
        }
    };


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
