lipX=0;
lipY=0;

function preload(){
    Lipstick_Realtime=loadImage('https://i.postimg.cc/FzSzzxpz/ef812dbaddc7fec1821fda4584d379a4.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lipX=results[0].pose.lip.x;
        lipY=results[0].pose.lip.y;
        console.log("lip x=" +lipX);
        console.log("lip y=" +lipY);
    }
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0); 
    circle(lipX,lipY,20);
}
function take_snapshot(){
    save('myFliterImage.png');
}
