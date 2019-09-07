// manage que time and delays

const
gn=function(x,d){return an(x)?x:(d||0)},
gpn=function(x,d){const n=gn(x);return n>0?n:(d||0)},
getQueDelay=function(referedTime){return gpn(gn(referedTime)-now())},
getQueTime=function(referedTime,delay){return getQueDelay(referedTime)+now()+delay}
;

var nextQue=now();
nextQue=getQueTime(nextQue,1000);

var wait=getQueDelay(nextQue);
