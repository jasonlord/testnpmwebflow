import $ from "jquery";

$(document).ready(function () {
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
