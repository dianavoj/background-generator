var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//body.style.background = "red";

console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient); //don't need to call the function with ()
//because the input event is triggered automatically
//and second parameter runs automatically 

color2.addEventListener("input", setGradient);
setGradient();
css.textContent = body.style.background + ";";