
function Write(x,y){

	this.array = [];
	this.x = x;
	this.y = y
	this.h = 20;
	this.last_static_loc = 0;

}

//add dynamic
Write.prototype.add = function(string){

	this.array.push(string);
}

//add static 
Write.prototype.add_S = function(string){ 

	this.array.unshift(string);
	this.last_static_loc++;
}



Write.prototype.draw = function(){

	ctx.fillStyle = "black";

	for(var i = 0; i < this.array.length; i++){

		var yVal = this.y * (i + 1);

		ctx.fillText(this.array[i],this.x,yVal);

	}

	this.array.splice(this.last_static_loc,this.array.length - 1);
}
