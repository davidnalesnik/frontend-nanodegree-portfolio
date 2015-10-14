/**
 * This file creates two lines of text which move diagonally and "bounce"
 * off the edges of the browser window.  Each line changes color randomly
 * upon impact.
 */

var elem = null;
var screen_width = window.innerWidth;
var screen_height = window.innerHeight;
var BASIC_COLORS = ['yellow','fuchsia','red','silver','gray',
'olive','purple','maroon','aqua','lime','teal','green','blue','navy','black'];

function init () {
	elem = document.getElementById('construction');
	move(elem, 20);
	elem = document.getElementById('come-again');
	move(elem, 10);
}

function get_color () {
	return BASIC_COLORS[(Math.floor (Math.random() * 15))];
}

function move(elem, rate) {
	var x_dir = 1;
	var y_dir = -1;
	var text_bounds = elem.getBoundingClientRect();
	var text_left = text_bounds.left;
	var text_bottom = screen_height - text_bounds.bottom;
	var text_width = elem.clientWidth;
	var text_height = elem.clientHeight;

	function frame() {
		text_left += x_dir;
		text_bottom += y_dir;
		elem.style.left = text_left + 'px';
		elem.style.bottom = text_bottom + 'px';
		if (text_left >= (screen_width - text_width)) {
			x_dir = -1;
			elem.style.color = get_color();
		}
		if (x_dir === -1 && text_left <= 0) {
			x_dir = 1;
			elem.style.color = get_color();
		}
		if (text_bottom >= (screen_height - text_height)) {
			y_dir = -1;
			elem.style.color = get_color();
		}
		if (y_dir === -1 && text_bottom <= 0) {
			y_dir = 1;
			elem.style.color = get_color();
		}
	}

	setInterval(frame, rate);
}

window.onload = init;