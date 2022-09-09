var cocossd="";

function preload(){
    img=loadImage("")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML=" Status: Detecting objects"
}

function modelLoaded(){
    console.log("Model Loaded")
    status=true
    objectDetector.detect(img,gotResult)
}

function gotResult(error,results)