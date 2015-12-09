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

var pendant = new Item("pendant  ", "A shiny, cross shaped pendant.");
var amulet = new Item("amulet  ", "A jeweled circulaur amulet.");
var ancientStaff = new Item("ancient staff  ", "The Ancient Staff of the Great King Abbubakar!");
