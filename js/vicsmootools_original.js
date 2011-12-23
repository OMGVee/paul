window.addEvent('domready', function(){

	// *************** SCROLLING NAVIGATION
	
	var scroll = new Fx.Scroll(window, {duration: 1000, wait: false, transition: Fx.Transitions.quadInOut});
	
	$$('.gotohome').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_home'); });
	$$('.gotoservices').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_services'); });
	$$('.gotogallery').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_gallery'); });
	$$('.gotocontact').addEvent('click', function(event){ event = new Event(event).stop(); scroll.toElement('absolute_contact'); });
	
	
	// *************** SHOW CASE
	
	// *************** PRINT DESIGN
	
	var mySlide1 = new Fx.Slide('showcase-psrfall', {duration: 400, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide2 = new Fx.Slide('showcase-psrspring', {duration: 500, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide7 = new Fx.Slide('showcase-ipi', {duration: 600, wait: false, transition: Fx.Transitions.quadInOut});
	   
	//initially hide everything
	mySlide1.hide();
	//mySlide2.hide();
	mySlide7.hide();
	
	$('phirhofall').addEvent('click', function(e){
		e = new Event(e);
		mySlide1.toggle();
		mySlide2.slideOut();
		mySlide7.slideOut();
		e.stop();
	});
	
	$('phirhospring').addEvent('click', function(e){
		e = new Event(e);
		mySlide1.slideOut();
		mySlide2.toggle();
		mySlide7.slideOut();
		e.stop();
	});
	
	$('ipi2009').addEvent('click', function(e){
		e = new Event(e);
		mySlide1.slideOut();
		mySlide2.slideOut();
		mySlide7.toggle();
		e.stop();
	});
	
	// *************** WEBSITE DESIGN
	
	var mySlide3 = new Fx.Slide('showcase-evacare', {duration: 400, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide4 = new Fx.Slide('showcase-lakiff', {duration: 500, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide5 = new Fx.Slide('showcase-duffled', {duration: 450, wait: false, transition: Fx.Transitions.quadInOut});
	var mySlide6 = new Fx.Slide('showcase-rickdavid', {duration: 550, wait: false, transition: Fx.Transitions.quadInOut});
	   
	//initially hide everything
	//mySlide3.hide();
	mySlide4.hide();
	mySlide5.hide();
	mySlide6.hide();
	
	$('evacare').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.toggle();
		mySlide4.slideOut();
		mySlide5.slideOut();
		mySlide6.slideOut();
		e.stop();
	});
	
	$('lakiff').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.toggle();
		mySlide5.slideOut();
		mySlide6.slideOut();
		e.stop();
	});
	
	$('duffled').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.slideOut();
		mySlide5.toggle();
		mySlide6.slideOut();
		e.stop();
	});
	
	$('rickdavid').addEvent('click', function(e){
		e = new Event(e);
		mySlide3.slideOut();
		mySlide4.slideOut();
		mySlide5.slideOut();
		mySlide6.toggle();
		e.stop();
	});
	
	$$('.close-print').each(function(el){
		el.addEvent('click', function(event) {
			event = new Event(event).stop();
			mySlide1.slideOut();
			mySlide2.slideOut();
			mySlide7.slideOut();
		});
	});
	
	$$('.close-web').each(function(el){
		el.addEvent('click', function(event) {
			event = new Event(event).stop();
			mySlide3.slideOut();
			mySlide4.slideOut();
			mySlide5.slideOut();
			mySlide6.slideOut();
		});
	});
	
}); 	
