"use strict";

// Jquery
!function () {
  // Banner Sldier
  $("#slider-section .slider-items").owlCarousel({
    items: 1,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 2500,
    nav: false,
    dots: false
  }); // Responsive Menu

  $(".nav-menu-toggle").on("click", function () {
    $(".main-nav").slideToggle();
  });
}(); // Custom JS

!function () {
  // Slider
  // Function: Custom Selector
  var $ = function $(selector, areAll) {
    var all = document.querySelectorAll(selector);
    var single = document.querySelector(selector);
    return areAll ? all : single;
  };

  var sliderItmes = $(".slider-items .single-slide", true);
  sliderItmes.forEach(function (item) {
    item.style.backgroundImage = "url(" + item.dataset.url + ")";
  }); // Responsive Dropdown

  !function () {
    var menuItems = $(".mega-menu", true);
    menuItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (e.target === item.firstElementChild) {
          e.preventDefault();
        } // e.preventDefault();


        var display = getComputedStyle(this.querySelector(".columns")).display;

        if (display === "none") {
          this.querySelector(".columns").style.display = "block";
        } else {
          this.querySelector(".columns").style.display = "none";
        }
      }); // console.log(item.querySelector(".mega-menu"));
    });
  }(); // Banner Marquee Mouse over /out

  !function () {
    var marquee = $(".banner-marquee h3 marquee");
    marquee.addEventListener("mouseover", function () {
      this.stop();
    });
    marquee.addEventListener("mouseout", function () {
      this.start();
    });
  }(); // Vertical Slider

  !function () {
    setInterval(function () {
      var newsItems = $(".news-items");
      var allnewsItem = $(".news-items .news-item", true);
      allnewsItem.forEach(function (item) {
        // .transform = 'translateX(-21px)';
        // console.log(getComputedStyle(item).transform);
        item.style.transform = "translateY(-21px)";
        newsItems.appendChild(allnewsItem[0]);
      });
    }, 3000);
  }(); // Main content Boxes

  !function () {
    var boxes = $(".main-content-box", true);
    boxes.forEach(function (box) {
      console.log(box.offsetHeight);
    });
  }(); // Main content video

  !function () {
    var mainContentVideo = function mainContentVideo() {
      var iframe = $(".main-content-video iframe");
      var iframeWidth = iframe.offsetWidth;
      console.log(iframeWidth);
      iframe.style.height = iframeWidth / 100 * 66.667 + "px";
    };

    mainContentVideo();
    window.addEventListener("resize", mainContentVideo);
  }(); // Sidebar video iframe

  !function () {
    var mainFunction = function mainFunction() {
      var iframes = $(".youtube-video iframe", true);
      iframes.forEach(function (iframe) {
        var iframeWidth = iframe.offsetWidth;
        iframe.style.height = iframeWidth / 100 * 70 + "px";
      });
    };

    mainFunction();
    window.addEventListener('resize', mainFunction);
  }();
}();