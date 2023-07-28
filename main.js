//teachablemachine.withgoogle.com/models/96lbXHt4z/

function startClassification()
{

    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('teachablemachine.withgoogle.com/models/96lbXHt4z/model.json',modelReady);
}

function modelReady(){

    classifier.classify(gotResults);
}