/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

function examine(currentLocation){
	if (currentLocation.item !=0) {
		showInfoMessage("Oh you found something! " + currentLocation.item.description + " Take it! It could be useful.");
	} else {
	showInfoMessage("Nothing to be found here.");
	}
}

function take(currentLocation) {
	if (currentLocation.item !=0) {
		player.inventory.push(currentLocation.item.name);
		showInfoMessage("Item Taken!");
		locations[currentLocation].item = 0;
	}
}

function Reload() {
	location.reload();
}

function displayHelp() {
	var message = "Text Commands: N/n (North)  E/e (East) S/s (South) W/w (West) T/t (Take Item) X/x (Examine Current Location) U/u (Use items) H/h (Help)";
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
    case "U": useKeys(player.currentLocation);
    case "R": Reload();
    }
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

function useKeys(currentLocation) {
  var message ="You do not have an item to be used here.";

  if (currentLocation === locations[10]) {
      if (locations[9].item === 0 && locations[12].item === 0 && locations[13].item === 0) {
          gameEnd();
      }
  } else {
    showInfoMessage(message);
  }
}




