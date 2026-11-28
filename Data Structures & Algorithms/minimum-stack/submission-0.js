
var MinStack = function() {
   this.stack = [] ;
    this.min = [] ;
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    this.stack.push(value);
    const currentmin= this.min.length
     ? Math.min(value, this.min[this.min.length - 1])
     : value
     this.min.push(currentmin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.min[this.min.length - 1];
};