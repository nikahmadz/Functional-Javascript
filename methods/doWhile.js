const
_do=function(condition,repeat,interval,onExit){
  if(condition()){
    repeat();
    const args=arguments,that=this;
    run(function(){_do.apply(that,args)},interval)
    return
  }
  af(onExit)?onExit():_;
},
_while=function(condition,repeat,interval,onExit){
  if(condition()){
    const args=arguments,that=this;
    run(function(){repeat();_while.apply(that,args)},interval)
    return
  }
  af(onExit)?onExit():_;
}
;
