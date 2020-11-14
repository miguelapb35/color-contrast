let contrastSchemes = [
  {first: "#EEF4D7", second: "#FF5555"},
  {first: "#BFDFC8", second: "#901F5E"},
  {first: "#402F31", second: "#D1C6E1"},
  {first: "#FAE603", second: "#36549D"},
  {first: "#FF6603", second: "#FFF2E9"}, 
  {first: "#379683", second: "#EDF5E1"},
  {first: "#1A1A1D", second: "#C3073F"}
];

$(".cauldron").on("click", function () {
  $(".cauldron").toggleClass("disabled");
  let c = contrastSchemes[Math.floor(Math.random() * contrastSchemes.length)];
  $('.cauldron-bomb').css("background-image", "linear-gradient(90deg," + c.second + " 50%, " + c.first + " 50%)");
  $(".cauldron-bomb").toggleClass("active").delay(1000).hide("explode", { pieces: 120 }, 1000);

  setTimeout(function () {
    $(".container-colors > .first").text(`${c.second}`).css("color", c.first);
    $(".container-colors > .second").text(`${c.first}`).css("color", c.second);
    $(".left").css("background-color", c.second);
    $(".right").css("background-color", c.first);
  }, 1000);

  setTimeout(function () {
    $(".cauldron-bomb").show("explode", { pieces: 120 }, 1000);
    $(".left").css("background-color", "#000");
    $(".right").css("background-color", "#fff");
  }, 5000);

  setTimeout(function () {
    $(".container-colors > .first").text("#000000").css("color", "#fff");
    $(".container-colors > .second").text("#FFFFFF").css("color", "#000");
    $(".cauldron-bomb").toggleClass("active");
    $(".cauldron").toggleClass("disabled");
  }, 6000);
});

$(".first, .second").on("click", function () {
  let element = $(this);
  element.toggleClass("copied");

  var temp = $("<input>").css("opacity", "0");
  $("body").append(temp);
  temp.val(element.text()).select();
  document.execCommand("copy");
  temp.remove();

  setTimeout(function () {
    element.toggleClass("copied");
  }, 1000);
});
