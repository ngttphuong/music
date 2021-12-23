
bplay.addEventListener('click',playOrPause,false);

myMusic.addEventListener("loadedmetadata", changeDuration);

//timeline.addEventListener('click',clickedBar,false);

bmute.addEventListener('click',muted,false);

brepeat.addEventListener("click",loopTrack,false);

//bpre.addEventListener("click",previousSong,false);
//
//bnext.addEventListener("click",nextSong,false);

function changeDuration() {
  var minutes = parseInt(myMusic.duration/60);
  var seconds = parseInt(myMusic.duration%60);

  if(seconds < 10){
   seconds = '0' +  seconds;
  }
  myMusic.autoplay = true;
  updateTime = setInterval(updateCurrent,500);
  document.getElementById('icon').className = "";
  document.getElementById('icon').className = "fa fa-pause";
  fullDuration.innerHTML = minutes+":"+seconds;
 }
	var vm = 0;
function muted(){
	if(myMusic.muted){
		myMusic.muted = false;
		document.getElementById('mute').className = "";
		document.getElementById('mute').className = "fa fa-volume-up";
		document.getElementById('volumeBar').style.width = vm * 100 + "%";
		myMusic.volume = vm;
	}
	else{
		vm = myMusic.volume;
		myMusic.muted = true;
		document.getElementById('mute').className = "";
		document.getElementById('mute').className = "fa fa-volume-off";
		document.getElementById('volumeBar').style.width = "0%";
	}
}
function autoPlay(){
	document.getElementById('icon').className = "";
	document.getElementById('icon').className = "fa fa-pause";
	updateTime = setInterval(updateCurrent,500);	
}
function playOrPause(){
	if(!myMusic.paused && !myMusic.ended){
		myMusic.pause();
		document.getElementById('icon').className = "";
		document.getElementById('icon').className = "fa fa-play";
		window = clearInterval(updateTime);
	}
	else{
		myMusic.play();
		document.getElementById('icon').className = "";
		document.getElementById('icon').className = "fa fa-pause";
		updateTime = setInterval(updateCurrent,500);
	}
}

function updateCurrent(){
	if(myMusic.ended){
		currentTime.innerHTML = "0:00";
		document.getElementById('icon').className = "";
		document.getElementById('icon').className = "fa fa-play";
		
		document.getElementById('processtime').style.width = "0";
	}
	else{
		var cminutes = parseInt(myMusic.currentTime/60);
		var cseconds = parseInt(myMusic.currentTime%60);
			if(cseconds < 10){
				cseconds = '0' + cseconds;
			}
		currentTime.innerHTML = cminutes+":"+cseconds;
		
		var size = (myMusic.currentTime/myMusic.duration)*100;

		document.getElementById('processtime').style.width = size+"%";
	}
}

function clickedBar(e){
	var barsize = document.getElementById('timeline').clientWidth;
	var mouseX = e.pageX - con.offsetLeft;
	var newtime = mouseX*myMusic.duration/barsize;
	myMusic.currentTime = newtime;
//	document.getElementById('processtime').style.width = mouseX/barsize +"%";
	$('#processtime').css('width', mouseX/barsize + '%');
	updateTime = setInterval(updateCurrent,500);
}




var audio = document.getElementsByTagName('audio')[0];


$('.muted').click(function () {
    audio.muted = !audio.muted;
    return false;
});

//VOLUME BAR
//volume bar event
var volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    audio.muted = false;
    $('.sound').removeClass('muted');
    updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) {
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});
$(document).on('mousemove', function (e) {
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});
var updateVolume = function (x, vol) {
    var volume = $('.volume');
    var percentage;
    //if only volume have specificed
    //then direct update volume
    if (vol) {
        percentage = vol * 100;
    } else {
        var position = x - volume.offset().left;
        percentage = 100 * position / volume.width();
    }

    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }

    //update volume bar and video volume
    $('.volumeBar').css('width', percentage + '%');
    audio.volume = percentage / 100;

    //change sound icon based on volume
    if (audio.volume == 0) {
        $('.sound').removeClass('sound2').addClass('muted');
    } else if (audio.volume > 0.5) {
        $('.sound').removeClass('muted').addClass('sound2');
    } else {
        $('.sound').removeClass('muted').removeClass('sound2');
    }

};

var timeDrag = false;
$('#timeline').on('mousedown', function (e) {
    timeDrag = true;
    clickedBar(e);
});
$(document).on('mouseup', function (e) {
    if (timeDrag) {
        timeDrag = false;
        clickedBar(e);
    }
});
$(document).on('mousemove', function (e) {
    if (timeDrag) {
        clickedBar(e);
    }
});

function loopTrack(){
	if(myMusic.loop){
		myMusic.loop = false;
		document.getElementById('repeat').className = "";
		document.getElementById('repeat').className = "fa fa-repeat";
	}
	else{
		myMusic.loop = true;
		document.getElementById('repeat').className = "";
		document.getElementById('repeat').className = "fa fa-refresh";
	}
}

function audioPlayer(){
            var currentSong = 0;
            $("#myMusic")[0].src = $(".link")[0].innerHTML;
            $("#myMusic")[0].play();
			
            $("#playlist li .single-song").click(function(e){
               e.preventDefault(); 
				currentSong = $(this).parent().index();
               $("#myMusic")[0].src = $(".link")[currentSong].innerHTML;
               $("#myMusic")[0].play();
               $("#playlist li").removeClass("current-song");             
                $(this).parent().addClass("current-song");
            });
			
			$("#bpre").click(function(e){
				if(currentSong == 0){
					currentSong = $(".link").length - 1;
				}
				else{
					currentSong--;
				}
				$("#playlist li").removeClass("current-song");
                $("#playlist li:eq("+currentSong+")").addClass("current-song");
                $("#myMusic")[0].src = $(".link")[currentSong].innerHTML;
                $("#myMusic")[0].play();
			});
	
			$("#bnext").click(function(e){
				if(currentSong == $(".link").length - 1){
					currentSong = 0;
				}
				else{
					currentSong++;
				}
				$("#playlist li").removeClass("current-song");
                $("#playlist li:eq("+currentSong+")").addClass("current-song");
                $("#myMusic")[0].src = $("#playlist li .link")[currentSong].innerHTML;
                $("#myMusic")[0].play();
			});
            
            $("#myMusic")[0].addEventListener("ended", function(){
               currentSong++;
                if(currentSong == $(".link").length)
                    currentSong = 0;
                $("#playlist li").removeClass("current-song");
                $("#playlist li:eq("+currentSong+")").addClass("current-song");
                $("#myMusic")[0].src = $(".link")[currentSong].innerHTML;
                $("#myMusic")[0].play();
            });
        }

//function nextSong(){
//	
//}

