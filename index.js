var express = require('express');
var fs = require('fs');
var thumbnails = require('./thumbnails.json');

var app = express();

app.get('/', function (req, res) {
	var html = '';

	html += '<!doctype html5>';
	html += '<html>';
	html += '<head>';
	html += '<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">';
	html += '<title>Image list</title>';
	html += '<style>' + fs.readFileSync('./include/style.css') + '</style>';
	html += '</head>';
	html += '<body>';
	html += '<h1>Image list</h1>';
	html += '<p>Click image to begin loading or <button class="link load-all-images">load all</button>';
	html += '<div class="tiles">';
	html += getTilesHtml();
	html += '</div>';
	html += '<script>' + fs.readFileSync('./include/script.js') + '</script>';
	html += '</body>';
	html += '</html>';

	res.send(html);
});

app.use(express.static('static'));

app.listen(3000, function () {
	console.log('listening on localhost:3000');
});

function getTilesHtml() {
	var html = '';

	thumbnails.forEach(function (image, index) {
		html += getTileHtml(image, index);
	});

	return html;
}

function getTileHtml(image, index) {
	var shouldFail = Math.random() < 0.1;
	var html = '';

	html += '<div class="tile">';
	html += '<div class="img-placeholder" style="background-image: url(BASE64)">';
	html += '<noscript><img src="SRC" alt="cat INDEX" /></noscript>';
	html += '</div>';
	html += '</div>';

	html = html.replace('BASE64', image.thumbnail.base64);
	html = html.replace('SRC', shouldFail ? 'images/invalid-image.txt?i=' + index : image.file);
	html = html.replace('INDEX', index + 1);

	return html;
}
