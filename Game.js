/* Brian Henderson
   November 23, 2015
   Project 3
   CMPT 120L 
*/

var currentLocation = "beach";
var init = true;

var inventory = [];

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

//item variables
var pendant = true;

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
		case "templeEntrance":
			templeCourtyard();
			break;
		case "templePyramid":
			templePyramidThrone();
			break;
		default:
			showMessage(message);
	}
}	

function East() {
	var message = "You can not head east here! Try a different direction.";
	buttonEnable();
	switch(currentLocation) {
		case "jungle":
			cliff();
			break;
		case "cliffBridge":
			archway();
			break;
		case "jungleClearing":
			templeEntrance();
			break;
		case "templeCourtyard":
			templeStatue();
			break;
		case "templeTomb":
			templeCourtyard();	
			break;
		default:
			showMessage(message);				
	}
}

function South() {
	var message = "You can't go south here. Try a different direction.";
	buttonEnable();	
	switch (currentLocation) {
		case "jungle":
			beach();
			break;
		case "cliffBridge":
			cliff();
			break;
		case "jungleDeadEnd":
			archway();
			break;
		case "archway":
			jungleClearing();
			break;
		case "templeCourtyard":
			templeEntrance();
			break;
		case "templePyramid":
			templeCourtyard();
			break;
		case "templePyramidThrone":
			templePyramid();
			break;									
		default:
			showMessage(message);
	}	
}

function West() {
	var message = "Hrmm. Looks like going west is not an option. Try another direction.";
	buttonEnable();	
	switch (currentLocation) {
		case "cliff":
			jungle();
			break;
		case "archway":
			cliffBridge();
			break;
		case "templeCourtyard":
			templeTomb();
			break;
		case "templeStatue":
			templeCourtyard();
			break;
		case "templeEntrance":
			jungleClearing();
			break;				
		default:
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
	} else if (direction === "T" || direction ==="t") {
		take();
	} else if (direction === "I" || direction ==="i") {
		showInventory();				
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

function take() {
	if (currentLocation === "templeTomb" && pendant) {
		pendant = false;
		inventory.push("Pendant ");
	}
}

function showInventory() {
	var playerInventory = "";
	for (i=0; i < inventory.length; i++) {
		playerInventory = playerInventory + inventory[i];
	}
	document.getElementById("inventory").innerHTML=playerInventory;
}










