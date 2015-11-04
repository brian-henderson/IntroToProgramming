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
var scoreTempleEntrance = true;
var scoreTemplePyramid = true;
var scoreTemplePyramidThrone = true;
var scoreTempleCourtyard = true;


function showMessage(descrip) {
	document.getElementById("message").innerHTML = descrip;
}

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function North () {
	var message = "You can not go north this way! Try a different direction.";
	buttonEnable();
	switch (currentLocation) {
		case "beach":
			jungle ();
			break;
		case "cliff":
			cliffBridge ();
			break;
		case "archway":
			jungleDeadEnd ();
			break;
		case "jungleClearing":
			archway ();
			break;
		case "temple":
			templePyramid ();
			break;
		case "templePyramid":
			templePyramidThrone ();
			break;
		default:
			showMessage(message);
	}
}	

function East() {
	var message = "You can not head east here! Try a different direction.";
	switch(currentLocation) {
		case "jungle":
			cliff();
			break;
		case "cliffBridge":
			archway();
			break;
		case "jungleClearing":
			temple();
			break;
		case "temple":
			templeTomb();
			break;
		case "templeStatue":
			temple();	
			break;
		default:
			showMessage(message);				
	}
}

function South() {
	var message = "You can't go south here. Try a different direction.";
	buttonEnable();

	if (currentLocation === "jungle") {
		beach();
	} else if (currentLocation === "cliffBridge") {
		cliff();
	} else if (currentLocation === "jungleDeadEnd") {
		archway();
	} else if (currentLocation === "archway") {
		jungleClearing();
	} else if (currentLocation === "templeCourtyard") {
		templeEntrance();	
	} else if (currentLocation === "templePyramid") {
		templeCourtyard();
	} else if (currentLocation === "templePyramidThrone") {
		templePyramid();					
	} else {
		showMessage(message);
	}
}

function West() {
	var message = "Hrmm. Looks like going west is not an option. Try another direction.";
	buttonEnable();

	if (currentLocation === "cliff") {
		jungle();
	} else if (currentLocation === "archway") {
		cliffBridge();
	} else if (currentLocation === "templeCourtyard") {
		templeTomb();
	} else if (currentLocation === "templeStatue") {
		templeCourtyard();
	} else if (currentLocation === "templeEntrance") {
		jungleClearing();							
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

