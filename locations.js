function beach() {
	currentLocation = "beach";
	var message = "You are back on the beach.";	
		if (init === true) {
			message = "Welcome! You have spent the past year searching the Atlantic and you think that you may " + 
			 		  "have finally found the island where the lost temple and treasure of the Great King " + 
			  		  "Aboubaker is. There is much to explore on this island, you can try walking the coast but " +
			  		  "it might be better to check out the jungle and explore the mysterys that lie ahead! ";
			init = false;  		  
			showMessage(message);
		}
	showMessage(message);
	disableEast();
	disableSouth();
	disableWest();
}

function jungle() {
	currentLocation = "jungle";
	var message = "You have reached the jungle. After traveling for a few miles, maybe change directions.";
	showMessage(message);
		if (scoreJungle === true) {
			score += 5;
			scoreJungle = false;
			showScore(score);
		}
	disableNorth();
	disableWest();		
}

function cliff() {
	currentLocation = "cliff";
	var message = "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north."
	showMessage(message);
		if (scoreCliff === true) {
			score += 5;
			scoreCliff = false;
			showScore(score);
		disableSouth();
		disableEast();	
	}	
}

function cliffBridge() {
	currentLocation = "cliffBridge";
	var message = "Ah you were right! You have reached an old rope bridge, but it looks old and dangerous. Looks like it is the only way cross the valley east though and might be worth taking a chance.";
	showMessage(message);
		if (scoreCliffBridge === true) {
			score += 5;
			scoreCliffBridge = false;
			showScore(score);
		}
	disableNorth();
	disableWest();	
}

function archway() {
	currentLocation = "archway";
	var message = "Yay! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to interprete the ancient symbols.";
	showMessage(message);
		if (scoreArchway === true) {
			score += 5;
			scoreArchway = false;
			showScore(score);
		}
	disableEast();	
}

function jungleClearing() {
	currentLocation = "jungleClearing";
	var message = "You have reached a clearing in the jungle. You begin to loose hope after hours of searc...Wait. Whats that off to the east?";
	showMessage(message);
		if (scoreJungleClearing === true) {
			score += 5;
			scoreJungleClearing = false;
			showScore(score);
		}
	disableWest();
	disableSouth();
}

function jungleDeadEnd() {
	currentLocation = "jungleDeadEnd";
	var message = "You have reached a dead end as you are stopped by a waterfall. Try turning around.";
	showMessage(message);
	disableWest();
	disableNorth();
	disableEast();	
}

function templeEntrance() {
	currentLocation = "templeEntrance";
	var message = "You have reached the ancient ruins of the Temple of Aboubaker! Head north to the courtyard.";
	showMessage(message);
		if (scoreTempleEntrance === true) {
			score += 5;
			scoreTempleEntrance = false;
			showScore(score);
		}
	disableEast();
	disableSouth();	
}

function templeCourtyard() {
	currentLocation = "templeCourtyard";
	var message = "You are in a courtyard and notice three structures. A pyramid to the north, a large statue to the east and a tomb to the west. Investigate. ";
	showMessage(message);
		if (scoreTempleCourtyard === true) {
			score += 5;
			scoreTempleCourtyard = false;
			showScore(score);
		}	
}

function templePyramid() {
	currentLocation = "templePyramid";
	var message = "You have entered the pyramid structure! Time to explore! Who knows what you might find!";
	showMessage(message);
		if (scoreTemplePyramid === true) {
			score += 5;
			scoreTemplePyramid = false;
			showScore(score);
		}
	disableWest();	
}

function templePyramidThrone() {
	currentLocation = "templePyramidThrone";
	var message = "You have entered the Great Iron Throne Room. Sitting on the throne is a corpse holding the Great Ancient Staff of Aboubaker! You also notice on the wall a picture. The picture has a cross, a circle and the staff all pointing towards the temple statue. It looks like three different shaped opjects are needed to open the secret underground temple! TAKE the staff and go investigate some more.";
	showMessage(message);
		if (scoreTemplePyramidThrone === true) {
			score += 5;
			scoreTemplePyramidThrone = false;
			showScore(score);
		}
		disableWest();
		disableNorth();
}


function templeStatue() {
	currentLocation = "templeStatue";
	var message1 = "Your not really sure what the statue is for. You should investigate some other structures first.";
	var message2 = "You have come back to the statue and with the items you have, you have the keys to gain access to the Secret Underground Temple! BUT you don't have the knowledge to go anyfurther. Thanks for playing!";

	if (unlockStatue1 && unlockStatue2 && unlockStatue3) {
		showMessage(message2);
			disableNorth();
			disableEast();
			disableSouth();
			disableWest();
	} else if (scoreTempleStatue === true) {
		score += 5;
		scoreTempleStatue = false;
		showScore(score);
		showMessage(message1);
			disableNorth();
			disableEast();
			disableSouth();	
	}
}


function templeTomb() {
	currentLocation = "templeTomb";
	var message = "Your in the temples crypt. You look around and find a cross shaped pendant in one of the tombs. You should take it as it could be usefull later on";
	showMessage(message);
	if (scoreTempleTomb === true) {
			score += 5;
			scoreTempleTomb = false;
			showScore(score);
		}
	disableNorth();
	disableWest();
	disableSouth();
}

function templePyramidEastRoom() {
	currentLocation = "templePyramidEastRoom";
	var message = "After exploring in the pyramid, you have come across a room with a chest in it. After opening the chest, you have found a circulaur amulet. Might be wise to take it.";
	showMessage(message);
	if (scoreTemplePyramidEastRoom === true) {
			score += 5;
			scoreTemplePyramidEastRoom = false;
			showScore(score);
		}
	disableNorth();
	disableEast();
	disableSouth();	
}





