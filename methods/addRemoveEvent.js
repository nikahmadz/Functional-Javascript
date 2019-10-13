const
slice=function(a,n){return Array.prototype.slice.call(a,n)}
ae=function(o,e,f){
  if(!ao(o)){throw xa('addEvent','target',o)}
  if(!avs(e,1)){throw xa('addEvent','event',e)}
  if(!af(f)){throw xa('addEvent','function',f)}
  const c=slice(arguments,1),on='on'+e;
  if(o.addEventListener){o.addEventListener.apply(o,c)}
  else if(o.attachEvent){c[0]=on;o.attachEvent.apply(o,c)}
  else if(f[on]!==true){
    const n=function(){
      if(af(n.o)){n.o.apply(o,c)}
      f.apply(o,c)
    };
    f[on]=true;
    n.o=o[on];
    o[on]=n;
  }
},
re=function(o,e,f){
  if(!ao(o)){throw xa('removeEvent','target',o)}
  if(!avs(e,1)){throw xa('removeEvent','event',e)}
  if(!af(f)){throw xa('removeEvent','function',f)}
  const c=slice(arguments,1),on='on'+e;
  if(o.removeEventListener){o.removeEventListener.apply(o,c)}
  else if(o.detachEvent){c[0]=on;o.detachEvent.apply(o,c)}
  else{o[on]=null;f[on]=null}
}
;

ae(w,'error',ef)
re(w,'error',ef)
