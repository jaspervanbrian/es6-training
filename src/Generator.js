export function *numbers() {
	console.log("Begin");
	yield 1;
	yield 2;
	yield 3;
}

export function *range(start, end) {
	while (start < end) {
		yield start++;
	}
}