Reveal.addEventListener( 'fragmentshown', function( event ) {
	// event.fragment = the fragment DOM element

	if (event.fragment.id == 'movehamster'){
		var hamster = document.getElementById('hamsterdiv');
		hamster.className += " shrinkHamsterSlow";
	}
	
	
	if (event.fragment.id == 'movecheckout'){
		var hamster = document.getElementById('checkoutimage');
		hamster.className += " moveCheckout";
	}
	
	
		





} );