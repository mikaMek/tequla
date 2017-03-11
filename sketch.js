var i= -250;
var j= -250;
var k= -250;
var mytimer;

function setup() {
	createCanvas(700,700, WEBGL);
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
	document.getElementById('hello').innerHTML = "i: " + i + "  j: " + j + "  " ;
	translate(i, j, 0);
	box(50,50,50);
	translate(i,0, -300);
	box(50,50,50);

}

function increment(){
	if(i < 250 && j <= -250) i++;
	if(i >= 250 && j < 250) j++;
	if(i > -250 && j >= 250 ) i--; 
	if(i == -250 && j > -250 ) j--; 

}

function stop(){
	mytimer.end();
}