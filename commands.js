/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

function examine(currentLocation){
	if (locations[currentLocation].item !=0) {
		showInfoMessage("Oh you found something! " + locations[currentLocation].item.description + " Take it! It could be useful.");
	} else {
	showInfoMessage("Nothing to be found here.");
	}
}

function take(currentLocation) {
	if (locations[currentLocation].item !=0) {
		player.inventory.push(locations[currentLocation].item.name);
		showInfoMessage("Item Taken!");
		locations[currentLocation].item = 0;
	}
}

function Reload() {
	location.reload();
}

function displayHelp() {
	var message = "Text Commands: N/n (North)  E/e (East) S/s (South) W/w (West) T/t (Take Item) X/x (Examine Current Location) H/h (Help)";
	showInfoMessage(message);
}

function processTextCommand() {
    var cmd = document.getElementById("command").value;
    switch (cmd.toUpperCase()) {
    case "N": move(NORTH);
    case "S": move(SOUTH);
    case "E": move(EAST);
    case "W": move(WEST);
    case "T": take(player.currentLocation);
    case "H": displayHelp();
    case "X": examine(player.currentLocation);
    case "R": Reload();
    }
} 
