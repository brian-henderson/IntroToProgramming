/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

// WILL REPLACE locations.js WITH THIS FILE

"use strict";

const NORTH =0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

function GameLocation(name, description, item) {
	this.name = name;
	this.description = description;
	this.item = item;
	this.visited = true;
}

var locations = [
	new GameLocation ("beach", "You are on the beach where you started.", 0),
	new GameLocation ("jungle", "You have reached the jungle. After traveling for a few miles, maybe change directions.", 0),
	new GameLocation ("cliff", "Whoa! That was a close one! That cliff edge came out of no where! Looks like there might be a rope bridge a little north.", 0),
	new GameLocation ("bridge", "Ah you were right! You have reached an old rope bridge, but it looks old and dangerous. Looks like it is the only way cross the valley east though and might be worth taking a chance.", 0),
	new GameLocation ("archway", "Yay! You have safely crossed the bridge! There is a sign that points North and South, but you are unable to interprete the ancient symbols.", 0),
	new GameLocation ("deadEnd", "You have reached a dead end as you are stopped by a waterfall. Try turning around.", 0),
	new GameLocation ("clearing", "You have reached a clearing in the jungle. You begin to loose hope after hours of searc...Wait. Whats that off to the east?", 0),
	new GameLocation ("templeEntrance", "You have reached the ancient ruins of the Temple of Aboubaker! Head north to the courtyard.", 0),
	new GameLocation ("templeCourtyard", "You are in a courtyard and notice three structures. A pyramid to the north, a large statue to the east and a tomb to the west. Investigate.", 0),
	new GameLocation ("tomb", "Your in the temples crypt. As you are going down the stairs, your flashlight picked up a glare. Investigate!", pendant),
	new GameLocation ("templeStatue", "This statue is odd. It has a spot on the back for three items.", 0),
	new GameLocation ("templePyramid", "You have entered the pyramid structure! Time to explore! Who knows what you might find!", 0),
	new GameLocation ("templePyramidEastRoom", "After exploring in the pyramid, you have come across this bare room with a chest in it.", amulet),
	new GameLocation ("templePyramidThrone", "You have entered the Great Iron Throne Room. Sitting on the throne is a corpse holding the Great Ancient Staff of Aboubaker! You also notice on the wall a picture. The picture has a cross, a circle and the staff all pointing towards the temple statue. It looks like three different shaped opjects are needed to open the secret underground temple! TAKE the staff and go investigate some more.", ancientStaff)
];

var navigation = [
// 	  NORTH   EAST  SOUTH   WEST
	[ locations[1], null, null, null ],
	[ null, locations[2], locations[0], null ],
	[ locations[3], null, null, locations[1] ],
	[ null,locations[4], locations[2], null ],
	[ locations[5], null, locations[6], locations[3] ] ,
	[ null, null, locations[4], null ],
	[ locations[4], locations[7], null, null ],
	[ locations[8], null, null, locations[6] ],
	[ locations[11], locations[10], locations[7], locations[9] ],
	[ null, locations[8], null, null ],
	[ null, null, null, locations[8] ],
	[ locations[13], locations[12], locations[8], null ],
	[ null, null, null, locations[11] ],
	[ null, null, locations[11], null ]
];

function dirToStr(dir) {
    switch (dir) {
        case NORTH: return "North"; break;
        case SOUTH: return "South"; break;
        case EAST: return "East";   break;
        case WEST: return "West";   break;
        default: return "Invalid";  break;      
    }
}

function processTextCommand() {
    var cmd = document.getElementById("command").value;
    switch (cmd.toUpperCase()) {
    case "N": move(NORTH);
    case "S": move(SOUTH);
    case "E": move(EAST);
    case "W": move(WEST);
    }
}

function from(loc, dir) {
    var locId = locations.indexOf(loc);
    return navigation[locId][dir];
}

function move(dir) {
    enableBtns();
    var nextLocation = from(player.currentLocation, dir); /* TODO Use the function above to get the destination. */
    

    if (nextLocation != null) {
        player.currentLocation = nextLocation;
        showMessage(player.currentLocation.description);
		updateScore(player.currentLocation);
		disableBtns(nextLocation); 
    } else {
        alert("You cannot go " + dirToStr(dir));
    }
}

function startGame() {
	var startingMessage = "Welcome! You have spent the past year searching the Atlantic and you think that you may " + 
			 		      "have finally found the island where the lost temple and treasure of the Great King " + 
			  		      "Aboubaker is. There is much to explore on this island, you can try walking the coast but " +
			  		      "it might be better to check out the jungle and explore the mysterys that lie ahead! ";
	
	//player.currentLocation = locations[0];
	showMessage(startingMessage);
}

window.onload = startGame();

function disableBtns(loc) {
	if(from(loc, NORTH) === null) {
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

