(function() {
    $('#staff_select_mobile').on('change', function() {
        selectSection($(this).val());
    });
    $('.staff_select_large a').on('click', function(e) {
        e.preventDefault();
        $('.staff_select_large li').removeClass('selected');
        $(this).parent().addClass('selected');
        selectSection($(this).attr('id'));
    });

    function selectSection(selectClass) {
        $('.bio_section').hide();
        $('.' + selectClass).show();
    }
}())