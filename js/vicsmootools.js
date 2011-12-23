window.addEvent('domready', function(){

	// *************** SCROLLING NAVIGATION
	
	var scroll = new Fx.Scroll(window, {duration: 1000, wait: false, transition: Fx.Transitions.quadInOut});
	
	$$('.gotohome').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_home'); });
	$$('.gotoservices').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_services'); });
	$$('.gotogallery').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_gallery'); });
	$$('.gotocontact').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_contact'); });
	

}); 	
