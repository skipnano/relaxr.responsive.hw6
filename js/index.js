/*
Project Name: Relaxr Responsive
Client: Relaxr
Author: Dean Gilroy
Developer @GA in NYC
*/

/*
PSEUDO CODE:
Load scripts after all DOM elements have loaded
Listen for click on menu-btn
	toggle the expand class on, and display the responsive-menu
Listen for click on menu-btn
	toggle the expand class off, and hide the responsive-menu
*/

$(document).ready(function() {
		console.log("scripts loaded");

		jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand');
    	     })
        });
});
