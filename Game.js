/* Brian Henderson
   November 23, 2015
   Project 3
   CMPT 120L 
*/

var currentLocation = "beach";
var init = true;

var score = 0;
var scoreJungle = true;
var scoreCliff = true;
var scoreCliffBridge = true;
var scoreArchway = true;
var scoreJungleDeadEnd = true;
var scoreJungleClearing = true;
var scoreTemple = true;
var scoreTemplePyramid = true;
var scoreTemplePyramidThrone = true;


function showMessage(descrip) {
	document.getElementById("message").innerHTML = descrip;
}

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function North() {
	var message = "You can not go north this way! Try a different direction.";

	if (currentLocation === "beach") {
		jungle();
	} else if (currentLocation === "cliff") {
		cliffBridge();
	} else if (currentLocation === "archway") {
		jungleDeadEnd();
	} else if (currentLocation === "jungleClearing"){
		archway();
	} else if (currentLocation === "temple") {
		templePyramid();
	} else if (currentLocation === "templePyramid") {
		templePyramidThrone();					
	} else {
		showMessage(message);
	}
}

function East() {
	var message = "You can not head east here! Try a different direction.";

	if (currentLocation === "jungle") {
		cliff();
	} else if (currentLocation ==="cliffBridge") {
		archway();
	} else if (currentLocation === "jungleClearing") {
		temple();
	} else if (currentLocation === "temple") {
		templeTomb();
	} else if (currentLocation === "templeStatue") {
		temple();					
	} else {
		showMessage(message);
	}		
}

function South() {
	var message = "You can't go south here. Try a different direction.";

	if (currentLocation === "jungle") {
		beach();
	} else if (currentLocation === "cliffBridge") {
		cliff();
	} else if (currentLocation === "jungleDeadEnd") {
		archway();
	} else if (currentLocation === "archway") {
		jungleClearing();
	} else if (currentLocation === "templePyramid") {
		temple();
	} else if (currentLocation === "templePyramidThrone") {
		templePyramid();					
	} else {
		showMessage(message);
	}
}

function West() {
	var message = "Hrmm. Looks like going west is not an option. Try another direction.";

	if (currentLocation === "cliff") {
		jungle();
	} else if (currentLocation === "archway") {
		cliffBridge();
	} else if (currentLocation === "temple") {
		templeStatue();
	} else if (currentLocation === "templeTomb") {
		temple();						
	} else {
		showMessage(message);
	}
}

function Reload() {
	location.reload();
}

function directionInput(direction) {
	var message = "That's not a correct input! Please enter on of the following: N,n,E,e,S,s,W,w";
	
	if (direction === "N" || direction === "n") {
		North();	
	} else if (direction === "S" || direction ==="s"){
		South();
	} else if (direction === "E" || direction ==="e"){
		East();
	} else if (direction === "W" || direction ==="w") {
		West();
	} else {
		showMessage(message);
	}
}

function buttonEnable() {
	document.getElementById("northBtn").disabled=false;
	document.getElementById("eastBtn").disabled=false;
	document.getElementById("southBtn").disabled=false;
	document.getElementById("westBtn").disabled=false;
}

function disableNorth() {
	document.getElementById("northBtn").disabled=true;
}

function disableEast () {
	document.getElementById("eastBtn").disabled=true;
}

function disableWest() {
	document.getElementById("westBtn").disabled=true;
}

function disableSouth() {
	document.getElementById("southBtn").disabled=true;
}

