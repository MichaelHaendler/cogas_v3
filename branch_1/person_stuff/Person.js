

function Person(MMGI){

	this.z = 0;//not needed right now
	this.dx = 0;
	this.dy = 0;
	this.name = "John Fakemen";//not needed right now

	//multiple moving graphics instance
	this.MMGI = MMGI;

	this.dir = -1;//direction that the character faces. 

	this.selected = false;

	this.moveAmount = 3;

};


Person.prototype.setLoc = function(x,y){
	this.dx = x;
	this.dy = y;
};


// MMG.dir = {
// 		down:0,
// 		left:1,
// 		right:2,
// 		up:3
// };

Person.prototype.updateLocAndDir = function(){

	if(this.hasBeenSelected()){

		if(gx!=null && gx!=0){
			this.dx += this.moveAmount;

			if(gx>0)
				MMGI.setDir(MMG.dir.down);
			else if(gx<0)
				MMGI.setDir(MMG.dir.up);
		}
		if(gy!=null && gy!=0){
			this.dy += this.moveAmount;

			if(gy>0)
				MMGI.setDir(MMG.dir.right);
			else if(gy<0)
				MMGI.setDir(MMG.dir.left);
		}

	}


};




Person.prototype.hasBeenSelected = function(){

	if(glc == true && this.containsMouse())
		this.selected = true;
	else
		this.selected = false;
};

Person.prototype.containsMouse = function(){

	if()

};

Person.prototype.draw = function(){


	this.updateLocAndDir();

	MMGI.draw();
};


Person.prototype.updateLoc = function(){

	write.add("moveAmount is: " + moveAmount);

	console.log("getting in here?");

	if(this.selected){

		//update location
		if(event.which == left){
			this.dx -= moveAmount;
		}
		else if(event.which == right){
			this.dx += moveAmount;
		}
		else if(event.which == up){
			this.dy -= moveAmount;
		}
		else if(event.which == down){
			this.dy += moveAmount;
		}
		//is regular input 
		// else{

		// }



		//draw square
		ctx.rect(this.sx,this.sy,this.sw,this.sh);

		//write name 
	}

}