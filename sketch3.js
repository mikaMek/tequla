var xInit;
var yInit;
var moveCamY =0;
var moveCamX =0;
var moveCamZ =0;
var lookUpDown=0;
var lookLeftRight=0;
var startLooking= false;


function setup() {
	createCanvas(1000,800, WEBGL);
}

function myInits(event){
	xInit = event.clientX;
    yInit = event.clientY;
    startLooking = true;
}

function draw() {

	rotateY(radians(lookLeftRight));
	rotateX(radians(lookUpDown));
	camera(moveCamX, moveCamY, moveCamZ);


	background(250);
	translate(-100, -100, -300);
	box(50,50,50);
	translate(100, -100, 0);
	box(50,50,50);
	translate(100, -100, 0);
	box(50,50,50);
	translate(100, 0, 0);
	box(50,50,50);


}

// rotate the camera 
document.onkeydown = checkKey;
	function checkKey(e) {

	    e = e || window.event;

	    if (e.keyCode == '38') {
	        // up arrow
	        moveCamY-=100;
	    }
	    else if (e.keyCode == '40') {
	        // down arrow
	        moveCamY+=100;
	    }
	    else if (e.keyCode == '37') {
	       // left arrow
	       moveCamX-=100;
	    }
	    else if (e.keyCode == '39') {
	       // right arrow
	       moveCamX+=100;
	    }

	}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
 	moveCamZ -= event.delta;
 	document.getElementById('hello').innerHTML = "x: " + moveCamZ ;
  //uncomment to block page scrolling
  //return false;
}

function mouseDragged(){
	upDown(mouseX, mouseY);
	leftRight(mouseX, mouseY);
}

function upDown(mX, mY){
	if(mX > 0 && mX < 1200 && mY > 0 && mY < 800 && startLooking == true){
		if(xInit != mX){
			lookLeftRight += (mX-xInit);
			xInit=mX;
		}
	}
	return lookLeftRight;
}

function leftRight(mY, mX){
	if(mX > 0 && mX < 1200 && mY > 0 && mY < 800 && startLooking == true){
		if(yInit != mY){
			lookUpDown += (mY-yInit);
			yInit=mY;
		}
	}
	return lookUpDown;
}