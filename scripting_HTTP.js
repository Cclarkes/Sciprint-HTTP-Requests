const https = require('https');
var chunkList = "";

function getAndPrintHTMLChunks (cb) {
    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

  https.get(requestOptions,function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
      cb(response)
    console.log('Chunk Received. Length:', data.length);
  });
  response.on('end', function(end) {
    console.log(chunkList);
    console.log('Response stream complete.');
  });
  })
}
  function concatenator(response) {
    for(data in response) {
       chunkList += ("\n" + data);
    }
  }

  getAndPrintHTMLChunks(concatenator);