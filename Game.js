/* Brian Henderson
   November 24, 2015
   Project 5
   CMPT 120L 
*/

//initialization variables
var currentLocation = 0;
var init = true;

var inventory = [];
var breadcrumbTrail = [];

//unlocking the statue
var unlockStatue1 = false;
var unlockStatue2 = false;
var unlockStatue3 = false;

//item variables
var pendant = true;
var amulet = true;
var ancientStaff = true;

var score = 0;

function showMessage(descrip) {
	document.getElementById("message").innerHTML = descrip;
}

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function showInfoMessage(descrip) {
	document.getElementById("infoMessages").innerHTML = descrip;
}

function North() {
	var message = "You can not go north this way! Try a different direction.";
	breadcrumbTrail.push("North ");

	switch (currentLocation) {
		case 0:
			goToJungle();
			break;
		case 2:
			goToCliffBridge();
			break;
		case 4:
			goToJungleDeadEnd();
			break;
		case 6:
			goToArchway();
			break;
		case 7:
			goToTempleCourtyard();
			break;
		case 11:
			goToTemplePyramidThrone();
			break;
		case 8:
			goToTemplePyramid();
			break;		
		default:
			showMessage(message);
	}
}	

function East() {
	var message = "You can not head east here! Try a different direction.";
	breadcrumbTrail.push("East");

	switch(currentLocation) {
		case 1:
			goToCliff();
			break;
		case 3:
			goToArchway();
			break;
		case 6:
			goToTempleEntrance();
			break;
		case 8:
			goToTempleStatue();
			break;
		case 9:
			goToTempleCourtyard();	
			break;
		case 11:
			goToTemplePyramidEastRoom();
			break;
		default:
			showMessage(message);				
	}
}

function South() {
	var message = "You can't go south here. Try a different direction.";
	breadcrumbTrail.push("South ");	

	switch (currentLocation) {
		case 1:
			goToBeach();
			break;
		case 3:
			goToCliff();
			break;
		case 5:
			goToArchway();
			break;
		case 4:
			goToJungleClearing();
			break;
		case 8:
			goToTempleEntrance();
			break;
		case 11:
			goToTempleCourtyard();
			break;
		case 13:
			goToTemplePyramid();
			break;									
		default:
			showMessage(message);
	}	
}

function West() {
	var message = "Hrmm. Looks like going west is not an option. Try another direction.";
	breadcrumbTrail.push("West ");

	switch (currentLocation) {
		case 2:
			goToJungle();
			break;
		case 4:
			goToCliffBridge();
			break;
		case 8:
			goToTempleTomb();
			break;
		case 10:
			goToTempleCourtyard();
			break;
		case 7:
			goToJungleClearing();
			break;
		case 12:
			goToTemplePyramid();
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
	} else if (direction === "P" || direction ==="p") {
		moveHistory();
	} else if (direction === "H" || direction ==="h") {
		displayHelp();							
	} else {
		showMessage(message);
	}
}

function disable(north, east, south, west){
	document.getElementById("northBtn").disabled=north;
	document.getElementById("eastBtn").disabled=east;
	document.getElementById("southBtn").disabled=south;
	document.getElementById("westBtn").disabled=west;
}

function take() {
	var message = "Item Taken!";
	
	if (currentLocation === "templeTomb" && pendant) {
		pendant = false;
		inventory.push(" | Pendant | ");
		showInfoMessage(message);
		unlockStatue1 = true;
	} else if (currentLocation === "templePyramidEastRoom" && amulet) {
		amulet = false;
		inventory.push(" | Amulet | ");
		showInfoMessage(message);
		unlockStatue2 = true;
	} else if (currentLocation === "templePyramidThrone" && ancientStaff) {
		ancientStaff = false;
		inventory.push(" | Ancient Staff of Abbubakar | ");
		showInfoMessage(message);
		unlockStatue3 = true;
	} 
}

function showInventory() {
	var playerInventory = "";
	for (i=0; i < inventory.length; i++) {
		playerInventory = playerInventory + inventory[i];
	}
	showInfoMessage(playerInventory);
}

function moveHistory() {
	var breadcrumb = "";
	for (i=0; i < breadcrumbTrail.length; i++) {
		breadcrumb = breadcrumb + breadcrumbTrail[i];
	}	
	showInfoMessage(breadcrumb);
}

function displayHelp() {
	var message = "Text Commands: N/n (North)  E/e (East) S/s (South) W/w (West) T/t (Take Item) I/i (Show Inventory) P/p (Move History) H/h (Help)";
	showInfoMessage(message);
}

function updateScore(location){
if (location.visited === true) {
		score += 5;
		location.visited = false;
		showScore(score);
	}
}

