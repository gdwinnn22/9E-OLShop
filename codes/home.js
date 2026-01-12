//logo kiri

const triggerLeft = document.getElementById("side-trigger");
const anchorLeft = document.getElementById("side-text");

//SVG hover

triggerLeft.addEventListener("mouseenter", () => {
  triggerLeft.classList.add("is-hover");
});

triggerLeft.addEventListener("mouseleave", () => {
  if (!triggerLeft.classList.contains("is-hold")) {
    triggerLeft.classList.remove("is-hover");
  }
});

// anchor tahan animasi

anchorLeft.addEventListener("mouseenter", () => {
  triggerLeft.classList.add("is-hold");
});

anchorLeft.addEventListener("mouseleave", () => {
  triggerLeft.classList.remove("is-hover");
  triggerLeft.classList.remove("is-hold");
});

// accessibility keyboard

anchorLeft.addEventListener("focus", () => {
  triggerLeft.classList.add("is-hold");
});

anchorLeft.addEventListener("blur", () => {
  triggerLeft.classList.remove("is-hold");
  triggerLeft.classList.remove("is-hover");
});

const layers = document.querySelectorAll(".bg-layer");

const images = [
  "/repositories/img.ecommerce%20-%20backup/bg1.jpeg",
  "/repositories/img.ecommerce%20-%20backup/bg2.jpeg",
  "/repositories/img.ecommerce%20-%20backup/bg3.jpeg",
  "/repositories/img.ecommerce%20-%20backup/bg4.jpeg",
  "/repositories/img.ecommerce%20-%20backup/bg5.jpeg"
];

let currentImage = 0;
let activeLayer = 0;

// set awal
layers[0].style.backgroundImage = `url(${images[0]})`;
layers[0].classList.add("active");

setInterval(() => {
  const nextLayer = activeLayer === 0 ? 1 : 0;

  currentImage = (currentImage + 1) % images.length;

  layers[nextLayer].style.backgroundImage =
  `linear-gradient(
     to bottom,
     rgba(0, 0, 0, 0.95),
     rgba(0, 0, 0, 0.1)
   ),
   url(${images[currentImage]})`;


  layers[nextLayer].classList.add("active");
  layers[activeLayer].classList.remove("active");

  activeLayer = nextLayer;
}, 8000); // ganti tiap 8 detik
