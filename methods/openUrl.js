const
openUrl=function(url,target,delay){
  const u=url||'';
  run(function(){avs(target)?w.open(u,target||'_blank').focus():w.location=u},delay||250)
}
;
