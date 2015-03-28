(function() {
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).on('scroll', debounce(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrolltop').addClass('show');
        } else {
            $('#scrolltop').removeClass('show');
        }
    }, 20, true));

    // scroll body to 0px on click
    $('#scrolltop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // $('.navbar').smint({
    //     'scrollSpeed' : 1000,
    // });
    // 
    var $locations = $('.locations'),
        $tabs = $locations.find('.tabs li'),
        $tabContents = $locations.find('.tab-content');

    $tabs.on('click', function(e) {
        e.preventDefault();
        $tabs.find('a').removeClass('active');
        $(this).find('a').addClass('active');

        $tabContents.removeClass('visible');
        $tabContents.filter('.' + $(this).attr('id')).addClass('visible');
    })

    var waxLocations = {
        portland: 'http://www.secure-booker.com/urbanwaxx18th/MakeAppointment/Search.aspx',
        division: 'http://www.secure-booker.com/urbanwaxxdivision/MakeAppointment/Search.aspx',
        tanasbourne: 'http://www.secure-booker.com/urbanwaxxamber/MakeAppointment/Search.aspx',
        eugene: 'http://www.secure-booker.com/urbanwaxxeugene/MakeAppointment/Search.aspx',
        timberland: 'http://www.secure-booker.com/urbanwaxxcedarfalls/MakeAppointment/Search.aspx'
    }

    var $selectLocation = $('#select_location'),
        $selectGuests = $('#select_guests'),
        $loadingText = $('.loading_text');

    $selectLocation.on('change', function() {
        var hasValue = !!$(this).val();

        setGuestVisibility(hasValue);
        if (!hasValue) {
            setLoadingTextVisibility(hasValue);
        }
    });
    $selectGuests.on('change', function() {
        var locVal = $selectLocation.val(),
            guestVal = $selectGuests.val();

        if (locVal && guestVal) {
            setLoadingTextVisibility(true);   
            window.location = waxLocations[locVal];
        }               
    });

    function setGuestVisibility(visible) {
        $selectGuests.toggle(visible);
    }
    function setLoadingTextVisibility(visible) {
        $loadingText.toggle(visible);
    }


    var $quotesContainer = $('.quotes'),                    
        $quotes = $quotesContainer.find('.quoteslove'),
        $nextQuote,
        index = 0;

    setInterval(function() {
        hideFadeout($quotes.eq(index));
        index++;
        $nextQuote = $quotes.eq(index);
        if (!$nextQuote.length) {
            index = 0;
            $nextQuote = $quotes.eq(index);
        }
        addFadeout($nextQuote);
    }, 500);

    addFadeout($quotes.eq(0));
        

    function addFadeout($el) {
        $el.show().addClass('fade-out');
    }

    function hideFadeout($el) {
        $el.hide().removeClass('fade-out');
    }


}())