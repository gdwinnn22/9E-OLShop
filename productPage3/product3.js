const homeTrigger = document.getElementById("homeTrigger");
const homeAnchor = document.getElementById("textArea");

// ==========================
// SVG HOVER
// ==========================
homeTrigger.addEventListener("mouseenter", () => {
  homeTrigger.classList.add("is-hover");
});

homeTrigger.addEventListener("mouseleave", () => {
  if (!homeTrigger.classList.contains("is-hold")) {
    homeTrigger.classList.remove("is-hover");
  }
});

// ==========================
// ANCHOR TAHAN ANIMASI
// ==========================
homeAnchor.addEventListener("mouseenter", () => {
  homeTrigger.classList.add("is-hold");
});

homeAnchor.addEventListener("mouseleave", () => {
  homeTrigger.classList.remove("is-hover");
  homeTrigger.classList.remove("is-hold");
});

// ==========================
// ACCESSIBILITY KEYBOARD
// ==========================
homeAnchor.addEventListener("focus", () => {
  homeTrigger.classList.add("is-hold");
});

homeAnchor.addEventListener("blur", () => {
  homeTrigger.classList.remove("is-hold");
  homeTrigger.classList.remove("is-hover");
});

//animasi hold tombol ukuran



