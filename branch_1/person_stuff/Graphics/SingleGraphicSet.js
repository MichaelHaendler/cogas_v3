/*


single moving graphic would be, for example, a character walking left. 

multiple moving graphics would be moving left, right, etc. 

*/

function SGS(){

	this.row_array = [];
	this.dx = 0;
	this.dy = 0;
	this.dir = 0;
	// if(arguments.length == 10){
	// 	this.createAllGraphics(arguments);
	// }
	//for future use. for when there 
	//are mutiple characters. 
	this.selected = true;

}

// MMG.zonk = {
// 	a:1,
// 	b:2
// };

SGS.dir = {
		down:0,
		left:1,
		right:2,
		up:3
};

SGS.prototype.add = function(dir,row_instance){
	this.row_array[dir] = row_instance;
};

// MMG.prototype.createAllGraphics = function(args){

// 	var filename = args[0];
// 	var sx = args[1];
// 	var sy = args[2];
// 	var sw = args[3];
// 	var sh = args[4];
// 	var dx = args[5];
// 	var dy = args[6];
// 	var dw = args[7];
// 	var dh = args[8];
// 	var numberOfImagesInGraphic = args[9];
// 	var numberOfGraphics = args[10];

// 	for(var i = 0; i < NumberOfGraphics; i++){

// 		var yVal = sy * i;

// 		var ssi_instance = SMG(filename,sx,yVal,sw,sh,dx,dy,dw,dh,NumberOfImagesInGraphic);

// 		this.array.push(ssi_instance);

// 	}

// };

// function MMGSMV(filename,sx,sy,sw,sh,dx,dy,dw,dh,NumberOfImagesInGraphic,NumberOfGraphics){

// 	this.array = [];
// 	this.dx = dx;
// 	this.dy = dy;

// 	for(var i = 0; i < NumberOfGraphics; i++){

// 		var yVal = sy * i;

// 		var ssi_instance = SMG(filename,sx,yVal,sw,sh,dx,dy,dw,dh,NumberOfImagesInGraphic);

// 		this.array.push(ssi_instance);

// 	}

// };



SGS.prototype.setLoc = function(x,y){
	this.dx = x;
	this.dy = y;

};

SGS.prototype.updateLoc = function(x,y){
	this.dx += x;
	this.dy += y;

};

// MMG.prototype.updateX = function(x){
// 	this.dx += x;
// };
// MMG.prototype.updateY = function(y){
// 	this.dy += y;
// };


SGS.prototype.setDir = function(dir){

	if(dir < 0 || dir >= this.array.length)
		this.dir = MMG.dir.down;
	else
		this.dir = dir;
};


SGS.prototype.draw = function(){

	//a row. 
	// var graphic = this.array[this.dir];

	// graphic.setLoc(this.dx,this.dy);

	// graphic.draw();

	ctx.drawImage(this.row_array[this.dir].getImage(),this.dx,this.dy);
};

// MMG.prototype.draw = function(){

// 	var image = this.array[this.dir].getImage();

// 	ctx.drawImage(image,this.dx,this.dy);

// };


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

//end result should just be getting
//the right graphic and dispaying it in
//person. 

// SGS.makeKing = function(){

// 	var sx = 0;
// 	var sy = 0;

// 	return SGS.getGraphic1(sx,sy);
// };


// SGS.getGraphic1 = function(sx,sy){

// 	//change these 2 values (source x and source y)
// 	//in order to change which graphic you are selecting. 
// 	// var sx = 0;
// 	// var sy = 0;

// 	var sw = 32;
// 	var sh = 48;
// 	var NumberOfImages = 3;
// 	var NumberOfGraphics = 4;

// 	var perp = new SGS();

// 	for(var i = 0; i < NumberOfGraphics; i++){

// 		var SourceX = sx + (i * sw);

// 		var dir = i;

// 		var graphicRow = new SMG(PeopleArt1,NumberOfImages,SourceX,sy,sw,sh,sw,sh);

// 		perp.add(dir,graphicRow);
// 	}

// 	return perp;

// }