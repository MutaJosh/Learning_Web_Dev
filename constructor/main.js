var Task = require('./constructors');

// Creating tasks
var task1 = new Task('Creating demo for constructor');
var task2 = new Task('Creating demo for modules');
var task3 = new Task('Creating demo for singletons');
var task4 = new Task('Creating demo for prototypes');

// Using the constructor properties
task1.complete();
task2.save();
task3.save();
task4.save();