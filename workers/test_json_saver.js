function get_transport() {
	return XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
};
// =================================================================== SAVE FILE TO SERVER
this.save_file = function ( phpFileURL, dataFileURL, dataFileContent ) {
	
	var data = JSON.stringify ( {
		file_name: dataFileURL,
		file_content: dataFileContent
	} )
	save_request = get_transport()
	save_request.onreadystatechange = function() {
		if ( save_request.readyState === 4 ) 
				console.log ( "save_request.responseText: ", 
					     save_request.responseText )
				postMessage( save_request.status === 200 )
	}
	
	save_request.open ( "POST", phpFileURL, true )
	save_request.setRequestHeader ( "X-Requested-With", "XMLHttpRequest" )
	save_request.setRequestHeader ( "Content-Type", 
				       "application/json; charset=utf-8" )
  save_request.send ( data )
}
// ====================================================== READ FILE FROM SERVER
this.read_file = function ( dataFileURL ) {
	read_request = get_transport()
	read_request.onreadystatechange = function() {
		if ( read_request.readyState < 4 ) return
		if ( read_request.status === 200 ) {
			this.data = read_request.responseText
			postMessage( read_request.responseText )
		} else {
			console.info ( "Reading file error: " + 
				      read_request.responseText )
			postMessage( false )
		}
	}
	read_request.open ( "POST", dataFileURL )
	read_request.send ()
}
// =================================================================================================== 
this.addEventListener ( 'message', function ( message ) {
	
	var theData = JSON.parse ( message.data )
	
	console.log ( 'worker reseived data: ', theData )
	
	if ( theData.data.operation === "save" )
		this.save_file ( theData.phpFileURL, theData.dataFileURL, theData.dataFileContent )
	else this.read_file ( theData.dataFileURL )
})
