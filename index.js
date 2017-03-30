var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
	var html = '';

	html += '<!doctype html5>';
	html += '<html>';
	html += '<head>';
	html += '<title>Image list</title>';
	html += '<style>' + fs.readFileSync('thumbnails.css') + '</style>';
	html += '<style>' + fs.readFileSync('index.css') + '</style>';
	html += '</head>';
	html += '<body>';
	html += '<h1>Image list</h1>';
	html += '<div class="tiles">';
	html += imageTagsHtml();
	html += '</div>';
	html += '</body>';
	html += '</html>';

	res.send(html);
});

app.use(express.static('static'));

app.listen(3000, function () {
	console.log('Example app listening on localhost:3000')
});

function imageTagsHtml() {
	var files = fs.readdirSync('static/images/');
	var html = '';

	files.forEach(function (file) {
		html += '<img src="images/' + file + '" title="' + file + '" />';
	});

	return html;
};
