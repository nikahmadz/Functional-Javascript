cosnt
getParameterString=function(params){
  const o=[];
  params.forEach(function(p){
    if(ac(p,[])){o.push(p.join('='))}
    else{o.push(p+'=')}
  })
  return o.join('&')
}
;

// usage
getParameterString([['key','value']])
