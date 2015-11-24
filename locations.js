/* Brian Henderson
   November 24, 2015
   Project 5
   CMPT 120L 
*/

function goToBeach() {
	currentLocation = 0;
		if (init === true) {
			message = "Welcome! You have spent the past year searching the Atlantic and you think that you may " + 
			 		  "have finally found the island where the lost temple and treasure of the Great King " + 
			  		  "Aboubaker is. There is much to explore on this island, you can try walking the coast but " +
			  		  "it might be better to check out the jungle and explore the mysterys that lie ahead! ";
			init = false;  		  
			showMessage(message);
		} else {
			showMessage(locations[0].description);
		}	
		
	disable(false, true, true, true);
}

function goToJungle() {
	currentLocation = 1;
	showMessage(locations[1].description);
	updateScore(locations[1]);
	disable(true, false, false, true);		
}

function goToCliff() {
	currentLocation = 2;
	showMessage(locations[2].description);
	updateScore(locations[2]);
	disable(false, false, false, true);
}

function goToCliffBridge() {
	currentLocation = 3;
	showMessage(locations[3].description);
	updateScore(locations[3]);
	disable(true, false, false, true);	
}

function goToArchway() {
	currentLocation = 4;
	showMessage(locations[4].description);
	updateScore(locations[4]);
	disable(false, true, false, false);
}

function goToJungleClearing() {
	currentLocation = 6;
	showMessage(locations[6].description);
	updateScore(locations[6]);

	disable(false, false, true, true);
}

function goToJungleDeadEnd() {
	currentLocation = 5;
	showMessage(locations[5].description);
	disable(false, false, true, false);	
}

function goToTempleEntrance() {
	currentLocation = 7;
	showMessage(locations[7].description);
	updateScore(locations[7]);
	disable(false, true, true, false);
}

function goToTempleCourtyard() {
	currentLocation = 8;
	showMessage(locations[8].description);
	updateScore(locations[8]);
	disable(false, false, false, false);
}

function goToTemplePyramid() {
	currentLocation = 11;
	showMessage(locations[11].description);
	updateScore(locations[11]);
	disabele(false, false, false, true);	
}

function goToTemplePyramidThrone() {
	currentLocation = 13;
	showMessage(locations[13].description);
	updateScore(locations[13]);
	disable(true, true, false, true);
}

function goToTempleStatue() {
	currentLocation = 10;
	var message = "You have come back to the statue and with the items you have, you have the keys to gain access to the Secret Underground Temple! BUT you don't have the knowledge to go anyfurther. Thanks for playing!";

	if (unlockStatue1 && unlockStatue2 && unlockStatue3) {
		showMessage(message);
		disable(true, true, true, true);
	} else {
		showMessage(locations[10].description);
		updateScore(locations[10]);
		disable(true, true, true, false);
	}
}

function goToTempleTomb() {
	currentLocation = 9;
	showMessage(locations[9].description);
	updateScore(locations[9]);
	disable(true, false, true, true);
}

function goToTemplePyramidEastRoom() {
	currentLocation = 12;
	showMessage(locations[12].description);
	updateScore(locations[12]);
	disable(true, true, true, false);	
}

function GameLocation(name, description, item) {
	this.name = name;
	this.description = description;
	this.item = item;
	this.visited = true;
}

var beachShore = new GameLocation("beach", "You are on the beach where you started.", 0);
var jungle = new GameLocation("jungle", "You have reached the jungle. After traveling for a few miles, maybe change directions.", 0);
var cliff = new GameLocation("cliff", "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north.", 0);
var bridge = new GameLocation("bridge", "Ah you were right! You have reached an old rope bridge, but it looks old and dangerous. Looks like it is the only way cross the valley east though and might be worth taking a chance.", 0);
var archway = new GameLocation("archway", "Yay! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to interprete the ancient symbols.", 0);
var deadEnd = new GameLocation("deadEnd", "You have reached a dead end as you are stopped by a waterfall. Try turning around.", 0);
var clearing = new GameLocation ("clearing", "You have reached a clearing in the jungle. You begin to loose hope after hours of searc...Wait. Whats that off to the east?", 0);
var templeEntrance = new GameLocation ("templeEntrance", "You have reached the ancient ruins of the Temple of Aboubaker! Head north to the courtyard.", 0);
var templeCourtyard = new GameLocation ("templeCourtyard", "You are in a courtyard and notice three structures. A pyramid to the north, a large statue to the east and a tomb to the west. Investigate.", 0);
var templeTomb = new GameLocation ("tomb", "Your in the temples crypt. You look around and find a cross shaped pendant in one of the tombs. You should take it as it could be usefull later on", pendant);
var templeStatue = new GameLocation ("templeStatue", "This statue is odd. It has a spot on the back for three items.", 0);
var templePyramid = new GameLocation ("templePyramid", "You have entered the pyramid structure! Time to explore! Who knows what you might find!", 0);
var templePyramidEastRoom = new GameLocation ("templePyramidEastRoom", "After exploring in the pyramid, you have come across a room with a chest in it. After opening the chest, you have found a circulaur amulet. Might be wise to take it.", amulet);
var templePyramidThrone = new GameLocation ("templePyramidThrone", "You have entered the Great Iron Throne Room. Sitting on the throne is a corpse holding the Great Ancient Staff of Aboubaker! You also notice on the wall a picture. The picture has a cross, a circle and the staff all pointing towards the temple statue. It looks like three different shaped opjects are needed to open the secret underground temple! TAKE the staff and go investigate some more.", ancientStaff);

var locations = [beachShore, jungle, cliff, bridge, archway, deadEnd, clearing,
				 templeEntrance, templeCourtyard, templeTomb, templeStatue, 
				 templePyramid, templePyramidEastRoom, templePyramidThrone]







