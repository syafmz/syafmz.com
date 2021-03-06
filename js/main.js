(function (b)
{
  function a()
  {
    var e = b(".portfolio-grid"),
      d = b(".portfolio-filters");
    if (e)
    {
      e.shuffle(
      {
        speed: 450,
        itemSelector: "figure"
      });
      d.on("click", ".filter", function (f)
      {
        e.shuffle("update");
        f.preventDefault();
        b(".portfolio-filters .filter").parent().removeClass("active");
        b(this).parent().addClass("active");
        e.shuffle("shuffle", b(this).attr("data-group"))
      })
    }
  }
  b(function ()
  {
    b("#contact_form").validator();
    b("#contact_form").on("submit", function (f)
    {
      if (!f.isDefaultPrevented())
      {
        var d = "contact_form/contact_form.php";
        b.ajax(
        {
          type: "POST",
          url: d,
          data: b(this).serialize(),
          success: function (h)
          {
            var g = "alert-" + h.type;
            var i = h.message;
            var e = '<div class="alert ' + g + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + i + "</div>";
            if (g && i)
            {
              b("#contact_form").find(".messages").html(e);
              b("#contact_form")[0].reset()
            }
          }
        });
        return false
      }
    })
  });

  function c()
  {
    var d = b(window).width(),
      e = b("#site_header");
    if (d < 992)
    {
      e.addClass("mobile-menu-hide");
      setTimeout(function ()
      {
        e.addClass("animate")
      }, 500)
    }
    else
    {
      e.removeClass("animate")
    }
  }
  b(window).on("load", function ()
  {
    b(".preloader").fadeOut(800, "linear");
    var d = b(".subpages");
    if (d[0])
    {
      PageTransitions.init(
      {
        menu: "ul.site-main-menu",
      })
    }
  }).on("resize", function ()
  {
    c()
  });
  b(document).on("ready", function ()
  {
    var d = b(".portfolio-grid");
    d.imagesLoaded(function ()
    {
      a(this)
    });
    var e = b(".blog-masonry");
    e.imagesLoaded(function ()
    {
      e.masonry()
    });
    b(".menu-toggle").on("click", function ()
    {
      b("#site_header").addClass("animate");
      b("#site_header").toggleClass("mobile-menu-hide")
    });
    b(".site-main-menu").on("click", "a", function (f)
    {
      c()
    });
    b(".sidebar-toggle").on("click", function ()
    {
      b("#blog-sidebar").toggleClass("open")
    });
    b(".testimonials.owl-carousel").owlCarousel(
    {
      nav: true,
      items: 3,
      loop: false,
      navText: false,
      margin: 25,
      responsive:
      {
        0:
        {
          items: 1,
        },
        480:
        {
          items: 1,
        },
        768:
        {
          items: 2,
        },
        1200:
        {
          items: 2,
        }
      }
    });
    b(".clients.owl-carousel").imagesLoaded().owlCarousel(
    {
      nav: true,
      items: 2,
      loop: false,
      navText: false,
      margin: 10,
      autoHeight: false,
      responsive:
      {
        0:
        {
          items: 2,
        },
        768:
        {
          items: 4,
        },
        1200:
        {
          items: 6,
        }
      }
    });
    b(".text-rotation").owlCarousel(
    {
      loop: true,
      dots: false,
      nav: false,
      margin: 0,
      items: 1,
      autoplay: true,
      autoplayHoverPause: false,
      autoplayTimeout: 3800,
      animateOut: "fadeOut",
      animateIn: "fadeIn"
    });
    b("body").magnificPopup(
    {
      delegate: "a.lightbox",
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-fade",
      image:
      {
        titleSrc: "title",
        gallery:
        {
          enabled: true
        },
      },
      iframe:
      {
        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',
        patterns:
        {
          youtube:
          {
            index: "youtube.com/",
            id: null,
            src: "%id%?autoplay=1"
          },
          vimeo:
          {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1"
          },
          gmaps:
          {
            index: "//maps.google.",
            src: "%id%&output=embed"
          }
        },
        srcAction: "iframe_src",
      },
      callbacks:
      {
        markupParse: function (g, f, h)
        {
          f.title = h.el.attr("title")
        }
      },
    });
    b(".ajax-page-load-link").magnificPopup(
    {
      type: "ajax",
      removalDelay: 300,
      mainClass: "mfp-fade",
      gallery:
      {
        enabled: true
      },
    });
    b(".form-control").val("").on("focusin", function ()
    {
      b(this).parent(".form-group").addClass("form-group-focus")
    }).on("focusout", function ()
    {
      if (b(this).val().length === 0)
      {
        b(this).parent(".form-group").removeClass("form-group-focus")
      }
    })
  })
})(jQuery);

