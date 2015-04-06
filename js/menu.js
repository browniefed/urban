(function() {
    $('.menu_selector a').on('click', function(e) {
        e.preventDefault();
        $('.striped_menu').hide();
        $('.selected').removeClass('selected');
        $(this).parent().addClass('selected');
        $('.' + $(this).attr('id')).show();
    });
}())