window.onload = function() {
	clickerButton();
};

//1. Find and store the element we want to listen to events on.

const clickerButton = document.getElementById("p1");

//2. Define the function that will respond to the event.

const onButtonClick = function() {
	clickerButton.textContent = "Oh snap! Where'd the paragraph go?";
};

//3. Add the event listener for the element and function.

textChangeColor.addEventListener("click", onButtonClick);