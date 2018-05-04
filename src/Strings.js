export function checkIncludes(example) {
	let msg = "";
	example = example.toLowerCase();
	let portion = prompt("Enter a string").toLowerCase();
	if (example.includes(portion)) {
		msg += "Found, ";
	} else {
		msg += "Not Found, ";
	}

	if (example.startsWith(portion)) {
		msg += "Starts with, ";
	} else {
		msg += "Didn't start with, ";
	}

	if (example.endsWith(portion)) {
		msg += "Ends with";
	} else {
		msg += "Didn't end";
	}
	let padder = "=".repeat(5);
	alert(`${padder} ${msg} ${padder}`);
	console.log(`tro ${ "lol".repeat(100) }`);
}