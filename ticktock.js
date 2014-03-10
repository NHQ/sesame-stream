var Time = require('since-when');

module.exports = function(stream, path, opts){
	opts = opts || Object.create(null)

  var time = Time(); 
	var payload = null
	var ns2ms = 1.0 / 1000000.0
	var d = Object.create(null)
  d.metadata = {};
  d.metadata.type = 'ticktock'
	var ended = false;
	
	stream.on('end', closer)
	stream.on('close', closer)
	
	function closer(){
		ended = true
	}

	if(!(opts.payload === undefined)){
		
		if(!(isNaN(opts.payload))){
			payload = new Int8Array(opts.payload)		
		}
					
	}

	if(opts.interval){

		time.every(opts.interval / ns2ms, function(tick){			
			if(!ended){
				
				d.metadata.timestamp = new Date().getTime();
				
				d.metadata.sinceBegin = time.sinceBegin()
				
				d.metadata.sinceLast = time.sinceLast()
				
        d.data = undefined

				stream.write(JSON.stringify(d))
				
				stream.emit('metadata', d)
												
				tick();				
			}
		})
	}
	
	return stream
}
