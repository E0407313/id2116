//list of filename to be loaded
let image_filelist = ['images/monkey.jpg','images/penguin.jpg','images/pig.jpg','images/panda.jpg','images/whale.jpg', 'images/tiger.jpg', 'images/dog.jpg','images/bear.jpg','images/elephant.jpg'];
//a variable to store images as a list
let imagelist = [];


//preload() function "preload"s large objects before loading the main sketch.
function preload() {

  //loop through every filenames in the filelist.
  for(let filename of image_filelist){
    //load and push the image into the imagelist
    imagelist.push( loadImage(filename) ); 
  }

  print(imagelist.length+ " images are loaded into the list!");
  
}

//variables to store button objects
let nextButton;
let prevButton;

function setup() {
  createCanvas(1400, 1400);
  
  //create a button with "prev" text 
  prevButton = createButton('<--');
  //set prev() function to call prev() when mousePressed 
  prevButton.mousePressed(prev);
  
  //create a button with "next" text   
  nextButton = createButton('-->');
  //set next() function to call next() when mousePressed 
  nextButton.mousePressed(next);
  
}

function draw() {
  // Displays the current image 
  show();  
}

//The current image id
let current_image = 0;

//show current_image from the imagelist.
function show(){
 image(imagelist[current_image], 0, 0);
}

//set the current_image to next id
function next(){
 current_image = current_image + 1;
 
 if(current_image > imagelist.length - 1){
   current_image = 0;
 }
 print("next image is " + current_image);
}

//set the current_image to previous id
function prev(){
 current_image = current_image - 1;
 
 if(current_image < 0){
   current_image = imagelist.length - 1;
 }

 print("prev image is " + current_image);
}
