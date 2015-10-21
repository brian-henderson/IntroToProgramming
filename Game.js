var currentLocation = "beach";

var messageBeach = "You are back on the beach."
var messageNorthStop = "You can not go north this way! Try a different direction.";
var messageEastStop = "You can not head east here! Try a different direction.";
var messageSouthStop = "You can't go south here. Try a different direction.";
var messageWestStop = "Hrmm. Looks like going west is not an option. Try another direction.";

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
	if (currentLocation === "beach") {
		jungle ();
	} else if (currentLocation === "cliff") {
		cliffBridge ();
	} else if (currentLocation === "archway") {
		jungleDeadEnd ();
	} else if (currentLocation === "jungleClearing"){
		archway ();	
	} else {
		showMessage(messageNorthStop);
	}
}	

function East () {
	if (currentLocation === "jungle") {
		cliff ();
	} else if (currentLocation ==="cliffBridge") {
		archway ();	
	} else if (currentLocation === "jungleClearing") {
		temple ();
	} else {
		showMessage(messageEastStop);
	}		
}

function South () {
	if (currentLocation === "jungle") {
		currentLocation = "beach";
		showMessage(messageBeach);	
	} else if (currentLocation === "cliffBridge") {
		cliff ();
	} else if (currentLocation === "jungleDeadEnd") {
		archway ();
	} else if (currentLocation === "archway") {
		jungleClearing ();
	} else {
		showMessage(messageSouthStop);
	}
}

function West () {
	if (currentLocation === "cliff") {
		jungle ();
	} else if (currentLocation === "archway") {
		cliffBridge ();
	} else {
		showMessage(messageWestStop);
	}
}

function Reload () {
	location.reload();
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





