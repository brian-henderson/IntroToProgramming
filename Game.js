/* Brian Henderson
   November 23, 2015
   Project 3
   CMPT 120L 
*/

var currentLocation = "beach";

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

function beach() {
	currentLocation = "beach";
	var message = "You are back on the beach.";
	showMessage(message);		
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
}

function cliff() {
	currentLocation = "cliff";
	var message = "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north."
	showMessage(message);
		if (scoreCliff === true) {
			score += 5;
			scoreCliff = false;
			showScore(score);
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
}

function jungleDeadEnd() {
	currentLocation = "jungleDeadEnd";
	var message = "You have reached a dead end as you are stopped by a waterfall. Try turning around.";
	showMessage(message);	
}

function temple() {
	currentLocation = "temple";
	var message = "You have reached the ancient ruins of the Temple of Aboubaker! You are in a courtyard and notice three structures to the north, east and west. Investigate!";
	showMessage(message);
		if (scoreTemple === true) {
			score += 5;
			scoreTemple = false;
			showScore(score);
		}	
}

function templePyramid() {
	currentLocation = "templePyramid";
	var message = "You have entered the pyramid structure, but it looks like the only way to go is north because the other rooms seem to be blocked off.";
	showMessage(message);
		if (scoreTemplePyramid === true) {
			score += 5;
			scoreTemplePyramid = false;
			showScore(score);
		}
}

function templePyramidThrone() {
	currentLocation = "templePyramidThrone";
	var message = "You have entered the throne room and notice an ancient text on the the wall. Unfortunately you are unable to interprete it as of now, but it may contain the secret to unlocking the secret catacombs!";
	showMessage(message);
		if (scoreTemplePyramidThrone === true) {
			score += 5;
			scoreTemplePyramidThrone = false;
			showScore(score);
		}
	alert("YOU WIN!!!!! THANKS FOR PLAYING, WHO KNOWS WHAT THE FUTURE WILL HOLD!");
}

function templeStatue() {
	currentLocation = "templeStatue";
	var message ="There seems to be nothing important here right now.";
	showMessage(message);
}

function templeTomb() {
	currentLocation = "templeTomb"
	var message = "There seems to be nothing important here right now.";
	showMessage(message);
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