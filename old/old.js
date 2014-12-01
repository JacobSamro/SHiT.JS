var shit = {name:'SHiT.JS',version:'0.1',not_found:' unable to find the element'};
function show(to){ 
	if(to.substr(0,1)=='#'){
to = to.substr(1,to.length);
		document.getElementById(to).style.display='block'; 
	}
	else if(to.substr(0,1)=='.'){
to = to.substr(1,to.length);
var hides = document.getElementsByClassName(to);
for(var i = 0; i < hides.length; i++) {
         hides[i].style.display = 'block';
      }
	}
	else{
var hides = document.getElementsByTagName(to);
if(hides.length!=0){
for(var i = 0; i < hides.length; i++) {
         hides[i].style.display = 'block';
      }
  }
  else{
  		console.log(shit.name + shit.not_found);
  }
	}
}
function hide(to){ 
	if(to.substr(0,1)=='#'){
to = to.substr(1,to.length);
		document.getElementById(to).style.display='none'; 
	}
	else if(to.substr(0,1)=='.'){
to = to.substr(1,to.length);
var hides = document.getElementsByClassName(to);
for(var i = 0; i < hides.length; i++) {
         hides[i].style.display = 'none';
      }
	}
	else{
var hides = document.getElementsByTagName(to);
if(hides.length!=0){
for(var i = 0; i < hides.length; i++) {
         hides[i].style.display = 'none';
      }
  }
  else{
  		console.log(shit.name + shit.not_found);
  }
	}
}

function toggle(to){
	if(to.substr(0,1)=='#'){
to = to.substr(1,to.length);
document.getElementById(to).style.display=='block'?document.getElementById(to).style.display='none':document.getElementById(to).style.display='block';
	}
	else if(to.substr(0,1)=='.'){
to = to.substr(1,to.length);
var hides = document.getElementsByClassName(to);
for(var i = 0; i < hides.length; i++) {
hides[i].style.display=='block'?hides[i].style.display='none':hides[i].style.display='block';
      }
	}
	else{
var hides = document.getElementsByTagName(to);
if(hides.length!=0){
for(var i = 0; i < hides.length; i++) {
hides[i].style.display=='block'?hides[i].style.display='none':hides[i].style.display='block';
      }
  }
  else{
  	console.log(shit.name + shit.not_found);
  }
	}
}