var x = 100;
var y = 100;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
}

