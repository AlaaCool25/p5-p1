function preload() {
    
}

function setup() {
    canvas = createCanvas(300,235);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,235);
    video.hide();
}

function modelLoaded() {
    console.log("poseNet is initilized");
}

function draw() {
    
}

function take_snapshot() {
    save('myFilterImage.png');
}