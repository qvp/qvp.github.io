window.onload = function () {

    $('#header').show();
    $('#fullpage').show();
    $('#loading').remove();

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Главная', 'Обо мне'],
        slidesNavigation: true,
        afterLoad: function(anchor) {
            $('.nav-item').removeClass('active');
            var $activeLink = $('a[href="#'+anchor+'"]');
            if ($activeLink) {
                $activeLink.parent().addClass('active');
            }
        }
    });

    var typed = new Typed('#typed', {
        strings: ['Full Stack ^600 Веб-разработчик'],
        autoInsertCss: true,
        typeSpeed: 30,
        onComplete: function() {
            setTimeout(function() {
                document.querySelector('.typed-cursor').style.opacity = 0;
            }, 1000);
        }
    });
};
