export class User
{
	constructor(name, email)
	{
		this.name = name;
		this.email = email;
	}
	greet()
	{
		console.log(`Hello ${this.name}, your email is ${this.email}`);
	}
	static register(...credentials)
	{
		return new User(...credentials);
	}
}
