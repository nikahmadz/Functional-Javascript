const
openUrl=function(url,target,delay){
  run(function(){w.open(url||'',target||'_self').focus()},delay||250)
}
;
