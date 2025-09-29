import $ from "jquery";

$(document).ready(function () {
  let counter = 1000;
  setInterval(function () {
    counter += 1;
    const updatedString = `${counter}`;
    $("#npmHeading").text(updatedString);
  }, 1000);
});
