var currentLocation = "beach";

var messageBeach = "You are back on the beach."
var messageJungle = "You are deep in the jungle right now. Maybe you should switch directions.";
var messageCliffBridge = "You have reached a bridge that will take you across the cliff";
var messageJungleDeadEnd = "You have reached a dead end as you are stopped by a cliff edge. Try turning around";
var messageNorthStop = "You can not go north this way! Try a different direction.";
var messageCliff = "Whoa! That was a close one! You almost fell off the edge of this cliff. Looks like a rope bridge might be a little north."
var messageCliff2 = "You are back by the edge of the cliff from before.";
var messageArchway = "Ya! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to read the text.";
var messageTemple = "You have reached the ancient ruins of the Temple of Aboubaker!";
var messageEastStop = "You can not head east here! Try a different direction.";
var messageClearing = "You have reached a clearing in the jungle. Wait. What is that? It looks like some sort of ancient structure off to the east.";
var messageSouthStop = "You cant go south here. Try a different direction.";
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
		currentLocation = "jungle";
		showMessage(messageJungle);
		if (scoreJungle === true) {
			score += 5;
			scoreJungle = false;
			showScore(score);
		}
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
		currentLocation = "cliff";
		showMessage(messageCliff);
		if (scoreCliff === true) {
			score += 5;
			scoreCliff = false;
			showScore(score);
		}
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
	} else {
		showMessage(messageEastStop);
	}		
}
function South () {
	if (currentLocation === "jungle") {
		currentLocation = "beach";
		showMessage(messageBeach);	
	} else if (currentLocation === "cliffBridge") {
		currentLocation = "cliff";
		showMessage(messageCliff2);
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
		currentLocation = "jungle";
		showMessage(messageJungle);
	} else if (currentLocation === "archway") {
		currentLocation = "cliffBridge";
		showMessage(messageCliffBridge);
	} else {
		showMessage(messageWestStop);
	}
}