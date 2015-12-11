/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

function processTextCommand() {
    var cmd = document.getElementById("command").value;
    switch (cmd.toUpperCase()) {
    case "N": move(NORTH); break;
    case "S": move(SOUTH); break;
    case "E": move(EAST); break;
    case "W": move(WEST); break;
    case "T": take(player.currentLocation); break;
    case "H": displayHelp(); break;
    case "X": examine(player.currentLocation); break;
    case "U": useItems(player.currentLocation); break;
    case "P": prayToAbbubaker(); break;
    case "R": Reload(); break;
    }
} 

function take(currentLocation) {
var message ="Item Taken!";
  if (currentLocation.item !=0) {
    player.inventory.push(currentLocation.item.name);
    showInfoMessage(message);
    currentLocation.item = 0;
  } else {
    showInfoMessage("No item here.");
  }
}

function displayHelp() {
  var message = "Text Commands: N/n (North)  E/e (East) S/s (South) W/w (West) T/t (Take Item) X/x (Examine Current Location) U/u (Use items) P/p (Pray for Help) H/h (Help)";
  showInfoMessage(message);
}

function examine(currentLocation){
var message = "Nothing to be found here.";
  if (currentLocation.item !=0) {
		showInfoMessage("Oh you found something! " + currentLocation.item.description + " Take it! It could be useful.");
	} else {
	showInfoMessage(message);
	}
}

function useItems(currentLocation) {
  var message ="You do not have an item to be used here.";

  if (currentLocation === locations[10]) { 
      if (locations[9].item === 0 && locations[12].item === 0 && locations[13].item === 0) {
          navigation[10][1] = locations[15];
          player.pointsEarned += 1000;
          updateDisplay(currentLocation);
          showInfoMessage("You have unlocked the statue. GO EAST to the promised land!");
      }   
  } else if (currentLocation === locations[3]) {
      if (locations[0].item === 0) {
        navigation[3][1] = locations[4];
        showInfoMessage("You have made the bridge safe to cross!");
        player.inventory = [];
      }
  } else if (locations[5].item === 0) {
      //document.getElementById("mapImg").style.backgroundImage = "url('secretMap.png')";
      updateMap();
      showInfoMessage("Your map is now complete! Check it out!");
  } else  {
    showInfoMessage(message);
  }
}

function prayToAbbubaker() {
  var riddle = prompt("You have prayed to the Great God of Abbubaker! If you seek guidance, you will need to answer my riddle. What is the difference between an old penny and a new quarter? (WARNING: you will lose 25 points for getting the answer right, but it will reveal important information.)");
  
  if (riddle.toUpperCase() === "24 CENTS"){
    alert("Yahweh Abbubaker has pitied your prayers to him. In order to win you must find three objects(pendant, amulet, and an ancient staff) and bring them to the statue. Unlock the statue with these items to be glorious.");
    player.pointsEarned -=25;
  } else {
    alert("You have failed the riddle. Pray and think harder!");
  }
}

function Reload() {
  location.reload();
}
