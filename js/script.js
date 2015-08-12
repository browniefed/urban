
jQuery(function($) {
$(document).ready( function() {

    var additionalOffset = $('.navbar').outerHeight();
    if (!$('.navbar-mobile').is(':hidden')) {
        additionalOffset = $('.navbar-mobile').outerHeight();
    }
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
                topMargin: additionalOffset + 30
              });
    });
});
    
(function() {

    var intializedMaps = {};
    function initMap(map) {
        if (!intializedMaps[map]){
            mapFunctions[map]();
            intializedMaps[map] = true;
        }
    }

    initMap('portland');

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

    $('.navbar .menuItem, .mobilemenu .mobileMenuItem').on('click', function(e) {
        e.preventDefault();
        var offset = $($(this).attr('href')).offset();
        var additionalOffset = $('.navbar').outerHeight();
        if (!$('.navbar-mobile').is(':hidden')) {
            additionalOffset = $('.navbar-mobile').outerHeight();
        }

        $('body,html').animate({
            scrollTop: offset.top - additionalOffset
        }, 500);
    });

    $('.changeMenu').on('click', function() {
        var menu = $(this).attr('id');
        $('.changeMenu').removeClass('selected');
        $(this).addClass('selected');
        $('.cost_menu').hide();
        $('.' + menu).show();
    })

    $(window).on('scroll', debounce(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrolltop').addClass('show');
        } else {
            $('#scrolltop').removeClass('show');
        }
    }, 20, true));

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

        var id = $(this).attr('id');
        $tabContents.removeClass('visible');
        $tabContents.filter('.' + $(this).attr('id')).addClass('visible');
        initMap(id);
    });
        
    $tabsMobileSelect = $('#locationChangeMobile');

    $tabsMobileSelect.on('change', function() {
        var val = $(this).val();
        $tabContents.removeClass('visible');
        $tabContents.filter('.' + $(this).val()).addClass('visible');
        initMap(val);
    });


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


    var navbarmobile = $('.navbar-mobile')[0];
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('mobilemenu'),
        'padding': 256,
        'tolerance': 70,
        onTranslate: function(param, translate) {
            navbarmobile.style[param] = navbarmobile.style.transform = translate;
        },
        onTransition: function(param, transition) {
            navbarmobile.style[param] = navbarmobile.style.transition = transition;
        }
      });

        $('#hamburger, .mobilemenu a').on('click', function(e) {
            if ($(this).hasClass('mobileMenuItem')) {
                e.preventDefault();
            }
            slideout.toggle();            
        });

}())