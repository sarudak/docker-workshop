const express = require('express'),
	app = express()

app.get("/", 
	function(request, response) {
		response.send("Hello Daptiv!");
	});

const port = 8280;
app.listen(port, ()  => {
	console.log(`Server listening on port ${port}`);
});
