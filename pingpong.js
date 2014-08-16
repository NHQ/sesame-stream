var Time = require('since-when');
var concat = require('concat-stream')
var xxx = require('jmao')

var ns2ms = 1.0 / 1000000.0

module.exports = function(optject, emit){
  
  console.log(opject)
  
  var time = Time(); 

	var ended = false;
	
	var payload = null;
	
	var d = Object.create(null)

  return concat(function(data){
    
    data = xxx.construct(data) // the event @object
        
    d.timestamp = new Date().getTime();
    
    d.sinceBegin = time.sinceBegin()
    
    d.sinceLast = time.sinceLast()

    d.payload = data.payload

    data = xxx.deconstruct(data)

    cb(err, data)
  
  })

}

// ping pong
// if opts.payload is a number, a payload of that number will be created and sent
// if opts.payload is anything but undefined, it will be the payload (even null)
// if no payload is passed, this is the recieving end, and it will only return data it receieves
