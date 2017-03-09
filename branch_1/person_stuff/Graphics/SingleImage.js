

//http://www.w3schools.com/jsref/dom_obj_image.asp
//single still image
function SI(ImageObj,sx,sy,sw,sh,dw,dh){

	this.image = document.createElement("CANVAS");
	var imageContext = this.image.getContext('2d');

	//are only used one time to draw the image onto the image variable's canvas
	this.tmpDx = 0;
	this.tmpDy = 0;

	//this.img = new Image();
	// this.filename = filename;
	//this.img.src = filename;
	//source x and source y. x and y location of the image from it's original canvas
	this.sx = sx;
	this.sy = sy;
	//graphic's actual width and height
	this.sw = sw;
	this.sh = sh;
	//destination x and destination y. where this image
	//will be drawn on the canvas
	this.dx = 0;
	this.dy = 0;
	//display width and display height (could be bigger or smaller than original)
	this.dw = (dw == null) ? sw : dw;
	this.dh = (dh == null) ? sh : dh;

	imageContext.drawImage(ImageObj,
						this.sx,
						this.sy,
						this.sw,
						this.sh,
						this.tmpDx,
						this.tmpDy,
						this.dw,
						this.dh);

};

//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

//for testing, not for use. 
// SSI.prototype.__drawImage = function(){

// 	var dx = 0;
// 	var dy = 0;

// 	var ctx = canvas.getContext("2d");
// 	//ctx.drawImage(img,0,0);
// 	ctx.drawImage(
// 		this.img,
// 		this.sx,
// 		this.sy,
// 		this.sw,
// 		this.sh,
// 		dx,
// 		dy,
// 		this.dw,
// 		this.dh);
// };

//drawSSIAt(this.x,this.y)


// SSI.prototype.draw = function(){

// 	//var ctx = canvas.getContext("2d");

// 	ctx.drawImage(
// 		this.img,
// 		this.sx,
// 		this.sy,
// 		this.sw,
// 		this.sh,
// 		this.dx,
// 		this.dy,
// 		this.dw,
// 		this.dh);
// };

SI.prototype.draw = function(){

	ctx.drawImage(this.image,this.dx,this.dy);

};

SI.prototype.setLoc = function(x,y){
	this.dx = x;
	this.dy = y;
};

SI.prototype.getImage = function(){
	return this.image;
};

/*

single_image
ssi holds the image (done)

row
single moving graphic - used to keep track of which image we're currently looking at. 

single_set
single_graphic_set - used to keep track of which direction the character should be facing. 

multiple_sets - used to keep track of which set we are currently using. 


*/