const each=function(list,index,step,max,call){if(index>max||call.call(this,index,list[index])===false){return}each.call(this,list,index+step,step,max,call)};
each(TQS,0,1,TQS.length-1,function(index,item){
  console.log(item,index);
})
