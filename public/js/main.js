/* eslint-disable */

var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }
});

document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

$(document).ready(function () {
  $(window).on("scroll", function () {
    var link = $(".nav-scroll a.dot");
    var top = $(window).scrollTop();

    $("section").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass("active");
        $(".nav-scroll")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });
});

// Dark Mode

var icon = document.getElementById("dark-icon");
var featureContent = document.querySelectorAll(".feature-content");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
    for (var i = 0; i < featureContent.length; i++) {
      featureContent[i].style.backgroundColor = "#ccc";
      // featureContent[i].style.boxShadow = "0 7px 10px var(--mainColor)";
    }
  } else {
    icon.src = "./images/moon.png";
    for (var i = 0; i < featureContent.length; i++) {
      featureContent[i].style.backgroundColor = "#F6F4EB";
      featureContent[i].style.boxShadow = "0 7px 10px ##777775";
    }
  }
};


