
function Write(x,y){

	this.array = [];
	this.x = x;
	this.y = y
	this.h = 20;
	this.last_static_loc = 0;

};

//add dynamic
Write.prototype.add = function(string){

	this.array.push(string);
};

//add static 
Write.prototype.add_s = function(string){ 

	this.array.unshift(string);
	this.last_static_loc++;
};



Write.prototype.draw = function(){

	ctx.fillStyle = "black";

	var yVal = this.y;

	for(var i = 0; i < this.array.length; i++){

		yVal += (i > 0) ? this.h : 0;

		ctx.fillText(this.array[i],this.x,yVal);

	}

	this.array.splice(this.last_static_loc,this.array.length - 1);
};


//var write = new Write(30,30);
var write = new Write(mainCanvas.width - 200,30);

write.add_s("this is static");
