var status="";
var img="";

function preload(){
    img=loadImage("AC_image.jpg")
}

function setup(){
    canvas=createCanvas(500,550);
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: detceting objects"
}

function modelLoaded(){
    status=true;
    objectDetector.detect(img,gotResults)
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        document.getElementById("number_of_objects").innerHTML="Image detected: "+results.length
    }
}
