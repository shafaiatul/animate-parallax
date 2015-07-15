$(function() {
    $('section#screenshots a').on('click', function () {
        $('div#modal img').attr('src', $(this).attr('data-image-url'));
    });

    var nav = $('.navbar-fixed-top');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            nav.addClass('effect');
        } else {
            nav.removeClass('effect');
        }
    });

    $('#about .blue-circle').waypoint(function () {
        $('#about .blue-circle').addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });

    $('#features .blue-circle').waypoint(function () {
        $(this.element).addClass('animated rollIn')
    }, {
        offset: '50%'
    });

    $('#features .image-features img').waypoint(function () {
        $('#features .image-features img').addClass('animated rubberBand')
    }, {
        offset: '50%'
    });

    $('#screenshots .col-xs-4').waypoint(function () {
        $(this.element).addClass('animated zoomIn')
        $(this.element).css({'opacity': 1})
    }, {
        offset: '50%'
    });

    $('#download div.phone img').waypoint(function () {
        $(this.element).addClass('animated fadeInLeft')
    }, {
        offset: '50%'
    });

    $('#download .platfrom div').waypoint(function () {
        $(this.element).addClass('animated fadeInUp')
    }, {
        offset: '50%'
    });
    //form validating from formvalidation.io
    $('#form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'This field is required and can not be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'This field is required and can not be empty'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'Who sends a empty message???'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();

        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');

        $.post($form.attr('action'), $form.serialize(), function (result) {
            console.log(result);
        }, 'json');
    });
});

//(https://github.com/cferdinandi/smooth-scroll) For scrolling effect initializing
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});
