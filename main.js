function snapshot(){
    save(myfilterimage.png);
}

function preload() {
}

function setup() {
  canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  }

  function modelLoaded(){
      console.log("PoseNet Is Initialized");
       
    }
  
  function draw() {
      image(video,0,0,400,400);
  }

  function gotPoses(results){
      if(results.lenght>0){
        console.log(results);
        console.log("nose_x =" + results[0].pose.nose.x);
        console.log("nose_y =" + results[0].pose.nose.y);
      }

  }