var PageTransitions = (function (f, p)
{
  var e = f(".subpages"),
    a = false,
    o = true,
    g = false,
    l = f(window),
    q = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd",
      animation: "animationend"
    },
    j = q[Modernizr.prefixed("animation")],
    k = Modernizr.cssanimations;

  function n(r)
  {
    f(".pt-page").each(function ()
    {
      var v = f(this);
      v.data("originalClassList", v.attr("class"))
    });
    e.each(function ()
    {
      if (location.hash === "")
      {
        f("section[data-id=" + t + "]").addClass("pt-page-current")
      }
    });
    f(".pt-trigger").on("click", function (w)
    {
      w.preventDefault();
      if (a)
      {
        return false
      }
      var v = f(this);
      m(v);
      i(v);
      location.hash = f(this).attr("href")
    });
    window.onhashchange = function (w)
    {
      if (location.hash)
      {
        if (a)
        {
          return false
        }
        var v = f(u + ' a[href*="' + location.hash.split("/")[0] + '"]');
        m(v);
        i(v);
        d()
      }
    };
    var u = r.menu,
      t = c();
    location.hash = t;
    var s = f(u + ' a[href*="' + location.hash.split("/")[0] + '"]');
    m(s);
    i(s);
    f("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated slideInRight"></div>');
    d();
    f(".lmpixels-arrow-right").click(function ()
    {
      var v = f(".site-main-menu li.active");
      v.next("li").children("a").click();
      if (v.is(":last-child"))
      {
        f(".site-main-menu li:first-child").children("a").click()
      }
    });
    f(".lmpixels-arrow-left").click(function ()
    {
      var v = f(".site-main-menu li.active");
      v.prev("li").children("a").click();
      if (v.is(":first-child"))
      {
        f(".site-main-menu li:last-child").children("a").click()
      }
    })
  }

  function c()
  {
    if (location.hash === "")
    {
      return location.hash = f("section.pt-page").first().attr("data-id")
    }
    else
    {
      return location.hash
    }
  }

  function m(s)
  {
    if (!s)
    {
      return false
    }
    var r = f(s);
    r = r["0"];
    r = f(r.parentNode);
    if (r)
    {
      f("ul.site-main-menu li").removeClass("active");
      r.addClass("active")
    }
  }

  function d()
  {
    var r = f("#page-ajax-loaded");

    function t()
    {
      r.removeClass("slideOutLeft closed");
      r.show();
      f("body").addClass("ajax-page-visible")
    }

    function u()
    {
      f("#page-ajax-loaded").addClass("slideOutLeft closed");
      f("body").removeClass("ajax-page-visible");
      setTimeout(function ()
      {
        f("#page-ajax-loaded.closed").html("");
        r.hide()
      }, 500)
    }
    var s = f(".ajax-page-load").each(function ()
    {
      s = f(this).attr("href");
      if (location.hash == location.hash.split("/")[0] + "/" + s.substr(0, s.length - 5))
      {
        var v = f(this).attr("href");
        t();
        r.load(v);
        return false
      }
    });
    f(document).on("click", ".site-main-menu, #ajax-page-close-button", function (v)
    {
      v.preventDefault();
      u();
      location.hash = location.hash.split("/")[0]
    }).on("click", ".ajax-page-load", function ()
    {
      var v = "portfolio/" + f(this).attr("href").substr(0, f(this).attr("href").length - 5);
      location.hash = v;
      t();
      return false
    })
  }

  function i(B, D)
  {
    if (!(B.attr("data-animation")))
    {
      var s = parseInt(Math.floor(Math.random() * 67) + 1);
      B.data("animation", s)
    }
    var u = B.data("animation").toString(),
      D, z, v, E;
    if (u.indexOf("-") != -1)
    {
      var C = u.split("-");
      E = parseInt(C[(Math.floor(Math.random() * C.length))])
    }
    else
    {
      E = parseInt(u)
    }
    if (E > 67)
    {
      alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
      return false
    }
    switch (E)
    {
      case 1:
        z = "pt-page-moveFromRight";
        v = "pt-page-moveToLeft";
        break;
      case 2:
        z = "pt-page-moveFromLeft";
        v = "pt-page-moveToRight";
        break;
      case 3:
        z = "pt-page-moveFromBottom";
        v = "pt-page-moveToTop";
        break;
      case 4:
        z = "pt-page-moveFromTop";
        v = "pt-page-moveToBottom";
        break;
      case 5:
        z = "pt-page-moveFromRight pt-page-ontop";
        v = "pt-page-fade";
        break;
      case 6:
        z = "pt-page-moveFromLeft pt-page-ontop";
        v = "pt-page-fade";
        break;
      case 7:
        z = "pt-page-moveFromBottom pt-page-ontop";
        v = "pt-page-fade";
        break;
      case 8:
        z = "pt-page-moveFromTop pt-page-ontop";
        v = "pt-page-fade";
        break;
      case 9:
        z = "pt-page-moveFromRightFade";
        v = "pt-page-moveToLeftFade";
        break;
      case 10:
        z = "pt-page-moveFromLeftFade";
        v = "pt-page-moveToRightFade";
        break;
      case 11:
        z = "pt-page-moveFromBottomFade";
        v = "pt-page-moveToTopFade";
        break;
      case 12:
        z = "pt-page-moveFromTopFade";
        v = "pt-page-moveToBottomFade";
        break;
      case 13:
        z = "pt-page-moveFromRight";
        v = "pt-page-moveToLeftEasing pt-page-ontop";
        break;
      case 14:
        z = "pt-page-moveFromLeft";
        v = "pt-page-moveToRightEasing pt-page-ontop";
        break;
      case 15:
        z = "pt-page-moveFromBottom";
        v = "pt-page-moveToTopEasing pt-page-ontop";
        break;
      case 16:
        z = "pt-page-moveFromTop";
        v = "pt-page-moveToBottomEasing pt-page-ontop";
        break;
      case 17:
        z = "pt-page-moveFromRight pt-page-ontop";
        v = "pt-page-scaleDown";
        break;
      case 18:
        z = "pt-page-moveFromLeft pt-page-ontop";
        v = "pt-page-scaleDown";
        break;
      case 19:
        z = "pt-page-moveFromBottom pt-page-ontop";
        v = "pt-page-scaleDown";
        break;
      case 20:
        z = "pt-page-moveFromTop pt-page-ontop";
        v = "pt-page-scaleDown";
        break;
      case 21:
        z = "pt-page-scaleUpDown pt-page-delay300";
        v = "pt-page-scaleDown";
        break;
      case 22:
        z = "pt-page-scaleUp pt-page-delay300";
        v = "pt-page-scaleDownUp";
        break;
      case 23:
        z = "pt-page-scaleUp";
        v = "pt-page-moveToLeft pt-page-ontop";
        break;
      case 24:
        z = "pt-page-scaleUp";
        v = "pt-page-moveToRight pt-page-ontop";
        break;
      case 25:
        z = "pt-page-scaleUp";
        v = "pt-page-moveToTop pt-page-ontop";
        break;
      case 26:
        z = "pt-page-scaleUp";
        v = "pt-page-moveToBottom pt-page-ontop";
        break;
      case 27:
        z = "pt-page-scaleUpCenter pt-page-delay400";
        v = "pt-page-scaleDownCenter";
        break;
      case 28:
        z = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop";
        v = "pt-page-rotateRightSideFirst";
        break;
      case 29:
        z = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";
        v = "pt-page-rotateLeftSideFirst";
        break;
      case 30:
        z = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop";
        v = "pt-page-rotateTopSideFirst";
        break;
      case 31:
        z = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop";
        v = "pt-page-rotateBottomSideFirst";
        break;
      case 32:
        z = "pt-page-flipInLeft pt-page-delay500";
        v = "pt-page-flipOutRight";
        break;
      case 33:
        z = "pt-page-flipInRight pt-page-delay500";
        v = "pt-page-flipOutLeft";
        break;
      case 34:
        z = "pt-page-flipInBottom pt-page-delay500";
        v = "pt-page-flipOutTop";
        break;
      case 35:
        z = "pt-page-flipInTop pt-page-delay500";
        v = "pt-page-flipOutBottom";
        break;
      case 36:
        z = "pt-page-scaleUp";
        v = "pt-page-rotateFall pt-page-ontop";
        break;
      case 37:
        z = "pt-page-rotateInNewspaper pt-page-delay500";
        v = "pt-page-rotateOutNewspaper";
        break;
      case 38:
        z = "pt-page-moveFromRight";
        v = "pt-page-rotatePushLeft";
        break;
      case 39:
        z = "pt-page-moveFromLeft";
        v = "pt-page-rotatePushRight";
        break;
      case 40:
        z = "pt-page-moveFromBottom";
        v = "pt-page-rotatePushTop";
        break;
      case 41:
        z = "pt-page-moveFromTop";
        v = "pt-page-rotatePushBottom";
        break;
      case 42:
        z = "pt-page-rotatePullRight pt-page-delay180";
        v = "pt-page-rotatePushLeft";
        break;
      case 43:
        z = "pt-page-rotatePullLeft pt-page-delay180";
        v = "pt-page-rotatePushRight";
        break;
      case 44:
        z = "pt-page-rotatePullBottom pt-page-delay180";
        v = "pt-page-rotatePushTop";
        break;
      case 45:
        z = "pt-page-rotatePullTop pt-page-delay180";
        v = "pt-page-rotatePushBottom";
        break;
      case 46:
        z = "pt-page-moveFromRightFade";
        v = "pt-page-rotateFoldLeft";
        break;
      case 47:
        z = "pt-page-moveFromLeftFade";
        v = "pt-page-rotateFoldRight";
        break;
      case 48:
        z = "pt-page-moveFromBottomFade";
        v = "pt-page-rotateFoldTop";
        break;
      case 49:
        z = "pt-page-moveFromTopFade";
        v = "pt-page-rotateFoldBottom";
        break;
      case 50:
        z = "pt-page-rotateUnfoldLeft";
        v = "pt-page-moveToRightFade";
        break;
      case 51:
        z = "pt-page-rotateUnfoldRight";
        v = "pt-page-moveToLeftFade";
        break;
      case 52:
        z = "pt-page-rotateUnfoldTop";
        v = "pt-page-moveToBottomFade";
        break;
      case 53:
        z = "pt-page-rotateUnfoldBottom";
        v = "pt-page-moveToTopFade";
        break;
      case 54:
        z = "pt-page-rotateRoomLeftIn";
        v = "pt-page-rotateRoomLeftOut pt-page-ontop";
        break;
      case 55:
        z = "pt-page-rotateRoomRightIn";
        v = "pt-page-rotateRoomRightOut pt-page-ontop";
        break;
      case 56:
        z = "pt-page-rotateRoomTopIn";
        v = "pt-page-rotateRoomTopOut pt-page-ontop";
        break;
      case 57:
        z = "pt-page-rotateRoomBottomIn";
        v = "pt-page-rotateRoomBottomOut pt-page-ontop";
        break;
      case 58:
        z = "pt-page-rotateCubeLeftIn";
        v = "pt-page-rotateCubeLeftOut pt-page-ontop";
        break;
      case 59:
        z = "pt-page-rotateCubeRightIn";
        v = "pt-page-rotateCubeRightOut pt-page-ontop";
        break;
      case 60:
        z = "pt-page-rotateCubeTopIn";
        v = "pt-page-rotateCubeTopOut pt-page-ontop";
        break;
      case 61:
        z = "pt-page-rotateCubeBottomIn";
        v = "pt-page-rotateCubeBottomOut pt-page-ontop";
        break;
      case 62:
        z = "pt-page-rotateCarouselLeftIn";
        v = "pt-page-rotateCarouselLeftOut pt-page-ontop";
        break;
      case 63:
        z = "pt-page-rotateCarouselRightIn";
        v = "pt-page-rotateCarouselRightOut pt-page-ontop";
        break;
      case 64:
        z = "pt-page-rotateCarouselTopIn";
        v = "pt-page-rotateCarouselTopOut pt-page-ontop";
        break;
      case 65:
        z = "pt-page-rotateCarouselBottomIn";
        v = "pt-page-rotateCarouselBottomOut pt-page-ontop";
        break;
      case 66:
        z = "pt-page-rotateSidesIn pt-page-delay200";
        v = "pt-page-rotateSidesOut";
        break;
      case 67:
        z = "pt-page-rotateSlideIn";
        v = "pt-page-rotateSlideOut";
        break
    }
    var y = e,
      x = y.data("current"),
      A, r = B.attr("href").split("#"),
      D = r[1];
    A = x;
    var t = f('section[data-id="' + x + '"]');
    x = D;
    if (A != x)
    {
      a = true;
      y.data("current", x);
      var w = f("section[data-id=" + x + "]").addClass("pt-page-current");
      w.scrollTop(0);
      t.addClass(v).on(j, function ()
      {
        t.off(j);
        o = true;
        if (g)
        {
          h(y, w, t);
          o = false
        }
      });
      w.addClass(z).on(j, function ()
      {
        w.off(j);
        g = true;
        if (o)
        {
          h(y, w, t);
          g = false;
          a = false
        }
      })
    }
    else
    {
      a = false
    }
    if (!k)
    {
      h(t, w)
    }
  }

  function h(r, t, s)
  {
    b(t, s)
  }

  function b(s, r)
  {
    r.attr("class", r.data("originalClassList"));
    s.attr("class", s.data("originalClassList") + " pt-page-current")
  }
  return {
    init: n,
  }
})(jQuery);

