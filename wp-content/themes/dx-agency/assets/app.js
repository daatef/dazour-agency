
(function () {
	'use strict';


	// Focus input if Searchform is empty
	[].forEach.call(document.querySelectorAll('.search-form'), (el) => {
		el.addEventListener('submit', function (e) {
			var search = el.querySelector('input');
			if (search.value.length < 1) {
				e.preventDefault();
				search.focus();
			}
		});
	});

	// Initialize Popovers: https://getbootstrap.com/docs/5.0/components/popovers
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl, {
			trigger: 'focus',
		});
	});

	//var colors = ["#123abc", "#12abc3", "#abc123", "#1dcb23", "#1876c3", "#a34523", "#165423", "#1dcb23", "#E53E3E", "#7B341E", "#D69E2E", "#48BB78", "#38B2AC", "#ED64A6"];
//var shuffledColors = [];

//for(var i = 0; i < document.getElementsByClassName("tag-item").length; i++){
  //refill shuffledColors with shuffled info from the colors variable if empty
// shuffledColors = shuffledColors.length ? shuffledColors : randoSequence(colors);
  
  //grab the next value from shuffledColors and apply it to the next div
 // document.getElementsByClassName("tag-item")[i].style.backgroundColor = shuffledColors.pop().value;
//}


})();

/* Dark Mode Function */
$('#header #dark-mode-switcher').on('click', function(){
	var $this = $(this);
	$(this).toggleClass("clicked")
	$('body').toggleClass("dark-mode");
	if ($this.hasClass("clicked")) {
		$this.html("Dark Mode.");
		$('footer #dark-mode-switcher').html('Dark Mode.')
	  } else {
		$this.html("Light Mode.");
		$('footer #dark-mode-switcher').html('light Mode.')
	  }
});
$('footer #dark-mode-switcher').on('click', function(){
	var $this = $(this);
	$(this).toggleClass("clicked")
	$('body').toggleClass("dark-mode");
	if ($this.hasClass("clicked")) {
		$this.html("Dark Mode.");
		$('#header #dark-mode-switcher').html('Dark Mode.')
	  } else {
		$this.html("Light Mode.");
		$('#header #dark-mode-switcher').html('light Mode.')
	  }
});


particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
