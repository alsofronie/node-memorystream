var http = require('http'),
    MemoryStream = require('../index');

var options = {
	hostname: 'www.github.com'
};

var memStream = new MemoryStream(null,{
    readable : false
});

var req = http.request(options, function(res) {
  res.pipe(memStream)
	res.on('end',function(){
	    console.log(memStream.toString());
	});
});
req.end();
