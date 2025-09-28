import { gsap } from "gsap";
import _ from "lodash";

document.addEventListener("DOMContentLoaded", () => {
  // animate a box
  gsap.to(".my-box", { x: 200, duration: 2 });

  // lodash example
  console.log("Chunked:", _.chunk(["a", "b", "c", "d"], 2));
});
