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
	breadcrumbTrail: []
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
	for (i=0; i < player.breadcrumbTrail.length; i++) {
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

function enableBtns() {
	document.getElementById("northBtn").disabled=false;
	document.getElementById("eastBtn").disabled=false;
	document.getElementById("southBtn").disabled=false;
	document.getElementById("westBtn").disabled=false;
}

function updateDisplay(currentLocation) {
	showScene(currentLocation.description); //displayes locations description
	showLocation(currentLocation); //displays current location
	updateScore(currentLocation); //updates score
	disableBtns(currentLocation); //disables buttons based on location
	//showInfoMessage(""); //resets info message
	showInventory(); //displays player inventory
	updateBackground(currentLocation); //updates background image
}

function gameEnd () {
  var winMessage = "Congratulations! You have come back to the statue and with the items you have, you have the keys to gain access to the secret underground temple revealing the REAL King Abbubaker! Thanks for playing!";
       
        showScene(winMessage);
        player.pointsEarned += 1000;
        showScore(player.pointsEarned);
       
        document.getElementById("northBtn").disabled=true;
        document.getElementById("eastBtn").disabled=true;
        document.getElementById("southBtn").disabled=true;
        document.getElementById("westBtn").disabled=true;
}


