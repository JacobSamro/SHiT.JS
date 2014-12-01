var shit = {
	name:'SHiT.JS',
	version:'0.1',
	not_found:' Unable to find a element',
	show 	: function(to){ 
if(to.substr(0,1)=='#')
	{
		to = to.substr(1,to.length);
		var e = document.getElementById(to);
		e == undefined ? this.log():e.style.display='block'; 
	}
	else if(to.substr(0,1)=='.')
	{
		to = to.substr(1,to.length);
		var shows = document.getElementsByClassName(to);
		if(shows.length==0)
			this.log()
		else{
			for(var i = 0; i < shows.length; i++)
				{
					shows[i]==undefined?this.log():shows[i].style.display = 'block';
				}
			}
	}
	else
	{
		var shows = document.getElementsByTagName(to);
		if(shows.length==0)
			this.log();
		else
		{
			for(var i = 0; i < shows.length; i++) 
				{
					shows[i]==undefined?this.log():shows[i].style.display = 'block';
				}
		}
	}
},

	hide 	: function(to){ 
	if(to.substr(0,1)=='#')
	{
		to = to.substr(1,to.length);
		var e = document.getElementById(to);
		e == undefined ? this.log():e.style.display='none'; 
	}
	else if(to.substr(0,1)=='.')
	{
		to = to.substr(1,to.length);
		var hides = document.getElementsByClassName(to);
		if(hides.length==0)
			this.log()
		else{
			for(var i = 0; i < hides.length; i++)
				{
					hides[i]==undefined?this.log():hides[i].style.display = 'none';
				}
			}
	}
	else
	{
		var hides = document.getElementsByTagName(to);
		if(hides.length==0)
			this.log();
		else
		{
			for(var i = 0; i < hides.length; i++) 
				{
					hides[i]==undefined?this.log():hides[i].style.display = 'none';
				}
		}
	}
},

	toggle	:function(to){
	if(to.substr(0,1)=='#')
	{
		to = to.substr(1,to.length);
		var e = document.getElementById(to);
		if(e == undefined )
			this.log()
		else
			e.style.display=='block'?e.style.display='none':e.style.display='block'; 
	}
	else if(to.substr(0,1)=='.')
	{
		to = to.substr(1,to.length);
		var togs = document.getElementsByClassName(to);
		if(togs.length==0)
			this.log()
		else{
			for(var i = 0; i < togs.length; i++)
				{
					if(togs[i]==undefined)
						this.log()
					else
						togs[i].style.display == 'none'?togs[i].style.display = 'block':togs[i].style.display = 'none';
				}
			}
	}
	else
	{
		var togs = document.getElementsByTagName(to);
		if(togs.length==0)
			this.log();
		else
		{
			for(var i = 0; i < togs.length; i++) 
				{
					if(togs[i]==undefined)
						this.log()
					else
						togs[i].style.display == 'none'?togs[i].style.display = 'block':togs[i].style.display = 'none';
				}
		}
	}
},
	log:function(){
		console.log(shit.name + shit.not_found);
	}	
};





