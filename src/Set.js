export function sets() {
	let items = new Set([1,2,3,4]);
	console.log(items);
	console.log(items.size);
	items.add(5);
	items.delete(2);
	console.log(items);
	console.log(items.size);
	console.log(items.has(4));
	items.forEach(item => console.log(item));
	console.log(items.values());
	for (let item of items) {
		console.log(item);
	}
	items.clear();
}

export function setDemo() {
	let set = new Set(["php", "java", "ruby", "vue", "docker", "jvm"]);
	let filtered = [...set].filter(item => item.length === 3);
	console.log(filtered);
	console.log(new Set(filtered));
}