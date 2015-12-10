/* Brian Henderson
   December 11, 2015
   Version 1.0
   CMPT 120L 
*/

function Item(name, description) {
	this.name = name;
	this.description = description;
}

Item.prototype.toString = function () {
	return "The " + this.name + "is " + this.description;
}

var pendant = new Item("Pendant       ", "A shiny, cross shaped pendant.");
var amulet = new Item("Amulet       ", "A jeweled circulaur amulet.");
var ancientStaff = new Item("Ancient Staff     ", "The Ancient Staff of the Great King Abbubakar!");
var missingMap = new Item("Missing Map Piece ", "An ancient map that reveals the secret location under the statue.");
