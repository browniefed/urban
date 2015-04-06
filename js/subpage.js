(function() {

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

    $('#hamburger').on('click', function(e) {
        slideout.toggle();            
    });
}());   