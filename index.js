var express = require('express');
var fs = require('fs');
var thumbnails = require('./thumbnails.json');

var app = express();

app.get('/', function (req, res) {
	var html = '';

	html += '<!doctype html5>';
	html += '<html>';
	html += '<head>';
	html += '<title>Image list</title>';
	html += '<style>' + fs.readFileSync('index.css') + '</style>';
	html += '</head>';
	html += '<body>';
	html += '<h1>Image list</h1>';
	html += '<div class="tiles">';
	html += getTilesHtml();
	html += '</div>';
	html += '</body>';
	html += '</html>';

	res.send(html);
});

app.use(express.static('static'));

app.listen(3000, function () {
	console.log('app listening on localhost:3000');
});

function getTilesHtml() {
	var html = '';

	thumbnails.forEach(function (image) {
		html += getTileHtml(image);
	});

	return html;
}

function getTileHtml(image) {
	var html = '';
	var ratio = image.originalImage.height / image.originalImage.width * 100;

	html += '<div class="tile">';
	html += '<div class="img-placeholder" style="background-image: url(BASE64); padding-bottom: RATIO%">';
	html += '<img src="SRC" alt="" />';
	html += '</div>';
	html += '</div>';

	html = html.replace('BASE64', image.thumbnail.base64);
	html = html.replace('RATIO', ratio.toFixed(2));
	html = html.replace('SRC', image.file);

	return html;
}
