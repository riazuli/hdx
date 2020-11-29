// Jquery
!(function () {})();

// Custom JS
!(function () {
  // Function: Custom Selector
  var $ = (selector, areAll) => {
    var all = document.querySelectorAll(selector);
    var single = document.querySelector(selector);
    return areAll ? all : single;
  };

  // Function: Responsive Menu
  !(function () {
    var header = $("#header-section");
    var mainNavigationWrap = $("nav.main-navigation-wrap");
    var closeMobileMenu = $(".close-mobile-menu");
    var toggleButton = $(".navigation-toggle-button");

    var toggleMenu = function () {
      toggleButton.classList.toggle("active-toggle");
      header.classList.toggle("header-border");
      mainNavigationWrap.classList.toggle("active-menu");
    };
    toggleButton.addEventListener("click", toggleMenu);
    closeMobileMenu.addEventListener("click", toggleMenu);
  })();

  // Welcome Section
  !(function () {
    var paraWidth = function () {
      var welcomePara = $(".welcome-para", true);
      welcomePara.forEach(function (p) {
        p.style.maxWidth = p.previousElementSibling.offsetWidth + "px";
      });
    };
    paraWidth();
    window.addEventListener("resize", paraWidth);
  })();

  // Footer Content Alignment
  !(function () {
    function footerContentAlign() {
      if (window.innerWidth >= 768) {
        var container = $("#footer-section .container");
        var containerHeight = getComputedStyle(container).height;
        var logoSocialIcons = $(".logo-social-icons");
        var footerMenu = $(".footer-menu");
        footerMenu.style.marginTop =
          (containerHeight.substring(0, containerHeight.length - 2) -
            61 -
            footerMenu.offsetHeight) /
            2 +
          "px";
        logoSocialIcons.style.marginTop =
          (containerHeight.substring(0, containerHeight.length - 2) -
            61 -
            logoSocialIcons.offsetHeight) /
            2 +
          "px";
      }
    }
    function socialIconAlign() {
      if (window.innerWidth <= 767) {
        var logoSocialIcons = $(".logo-social-icons");
        var footerLogo = $(".footer-logo");
        var flooterSocialIcons = $(".footer-social-icons");
        footerLogo.style.marginTop =
          (logoSocialIcons.offsetHeight - footerLogo.offsetHeight) / 2 + "px";
        flooterSocialIcons.style.marginTop =
          (logoSocialIcons.offsetHeight - flooterSocialIcons.offsetHeight) / 2 +
          "px";
      }
    }
    document.addEventListener("DOMContentLoaded", function () {
      footerContentAlign();
      socialIconAlign();
    });
    window.addEventListener("resize", function () {
      footerContentAlign();
      socialIconAlign();
    });
  })();

  // Creation Video
  !(function () {
    var video = $(".common-video video");
    var playButton = $(".video-thumbnail a");
    var videoThumbnail = $(".video-thumbnail");
    if(playButton) {
      playButton.addEventListener("click", function (e) {
        e.preventDefault();
        video.play();
        videoThumbnail.style.display = "none";
        video.setAttribute("controls", true);
      });
      video.addEventListener("pause", function () {
        videoThumbnail.style.display = "flex";
      });
    }
  })();
})();
