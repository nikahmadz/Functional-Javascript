when_=function(x,c,i){x()?c():setTimeout(function(){return when_(x,c,i)},i)},
when =function(x,c,i){
	if(!af(c)){throw xuse('when','function',c)}
	if(!x){wc.warn("when() will never trigger for '"+x+"'")}
	when_(af(x)?x:function(){return x},c,i||500)
},
