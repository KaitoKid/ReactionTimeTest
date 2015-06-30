var clickNumber = 0;
var createDelay = 1000;
var delay = 250;
var goNogo = [true, false, false, true]
var reactionTimeList = [];
var startTime;
var trueStart;
var clicks = 0;
var reactionTime = 0;
var element = document.getElementById("bg");
var date;

var misClickTimes = [];

$(document).ready(function() {
    $("#startButton").click(function(){
        $('#startButton').css('display', 'none');
		change();
		var date = new Date();
		startTime = date.getTime();
		trueStart = startTime;
    }); 
	
	$("#dontclick").click(function(){
		var temp = (new Date).getTime();
		misClickTimes.push(temp-trueStart);
	}); 
});

function change(){
	if (goNogo[clickNumber]){
		setTimeout(go, createDelay);
	}
	else{
		setTimeout(stop, createDelay);
	}
}

function go(){
	console.log("Go");
	var date = new Date();
	startTime = date.getTime();
	document.getElementById("bg").style.backgroundColor="green";
	document.getElementById("bg").style.display="block";
}

function stop(){
	document.getElementById("bg").style.backgroundColor="green";
	document.getElementById("bg").style.display="block";
	
	console.log("Stop");
	var date = new Date();
	startTime = date.getTime();

	setTimeout(turnBlack, delay);
	
	if (clickNumber < goNogo.length){
		setTimeout(hide, 1000);
		setTimeout(change, 1000);
	}
	else {
		endGame();
	}
}

function hide(){
	console.log('hide');
	document.getElementById("bg").style.display="none";
	clickNumber++;
	delay += 50;
}

function turnBlack(){
	document.getElementById("bg").style.backgroundColor="black";
	document.getElementById("bg").style.display="block";
}

function clicked(){
	var date = new Date();
	var currentTime = date.getTime();
	reactionTimeList.push(startTime - currentTime);
	document.getElementById("bg").style.display="none";
	
	if (!goNogo[clickNumber]){
		console.log('increment');
		delay -= 50;
	}
	
	clickNumber++;
	
	if (clickNumber < goNogo.length){
		change();
	}
	else {
		endGame();
	}
}

function endGame(){
	document.getElementById("bg").style.display="none";
	for(var i=0; i<reactionTimeList.length; i++) {
		reactionTimeList[i] *= -1;
	}
	console.log('Game End');
}
