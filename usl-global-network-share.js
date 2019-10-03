(function ($) {

//DOC READY ///////////////////////////////////
  $(document).ready(function () {
    globalNetwork();
    $('<div class="networkTeamsMenu"></div>').insertAfter('.global-network-container');
    slickNetwork();
    activeButtonClasses();

    $('#siteContainer').click(function () {
      slideUpMenu();
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        slideUpMenu();
      }
    });

    $('.has-mobile-nav .network-teams-button').one('click', function () {
      $('.networkTeamsMenu').empty();
      mobileNetwork();
    });

  });
//END DOC READY ///////////////////////////////////

//TEAM ASSETS READY ///////////////////////////////////
  $(document).on('FUI_Data_teamNetwork', function () {
    createNetworkSlider();

    $('.global-teams-menu').click(function (event) {1
      event.stopPropagation();
      $(this).toggleClass('open');
      $('body').toggleClass('network-open');
      $('.networkTeamsMenu').slideToggle('fast');
      $('.mobile-network-page').removeClass('open-championship');
      $('.mobile-network-page').removeClass('open-leagueOne');
      $('.mobile-network-page').removeClass('open-leagueTwo');
    });

    $('.global-teams-menu').one('click', function (event) {
      event.stopPropagation();
      slickNetwork();
      activeButtonClasses();
      startsWith();
      alphaWrap();
      $('.mobile-teams-list').each(function () {
        $(this).attr('id', 'slider');
        $(this).sliderNav();
        disableUnusedAlpha();
      });
    });
  });
//END TEAM ASSETS READY ///////////////////////////////////


//FUNCTIONS////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function slideUpMenu() {
    $('.networkTeamsMenu').slideUp();
    $('.global-teams-menu').removeClass('open');
    $('body').removeClass('network-open');
  }
  function activeButtonClasses() {
    if ($('.networkTeamsMenu .network.championship').hasClass('slick-current')) {
      $('.network-button').removeClass('active-slick-button');
      $('.networkTeamsMenu .network-button.championship').toggleClass('active-slick-button');
    } else if ($('.networkTeamsMenu .network.league-one').hasClass('slick-current')) {
      $('.network-button').removeClass('active-slick-button');
      $('.networkTeamsMenu .network-button.league-one').toggleClass('active-slick-button');
    } else if ($('.networkTeamsMenu .network.league-two').hasClass('slick-current')) {
      $('.network-button').removeClass('active-slick-button');
      $('.networkTeamsMenu .network-button.league-two').toggleClass('active-slick-button');
    }
  }
  function globalNetwork() {
    $('#topNav').before('<div class="global-network-container"></div>');
    $('.global-network-container').append('<div class="group-logo"><img src="//assets.ngin.com/site_files/_templates/usl_league_sites/_source/images/Corporate-Abbrev-RGB.png"></div>');
    $('.global-network-container').append('<div class="global-teams-menu"></div>');
    $('.global-teams-menu').append('<div class="network-teams-button">Network</div>');
    $(document).on('FUI_Data_teamNetwork', function () {
      addSocialToGlobalNav();
    });
  }
  function addSocialToGlobalNav() {
    $('.global-network-container').append($(FUI.Data.teamNetworkPage).find('.global-social-label .textBlockElement'));
    $('.global-network-container').append($(FUI.Data.teamNetworkPage).find('.global-social .sn-social-media-list'));
  }
  function createNetworkSlider() {
    $('.networkTeamsMenu').append('<div class="network-slider-container"><div class="network-slider-nav-container"></div><div class="network-slider-content-container"></div></div>');
    var sliderNav = $(FUI.Data.teamNetworkPage).find('.network-slider-nav').clone();
    var sliderContent = $(FUI.Data.teamNetworkPage).find('.network').clone();
    $('.network-slider-nav-container').append(sliderNav);
    $('.network-slider-content-container').append(sliderContent);
    $('.edit_mode .networkTeamsMenu').find('.lbOn').remove();
    $('.edit_mode .networkTeamsMenu').find('.elementBar').remove();
  }
  function slickNetwork() {
    $('.networkTeamsMenu .network').wrapAll('<div class="tab-slicks-container"></div>');
    $('.tab-slicks-container').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      initialSlide: 0,
      lazyLoad: 'progressive',
      adaptiveHeight: true,
      cssEase: 'linear',
      draggable: false,
      infinite: false
    });
//CHAMPIONSHIP LEAGUE NETWORK /////////////////////////////////////////////
        var elements = $(".user_mode .network.championship:not(.slick-cloned) .column .pageEl");
        var elementsEdit = $(".edit_mode .networkTeamsMenu .network.championship .drag");

        var elArray = elements.length;
        var elArrayEdit = elementsEdit.length;

        var teamsCount = 35;
        for (var i = 0; i < elArray; i += teamsCount) {
          elements.filter(':eq(' + i + '),:lt(' + (i + teamsCount) + '):gt(' + i + ')').wrapAll('<div class="champGroups"></div>');
        }
        for (var i2 = 0; i2 < elArrayEdit; i2 += teamsCount) {
          elementsEdit.filter(':eq(' + i2 + '),:lt(' + (i2 + teamsCount) + '):gt(' + i2 + ')').wrapAll('<div class="champGroups"></div>');
        }
        $('.user_mode .networkTeamsMenu .network.championship .column').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: false });
        $('.edit_mode .networkTeamsMenu .network.championship .columnBounds').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: false});

        $('.networkTeamsMenu .network.championship').append($(FUI.Data.teamNetworkPage).find('.network-link.championship'));
        $('.networkTeamsMenu .network.championship').append($(FUI.Data.teamNetworkPage).find('.league-social.championship'));
//END CHAMPIONSHIP LEAGUE NETWORK /////////////////////////////////////

// LEAGUE ONE NETWORK////////////////////////////////////////////////
        var elementsL1 = $(".user_mode .network.league-one:not(.slick-cloned) .column .pageEl");
        var elementsL1Edit = $(".edit_mode .networkTeamsMenu .network.league-one .drag");

        var elArrayL1 = elementsL1.length;
        var elArrayL1Edit = elementsL1Edit.length;

        var teamsCountL1 = 35;
        for (var j = 0; j < elArrayL1; j += teamsCountL1) {
          elementsL1.filter(':eq(' + j + '),:lt(' + (j + teamsCountL1) + '):gt(' + j + ')').wrapAll('<div class="L1Groups"></div>');
        }
        for (var j2 = 0; j2 < elArrayL1Edit; j2 += teamsCountL1) {
          elementsL1Edit.filter(':eq(' + j2 + '),:lt(' + (j2 + teamsCountL1) + '):gt(' + j2 + ')').wrapAll('<div class="L1Groups"></div>');
        }
        $('.user_mode .networkTeamsMenu .network.league-one .column').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: false });
        $('.edit_mode .networkTeamsMenu .network.league-one .columnBounds').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: false });
        $('.networkTeamsMenu .network.league-one').append($(FUI.Data.teamNetworkPage).find('.network-link.league-one'));
        $('.networkTeamsMenu .network.league-one').append($(FUI.Data.teamNetworkPage).find('.league-social.league-one'));
//END LEAGUE ONE NETWORK /////////////////////////////////////////////////////

// LEAGUE TWO// NETWORK/////////////////////////////////////////////////////
        var elementsL2 = $(".user_mode .network.league-two:not(.slick-cloned) .column .pageEl");
        var elementsL2Edit = $(".edit_mode .networkTeamsMenu .network.league-two .drag");

        var elArrayL2 = elementsL2.length;
        var elArrayL2Edit = elementsL2Edit.length;
        var teamsCountL2 = 35;

        for (var k = 0; k < elArrayL2; k += teamsCountL2) {
          elementsL2.filter(':eq(' + k + '),:lt(' + (k + teamsCountL2) + '):gt(' + k + ')').wrapAll('<div class="L2Groups"></div>');
        }

        for (var k2 = 0; k2 < elArrayL2Edit; k2 += teamsCountL2) {
          elementsL2Edit.filter(':eq(' + k2 + '),:lt(' + (k2 + teamsCountL2) + '):gt(' + k2 + ')').wrapAll('<div class="L2Groups"></div>');
        }

        $('.user_mode .networkTeamsMenu .network.league-two .column').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: false });
        $('.edit_mode .networkTeamsMenu .network.league-two .columnBounds').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, infinite: false });

        $('.networkTeamsMenu .network.league-two').append($(FUI.Data.teamNetworkPage).find('.network-link.league-two'));
        $('.networkTeamsMenu .network.league-two').append($(FUI.Data.teamNetworkPage).find('.league-social.league-two'));
//END LEAGUE TWO NETWORK////////////////////////////////////////////


// EVENTS//////////////////////////////////////////////////////////
        $('.network-button.championship a').on('click', function (e) {
          e.preventDefault();
          activeButtonClasses();
          $('.tab-slicks-container').slick('slickGoTo', 0);
          activeButtonClasses();
        });

        $('.network-button.league-one a').on('click', function (e) {
          e.preventDefault();
          activeButtonClasses();
          $('.tab-slicks-container').slick('slickGoTo', 1);
          activeButtonClasses();
        });

        $('.network-button.league-two a').on('click', function (e) {
          e.preventDefault();
          activeButtonClasses();
          $('.tab-slicks-container').slick('slickGoTo', 2);
          activeButtonClasses();
        });

        $('.networkTeamsMenu').resize();
        activeButtonClasses();
  } //end slicknetwork()

  function mobileNetwork() {
    var data = $(FUI.Data.teamNetworkPage);
    var dataChampionship = data.find('.network.championship');
    var championship = dataChampionship.find('.league-title .textBlockElement h3 span').html();

    var dataLeagueOne = data.find('.network.league-one');
    var leagueOne = dataLeagueOne.find('.league-title .textBlockElement h3 span').html();

    var dataLeagueTwo = data.find('.network.league-two');
    var leagueTwo = dataLeagueTwo.find('.league-title .textBlockElement h3 span').html();
    var championshipNavItem = '<li class="network-nav-item hasChild championship"><a class="network-nav-link" href="https://www.uslchampionship.com" id="page_node_championship">' + championship + '</a><div class="network-nav-forward championship"></div></li>';
    var leagueOneNavItem = '<li class="network-nav-item hasChild leagueOne"><a class="network-nav-link" href="https://www.uslleagueone.com" id="page_node_leagueOne">' + leagueOne + '</a><div class="network-nav-forward leagueOne"</div></li>';
    var leagueTwoNavItem = '<li class="network-nav-item hasChild leagueTwo"><a class="network-nav-link" href="https://www.uslleaguetwo.com" id="page_node_leagueTwo">' + leagueTwo + '</a><div class="network-nav-forward leagueTwo"</div></li>';
    var corporateNavItem = '<li class="network-nav-item corporate"><a class="network-nav-link" href="https://www.uslsoccer.com" id="page_node_corporate"><span>USL Corporate</span></a></li>';

    var mobileMenu = $('.has-mobile-nav .networkTeamsMenu');
    $('.has-mobile-nav .networkTeamsMenu').after('<div class="networkTeamsMenu-championship mobile-network-page"><div class="mobile-league-header"><span>' + championship + '</span><div class="close-menu"></div></div><div class="mobile-teams-list">' + dataChampionship.html() + '</div></div>');
    $('.has-mobile-nav .networkTeamsMenu').after('<div class="networkTeamsMenu-leagueOne mobile-network-page"><div class="mobile-league-header"><span>' + leagueOne + '</span><div class="close-menu"></div></div><div class="mobile-teams-list">' + dataLeagueOne.html() + '</div></div>');
    $('.has-mobile-nav .networkTeamsMenu').after('<div class="networkTeamsMenu-leagueTwo mobile-network-page"><div class="mobile-league-header"><span>' + leagueTwo + '</span><div class="close-menu"></div></div><div class="mobile-teams-list">' + dataLeagueTwo.html() + '</div></div>');

    mobileMenu.append(championshipNavItem);
    mobileMenu.append(leagueOneNavItem);
    mobileMenu.append(leagueTwoNavItem);
    mobileMenu.append(corporateNavItem);

    $('.network-nav-forward.championship').on('click', function () {
      $('.networkTeamsMenu-championship').addClass('open-championship');
    });
    $('.network-nav-forward.leagueOne').on('click', function () {
      $('.networkTeamsMenu-leagueOne').addClass('open-leagueOne');
    });
    $('.network-nav-forward.leagueTwo').on('click', function () {
      $('.networkTeamsMenu-leagueTwo').addClass('open-leagueTwo');
    });

    $('.close-menu').on('click', function () {
      $('.networkTeamsMenu-championship').removeClass('open-championship');
      $('.networkTeamsMenu-leagueOne').removeClass('open-leagueOne');
      $('.networkTeamsMenu-leagueTwo').removeClass('open-leagueTwo');
    });
  }

  function startsWith() {
    $j('.mobile-teams-list .cutline').each(function () {
      var teamName = $j(this)[0].innerText;
      var teamNameFirstLetter = teamName.charAt(0);
      $j(this).parent().parent().addClass('startsWith-' + teamNameFirstLetter);
    });
  }

  function alphaWrap() {
    $('.mobile-network-page').each(function () {
      var eachLeague = this;
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (letter) {
        $(eachLeague).find('.mobile-teams-list .startsWith-' + letter).wrapAll('<li id="' + letter + '" class="letter"><a alt="' + letter + '" class="alpha-nav-title">' + letter + '</a></li>');
      });
      $(eachLeague).find('.mobile-teams-list .column').addClass('slider-content');
    });
  }

  function disableUnusedAlpha() {
    $('.mobile-network-page').each(function () {
      var eachLeague = this;
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (letter) {
        if ($(eachLeague).find('.slider-content #' + letter).length < 1) {
          console.log(letter);
          $(eachLeague).find('.slider-nav li a[alt="#' + letter + '"]').css('opacity', '.2');
          console.log($('.slider-nav li a[alt="#' + letter + '"]'));
        }
      });
    });
  }
  /*
   *  SliderNav - A Simple Content Slider with a Navigation Bar Copyright 2015
   *  Monji Dolon, http://mdolon.com/ Released under the MIT, BSD, and GPL
   *  Licenses. More information: http://devgrow.com/slidernav
   */
  $.fn.sliderNav = function (options) {
    var defaults = {
      items: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      debug: false,
      height: null,
      arrows: true,
      event: 'mouseover'
    };
    var opts = $.extend(defaults, options);
    var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
    var slider = $(this);
    $(slider).addClass('slider');
    $('.slider-content li:first', slider).addClass('selected');
    $(slider).append('<div class="slider-nav"><ul></ul></div>');
    for (var i = 0; i < o.items.length; ++i) $('.slider-nav ul', slider).append("<li><a alt='#" + o.items[i] + "'>" + o.items[i] + "</a></li>");
    var height = $('.slider-nav', slider).height();
    if (o.height) height = o.height;
    $('.slider-content, .slider-nav', slider).css('height', height);
    if (o.debug) $(slider).append('<div id="debug">Scroll Offset: <span>0</span></div>');
    $('.slider-nav a', slider).on(opts.event, function (event) {
      var target = $(this).attr('alt');
      var cOffset = $('.slider-content', slider).offset().top;
      var tOffset = $('.slider-content ' + target, slider).offset().top;
      var height = $('.slider-nav', slider).height();
      if (o.height) height = o.height;
      var pScroll = (tOffset - cOffset) - height / 30;
      $('.slider-content li', slider).removeClass('selected');
      $(target).addClass('selected');
      $('.slider-content', slider).stop().animate({
        scrollTop: '+=' + pScroll + 'px'
      });
      if (o.debug) $('#debug span', slider).html(tOffset);
    });
    if (o.arrows) {
      $('.slider-nav', slider).css('top', '20px');
      $(slider).prepend('<div class="slide-up end"><span class="arrow up"></span></div>');
      $(slider).append('<div class="slide-down"><span class="arrow down"></span></div>');
      $('.slide-down', slider).click(function () {
        $('.slider-content', slider).animate({
          scrollTop: "+=" + height + "px"
        }, 500);
      });
      $('.slide-up', slider).click(function () {
        $('.slider-content', slider).animate({
          scrollTop: "-=" + height + "px"
        }, 500);
      });
    }
  };
})(jQuery);
