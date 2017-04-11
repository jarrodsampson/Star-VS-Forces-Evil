var customScripts = {
  wowScrolls: function () {

    /* ---------------------------------------------- /*
     * WOW Animation When You Scroll
     /* ---------------------------------------------- */

    wow = new WOW({
      mobile: false
    });
    wow.init();

  },
  headroom: function () {

    var header = document.querySelector("#header");
    if(window.location.hash) {
      header.classList.add("slide--up");
    }

    new Headroom(header, {
      tolerance: {
        down : 10,
        up : 20
      },
      offset : 560,
      classes: {
        initial: "slide",
        pinned: "slide--reset",
        unpinned: "slide--up"
      },
      // callback when pinned, `this` is headroom object
      onPin : function() {},
      // callback when unpinned, `this` is headroom object
      onUnpin : function() {},
      // callback when above offset, `this` is headroom object
      onTop : function() {},
      // callback when below offset, `this` is headroom object
      onNotTop : function() {}
    }).init();

  },
  scrollTop: function () {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

    // go to anchor when clicked
    $(function () {
      $('a[href*=\\#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


  },
  spy: function () {
    $('body').scrollspy({ target: '#main-nav' })
  },
  swipeItBox: function () {
    //$( '.swipebox' ).swipebox({loopAtEnd: true});
  },
  init: function () {
    customScripts.scrollTop();
    customScripts.spy();
    customScripts.wowScrolls();
    customScripts.headroom();
    customScripts.swipeItBox();
  }
};
$('document').ready(function () {
  customScripts.init();
});
