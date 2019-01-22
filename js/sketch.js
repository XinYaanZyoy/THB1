var w, h;

function setup(){
w = windowWidth;
h = windowHeight;

can = createCanvas(w, h);
can.position(0,0);
can.style('z-index',-1);

    scene = select('.scene');
    cube = select('.cube');

    scene.position(w/2,h/2);
    cube.position(-80,-80);

}

function draw(){
    ellipse(w/2,h/2,10);

    // ellipse(100,100,100)
}