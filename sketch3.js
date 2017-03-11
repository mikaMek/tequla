
function setup() {
	createCanvas(1000,1000, WEBGL);
}

function draw() {

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
