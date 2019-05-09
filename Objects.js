'use strict'

var task = new Object();

task.title = 'My Title';
task.description = 'My Description';

Object.defineProperty(task, 'toString', {
	value: function(){
		return " " + this.title + " \n " + this.description ;
	},
	writable: false,
	enumerable : true,
	configurable : true
});


Object.defineProperty(task, 'title', {
	value : 'My Title',
	writable : true,
	enumerable : true,
	configurable : true
});

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'title', {
	value: 'This is my title',
	writable : false,
	enumerable : true,
	configurable: true
});

// Changing the title 
//urgentTask.title = 'Hi there';

console.log(Object.keys(task));   // Displaying the keys/parameters of an object in an array format
console.log(task.toString());
console.log(urgentTask.title);