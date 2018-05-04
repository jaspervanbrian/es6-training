export function testArrays() {
	console.log(
		[1,2,3,4].includes(2),
		[1,2,3,4].find(item => item > 1),
		[1,2,3,4].findIndex(item => item > 1),
	);
	class User {
		constructor(name, isAdmin) {
			this.name = name;
			this.isAdmin = isAdmin;
		}
	}
	let users = [
		new User("John", true),
		new User("Doe", false),
		new User("Jane", true),
		new User("Paul", false),
	];
	console.log(users.find(user => user.isAdmin).name);
	for (let user of users) console.log(user.name);
}