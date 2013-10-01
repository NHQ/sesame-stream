var websocket = require('websocket-stream')
var Time = require('since-when')

var Model = require('scuttlebutt/model');
var model = new Model();

var handlers = require('./handlers')
var stream = websocket('ws://localhost:11010?type=ticktock&interval=1000&payload=1000')


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