const getFormatedTime = function(time){

	function get00(v){
		return (v<10)?'0'+v:
				(v>59)?'00':v
	}
	
	function get12(h){
		return (h<12)?get00(h):
				(h>23)?'00':get12(h-12)
	}
	
	function getSession(time){
		return (time.getHours()<12)?'AM':'PM'
	}
	
	const
	h = get12(time.getHours()),
	m = get00(time.getMinutes()),
	s = get00(time.getSeconds()),
	session = getSession(time),
	formatedTime = h + ":" + m + ":" + s + " " + session
	;
	
	return formatedTime
}
