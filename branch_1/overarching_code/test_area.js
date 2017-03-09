// //var bonk = 0;

// //var img = new Image();
// //img.src = "home/mike/Desktop/java_script_video_game/version_3/people.png";
// //img.src = "home/mike/Desktop/java_script_video_game/version_3/branch_1/people.png";
// //img.src = "person_stuff/people.png";

// var filename = PeopleArt1.src;
// var sx = 32;
// var sy = 48;
// var sw = 30;
// var sh = 48;
// var dx = 50;
// var dy = 50;
// var dw = sw;
// var dh = sh;
// var numberOfImages = 3;
// var numberOfGraphics = 4;



// // var testA = new SSI(filename,sx * 0,sy*0,sw,sh,dw,dh);
// // testA.setLocAt(0,0);
// // var testB = new SSI(filename,sx * 1,sy*0,sw,sh,dw,dh);
// // testB.setLocAt(50,0);
// // var testC = new SSI(filename,sx * 2,sy*0,sw,sh,dw,dh);
// // testC.setLocAt(100,0);

// // var testA1 = new SSI(filename,sx * 0,sy*1,sw,sh,dw,dh);
// // testA1.setLocAt(0,50);
// // var testB1 = new SSI(filename,sx * 1,sy*1,sw,sh,dw,dh);
// // testB1.setLocAt(50,50);
// // var testC1 = new SSI(filename,sx * 2,sy*1,sw,sh,dw,dh);
// // testC1.setLocAt(100,50);

// // var testA2 = new SSI(filename,sx * 0,sy*2,sw,sh,dw,dh);
// // testA2.setLocAt(0,100);
// // var testB2 = new SSI(filename,sx * 1,sy*2,sw,sh,dw,dh);
// // testB2.setLocAt(50,100);
// // var testC2 = new SSI(filename,sx * 2,sy*2,sw,sh,dw,dh);
// // testC2.setLocAt(100,100);

// var testD = new SMG(filename,sx,sy*0,sw,sh,dx,dy*0,dw,dh,numberOfImages);
// var testE = new SMG(filename,sx,sy*1,sw,sh,dx,dy*1,dw,dh,numberOfImages);
// var testF = new SMG(filename,sx,sy*2,sw,sh,dx,dy*2,dw,dh,numberOfImages);
// var testG = new SMG(filename,sx,sy*3,sw,sh,dx,dy*3,dw,dh,numberOfImages);

// var testH = new SMG(filename,sx,sy*3,sw,sh,dx,dy*3,dw,dh,numberOfImages,numberOfGraphics);

// var testI = kingGraphic();
// testI.setDir(4);


// var write = new Write(500,20);
// write.add_S("hello my baby hello my lovely hello my rag time gal");

// //ar printWords = new display_phrases_list(700,20);

// //var blah = MMG.zonk.a;

// //var testImg = new image();


// var testImg = document.createElement("IMG");
// // testImg.style.height = '50px';
// // testImg.style.width = '50px';
// testImg.width = 384;
// testImg.height = 384;

// testImg.src = PeopleArt1.src;

// var tmpCan = document.createElement("CANVAS");
// // tmpCan.id = "blah";
// // tmpCan.width = 50;
// // tmpCan.height = 50;
// //var tmpCan = document.getElementById("canvasthing");
// //tmpCan.style.display = "none";
// var tmpCtx = tmpCan.getContext("2d");

// //tmpCtx.fillStyle = "blue";
// //tmpCtx.fillRect(0, 0, tmpCan.width, tmpCan.height);

// tmpCtx.drawImage(
// testImg,
// 1,
// 1,
// 32,
// 49,
// 0,
// 0,
// 32,49);


	

// 	// tmpCtx.drawImage(
// 	// 	testImg,
// 	// 	0,
// 	// 	0,
// 	// 	50,
// 	// 	50,
// 	// 	0,
// 	// 	0,
// 	// 	50,
// 	// 	50);

// // naturalWidth
// // naturalHeight
// // width
// // height


// function kingGraphic(){

// 	var filename = PeopleArt1.src;
// 	var sx = 32;
// 	var sy = 48;
// 	var sw = 30;
// 	var sh = 48;
// 	var dx = 50;
// 	var dy = 50;
// 	var dw = sw;
// 	var dh = sh;
// 	var numberOfImages = 3;
// 	var numberOfGraphics = 4;

// 	var tmp = new MMG();

// 	tmp.add(MMG.dir.down,new SMG(filename,sx,sy*MMG.dir.down,sw,sh,dx,dy,dw,dh,numberOfImages));
// 	tmp.add(MMG.dir.left,new SMG(filename,sx,sy*MMG.dir.left,sw,sh,dx,dy,dw,dh,numberOfImages));
// 	tmp.add(MMG.dir.right,new SMG(filename,sx,sy*MMG.dir.right,sw,sh,dx,dy,dw,dh,numberOfImages));
// 	tmp.add(MMG.dir.up,new SMG(filename,sx,sy*MMG.dir.up,sw,sh,dx,dy,dw,dh,numberOfImages));

// 	// for (var key in MMG.dir){
// 	//     var value = MMG.dir[key];
// 	//     var syVal = sy * value;
// 	//     tmp.add(value,new SMG(filename,sx,syVal,sw,sh,dx,dy,dw,dh,numberOfImages));
// 	// }

// 	return tmp;
// };

// // MMG.dir = {
// 	// 	down:0,
// 	// 	left:1,
// 	// 	right:2,
// 	// 	up:3
// // };


// //[Object, null, null, null, null, Object, Object, Object, Object]

// //var a3 = [{t:1},null,null,null,null,{t:2},{t:2},{t:2},{t:2}]

// //a3.splice(1,4)

// // var a3 = [{t:1},null,null,null,null]

// // a3.splice(1,4)

// // function blah(){

// // 	ctx.drawImage(
// // 		img,
// // 		sx,
// // 		sy,
// // 		sw,
// // 		sh,
// // 		dx,
// // 		dy,
// // 		dw,
// // 		dh);
// // };

//--------------------

var filename = PeopleArt1.src;
var sx = 32;
var sy = 48;
var sw = 30;
var sh = 48;
var dx = 50;
var dy = 50;
var dw = sw;
var dh = sh;
var numberOfImages = 3;
var numberOfGraphics = 4;



var testA = new SI(filename,sx * 0,sy*0,sw,sh,dw,dh);
testA.setLocAt(0,0);