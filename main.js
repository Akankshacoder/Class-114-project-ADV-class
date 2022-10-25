function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    vid = createCapture(VIDEO);
    vid.size(300,300);
    vid.hide();
    pn = ml5.poseNet(vid, modelLoaded);
    pn.on('pose', gotPoses)
}

function draw(){
    image(vid,0,0,canvas.width, canvas.height);
}

function SAVE(){
    save("filtered_me.jpg");
}

function modelLoaded(){
    console.log("Model has been loaded succesfully");
}

function draw(){
    //
}