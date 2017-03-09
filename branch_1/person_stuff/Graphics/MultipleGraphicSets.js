

//SingleGraphicSet
//one set of graphics. 
//The person moving backwards, 
//forwards, left right, etc. 

//MultipleMovingGraphics
//MMG
//one dimensional array of SingleGraphicSet
//things like...the set of graphics of the character
//with a hat, and the set of graphics of the character
//without a hat. 

function MGS(){

	this.array = [];
}

//so that we can look stuff up. 
MGS.locs = {};

MGS.EntireSet1 = function(){

	var tmpArray = [SGS.makeKing(),SGS.makeOldGuy()];

	//single graphic set instance
	for(var sgsi in tmpArray){

		var loc = this.array.length;

		MGS.locs[sgsi.name] = loc;

		this.array.push(sgsi);
	}

	

};