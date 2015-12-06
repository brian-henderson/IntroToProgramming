/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

//initialization variables
var currentLocation = 0;
var init = true;

var inventory = [];
var breadcrumbTrail = [];

function Item(name, description) {
	this.name = name;
	this.description = description;
}

Item.prototype.toString = function () {
	return "The " + this.name + "is " + this.description;
}

var pendant = new Item("pendant  ", "A shiny, cross shaped pendant.");
var amulet = new Item("amulet  ", "A jeweled circulaur amulet.");
var ancientStaff = new Item("ancient staff  ", "The Ancient Staff of the Great King Abbubakar!");

function showMessage(descrip) {
	document.getElementById("message").innerHTML = descrip;
}

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function showInfoMessage(descrip) {
	document.getElementById("infoMessages").innerHTML = descrip;
}

var player = {
	currentLocation: locations[0],
	pointsEarned: 0,
	inventory: [],
	breadcrumbTrail: []
};

function North() {
	var message = "You can not go north this way! Try a different direction.";
	player.breadcrumbTrail.push("North ");

	switch (player.currentLocation) {
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
	player.breadcrumbTrail.push("East");

	switch(player.currentLocation) {
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
	player.breadcrumbTrail.push("South ");	

	switch (player.currentLocation) {
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
	player.breadcrumbTrail.push("West ");

	switch (player.currentLocation) {
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
		take(player.currentLocation);
	} else if (direction === "I" || direction ==="i") {
		showInventory();
	} else if (direction === "P" || direction ==="p") {
		moveHistory();
	} else if (direction === "H" || direction ==="h") {
		displayHelp();
	} else if (direction === "X" || direction ==="x") {
		examine(player.currentLocation);									
	} else {
		showMessage(message);
	}
}

function disable(north, west, south, east){
	document.getElementById("northBtn").disabled=north;
	document.getElementById("eastBtn").disabled=east;
	document.getElementById("southBtn").disabled=south;
	document.getElementById("westBtn").disabled=west;
}

function take(currentLocation) {
	if (locations[currentLocation].item !=0) {
		player.inventory.push(locations[currentLocation].item.name);
		showInfoMessage("Item Taken!");
		locations[currentLocation].item = 0;
	}
}

function showInventory() {
	var playerInventory = "";
	for (i=0; i < player.inventory.length; i++) {
		playerInventory = playerInventory + player.inventory[i];
	}
	showInfoMessage(playerInventory);
}

function moveHistory() {
	var breadcrumb = "";
	for (i=0; i < player.breadcrumbTrail.length; i++) {
		breadcrumb = breadcrumb + player.breadcrumbTrail[i];
	}	
	showInfoMessage(breadcrumb);
}

function displayHelp() {
	var message = "Text Commands: N/n (North)  E/e (East) S/s (South) W/w (West) T/t (Take Item) I/i (Show Inventory) P/p (Move History) H/h (Help)";
	showInfoMessage(message);
}

function updateScore(location){
if (location.visited === true) {
		player.pointsEarned += 5;
		location.visited = false;
		showScore(player.pointsEarned);
	}
}

function examine(currentLocation){
	if (locations[currentLocation].item !=0) {
		showInfoMessage("Oh you found something! " + locations[currentLocation].item.description + " Take it! It could be useful.");
	} else {
	showInfoMessage("Nothing to be found here.");
	}
}
