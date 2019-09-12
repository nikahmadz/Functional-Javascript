const
delay=function(period){
  const then={};
  run(function(){
    if(af(then._run)){then._run.apply(then._this,then._arguments)}
  },period)
  return then
}
;
