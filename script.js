
const badWordsButton = document.getElementById("b-03");
const changeWords = function() {
	const words = document.getElementById("p2");
	const array = words.toLowerCase().split(" ");
	const newParagraph = array.filter(index => index.contains("I love"));
	console.log(newParagraph);
}
badWordsButton.addEventListener("click", changeWords);