const getHTML = require('./http_functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
    
var html = html.split("");
var html = html.reverse();
var html = html.join("");
console.log(html);
}

getHTML.getHTML(requestOptions, printReverse);