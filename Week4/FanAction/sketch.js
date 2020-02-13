
let playing = false;
let videoBackground;
let FanVideoFiles = {"fan":"videos/fanning.mp4","close":"videos/closefan.mp4","open":"videos/openfan.mp4"} ;

let fanstate = "fan";// {hover:1,flyaway:2,comeback:3};

let fan; 
let fanvideo = {};

let button;

function preload(){
  videoBackground = color(000,250,000);
}
function setup() {
  // specify multiple formats for different browsers
  createCanvas(1920,1080);
  // button = createButton('play');
  // button.mousePressed(toggleVid); // attach button listener
  for(let key in FanVideoFiles){
    console.log(key);
    let video = createVideo(FanVideoFiles[key])
    fanvideo[key] = video;
    video.hide();
  }
 

  
  fanvideo["fan"].loop();
 
  fanvideo["close"].onended(closefanEnd);
  fanvideo["open"].onended(openfanEnd);


}

function draw(){
  image(fanvideo[fanstate],0,0);
  
  
}

function mousePressed(){
  fanstate = "close";
  fanvideo[fanstate].play();
}

function closefanEnd(){
  console.log("end close");
  fanstate = "open";
  fanvideo["open"].play();
}

function openfanEnd(){
  console.log("end open");
  fanstate = "fan";
  fanvideo["fan"].loop();

}
