window.onload = () => {
	//Button 01
	//select the button
	const highlightButton = document.getElementById("b-01");
	//make a function that changes something
	const addHighlight = function() {
		document.getElementById("p1").style.cssText = "color: lime;";
	};
	//add an event listener to the button and give it the function
	highlightButton.addEventListener("click", addHighlight);

	//Button 02
	//select the button
	const uppercaseButton = document.getElementById("b-02");
	//make a function that changes something
	const makeCaps = function() {
		document.getElementById("p1").style.cssText = "text-transform: uppercase;";
	};
	//add an event listener to the button and give it the function
	uppercaseButton.addEventListener("click", makeCaps);

	//Button 03
	const badWordsButton = document.getElementById("b-03");

	function changeWords() {
		const paragraph = document.getElementById("p2").innerHTML;
		const newParagraph = paragraph.replace(/I love/gi, "BUTT CRACKS");
		document.getElementById("p2").innerHTML = newParagraph;
	}

	badWordsButton.addEventListener("click", changeWords);

	//Button 04
	const makePinkButton = document.getElementById("b-04");

	function makeItPink() {
		document.getElementById("p2").setAttribute("style", "background-color: pink;");
	}

	makePinkButton.addEventListener("click", makeItPink);

}
