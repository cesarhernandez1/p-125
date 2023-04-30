function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}




function draw() {
    background('#ff0000');
    fill('#4287f5');
    stroke('#f04a4a');
    text("Cesar",noseX, noseY);
    textSize(25)
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
