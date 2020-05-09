let main = document.getElementById("main");

let breed = document.getElementById("breeds").value;

let url = "https://dog.ceo/api/breeds/image/random";

console.log(breed);

function doggify() {
	if (breed == "random") {
		fetch(url)
			.then((response) => response.json())
			.then((data) => placeImage(data));
	}
}

doggify();

function placeImage(data) {
	console.log(data.message);
	main.innerHTML += `<img src=${data.message}>`;
}
