var currentLocation = "beach";

var messageBeach = "You are back on the beach."
var messageJungle = "You have reached the jungle. After traveling for a few miles, maybe change directions.";
var messageCliffBridge = "Ah you were right! You have reached an old rope bridge, but it looks old and dangerous. Looks like it is the only way cross the valley east though and might be worth taking a chance.";
var messageJungleDeadEnd = "You have reached a dead end as you are stopped by a waterfall. Try turning around.";
var messageNorthStop = "You can not go north this way! Try a different direction.";
var messageCliff = "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north."
var messageCliff2 = "You are back by the edge of the cliff from before. Try going north again towards the bridge. It may be the only option.";
var messageArchway = "Yay! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to interprete the ancient symbols.";
var messageTemple = "You have reached the ancient ruins of the Temple of Aboubaker!";
var messageEastStop = "You can not head east here! Try a different direction.";
var messageClearing = "You have reached a clearing in the jungle. You begin to loose hope after hours of searc...Wait. Whats that off to the east?";
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
		currentLocation = "cliffBridge";
		showMessage(messageCliffBridge);
		if (scoreCliffBridge === true) {
			score += 5;
			scoreCliffBridge = false;
			showScore(score);
		}
	} else if (currentLocation === "archway") {
		currentLocation = "jungleDeadEnd";
		showMessage(messageJungleDeadEnd);
	} else {
		showMessage(messageNorthStop);
	}
}	

function East () {
	if (currentLocation === "jungle") {
		cliff ();
	} else if (currentLocation ==="cliffBridge") {
		currentLocation = "archway";
		showMessage(messageArchway);
		if (scoreArchway === true) {
			score += 5;
			scoreArchway = false;
			showScore(score);
		}	
	} else if (currentLocation === "jungleClearing") {
		currentLocation = "temple";
		showMessage(messageTemple);
		if (scoreTemple === true) {
			score += 5;
			scoreTemple = false;
			showScore(score);
		}
		alert('YOU WIN!! YOU HAVE REACHED THE TEMPLE OF ABOUBAKER! THATS ALL FOR NOW! I WONDER WHAT THE FUTURE HOLDS. TILL NEXT TIME! THANKS FOR PLAYING!!!');
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
		currentLocation = "archway";
		showMessage(messageArchway);
	} else if (currentLocation === "archway") {
		currentLocation = "jungleClearing";
		showMessage(messageClearing);
		if (scoreJungleClearing === true) {
			score += 5;
			scoreJungleClearing = false;
			showScore(score);
		}
	} else {
		showMessage(messageSouthStop);
	}
}

function West () {
	if (currentLocation === "cliff") {
		jungle ();
	} else if (currentLocation === "archway") {
		currentLocation = "cliffBridge";
		showMessage(messageCliffBridge);
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






