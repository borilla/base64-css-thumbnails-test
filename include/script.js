document.addEventListener('click', function (event) {
	var target = event.target;
	var classList = target.classList;

	if (classList.contains('load-all-images')) {
		loadAllImages();
	}

	if (classList.contains('img-placeholder')) {
		loadImage(target);
	}
});

function loadAllImages() {
	var placeholders = document.querySelectorAll('.img-placeholder');
	var i, l;

	for (i = 0, l = placeholders.length; i < l; ++i) {
		loadImage(placeholders[i]);
	}
}

function loadImage(placeholder) {
	var classList = placeholder.classList;
	var noscript, div, img;

	if (classList.contains('is-loaded') || classList.contains('is-loading')) {
		return;
	}

	noscript = placeholder.querySelector('noscript');
	div = document.createElement('div');
	div.innerHTML = noscript.textContent;
	img = div.querySelector('img');

	classList.add('is-loading');
	classList.remove('is-failed');

	img.onload = function (event) {
		classList.remove('is-loading');
		classList.add('is-loaded');
		placeholder.removeChild(noscript);
		placeholder.appendChild(img);
	};

	img.onerror = function (event) {
		classList.remove('is-loading');
		classList.add('is-failed');
	};
}
