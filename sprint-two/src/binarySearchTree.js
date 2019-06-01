class BinarySearchTree {

    constructor (value) {
        this.root = null;
        this.left = {};
        this.right = {};
        this.node = value;
        
    };

    insert (value, newNode) {
        //if value is less than this.node

            //if this.left is empty

                //set this.left to contain a new tree with the passed value
                //this.left.'newtree'.root = this.node
            
            //if this.left is not empty

                //set this.left.insert(value, this.left)

                






        //if the value is greater than this.node

            //if this.right is empty

               //set this.right to contain a new tree with the passed value
                //this.right.'newtree'.root = this.node
            
            //if this.right is not empty

                //set this.right.insert(value, this.right)


        
   };

    contains (value) {
        //initialize a result variable with a value of false

    
        //if this is equal to passed value

            //result is true

        //otherwise if value is less than this

            //this.left.contains(value)

        //else if value is greater than this

            //this.right.contains(value)

        //return result


    };

    depthFirstLog (cb) {

    };


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
