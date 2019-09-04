const
getUrlParameters=function(parameterString,decoded){
  const o={},s=(decoded?decodeURI(parameterString):parameterString)||'';
  s.split(/[?&#]/).forEach(function(p){
    const
    i=p.indexOf('='),
    k=p.slice(0,i),
    v=p.slice(i+1).replace(/\+/g,' ')
    ;
    if(!avs(p)){return}
    else if(i>0){o[k]=v}
    else if(i==-1){o[p]=''}
  })
  return o
}
;

// usage
getUrlParams(w.location.search)
