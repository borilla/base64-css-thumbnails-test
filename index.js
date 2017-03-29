var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
	var html = '';

	html += '<!doctype html5>';
	html += '<html>';
	html += '<head>';
	html += '<title>Games List</title>';
	html += '<style>' + fs.readFileSync('index.css') + '</style>';
	html += '<style>' + fs.readFileSync('thumbnails.css') + '</style>';
	html += '</head>';
	html += '<body>';
	html += '<h1>Games List</h1>';
	html += '<div class="tiles">';
	html += '<img src="images/acquisition-tile-00-300.jpg" />';
	html += '<img src="images/battleship-wild-targets-tile-15-300.jpg" />';
	html += '<img src="images/secrets-of-the-phoenix-tile-10-300.png" />';
	html += '<img src="images/acquisition-tile-00-300.jpg" />';
	html += '<img src="images/battleship-wild-targets-tile-15-300.jpg" />';
	html += '<img src="images/secrets-of-the-phoenix-tile-10-300.png" />';
	html += '<img src="images/acquisition-tile-00-300.jpg" />';
	html += '<img src="images/battleship-wild-targets-tile-15-300.jpg" />';
	html += '<img src="images/secrets-of-the-phoenix-tile-10-300.png" />';
	html += '<img src="images/acquisition-tile-00-300.jpg" />';
	html += '</div>';
	html += '</body>';
	html += '</html>';

	res.send(html);
});

app.use(express.static('static'));

app.listen(3000, function () {
	console.log('Example app listening on localhost:3000')
});
