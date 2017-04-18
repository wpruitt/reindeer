console.log("Hello reindeer.js")
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
coloredreindeer = []
for (i = 0; i < reindeer.length; i++) {
	coloredreindeer.push(colors[i] + " " + reindeer[i]);
}
for (index in coloredreindeer){
	console.log(coloredreindeer[index])
}