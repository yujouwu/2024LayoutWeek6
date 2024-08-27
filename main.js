import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";


// jQuery 漢堡選單
$(document).ready(function () {
  $(".navbar-toggler").click(function (event) {
    $(".bi-list").toggleClass("close");
    $(".bi-x").toggleClass("close");
    $(".logo").toggleClass("close");
  });
});

