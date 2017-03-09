
/*

g!r@e#e$n%h^i&111+++===


*/
function allow_for_user_input(){

	document.getElementById('mainCanvas').addEventListener("keydown", keyboard_input);
	document.getElementById('mainCanvas').addEventListener("mousemove", mouse_position);
	// document.getElementById('mainCanvas').addEventListener("click", mouse_click);
	// document.getElementById('mainCanvas').addEventListener("contextmenu", mouse_click);
	document.getElementById('mainCanvas').addEventListener("mousedown",mouse_down);
	document.getElementById('mainCanvas').addEventListener("mouseup",mouse_up);
}


function construct_game(){

	//console.log("wanka wanka");

	allow_for_user_input();


	var sx = 0;
	var sy = 0;
	var sw = 32;
	var sh = 48;
	var dw = 32;
	var dh = 48;
	var NumberOfImages = 3;
	// var si_array = [];
	//blar = "zonk";


	
	// //by not defining it with var, it become gobal. 
	// testA = new SI(PeopleArt1,sx,sy,sw,sh,sw,sh);
	// testA.setLoc(300,50);

	// var si_array = test1();
	// testB = new Row(si_array);
	//testB = test1();


	// var single_set_array = test2();
	// testC = new SingleGraphicSet(si_array);
	testC = test2();


	// //SMG(filename,NumberOfImages,sx,sy,sw,sh,dx,dy,dw,dh)
	// testB = new SMG(PeopleArt1,NumberOfImages,sx,sy,sw,sh,sw,sh);
	// testB.setLoc(200,50);

	// testC = makeKing();
	// testC.setLoc(100,100);

	// var testD = new Person(makeKing()); 
	// testD.setLoc(100,100);
}


function test1(){
	var sx = 0;
	var sy = 0;
	var sw = 32;
	var sh = 48;
	var dw = 32;
	var dh = 48;
	var NumberOfImages = 3;

	var row_instance = new Row();

	//makes a row
	for(var i3 = 0; i3 < NumberOfImages; i3++){
		var sxVal = sx + (sw * i3);

		var si_instance = new SI(PeopleArt1,sxVal,sy,sw,sh,dw,dh);

		row_instance.add(i3,si_instance);
	}

	return row_instance;
}


function test2(){

	var sx = 0;
	var sy = 0;
	var sw = 32;
	var sh = 48;
	var dw = 32;
	var dh = 48;
	var NumberOfImages = 3;
	var NumberOfRows = 4;

		//var single_set_array = [];

		//single graphic set instance
		var sgs_instance = new SGS();

		//makes a set.
		for(var i2 = 0; i2 < NumberOfRows; i2++){

			var syVal = sy + (sh * i2);

			var row_instance = new Row();

			//makes a row
			for(var i3 = 0; i3 < NumberOfImages; i3++){
				var sxVal = sx + (sw * i3);

				//make an image instance
				var si_instance = new SI(PeopleArt1,sxVal,syVal,sw,sh,dw,dh);

				//build a row
				row_instance.add(i3,si_instance);
			}
			//builds up a set (sgs is going to be going left, going right, etc)
			sgs_instance.add(i2,row_instance);

		}


	return sgs_instance;
}


function test3(){


	var sx = 0;
	var sy = 0;
	var sw = 32;
	var sh = 48;
	var dw = 32;
	var dh = 48;
	var NumberOfImages = 3;
	var NumberOfRows = 4;
	//multiple graphic sets instance
	var mgs_instance = new MGS();

	for(var i1 = 0; i1 < NumberOfRows; i1++){

		//var single_set_array = [];

		//single graphic set instance
		var sgs_instance = new SGS();

		//makes a set.
		for(var i2 = 0; i2 < NumberOfRows; i2++){

			var syVal = sy + (sh * i2);

			var row_instance = new Row();

			//makes a row
			for(var i3 = 0; i3 < NumberOfImages; i3++){
				var sxVal = sx + (sw * i3);

				//make an image instance
				var si_instance = new SI(PeopleArt1,sxVal,syVal,sw,sh,dw,dh);

				//build a row
				row_instance.add(i3,si_instance);
			}
			//builds up a set
			sgs_instance.add(i2,row_instance);

		}
		mgs_instance.add(i1,sgs_instance);



	}


	return mgs_instance;


}
