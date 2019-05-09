'use strict'


// A constructor function which initializes the instance of an object
var Task = function(name){
	this.name = name;
	this.completed = false;
}

// Adding prototype of the complete function 
Task.prototype.complete = function() {
	console.log('Completing task: ' + this.name);
		this.completed = true;
};

Task.prototype.save = function() {
	console.log('Saving task: ' + this.name);
};


module.exports = Task;