$(document).ready(function () {
  $(".design-description").fadeOut(300);
  $(".design-pop").on("click", function () {
    $(".design-description").fadeIn(300);
    $(".design-pop").slideToggle();
  });
  $(".design-description").on("click", function () {
    $(".design-pop").show().fadeIn(300);
    $(".design-description").fadeOut();
  });
});

$(document).ready(function () {
  $(".product-dev").fadeOut();
  $(".dev-image").on("click", function () {
    $(".product-dev").fadeIn();
    $(".dev-image").toggle();
  });
  $(".product-dev").on("click", function () {
    $(".dev-image").fadeIn();
    $(".product-dev").fadeOut();
  });
});

$(document).ready(function () {
  $(".product-man").fadeOut();
  $(".prod-man").on("click", function () {
    $(".product-man").fadeIn();
    $(".prod-man").toggle();
  });
  $(".product-man").on("click", function () {
    $(".prod-man").fadeIn();
    $(".product-man").fadeOut();
  });
});

$(".hovereffect, .overlay").hover(function (e) {
  $(this).css(
    "background-color",
    e.type === "mouseenter" ? "rgba(236, 221, 221, 0.055)" : "transparent"
  );
});

