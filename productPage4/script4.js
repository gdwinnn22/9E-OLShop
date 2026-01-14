// main webpage btn interaction

const menuButton = document.getElementById("menu-btn");
const navbar = document.getElementById("nav-popup");
const navCloseButton = document.getElementById("close-btn")

menuButton.onclick = () => navbar.classList.toggle("is-active")
navCloseButton.onclick = () => navbar.classList.remove('is-active')

document.addEventListener("click", (event) => {
  const handleOutsideClick = 
  menuButton.contains(event.target) || navbar.contains(event.target) || navCloseButton.contains(event.target);

  if (!handleOutsideClick) {
    navbar.classList.remove("is-active")
  }
})

// copy link auto

const copyElements = document.querySelectorAll("#copy-text");

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

copyElements.forEach(element => {
  element.addEventListener("click", () => {
    const text = element.dataset.copy;
    copyToClipboard(text);
    alert("Link Copied!")
  });
});

// animasi cart

const trigger = document.getElementById("cart-trigger");
const anchor = document.getElementById("cart-text");

//SVG hover
trigger.addEventListener("mouseenter", () => {
  trigger.classList.add("is-hover");
});

trigger.addEventListener("mouseleave", () => {
  if (!trigger.classList.contains("is-hold")) {
    trigger.classList.remove("is-hover");
  }
});

// anchor tahan animasi

anchor.addEventListener("mouseenter", () => {
  trigger.classList.add("is-hold");
});

anchor.addEventListener("mouseleave", () => {
  trigger.classList.remove("is-hover");
  trigger.classList.remove("is-hold");
});

// accessibility keyboard

anchor.addEventListener("focus", () => {
  trigger.classList.add("is-hold");
});

anchor.addEventListener("blur", () => {
  trigger.classList.remove("is-hold");
  trigger.classList.remove("is-hover");
});

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



