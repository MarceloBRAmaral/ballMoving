//Ball moving v. 01
//This tutorial shows how to use the vector library to change the position of a ball
//
//This release adds:
//1. 
//
//BUGS:
//1. 
//
//TO DO:
//1. create a particle system to use velocity object to change position
//
//By Marcello Silva

//canvas definition
var document;var window;var init;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//get canvas dimensions
var canvasWidth = canvas.width;
var canvasHeigth = canvas.height;

// var definitions
var radius = 10;
var position=vector.create(100,100);
var velocity=vector.create(0,0);
var initAngle=Math.PI/6;
velocity.setLength(7);
velocity.setAngle(initAngle);

//clears the canvas function
var clearCanvas = function () {
    //ctx.fillStyle = 'white';
	ctx.clearRect(0,0,canvasWidth,canvasHeigth);
};

var testBounds = function(){
    if(position.getX()>canvasWidth-radius||position.getX()<0+radius){
        velocity.setAngle(Math.PI-velocity.getAngle());
    }else if (position.getY()>canvasHeigth-radius||position.getY()<0+radius){
        velocity.setAngle(velocity.getAngle()*(-1));
    }
};

//main loop
function main() {
    init = window.requestAnimationFrame(main);
    // Whatever your main loop needs to do    
    clearCanvas();//clear the canvas
    position.addTo(velocity);
    testBounds();
    ctx.beginPath();
    ctx.arc(position.getX(),position.getY(),radius,0,Math.PI*2,false);
    ctx.fill();
    
}

main();