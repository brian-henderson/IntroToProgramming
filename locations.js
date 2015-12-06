/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

function goToBeach() {
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
	player.currentLocation = 1;
	showMessage(locations[1].description);
	updateScore(locations[1]);
	disable(true, false, true, false);		
}

function goToCliff() {
	player.currentLocation = 2;
	showMessage(locations[2].description);
	updateScore(locations[2]);
	disable(false, true, false, true);
}

function goToCliffBridge() {
	player.currentLocation = 3;
	showMessage(locations[3].description);
	updateScore(locations[3]);
	disable(true, false, true, false);	
}

function goToArchway() {
	player.currentLocation = 4;
	showMessage(locations[4].description);
	updateScore(locations[4]);
	disable(false, false, false, true);
}

function goToJungleClearing() {
	player.currentLocation = 6;
	showMessage(locations[6].description);
	updateScore(locations[6]);

	disable(false, false, true, true);
}

function goToJungleDeadEnd() {
	player.currentLocation = 5;
	showMessage(locations[5].description);
	disable(true, true, false, true);	
}

function goToTempleEntrance() {
	player.currentLocation = 7;
	showMessage(locations[7].description);
	updateScore(locations[7]);
	disable(true, true, false, false);
}

function goToTempleCourtyard() {
	player.currentLocation = 8;
	showMessage(locations[8].description);
	updateScore(locations[8]);
	disable(false, false, false, false);
}

function goToTemplePyramid() {
	player.currentLocation = 11;
	showMessage(locations[11].description);
	updateScore(locations[11]);
	disable(false, false, true, false);	
}

function goToTemplePyramidThrone() {
	player.currentLocation = 13;
	showMessage(locations[13].description);
	updateScore(locations[13]);
	disable(true, false, true, true);
}

function goToTempleStatue() {
	player.currentLocation = 10;
	var winMessage = "You have come back to the statue and with the items you have, you have the keys to gain access to the Secret Underground Temple! BUT you don't have the knowledge to go anyfurther. Maybe next time you will finally find out what is beneath the temple. Thanks for playing!";

	if (locations[9].item === 0 && locations[12].item === 0 && locations[13].item === 0) {
		showMessage(winMessage);
		disable(true, true, true, true);
	} else {
		showMessage(locations[10].description);
		updateScore(locations[10]);
		disable(true, true, false, true);	
	}
}

function goToTempleTomb() {
	player.currentLocation = 9;
	showMessage(locations[9].description);
	updateScore(locations[9]);
	disable(true, true, true, false);
}

function goToTemplePyramidEastRoom() {
	player.currentLocation = 12;
	showMessage(locations[12].description);
	updateScore(locations[12]);
	disable(true, true, true, false);	
}
/*
function GameLocation(name, description, item) {
	this.name = name;
	this.description = description;
	this.item = item;
	this.visited = true;
}
*/
GameLocation.prototype.toString = function () {
	return "You are at" + this.name + ".";
}
/*
var beachShore = new GameLocation("beach", "You are on the beach where you started.", 0);
var jungle = new GameLocation("jungle", "You have reached the jungle. After traveling for a few miles, maybe change directions.", 0);
var cliff = new GameLocation("cliff", "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north.", 0);
var bridge = new GameLocation("bridge", "Ah you were right! You have reached an old rope bridge, but it looks old and dangerous. Looks like it is the only way cross the valley east though and might be worth taking a chance.", 0);
var archway = new GameLocation("archway", "Yay! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to interprete the ancient symbols.", 0);
var deadEnd = new GameLocation("deadEnd", "You have reached a dead end as you are stopped by a waterfall. Try turning around.", 0);
var clearing = new GameLocation ("clearing", "You have reached a clearing in the jungle. You begin to loose hope after hours of searc...Wait. Whats that off to the east?", 0);
var templeEntrance = new GameLocation ("templeEntrance", "You have reached the ancient ruins of the Temple of Aboubaker! Head north to the courtyard.", 0);
var templeCourtyard = new GameLocation ("templeCourtyard", "You are in a courtyard and notice three structures. A pyramid to the north, a large statue to the east and a tomb to the west. Investigate.", 0);
var templeTomb = new GameLocation ("tomb", "Your in the temples crypt. As you are going down the stairs, your flashlight picked up a glare. Investigate!", pendant);
var templeStatue = new GameLocation ("templeStatue", "This statue is odd. It has a spot on the back for three items.", 0);
var templePyramid = new GameLocation ("templePyramid", "You have entered the pyramid structure! Time to explore! Who knows what you might find!", 0);
var templePyramidEastRoom = new GameLocation ("templePyramidEastRoom", "After exploring in the pyramid, you have come across this bare room with a chest in it.", amulet);
var templePyramidThrone = new GameLocation ("templePyramidThrone", "You have entered the Great Iron Throne Room. Sitting on the throne is a corpse holding the Great Ancient Staff of Aboubaker! You also notice on the wall a picture. The picture has a cross, a circle and the staff all pointing towards the temple statue. It looks like three different shaped opjects are needed to open the secret underground temple! TAKE the staff and go investigate some more.", ancientStaff);

var locations = [beachShore, jungle, cliff, bridge, archway, deadEnd, clearing,
				 templeEntrance, templeCourtyard, templeTomb, templeStatue, 
				 templePyramid, templePyramidEastRoom, templePyramidThrone]

*/