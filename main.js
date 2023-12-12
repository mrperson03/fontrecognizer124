function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("posenet has been initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
    }
}

