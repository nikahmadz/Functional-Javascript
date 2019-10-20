function each(list,index,step,max,call){if(index>max||call.call(this,index,list[index])===false){return}each.call(this,list,index+step,step,max,call)};
function each(o,x,c){if(c){each.call(this,o,x++,x<xx)}}

each(TQS,0,1,TQS.length-1,function(index,item){
  console.log(item,index);
})
