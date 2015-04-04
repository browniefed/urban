
jQuery(function($) {
$(document).ready( function() {
  $('.navbar').stickUp({
                parts: {
                  0:'home',
                  1:'menu',
                  2: 'booknow',
                  3: 'locations',
                  4: 'team',
                  5: 'quotes'
                },
                itemClass: 'menuItem',
                itemHover: 'active',
                topMargin: 'auto'
              });
    });
});
    
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

    $('.navbar .menuItem').on('click', function(e) {
        e.preventDefault();
        var offset = $($(this).attr('href')).offset();
        $('body,html').animate({
            scrollTop: offset.top - 10
        }, 500);
    })

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

    var topQuotes = [
                    'Your mini-break',
                    'Luxury you can\'t live without',
                    'The best waxx you\'ll ever have',
                    'Trust, confidence, connection',
                    'A secret told with no judgment',
                    'A mimosa on a Tuesday',
                    'Say good-bye to your razor',
                    'Devoted expert care',
                    'Experience, understanding, integrity',
                    'You and Us'
                ]

    var $replaceQuote = $('.quote-container .quote'),
        quoteIndex = 0;

    function getIndex(currentIndex) {
        var nextIndex = ++currentIndex;
        if ( nextIndex == (topQuotes.length)) {
            return 0;
        }
        return nextIndex;
    };

    setInterval(function() {
        quoteIndex = getIndex(quoteIndex);
        $replaceQuote.text(topQuotes[quoteIndex]);
    }, 4000);



    var bottomQuotes =  [
                        'I will never go anyplace else.',
                        'I booked my next appointment on the spot and will definitely be back!!',
                        'I can confidently recommend Urban Waxx to anyone.',
                        'I\'m completely impressed. Urban Waxx will have my business for all my waxing needs going forward.',
                        'An excellent establishment.  Very kind staff and a warm inviting atmosphere.',
                        'Very very very happy, and would gladly recommend this to anyone.',
                        'Absolutely no awkwardness ever.',
                        'Free mimosa while you wait? I was sold when I walked in the door.',
                        'Great ambience and customer service.',
                        'Go here. Now. Its amazing. I said now!',
                        'I kissed all that anxiety away when I discovered Urban Waxx.',
                        'Best possible experience.',
                        'If there was a 100 star option I would give it to them.',
                    ];

        var $replaceLoveQuote = $('#quotes .quoteslove'),
            bottomQuoteIndex = 0;

    function getBottomIndex(currentIndex) {
        var nextIndex = ++currentIndex;
        if ( nextIndex == (bottomQuotes.length)) {
            return 0;
        }
        return nextIndex;
    };

    setInterval(function() {
        bottomQuoteIndex = getBottomIndex(bottomQuoteIndex);
        $replaceLoveQuote.text(bottomQuotes[quoteIndex]);
    }, 2000);

}())