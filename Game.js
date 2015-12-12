/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

"use strict";

var player = {
	currentLocation: [],
	pointsEarned: 0,
	inventory: [],
	breadcrumbTrail: ["", "", "", "", ""],
	currentMap: ""
};

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function showInfoMessage(descrip) {
	document.getElementById("infoMessages").innerHTML = descrip;
}

function displayInventory(descrip) {
	document.getElementById("playerInv").innerHTML = descrip;
}

function showMoves(descrip) {
	document.getElementById("prevMoves").innerHTML = descrip;
}

function showScene(loc) {
    document.querySelector("#scene p").innerHTML = loc;
}

function showLocation(loc) {
	document.getElementById("location").innerHTML = loc.name;
}

function updateBackground(currentLocation) {
	document.getElementById("scene").style.backgroundImage = "url('images/"+currentLocation.image+"')";
}

function showInventory() {
	var playerInventory = "";
	var i;
	for (i=0; i < player.inventory.length; i++) {
		playerInventory = playerInventory + player.inventory[i];
	}
	displayInventory(playerInventory);
}

function moveHistory() {
	var breadcrumb = "";
	var i;
	for (i=player.breadcrumbTrail.length-1; i > (player.breadcrumbTrail.length - 6); i--) {
		breadcrumb = breadcrumb + player.breadcrumbTrail[i];
	}	
	showMoves(breadcrumb);
}

function updateScore(location){
if (location.visited === true) {
		player.pointsEarned += 5;
		location.visited = false;
		showScore(player.pointsEarned);
	}
}

function enableBtns() {
	document.getElementById("northBtn").disabled=false;
	document.getElementById("eastBtn").disabled=false;
	document.getElementById("southBtn").disabled=false;
	document.getElementById("westBtn").disabled=false;
}

function disableBtns(loc) {
	enableBtns();

	if (from(loc, NORTH) === null) {
		document.getElementById("northBtn").disabled=true;
	} if (from(loc, EAST) === null) {
		document.getElementById("eastBtn").disabled=true;
	} if (from(loc, SOUTH) === null) {
		document.getElementById("southBtn").disabled=true;
	} if (from(loc, WEST) === null) {
		document.getElementById("westBtn").disabled=true;
	}
}

function updateDisplay(currentLocation) {
	showScene(currentLocation.description); //displayes locations description
	showLocation(currentLocation); //displays current location
	updateScore(currentLocation); //updates score
	disableBtns(currentLocation); //disables buttons based on location
	showInfoMessage(""); //resets info message
	showInventory(); //displays player inventory
	updateBackground(currentLocation); //updates background image
	moveHistory(); //updates move history
}

function startGame() {
	var startMsg = "Welcome! You have spent the past year searching the Atlantic and you think that you may " + 
			 		"have finally found the island where the lost temple and treasure of the Great King " + 
			        "Aboubaker is. There is much to explore on this island, you can try walking the coast but " +
	    		    "it might be better to check out the jungle and explore the mysterys that lie ahead! " +
					"Don't forget to examine (X) your location for any items that may help you later on. ";
	
	player.currentLocation = locations[0];
	showScene(startMsg);
	disableBtns(player.currentLocation);
	updateBackground(player.currentLocation);
	updateMap();
}

function updateMap() {
	if (locations[5].item === 0) {
		document.getElementById("mapImg").style.background = "url('mapSecret.png')";
	} else {
		document.getElementById("mapImg").style.background = "url('mapNormal.png')";
	}
	document.getElementById("mapImg").style.backgroundSize = "100% 100%";
}

window.onload = startGame;
