export class TaskCollection
{
	constructor(tasks = [])
	{
		this.tasks = tasks;
	}
	dump()
	{
		console.log(this.tasks);
	}
	log()
	{
		this.tasks.forEach((task) => {
			return task;
		});
	}
	add(...numbers)
	{
		return numbers.reduce((prev, current) => {
			return prev + current;
		});
	}
}
