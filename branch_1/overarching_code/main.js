



function mainloop(){

	//console.log("blar is: " + blar);

	//var ctx = canvas.getContext("2d");

	ctx.fillStyle = "pink";
	ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

	//single image
	//ctx.drawImage(testA.getImage(),50,50);

	//row
	//ctx.drawImage(testB.getImage(),150,50);

	//set of rows

	//testA.draw();
	//testB.draw();
	testC.draw();


	//debugger;

	// for(var i = 0; i < 5; i++){
	// 	write.add(("bonky " + i));
	// }

	//testA.draw();

	var coor = "X coords: " + gx + ", Y coords: " + gy;
	write.add(coor);

	var s1 = "glc is: " + glc;
	var s2 = "grc is: " + grc;
	write.add(s1);
	write.add(s2);



	write.draw();
}






