//1. Find and store the element we want to listen to events on.

const textChangeColor = document.getElementById("p1");

//2. Define the function that will respond to the event.

const onButtonClick = () => {
	textChangeColor.body.style.color = "deeppink";
	console.log(textChangeColor);
}

//3. Add the event listener for the element and function.

textChangeColor.addEventListener("click", onButtonClick);