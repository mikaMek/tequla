
var j= -550;
var k= -550;
var l= -550;
var m= -550;

var a= -550;
var b= -550;
var c= -550;
var d= -550;

var x=-300;
var y=-500;
var z=-500;
var w=-500;
var mytimer;

function setup() {
	createCanvas(1200,1200, WEBGL);
}

function draw() {
	mytimer = new Timer({ tick : 2,
		ontick : function (sec) {
			console.log('interval', sec);
		},
		onstart : function() {
			console.log('timer started');
		}
	});

	// defining options using on
	mytimer.on('end', function () {
		console.log('timer ended');
		this.start(4).off('end');
	});
	mytimer.on('ontick', function () {
	increment();
	});
	//start timer for 10 seconds
	
	mytimer.start(10);


	background(250);
	document.getElementById('hello').innerHTML = "i: " + a + "  j: " + j + "  z: " + z ;
	push();
	translate(a, j, w);
	box(50,50,50);
	pop();
	push();
	translate(b, k, z);
	box(50,50,50);
	pop();
	push();
	translate(c, l, x);
	box(50,50,50);
	pop();
	push();
	translate(d, m, y);
	box(50,50,50);
	pop();

}

function increment(){
	if(a < 250 && j <= -550) a++;
	if(a >= 250 && j < 550 && z <= -500) j++;
	if(a >= 250 && z == -100 && j>0) j--;

	if(b < 350 && k <= -550) b+=3;
	if(b >= 350 && k < 550) k+=2;
	if(b >= 350 && k >= 550 && l >= 550 && z < -100) z++;


	if(c < 450 && l <= -550) c++;
	if(c >= 450 && l < 550) l++;
	if(c >= 450 && l >= 550 && x > -800 && z >= -100) x--;
	if(c >= 450 && l > -250 && x <= -800 && y <= -900) l--;

	if(d < 550 && m <= -550) d+=2;
	if(d >= 550 && m < 550) m++;
	if(d >= 550 && m >= 550 && x <= -800 && y > -900 ) y--;
	if(d > -550 && m >= 550 && x <= -800 && y <= -900) d--;
}

function stop(){
	mytimer.end();
}