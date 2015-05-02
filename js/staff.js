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

        
$(function () {
    var parent = $("#shuffle-pdx-guest");
    var divs = parent.children();
        while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
});

$(function () {
    var parent = $("#shuffle-eug-guest");
    var divs = parent.children();
        while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
});

$(function () {
    var parent = $("#shuffle-pdx");
    var divs = parent.children();
        while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
});

$(function () {
    var parent = $("#shuffle-eug");
    var divs = parent.children();
        while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
});
        