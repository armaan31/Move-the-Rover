canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var i=[
    "https://mahdihat791.github.io/v2/ADV-C84.com/nasa_image_1.jpg",
    "mars.jpg"
];
var r=Math.floor(Math.random()*2);
var rw=100;
var rh=90;
var rx=10;
var ry=10;
function add(){
    bgimg = new Image();
    bgimg.onload=uploadBackground;
    bgimg.src=i[r];
    //Below is Rover, above is canvas background
    rimg = new Image();
    rimg.onload=uploadRover;
    rimg.src="rover.png";
}
function uploadBackground(){
    ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rimg, rx, ry, rw, rh);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if (keypressed=="38"){
        up();
    }
    if (keypressed=="40"){
        down();
    }
    if (keypressed=="37"){
        left();
    }
    if (keypressed=="39"){
        right();
    }
}
function up(){
    if (ry>=0){
        ry=ry-10;
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (ry<=500){
        ry=ry+10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (rx>=0){
        rx=rx-10;
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rx<=700){
        rx=rx+10;
        uploadBackground();
        uploadRover();
    }
}