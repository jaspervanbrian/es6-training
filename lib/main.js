var TaskCollection = function TaskCollection(tasks)
{
	if ( tasks === void 0 ) tasks = [];

	this.tasks = tasks;
};
TaskCollection.prototype.dump = function dump ()
{
	console.log(this.tasks);
};
TaskCollection.prototype.log = function log ()
{
	this.tasks.forEach(function (task) {
		return task;
	});
};
TaskCollection.prototype.add = function add ()
{
		var numbers = [], len = arguments.length;
		while ( len-- ) numbers[ len ] = arguments[ len ];

	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
};

var User = function User(name, email)
{
	this.name = name;
	this.email = email;
};
User.prototype.greet = function greet ()
{
	console.log(("Hello " + (this.name) + ", your email is " + (this.email)));
};
User.register = function register ()
{
		var credentials = [], len = arguments.length;
		while ( len-- ) credentials[ len ] = arguments[ len ];

	return new (Function.prototype.bind.apply( User, [ null ].concat( credentials) ));
};

var StrategyPattern = function StrategyPattern () {};

StrategyPattern.prototype.handle = function handle ()
{
	alert("Testing handle on strategy.");
};

function log(strategy)
{
	strategy.handle();
}

var myTasks = new TaskCollection([
	"Go to the Store",
	"Finish Screencast",
	"Eat cake"
]);

myTasks.dump();

console.log(myTasks.add(1,2,3));

var nums = [1,2,3,4];
console.log.apply(console, nums);

var hello = "Bar";
var myHTML = "\n\t<div>\n\t\t<p>" + hello + "</p>\n\t</div>\n";
console.log(myHTML);

function helloPerson() {
	var name = "John";
	var age = 39;
	return {
		name: name,
		age: age,
		greet: function greet() {
			return ("Hello " + (this.name));
		},
	}
}
alert(helloPerson().greet());

var person = {
	name: "Karen",
	age: 100,
	gender: "Female",
	parent: true,
};

var name = person.name;
alert(name);

function greetPerson( ref ) {
	var parent = ref.parent;
	var gender = ref.gender;

	if (parent) {
		if (gender === "Female") {
			return "Hello mommy";
		} else {
			return "Hello daddy";
		}
	} else {
		return "Greetings";
	}
}
console.log(greetPerson(person));

var newUser = User.register("John", "johndoe@example.com");
console.dir(newUser);
newUser.greet();
console.dir(newUser);
newUser.email = 'jeffreyway@laracasts.com';
console.dir(newUser);

log(new StrategyPattern);
