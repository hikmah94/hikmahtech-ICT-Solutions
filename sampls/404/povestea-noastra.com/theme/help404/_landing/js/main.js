App = {};

(function () {

    'use strict';

    var Home = {

        init: function () {
        	this.bindEvents();
            this.scrollReveal();
            this.ratting();
            this.navigation();
        },

        bindEvents: function () {
        	$('.year').text(new Date().getFullYear());
		    // $('.main-menu li a').on('click', function() {
		    //     $('.main-menu li.active').removeClass('active');
		    //     $(this).closest('li').addClass('active');
		    // });
		    $('.mobile-menu-trigger').on('click', function() {
		        $('.mobile-menu-holder').slideToggle(200);
		    });
        },

        scrollReveal: function () {
            window.sr = ScrollReveal();
            sr.reveal('.sreveal', { duration: 300, reset: true, delay: 100 });
            if (sr.isSupported()) {
                document.documentElement.classList.add('sr');
            }
        },

        ratting: function () {
            switch(window.location.protocol) {
                case 'http:':
                case 'https:':
                    jQuery('.form-content').html("<p>Couldn't find your layout?<br />Submit your idea and you will receive it for <b>FREE</b> in just one week.</p>");
                    jQuery('.btn-rate').remove();
                    jQuery('.btn-contact').html('Submit your idea now <i class="fa fa-angle-right"></i>');
                    //jQuery('.reg_container').remove();
                break;
                case 'file:':
                    //showDialog();
                break;
                default:
                    jQuery('.form-content').html("<p>Couldn't find your layout?<br />Submit your idea and you will receive it for <b>FREE</b> in just one week.</p>");
                    jQuery('.btn-rate').remove();
                    jQuery('.btn-contact').html('Submit your idea now <i class="fa fa-angle-right"></i>');
                    //jQuery('.reg_container').remove();
            }
        },

        navigation: function () {
            jQuery('.main-menu').onePageNav({
                currentClass: 'active',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing',
                begin: function() {
                    //I get fired when the animation is starting
                },
                end: function() {
                    //I get fired when the animation is ending
                },
                scrollChange: function($currentListItem) {
                    //I get fired when you enter a section and I pass the list item of the section
                }
            });
        }
    }

    App.Home = Home;
})();

jQuery(document).ready(function () {
    App.Home.init();
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
});

var app = angular.module('company', ['ngSanitize']);

app.constant("verion", "1.0");
app.constant("layouts", "120");
app.run(function ($rootScope, verion, layouts) {
  $rootScope.verion = verion;
  $rootScope.layouts = layouts;
});

app.controller('demosController', function(){
    this.demo = demolist;
});

app.controller('industriesController', function(){
    this.industry = industrylist;
});

app.controller('soonsController', function(){
    this.soon = soonlist;
});

var demolist = [
    {
        image: 'images/screens/v1.jpg',
        header: 'Animation 1',
        url: '../Animation 1/index.html',
    },
    {
        image: 'images/screens/v2.jpg',
        header: 'Animation 2',
        url: '../Animation 2/index.html',
    },
    {
        image: 'images/screens/v3.jpg',
        header: 'Animation 3',
        url: '../Animation 3/index.html',
    },
    {
        image: 'images/screens/v4.jpg',
        header: 'Broken Link',
        url: '../Broken Link/index.html',
    },
    {
        image: 'images/screens/v5.jpg',
        header: 'Connection Failed',
        url: '../Connection Failed/index.html',
    },
    {
        image: 'images/screens/v6.jpg',
        header: 'Error',
        url: '../Error/index.html',
    },
    {
        image: 'images/screens/v7.jpg',
        header: 'No Result',
        url: '../No Result/index.html',
    },
    {
        image: 'images/screens/v8.jpg',
        header: 'Page not Found',
        url: '../Page not Found/index.html',
    },
    {
        image: 'images/screens/v9.jpg',
        header: 'Wallet',
        url: '../Wallet/index.html',
    }
];

var isOpenRegForm = false;
var timeoutId = setTimeout(function () {
    showRegistration();
    jQuery('.reg_optionbtn').html("<i class='fa fa-times' aria-hidden='true'></i>").addClass("optionbtn_open");
    jQuery('.reg_container').addClass("reg_container_open");
    jQuery('#registered_email').focus();
    isOpenRegForm = true;
}, 40000);

jQuery('.reg_optionbtn').click(function () {
    if (isOpenRegForm == true) {
        hideRegistration();
        isOpenRegForm = false;
        jQuery('.reg_optionbtn').html("<i class='fa fa-star' aria-hidden='true'></i>").removeClass("optionbtn_open");
        jQuery('.reg_container').removeClass("reg_container_open");
    } else {
        showRegistration();
        jQuery('.reg_optionbtn').html("<i class='fa fa-times' aria-hidden='true'></i>").addClass("optionbtn_open");
        jQuery('.reg_container').addClass("reg_container_open");
        jQuery('#registered_email').focus();
        isOpenRegForm = true;
    }
});
jQuery('#reg_submit').click(function (e) {
    if (!regFormValidation()) {
        e.preventDefault();
    }
});
function regFormValidation() {
    var valid_reg = jQuery('#registered_email').val().length;
    if (valid_reg == 0) {
        jQuery('#registered_email').css('border-color', 'red');
        return false;
    }
    return true;
}
function hideRegistration() {
    jQuery('.reg_container').animate({
        right: '-300px'
    }, 500);
};
function showRegistration() {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    jQuery('.reg_container').animate({
        right: '0px'
    }, 500);
};