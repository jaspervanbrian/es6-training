import { TaskCollection } from './TaskCollection';
import { User } from './User.js';
import StrategyPattern, { log } from './StrategyPattern.js';

let myTasks = new TaskCollection([
	"Go to the Store",
	"Finish Screencast",
	"Eat cake"
]);

myTasks.dump();

console.log(myTasks.add(1,2,3));

let nums = [1,2,3,4];
console.log(...nums);

let hello = "Bar";
let myHTML = `
	<div>
		<p>${hello}</p>
	</div>
`;
console.log(myHTML);

function helloPerson() {
	let name = "John";
	let age = 39;
	return {
		name,
		age,
		greet() {
			return `Hello ${this.name}`;
		},
	}
}
alert(helloPerson().greet());

let person = {
	name: "Karen",
	age: 100,
	gender: "Female",
	parent: true,
};

let {name, age} = person;

alert(name);

function greetPerson( {parent, gender} ) {
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

let newUser = User.register("John", "johndoe@example.com");
console.dir(newUser);
newUser.greet();
console.dir(newUser);
newUser.email = 'jeffreyway@laracasts.com';
console.dir(newUser);

log(new StrategyPattern);
