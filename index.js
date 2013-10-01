var parse = require('url').parse
var qs = require('querystring')

var WebSocketServer = require('ws').Server
var websocketStream = require('websocket-stream')
var wss = new WebSocketServer({noServer: true})
var cookies = require('cookies');
var keygrip = require('keygrip')(['catpile', 'doglight'])

var sockets = require('./handlers')

module.exports = function(req, socket, head){
  var q = qs.parse(parse(req.url).query);
  wss.handleUpgrade(req, socket, head, function(ws){
console.log(ws)
    var stream = websocketStream(ws)
//    stream.session = session
    if(sockets.hasOwnProperty(q.type)){
      sockets[q.type](stream, q);	
      stream.on('metadata', function(data){
	console.log(JSON.parse(data))
      })	
    }
    else sockets.pingpong(stream)
  })

}
