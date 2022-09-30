const input = document.getElementById("input");
const input1 = document.getElementById("input-1");
const btn = document.getElementById("btn");
let percent = document.getElementById("percentage");
let grade = document.getElementById("grade");
console.log(btn);

btn.addEventListener("click", function() {
	let result = Math.floor(input.value / input1.value * 100);
	percent.textContent = "Percentage:"  + " "+ result  +"%";
});

btn.addEventListener("click", function() {
	let result = Math.floor(input.value / input1.value * 100);
	if (result <= 39) {
		grade.textContent  = "Grade:" + " " + "You Failed!";	
	} else if (result <= 49) {
		grade.textContent = "Grade:" + " " + "E";
	} else if (result <= 54) {
		grade.textContent = "Grade:" + " " + "D";
	} else if(result <= 59) {
		grade.textContent = "Grade:" + " " + "D+";
	} else if (result <= 64) {
		grade.textContent = "Grade:" + " " + "C";
	} else if (result <= 69) {
		grade.textContent = "Grade:" + " " + "C+";
	} else if (result <= 74) {
		grade.textContent = "Grade:" + " " + "B";
	} else if (result <= 79) {
		grade.textContent = "Grade:" + " " + "B+";
	} else if (result <= 89) {
		grade.textContent = "Grade:" + " " + "A";
	} else {
		grade.textContent = "Grade:" + " " + "A+";
	}
});