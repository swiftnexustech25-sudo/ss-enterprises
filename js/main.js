(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        },
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
    },
  });
})(jQuery);

$(".service-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  margin: 0,
  dots: true,
  loop: true,
  nav: true, // Keep this true
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 4 },
  },
});

// Dynamically update the modal title based on which card button was clicked
const certModal = document.getElementById("certModal");
if (certModal) {
  certModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const certName = button.getAttribute("data-cert-name");
    const modalTitle = certModal.querySelector(".modal-title");
    modalTitle.textContent = "Request: " + certName;
  });
}

=======

// ================= HERO IMAGE + VIDEO CAROUSEL =================

document.addEventListener("DOMContentLoaded", function () {

    const carouselEl = document.getElementById("header-carousel");

    if (!carouselEl) return;

    const carousel = new bootstrap.Carousel(carouselEl, {
        interval: false,
        ride: false,
        wrap: true,
        touch: true
    });

    let timer = null;

    function playCurrentSlide() {

        clearTimeout(timer);

        // Stop all videos
        document.querySelectorAll("#header-carousel video").forEach(v => {
            v.pause();
            v.currentTime = 0;
        });

        const active = carouselEl.querySelector(".carousel-item.active");

        if (!active) return;

        const type = active.dataset.type;

        if (type === "image") {

            timer = setTimeout(() => {
                carousel.next();
            }, 2000);

        } else {

            const video = active.querySelector("video");

            if (!video) return;

            video.play();

            video.onended = function () {
                carousel.next();
            };

        }

    }

    playCurrentSlide();

    carouselEl.addEventListener("slid.bs.carousel", playCurrentSlide);

});


// ================= ANIMATE HERO TEXT ONLY ONCE =================

window.addEventListener("load", function () {

    setTimeout(function () {

        const firstSlide = document.querySelector("#header-carousel .carousel-item.active");
console.log(firstSlide);
        if (!firstSlide) return;

        const heading = firstSlide.querySelector("h5");
        const title = firstSlide.querySelector("h1");
        const buttons = firstSlide.querySelectorAll("a");

        if (heading)
           heading.classList.add("animate__animated", "animate__slideInDown");
        if (title)
            title.classList.add("animate__animated", "animate__zoomIn");


        if (buttons[0])
            buttons[0].classList.add("animate__animated", "animate__slideInLeft");

        if (buttons[1])
            
buttons[1].classList.add("animate__animated", "animate__slideInRight");

    }, 2500); // same duration as intro video

});

