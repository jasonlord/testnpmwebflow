import $ from "jquery";

$(function () {
  setTimeout(function () {
    let counter = 1000;
    setInterval(function () {
      counter += 1;
      const updatedString = `${counter}`;
      $("#npmHeading").text(updatedString);
      $("#npmHeading").css("display", "block");
    }, 1000);
  }, 5000);

  for (let i = 0; i < 1000; i++) {
    const h1 = $("<h1>").text(`Heading ${i + 1}`);
    $("body").append(h1);
  }
});
