

//single moving graphic (a character walking left for instance)
//SMG
///NumberOfImage...NumberOfRows

function Row(){

	this.si_array = [];

	this.reset = 0;

	this.iterCount = this.reset;

	this.dx = 0;

	this.dy = 0;

}

// function Row(ImageObjArray){

// 	this.iterCount = 1;

// 	this.si_array = ImageObjArray;

// }

// function Row(ImageObj,NumberOfImages,sx,sy,sw,sh,dx,dy,dw,dh){

// 	this.noi = NumberOfImages;

// 	this.ssi_array = [];

// 	this.iterCount = 1;

// 	for(var i = 0; i < this.noi; i++){
// 		var sxVal = sx + (sw * i);
// 		this.ssi_array[i] = new SSI(ImageObj,sxVal,sy,sw,sh,dw,dh);
// 	}
// 		//default is across
// 		// if(direction == "down"){
// 		// 	this.ssi_array[i] = new SSI(filename,sx,sy * i,sw,sh,dw,dh);
// 		// }
// 		// else{
// 		// 	//debugger;
// 		// 	this.ssi_array[i] = new SSI(filename,(sx * i),sy,sw,sh,dw,dh);
// 		// }
// 	//}

// 	//used to keep track of which graphic should be displayed. 
	

// 	this.dx = dx;
// 	this.dy = dy;

// };


// Row.prototype.setLoc = function(dx,dy){
// 	this.dx = dx;
// 	this.dy = dy;

// };



Row.prototype.setLoc = function(dx,dy){
	this.dx = dx;
	this.dy = dy;
};

Row.prototype.updateLoc = function(dx,dy){
	this.dx += dx;
	this.dy += dy;
};

Row.prototype.updateDx = function(dx){
	this.dx += dx;
}

Row.prototype.updateDy = function(dy){
	this.dy += dy;
};



Row.prototype.draw = function(){

	write.add("this.iterCount is: " + this.iterCount);

	//debugger;
	//console.log("this.iterCount is: " + this.iterCount);
	//var tmp_image = this.si_array[this.iterCount];

	// tmp_image.setLoc(this.dx,this.dy);
	// tmp_image.draw();
	ctx.drawImage(this.si_array[this.iterCount].getImage(),this.dx,this.dy);

	this.iterCount++;

	if(this.iterCount == this.si_array.length)
		this.iterCount = 0;

};

Row.prototype.add = function(loc,ssi_instance){
	this.si_array[loc] = ssi_instance;
};

Row.prototype.getImage = function(){

	var tmp_image = this.si_array[this.iterCount];

	this.iterCount++;

	if(this.iterCount == this.si_array.length)
		this.iterCount = this.reset;

	return tmp_image.getImage();
};


