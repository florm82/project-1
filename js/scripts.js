$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, This is a header.");
  });
  $("p").click(function() {
    alert("This is a paragraph.");
  });
  $("img").click(function() {
    alert("This is an image.");
  });
  $(".clickable").click(function() {
    $("#Nikki-showing").slideToggle();
    $("#Nikki-hidden").slideToggle();
  });
  $("#clickable1").click(function() {
    $("#photo-showing").fadeToggle();
    $("#photo-hidden").fadeToggle();
  });
  $("#clickable2").click(function() {
    $("#photo-showing").fadeToggle();
    $("#photo-hidden").fadeToggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#black").click(function() {
    $("p").removeClass();
    $("p").addClass("white-font");
  });
});