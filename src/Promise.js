import axios from 'axios';

export function checkForecast() {
	let promise = axios.get('https://us-central1-terminus-161218.cloudfunctions.net/noah/four_hour_forecast');

	promise.then((response) => {
		let location = "Manila, Metro Manila";
		let json = response.data;
		let forecast;
		for (let i = 0; i < json.length; i++) {
			if (json[i].location === location) {
				forecast = json[i];
				break;
			}
		}
		let anchor = document.getElementById("forecast");
		let html;

		if (typeof forecast === "undefined") {
			html = "Unknown";
		} else {
			html = '<img src="' + forecast.icon + '" width="50">' + forecast.data[0].chance_of_rain + " (" + forecast.data[0].percent_chance_of_rain + "%)";
		}

		anchor.innerHTML = html;
	});

	promise.catch((error) => {

	});
}