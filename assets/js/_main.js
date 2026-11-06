/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

var navIndicator = function () {
  var $list = $("#site-nav .visible-links");
  if (!$list.length) {
    return $.noop;
  }
  var list = $list[0];

  return function (animate) {
    var link = $list.children(".selected").children("a")[0];
    if (!link) {
      $list.removeClass("has-indicator");
      return;
    }
    var still = !animate || !$list.hasClass("has-indicator");
    var box = list.getBoundingClientRect();
    var rect = link.getBoundingClientRect();
    var style = window.getComputedStyle(link);
    var left = parseFloat(style.paddingLeft) || 0;
    var right = parseFloat(style.paddingRight) || 0;
    $list.toggleClass("indicator-still", still);
    list.style.setProperty("--indicator-x", (rect.left - box.left - list.clientLeft + left) + "px");
    list.style.setProperty("--indicator-w", (rect.width - left - right) + "px");
    $list.addClass("has-indicator");
    if (still) {
      void list.offsetWidth;
      $list.removeClass("indicator-still");
    }
  };
};

var sectionTabs = function (scrollSpeed, onSelect) {
  var $home = $("#site-nav .masthead__menu-item--lg");
  var tabs = $(".home-section[id]").map(function () {
    var $item = $('#site-nav a[href$="#' + this.id + '"]').parent();
    return $item.length ? { section: this, $item: $item } : null;
  }).get();
  if (!tabs.length || !$home.length) {
    return null;
  }

  var hold = null;

  var select = function ($item) {
    if ($item.hasClass("selected")) {
      return;
    }
    $("#site-nav .selected").removeClass("selected").children("a").removeAttr("aria-current");
    $item.addClass("selected").children("a").attr("aria-current", "true");
    onSelect(true);
  };

  var inView = function () {
    var y = window.scrollY;
    if (y > 0 && y + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      return tabs[tabs.length - 1].$item;
    }
    var landing = parseFloat($(tabs[0].section).css("scroll-margin-top")) || 0;
    var line = Math.max(window.innerHeight / 3, landing + 2);
    var $item = $home;
    $.each(tabs, function (i, tab) {
      if (tab.section.getBoundingClientRect().top <= line) {
        $item = tab.$item;
      }
    });
    return $item;
  };

  var queued = false;
  var update = function () {
    queued = false;
    if (hold === "moving") {
      return;
    }
    if (hold !== null) {
      if (Math.abs(window.scrollY - hold) < 2) {
        return;
      }
      hold = null;
    }
    select(inView());
  };
  $(window).on("scroll resize", function () {
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(update);
    }
  });

  var landed = function () {
    if (hold === "moving") {
      hold = window.scrollY;
    }
  };

  $home.children("a").on("click", function (event) {
    if (this.pathname !== window.location.pathname) {
      return;
    }
    event.preventDefault();
    if (window.location.hash) {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
    hold = "moving";
    select($home);
    $.smoothScroll({ speed: scrollSpeed, afterScroll: landed });
  });

  var arrival = $.grep(tabs, function (tab) {
    return "#" + tab.section.id === window.location.hash;
  })[0];
  if (arrival) {
    select(arrival.$item);
    hold = window.scrollY;
  } else {
    update();
  }

  return {
    scrollingTo: function (target) {
      var tab = $.grep(tabs, function (t) {
        return $(target)[0] === t.section;
      })[0];
      if (tab) {
        hold = "moving";
        select(tab.$item);
      }
    },
    landed: landed
  };
};

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  var scrollSpeed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;

  var indicator = navIndicator();
  var tabs = sectionTabs(scrollSpeed, indicator);
  indicator(false);
  $(window).on("resize", function () {
    indicator(false);
  });
  if (document.fonts) {
    document.fonts.ready.then(function () {
      indicator(false);
    });
  }

  var $masthead = $(".masthead");
  var shade = function () {
    $masthead.toggleClass("is-scrolled", window.scrollY > 0);
  };
  $(window).on("scroll", shade);
  shade();

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    speed: scrollSpeed,
    preventDefault: false,
    beforeScroll: function (opts) {
      var margin = parseFloat($(opts.scrollTarget).css("scroll-margin-top"));
      if (margin > 0) {
        opts.offset = -margin;
      }
      if (tabs) {
        tabs.scrollingTo(opts.scrollTarget);
      }
    },
    afterScroll: function () {
      if (tabs) {
        tabs.landed();
      }
    },
  });

});
