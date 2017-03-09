
//for creating this particular character. 

function makeKing1(){

	var sxsy_array = [{sx:0,sy:0}];

	return CreateCharacter1(PeopleArt1,sxsy_array);
}

function CreateCharacter1(sprite_sheet,sxsy_array){

	// var sx = 0;
	// var sy = 0;
	var sw = 32;
	var sh = 48;
	var NumberOfImages = 3;
	var NumberOfRows = 3;
	
	//var multi_set = [];
	var multi_set_instance = new MGS();

	for(var i1 = 0; i1 < sxsy_array.length; i1++){

		var sx = sxsy_array[i1].sx;
		var sy = sxsy_array[i1].sy;

		var single_set_array = [];

		//makes a set.
		for(var i2 = 0; i2 < NumberOfRowsl i2++){

			var syVal = sy + (sh * i2);

			var row_instance = new Row();

			//makes a row
			for(var i3 = 0; i3 < NumberOfImages; i3++){
				var sxVal = sx + (sw * i3);

				//buids up a row
				//row_array[i3] = new SI(sprite_sheet,sxVal,syVal,sw,sh,dw,dh);
				var si_instance = new SI(sprite_sheet,sxVal,syVal,sw,sh,dw,dh);
				row_instance.add(i3,tmp_si);
			}
			//builds up a set
			//single_set_array[i2] = row_array;
			set_instance.add(i2,row_instance);

		}
		//puts together all of the sets. 
		//multi_set[i1] = single_set_array;
		multi_set_instance.add(i1,set_instance);

	}

}