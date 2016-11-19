function modalClose() {
	if (location.hash == '#openModal') {
		location.hash = '';
	}
}

document.addEventListener('keyup', function(e) {
	if (e.keyCode == 27) {
		modalClose();
	}
});

var modal = document.querySelector('#openModal');
modal.addEventListener('click', function(e) {
	modalClose();
}, false);

modal.children[0].addEventListener('click', function(e) {
	e.stopPropagation();
}, false);