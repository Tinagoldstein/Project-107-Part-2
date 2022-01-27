function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/x0nQdO34t/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}