(function() {
    $('.menu_selector a').on('click', function(e) {
        e.preventDefault();
        $('.striped_menu').hide();
        $('.selected').removeClass('selected');
        $(this).parent().addClass('selected');
        $('.' + $(this).attr('id')).show();
    });

   	$('.openpopup').click(function(){
		var mymodal = new jBox('Modal', {
		    content: $('#' + $(this).attr('data-id')),
		    width: 310,
		    minHeight: 195, 
		    overlay: false,
		    fade: 100,
		    closeOnClick: true,
		    closeButton: false,
		    ignoreDelay: true,
		}); 
		mymodal.toggle();       		
	});
}())