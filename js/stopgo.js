var clickNumber = 0;
var createDelay = [1000, 3000, 2000, 1000];
var goNogo = [true, false, false, true]
var reactionTimeList = [];
var startTime;
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
    }); 
	
	$("#dontclick").click(function(){
		var temp = date.getTime();
		misClickTimes.push(temp);
	}); 
});

function change(){
	if (goNogo[clickNumber]){
		setTimeout(go, createDelay[clickNumber]);
	}
	else{
		setTimeout(stop, createDelay[clickNumber]);
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
	console.log("Stop");
			var date = new Date();
		startTime = date.getTime();
	document.getElementById("bg").style.backgroundColor="black";
	document.getElementById("bg").style.display="block";
}

function clicked(){
	var date = new Date();
	var currentTime = date.getTime();
	reactionTimeList.push(startTime - currentTime);
	document.getElementById("bg").style.display="none";
	clickNumber++;
	if (clickNumber < createDelay.length){
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
