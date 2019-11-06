$('.menu-btn').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('menu-btn-active');
	$('.header__bottom').toggleClass('menu-active');
	$('.b-fon').toggleClass('b-fon-act');
});
$('.b-fon').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('b-fon-act');
	$('.menu-btn').toggleClass('menu-btn-active');
	$('.header__bottom').toggleClass('menu-active');
});
// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		$('#email-field').click(function() {
			$(this).addClass("active");
       $(this).attr('placeholder','Email Address...');
			$('#subscribe-button').addClass("show");
		});
	
	});

})(window.jQuery);

//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});