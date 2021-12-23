function openCre(){
            document.getElementById("sig-cre").style.height = "100%";
            document.getElementById("createacc").style.left = "50%";
        }
function openSign(){
            document.getElementById("sig-cre").style.height = "100%";
            document.getElementById("signin").style.left = "50%";
        }
function changeSign(){
            document.getElementById("createacc").style.left = "-50%";
            document.getElementById("signin").style.left = "50%";
        }
function changeCre(){
            document.getElementById("signin").style.left = "-50%";
            document.getElementById("createacc").style.left = "50%";
        }
function closeCS(){
            document.getElementById("createacc").style.left = "-50%";
            document.getElementById("signin").style.left = "-50%";
            document.getElementById("sig-cre").style.height = "0";
        }
function uploadFile(){
            document.getElementById("upfile").click();
}
function uploadImage(){
            document.getElementById("upimage").click();
}

function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imageSong')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("subplaylist");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].style.background = "white";
     dots[i].style.color = "#f26522";
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style.background = "#f26522";
  dots[slideIndex-1].style.color = "white";
}

function navchange(){
    document.getElementsById("navacc").style.left = "50%";
    document.getElementsById("navi").style.transform.rotate = "90deg";
}

function openDes(){
	document.getElementById("des-song").style.height = "100%";
	document.getElementById("less").style.display = "block";
	document.getElementById("more").style.display = "none";
}

function closeDes(){
	document.getElementById("des-song").style.height = "150px";
	document.getElementById("less").style.display = "none";
	document.getElementById("more").style.display = "block";
} 
function playMusic(){
	if(document.getElementById("myMusic").paused){
		document.getElementById("myMusic").play();
		document.getElementById("icon").className = "";
		document.getElementById("icon").className = "fa fa-pause";
	}
	else{
		document.getElementById("myMusic").pause();
		document.getElementById("icon").className = "";
		document.getElementById("icon").className = "fa fa-play";
	}
}
function changeprofile(){
	document.getElementById("f-profile").style.display = "block";
	document.getElementById("f-track").style.display = "none";
	document.getElementById("pro-select").style.background = "#f26522";
	document.getElementById("pro-select").style.color = "white";
	document.getElementById("track-select").style.background = "white";
	document.getElementById("track-select").style.color = "black";
}
function changetrack(){
	document.getElementById("f-track").style.display = "block";
	document.getElementById("f-profile").style.display = "none";
	document.getElementById("track-select").style.background = "#f26522";
	document.getElementById("track-select").style.color = "white";
	document.getElementById("pro-select").style.background = "white";
	document.getElementById("pro-select").style.color = "black";
}
var like = false;
function liked(){
	var x = document.getElementById("count-like");
	var text = x.innerHTML ;
	if(like){
		document.getElementById("btn-like").style.color = "#1b1d1d";
		document.getElementById("btn-like").style.border = "1px rgba(0,0,0,.2) solid";
		text = Number(text) - 1;
	}
	else{
		document.getElementById("btn-like").style.color = "red";
		document.getElementById("btn-like").style.border = "1px red solid";
		text = Number(text) + 1;
	}
	x.innerHTML = text;
	like = !like;
}


