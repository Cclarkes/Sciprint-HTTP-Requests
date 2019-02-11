function getHTML (options, callback) {
    const https = require('https');
    var chunklist = "";
    https.get(options,function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
          console.log('Chunk Received. Length:', data.length);
          chunklist += (data + "\n");
        });
        response.on('end', function(end) {
            callback(chunklist);
          console.log('Response stream complete.');
        });
        })
      }

  function printHTML (html) {
    console.log(html);
  }

  module.exports = {
      getHTML: getHTML
  }


//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step5.html'
//   };

//   getHTML(requestOptions, printHTML)