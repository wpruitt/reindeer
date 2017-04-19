console.log("Hello reindeer.js")
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
coloredreindeer = []
for (i = 0; i < reindeer.length; i++) {
	coloredreindeer.push(colors[i] + " " + reindeer[i]);
	// var deerPara = document.createElement("P");
	// var deerText = document.createTextNode(coloredreindeer)
	// deerPara.appendChild(deerText);
	// document.getElementById("reindeer").appendChild(deerText);
	hohohoElement.innerHTML += "<p>" + coloredreindeer[i] + " </p>";
	// console.log(deerText)
}

// for (index in coloredreindeer){
	


// 	coloredDeer = document.getElementById("reindeer");
// 	document.getElementById("reindeer").appendChild;
// }
