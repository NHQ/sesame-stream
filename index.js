var parse = require('url').parse
var qs = require('querystring')

var WebSocketServer = require('ws').Server
var websocketStream = require('websocket-stream')
var wss = new WebSocketServer({noServer: true})
var cookies = require('cookies');
var keygrip = require('keygrip')(['catpile', 'doglight'])
var dataplex = require('dataplex')
var handlers = require('./handlers')
var xxx = require('jmao')
var concat = require('concat-stream')

module.exports = function(req, socket, head){
  wss.handleUpgrade(req, socket, head, function(ws){
    var stream = websocketStream(ws, {autoDestroy: false})
    var plex = dataplex()
    plex.add('/meta', function(opject){
      console.log('meta added')
      var plex = plex
      return concat(function(data){
        data = xxx.construct(data)
        console.log(data)
        // data is the event, @object
        var method = data.method // the command, @string 
        plex[method](data.id, handlers[data.type])
      })      
    })
    stream.pipe(plex).pipe(stream)
  })
}
