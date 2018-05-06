import { TaskCollection } from './TaskCollection';
import { User } from './User.js';
import StrategyPattern, { log } from './StrategyPattern.js';
import { checkForecast } from './AxiosPromise.js';
import { promiseDemo } from './Promise.js';
import { checkIncludes } from './Strings.js';
import { testArrays } from './Arrays.js';
import { numbers, range } from './Generator.js';
import { sets, setDemo } from './Set.js';

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

checkForecast();

promiseDemo(3000).then(() => alert("Accepted")).catch(() => alert("Rejected"));

checkIncludes("HELLO milady hello");

testArrays();

// Basic iterator way with next()
console.log(numbers());

let iterator = numbers();
console.log(iterator.next());
console.log(iterator.next().value);

// for-of implementation
let range_of_numbers = range(1,5);
for (let i of range_of_numbers) console.log(i);
for (let i of range(1,5)) console.log(i);

// spread implementation
console.log([...range(1,5)]);
console.log(...range(1,5));

// sets();
setDemo();