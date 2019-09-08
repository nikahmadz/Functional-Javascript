const
_while=function(condition,interval){
  if(condition()){
    const args=arguments,that=this;
    run(function(){_while.apply(that,args)},interval)
  }
}
;
