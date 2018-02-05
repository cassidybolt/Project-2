var bg;
var y = 0;

// function setup() {
//   // The background image must be the same size as the parameters
//   // into the createCanvas() method. In this program, the size of
//   // the image is 720x400 pixels.
//   bg = loadImage("images/Jungle.png");
//   createCanvas(576, 425);
// }

// function draw() {
//   background(bg);

//   stroke(226, 204, 0);

//   y++;
//   if (y > height) {
//     y = 0;
//   }
// } 

var bugs = []; // array of Jitter objects

function setup() {
  bg = loadImage("images/Jungle.png");
  createCanvas(576, 425);
  // Create objects
  for (var i=0; i<50; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(bg);
  fill (201,223,176);
  stroke(0, 150, 0);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  
    if (i>10) {
      fill(179, 247, 154);
    };
  }

   //Abstract flower shapes
  
   var shape1 = new JitterFlower(75, 75);
   fill(105,152,51);
   translate(shape1.x, shape1.y)
   shape1.move();
   shape1.display();

   var shape1 = new JitterFlower(180, 250);
   fill(0,80,15);
   translate(shape1.x, shape1.y)
   shape1.move();
   shape1.display();

   var shape1 = new JitterFlower(260,60);
   fill(105,152,51);
   translate(shape1.x, shape1.y)
   shape1.move();
   shape1.display();

  //  noStroke();
  //  fill(0,47,0);
  //  for (var i=0; i<10; i ++){
  //      ellipse (0,15,10,40);
  //      rotate(PI/5);
  //  }
   
   translate (420,220);
   noStroke();
   fill(255)
   for (var i=0; i<10; i ++){
       ellipse (0,15,10,40);
       rotate(PI/5);
   }
 
   translate (120,100);
   noStroke();
   for (var i=0; i<10; i ++){
       ellipse (0,15,10,40);
       rotate(PI/5);
   }
}



// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

// Jitter class
function JitterFlower(argx, argy) {
  this.x = argx;
  this.y = argy;
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    for (var i=0; i<10; i ++){
      ellipse (0,15,10,40);
      rotate(PI/5);
    }
  };
}

