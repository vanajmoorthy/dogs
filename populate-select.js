let breeds = document.getElementById("breeds");

const breedListURL = "https://dog.ceo/api/breeds/list/all";

// const breedList = fetch()

fetch(breedListURL)
	.then((response) => response.json())
	.then((data) => populate(data));

function populate(data) {
	for (let element in data.message) {
		if (data.message[element].length > 0) {
			for (let i = 0; i < data.message[element].length; i++) {
				breeds.innerHTML += `<option value=${data.message[element][i]} ${element}>${data.message[element][i]} ${element}</option>`;
			}
		} else {
			breeds.innerHTML +=
				'<option value="' + element + '">' + element + "</option>";
		}
	}
}
