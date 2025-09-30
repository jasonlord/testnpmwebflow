import $ from "jquery";

$(function () {
  // Append the heading before starting the interval
  $("body").append(`<h1 id="npmHeading" style="display:none;"></h1>`);

  setTimeout(function () {
    let counter = 1000;
    setInterval(function () {
      counter += 1;
      const updatedString = `${counter}`;
      $("#npmHeading").text(updatedString);
      $("#npmHeading").css("display", "block");
    }, 1000);
  }, 5000);
});
