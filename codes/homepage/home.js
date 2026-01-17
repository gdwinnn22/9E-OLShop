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
  "../../img/background/bg1.webp",
  "../..//background/bg2.webp",
  "../../img/background/bg3.webp",
  "../../img/background/bg4.webp",
  "../../img/background/bg5.webp"
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
     rgba(0, 0, 0, 0.9),
     rgba(0, 0, 0, 0.03)
   ),
   url(${images[currentImage]})`;


  layers[nextLayer].classList.add("active");
  layers[activeLayer].classList.remove("active");

  activeLayer = nextLayer;
}, 8000); // ganti tiap 8 detik

//rotate arrow button

const buttonClicked = document.getElementById("rotateTrigger")
const rotateSVG = document.getElementById("rotateSVG")

buttonClicked.addEventListener("mouseenter", () => {
  rotateSVG.classList.toggle("is-rotate")
})
