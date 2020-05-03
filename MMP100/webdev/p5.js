let testVariable; //declare a global variable

let input1;
let threshold;

let lookX = 0; //initalize variable with value of 0

function setup() { //setup function runs one time at beginning of program execution
  createCanvas(400, 400); //setting the size of our sketch
  
   // initialize variables with a value
  input1 = 120; //datatype is integer
  threshold = 100; //datatype is an integer
}

function draw() { //draw frunction runs over and over after the setup function has finished
  background(255); // turn every pixel white
  
  input1 = mouseX; //use the system variable mouseX (which gives x-coord of the cursor) to assign a new value to the variable named input1
  
  if (input1 > threshold){ //if the value of the variable named input1 is greater than the value of the variable named threshold, execute code inside of curly brackets
      background(color(0, 0, 255)); //color the background black
    
  }
  
  else if(input1 > threshold / 2){ //code runs if the if statement is not satisfied
    let rChannel = int(map(input1, 50, 100, 255, 0));
      background(rChannel,0,0); //set bg to red
  }
  
  else{ //if the previous if & else if statements aren't satisfied, run code in the else statment between curly brackets
    
    //int() function turns data into integer type
    //map() function stretches / compresses data range
    let gChannel = int(map(input1, 0, 50, 255, 0));
    background(155,gChannel, 0);
    console.log(gChannel); //print value of input1 to the console
  }
  
  fill(55, 70, 200);
  strokeWeight (8);
  stroke(2);
  
  
  let c = color(255, 204, 0); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
stroke(2); // Don't draw a stroke around shapes
ellipse(45, 110, 480, 480); // Draw left circle


c = color(0,255,0); // Update 'c' with grayscale value
fill(c); // Use updated 'c' as fill color
ellipse(195, 105, 480, 480); // Draw right circle
  
  
  
  //drawing eyes
  fill('#222222')
  
  
  ellipse(100, 100, 90, 50); // draw an ellipse ventered on (100,100) with a width of 80px and a height of 40px

 ellipse(300, 100, 90, 50); // draw an ellipse ventered on (100,100) with a width of 80px and a height of 40px
  
  //making moving eyeballs
  fill(0,255,0); // set fill to green
  stroke(0) // set stroke to none
  
lookX = map(mouseX, 0, width, -20, 20, true); 
  
  ellipse(100 + lookX, 100, 30, 40); // draw an ellipse ventered on (100,100) with a width of 80px and a height of 40px

 ellipse(300 + lookX, 100, 30, 40); // draw an ellipse ventered on (100,100) with a width of 80px and a height of 40px
  
  
  
  //making moving pupils
  fill(0); //set fill to black
  noStroke(0); //set stroke to none
  
lookX = map(mouseX, 0, width, -20, 20, true); 
  
  ellipse(100 + lookX, 100, 10, 15); // draw an ellipse ventered on (100,100) with a width of 80px and a height of 40px

 ellipse(300 + lookX, 100, 10, 15); // draw an ellipse ventered on (100,100) with a width of 80px and a height of 40px
  
  console.log(mouseX + ", " + mouseY); //mousex and mouse Y are system variables that show mouse position
  
  //cheeks
  fill(255, 204, 0);
  stroke(2);
  rect(36, 160, 85, 75, 50);
  fill(255, 204, 0);  

  fill(255, 204, 0);
  stroke(2);
  rect(285, 160, 85, 75, 50);
  
  
  //drawing a nose 
  arc(210, 200, 60, 40, PI / 2, 3 * PI / 2); // 180 degrees
  stroke(2);
  circle(192, 210, 5);
  
  stroke(2);
  circle(200, 210, 5);
  fill('rgb(100%,0%,10%)')
 

  //drawing a mouth
  
 let tempVar;
  
  if (mouseX > width/2){
  beginShape();
    curveVertex(150, 265);
    curveVertex(170, 290);
    curveVertex(220, 285)
    curveVertex(250, 250);
    curveVertex(235, 230);
 
  endShape();
    fill (255, 0, 0);
    strokeWeight(2);
    triangle(222, 270, 210, 285, 200, 285);
   
}
else{
beginShape();
    curveVertex(170, 290);
    curveVertex(170, 290);
    curveVertex(250, 250);
    curveVertex(250, 250);

 
endShape();
}

  translate(width/2, height/1.5);
  scale(mouseX / 800, mouseY / 800);


}
