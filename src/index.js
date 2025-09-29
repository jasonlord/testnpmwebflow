import $ from "jquery";

$(document).ready(function () {
  $("#npmHeading").css("display", "block");
  let counter = 1000;
  setInterval(function () {
    counter += 1;
    const updatedString = `${counter}`;
    $("#npmHeading").text(updatedString);
  }, 1000);
});
