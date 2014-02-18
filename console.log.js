module.exports = function(stream, path, opts){

	opts = opts || Object.create(null);

	var ended = false;
	
	var payload = null;
	
	var d = Object.create(null)
	
	stream.on('end', closer)
	stream.on('close', closer)
  stream.pipe(process.stdout)	
	function closer(){
		ended = true
	}
	
	return stream
}
