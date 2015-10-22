var currentLocation = "beach";

var disableNorth = false;
var disableEast = false;
var disableSouth = false;
var disableWest = false;

var score = 0;
var scoreJungle = true;
var scoreCliff = true;
var scoreCliffBridge = true;
var scoreArchway = true;
var scoreJungleDeadEnd = true;
var scoreJungleClearing = true;
var scoreTemple = true;

function showMessage(descrip){
	document.getElementById("message").innerHTML = descrip;
}

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function North () {
	var message = "You can not go north this way! Try a different direction.";

	if (currentLocation === "beach") {
		jungle ();
		buttonDisable ();
	} else if (currentLocation === "cliff") {
		cliffBridge ();
		buttonDisable ();
	} else if (currentLocation === "archway") {
		jungleDeadEnd ();
		buttonDisable ();
	} else if (currentLocation === "jungleClearing"){
		archway ();
		buttonDisable ();	
	} else {
		showMessage(message);
	}
}	

function East () {
	var message = "You can not head east here! Try a different direction.";

	if (currentLocation === "jungle") {
		cliff ();
		buttonDisable ();
	} else if (currentLocation ==="cliffBridge") {
		archway ();
		buttonDisable ();
	} else if (currentLocation === "jungleClearing") {
		temple ();
		buttonDisable ();
	} else {
		showMessage(message);
	}		
}

function South () {
	var message = "You can't go south here. Try a different direction.";

	if (currentLocation === "jungle") {
		beach ();
		buttonDisable ();	
	} else if (currentLocation === "cliffBridge") {
		cliff ();
		buttonDisable ();
	} else if (currentLocation === "jungleDeadEnd") {
		archway ();
		buttonDisable ();
	} else if (currentLocation === "archway") {
		jungleClearing ();
		buttonDisable ();
	} else {
		showMessage(message);
	}
}

function West () {
	var message = "Hrmm. Looks like going west is not an option. Try another direction.";

	if (currentLocation === "cliff") {
		jungle ();
		buttonDisable ();
	} else if (currentLocation === "archway") {
		cliffBridge ();
		buttonDisable ();
	} else {
		showMessage(message);
	}
}

function beach () {
	currentLocation = "beach";
	var message = "You are back on the beach.";
	showMessage(message);		
}

function jungle () {
	currentLocation = "jungle";
	var message = "You have reached the jungle. After traveling for a few miles, maybe change directions.";
	showMessage(message);
		if (scoreJungle === true) {
			score += 5;
			scoreJungle = false;
			showScore(score);
		}	
}

function cliff () {
	currentLocation = "cliff";
	var message = "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north."
	showMessage(message);
		if (scoreCliff === true) {
			score += 5;
			scoreCliff = false;
			showScore(score);
	}	
}

function cliffBridge () {
	currentLocation = "cliffBridge";
	var message = "Ah you were right! You have reached an old rope bridge, but it looks old and dangerous. Looks like it is the only way cross the valley east though and might be worth taking a chance.";
	showMessage(message);
		if (scoreCliffBridge === true) {
			score += 5;
			scoreCliffBridge = false;
			showScore(score);
		}
}

function archway () {
	currentLocation = "archway";
	var message = "Yay! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to interprete the ancient symbols.";
	showMessage(message);
		if (scoreArchway === true) {
			score += 5;
			scoreArchway = false;
			showScore(score);
		}
}

function jungleClearing () {
	currentLocation = "jungleClearing";
	var message = "You have reached a clearing in the jungle. You begin to loose hope after hours of searc...Wait. Whats that off to the east?";
	showMessage(message);
		if (scoreJungleClearing === true) {
			score += 5;
			scoreJungleClearing = false;
			showScore(score);
		}
}

function jungleDeadEnd () {
	currentLocation = "jungleDeadEnd";
	var message = "You have reached a dead end as you are stopped by a waterfall. Try turning around.";
	showMessage(message);	
}

function temple () {
	currentLocation = "temple";
	var message = "You have reached the ancient ruins of the Temple of Aboubaker!";
	showMessage(message);
		if (scoreTemple === true) {
			score += 5;
			scoreTemple = false;
			showScore(score);
		}
		alert('YOU WIN!! YOU HAVE REACHED THE TEMPLE OF ABOUBAKER! THATS ALL FOR NOW! I WONDER WHAT THE FUTURE HOLDS. TILL NEXT TIME! THANKS FOR PLAYING!!!');	
}

function Reload () {
	location.reload();
}

function directionInput (direction) {
	if (direction === "N" || direction === "n") {
		North ();	
	} else if (direction === "S" || direction ==="s"){
		South ();
	} else if (direction === "E" || direction ==="e"){
		East ();
	} else if (direction === "W" || direction ==="w") {
		West ();
	} else {
		alert("That's not a correct input! Please enter on of the following: N,n,E,e,S,s,W,w");
	}
}

function buttonDisable () {
	document.getElementById('northBtn').disabled=false;
	document.getElementById('eastBtn').disabled=false;
	document.getElementById('southBtn').disabled=false;
	document.getElementById('westBtn').disabled=false;
}
