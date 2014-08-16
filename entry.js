window.Buffer = Buffer
var websocket = require('websocket-stream')
var Time = require('since-when')
var Model = require('scuttlebutt/model');
var model = new Model();
var plexus = require('dataplex')
var xxx = require('jmao')
var concat = require('concat-stream')

var stream = websocket('ws://localhost:'+window.location.port, {autoDestroy: false})

plex = plexus()

meta = plex.remote('/meta')
var data = {}
data.id = new Date().getTime()
data.cmd = 'add'
data.type = 'pingpong'
data = xxx.deconstruct(data)
console.log(xxx.construct(data))
meta.write(Buffer._augment(new Uint8Array(data)))
//var pp = plex.open('/pingpong')
//pp.on('data', function(data){
//  console.log(xxx.construct(data.buffer))
//})
//pp.write(Buffer._augment(new Uint8Array(data)))
stream.pipe(plex).pipe(stream)
console.log(stream)



