const https = require('https');
var chunklist = "";
function getAndPrintHTMLChunks () {
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

  https.get(requestOptions,function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    chunklist += (data + "\n");
  });
  response.on('end', function(end) {
      console.log(chunklist);
    console.log('Response stream complete.');
  });
  })
}

  getAndPrintHTMLChunks();