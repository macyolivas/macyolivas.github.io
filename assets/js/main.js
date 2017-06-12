/**
 * Define Server Class
 * Containts general system functions for access server resources
 */
Server = function() { /* No Initialization */ }

/**
 * Allows the preloading of images
 * @param: (string) email
 */
Server.prototype.preload = function() {

	// Create image array
	var images = new Array();

	for (i = 0; i < this.preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = this.preload.arguments[i];
	}
	return images; 
}

/**
 * Execute after document has loaded
 */
$(document).ready(function() {

	// Site constants
	var HOST = window.location.hostname;

	// Hide fade-in class and show on window load
	$('.fade-in').hide();

	// Preload images on index page
	var server = new Server();
/*
	var img = server.preload(
//		'//' + HOST + '/assets/images/profile.jpg',
//		'//' + HOST + '/assets/images/profile-wide.jpg'
//		'//' + HOST + '/assets/images/paperstack.png'
	);
*/
});

/**
 * Execute after window is done loading
 */
$(window).load(function() {
	
	// Wait 1/2 second after load to complete
	setTimeout(function(){

		// Hide fade-in class and show on window load
		$('.fade-in').fadeIn();

	}, 500);

});