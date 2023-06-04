status="";
input_text = "";

function setup(){
    canvas = createCanvas(300,290);
    canvas.position(480,170);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video,0,0,300,290);
}