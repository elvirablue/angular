var User = require('user'); 
var log = require('logger')(module);

function run() {
	var student = new User("Alex");
	var teacher = new User("Me");

	student.sayShit(teacher);
	log(teacher.sayShit(student));
}
if (module.parent) {
	exports.run = run;
}
else {
	console.log('только с app.js!!!!!');
}