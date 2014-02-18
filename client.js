var websocket = require('websocket-stream')
var Time = require('since-when')
var Model = require('scuttlebutt/model');
var model = new Model();

var handlers = require('./handlers')
//var stream = websocket('ws://localhost:11010?type=ticktock&interval=1000&payload=1000')
var stream = websocket('ws://localhost:11010?type=stdout')

window.addEventListener('click', evthandler) 
window.addEventListener('touchstart', evthandler) 
window.addEventListener('scroll', evthandler) 
window.addEventListener('deviceorientation', evthandler) 
stream.write(JSON.stringify(Modernizr))
function evthandler(evt){
  console.log(evt)
  stream.write(JSON.stringify({evt: evt.type}))
}
/*
var time = new Date().getTime();
var t = 0;
var l = 1024 * 1024
var buf;
init()
var time = Time();

handlers.pingpong(stream)

stream.on('metadata', function(data){
	console.log(data)
})

//ws.write(buf)
function init(){
	buf = new Int8Array(l);
	for(var x = 0; x < buf.length; x++){
		buf[x] = Math.sin((x / l) * Math.PI * 2)
	}
}
*/
