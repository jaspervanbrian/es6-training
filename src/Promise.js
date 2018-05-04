export function promiseDemo(length) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, length);
		setTimeout(() => {
			reject();
		}, 2000);
	});
}
