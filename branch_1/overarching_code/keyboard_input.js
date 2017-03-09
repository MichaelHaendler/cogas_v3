


function keyboard_and_mouse_input(){

}

function mouse_position(event){

	gx = event.clientX;
	gy = event.clientY;
}

function mouse_left_click(event){
	glc = true;
}

function mouse_left_click(event){
	grc = true;
}

//0 for left, 2 for right. 1 must be scroll. 
function mouse_down(event){

	if(event.button == 0)
		glc = true;
	else if(event.button == 2)
		grc = true;
}

function mouse_up(event){
	glc = false;
	grc = false;
}



// function keyboard_input(){

// }
var left = 37;
var up = 38;
var right = 39;
var down = 40;
var moveAmount = 3;

function keyboard_input(e) {

	console.log("inside of keyboard_input");

	// write.add("1e.key is: " + e.key);
	// write.add("2e.charCode is: " + e.charCode);
	// write.add("3e.which is: " + e.which);

	if(e.which == left){
		gx -= moveAmount;
	}
	else if(e.which == right){
		gx += moveAmount;
	}
	else if(e.which == up){
		gy -= moveAmount;
	}
	else if(e.which == down){
		gy += moveAmount;
	}
	//is regular input, ie "hello there!"
	else{

	}

};


function get_keyboard_input(e) {
	event = e;
}