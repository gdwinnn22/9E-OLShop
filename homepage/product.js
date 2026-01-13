//animasi keranjang

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

//animasi bagian produk

const delay = 3000
const backHomeBtn = document.getElementById("backHome");
const productNavbar = document.getElementById("topPageBox");
const popupTitle = document.getElementById("popupTitle");
const hrPopup = document.getElementById("hr");
const rightArrow = document.getElementById("next");
const leftArrow = document.getElementById("prev");

window.addEventListener("scroll", () => {
  setTimeout(() => {
    trigger.classList.toggle("is-show", window.scrollY > 400);
  }, 250);
  setTimeout(() => {
    rightArrow.classList.toggle("is-show", window.scrollY > 600);
    leftArrow.classList.toggle("is-show", window.scrollY > 600);
    backHomeBtn.classList.toggle("is-show", window.scrollY > 600);
    productNavbar.classList.toggle("is-show", window.scrollY > 200);
    popupTitle.classList.toggle("is-show", window.scrollY > 300);
    hrPopup.classList.toggle("is-show", window.scrollY > 550);
  }, 50);
});

backHomeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


//animasi tombol kembali ke atas

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

// ==========================
// SCROLL LOGIC (FIXED BUTTON)
// ==========================
let lastScrollY = window.scrollY;
const triggerPoint = window.innerHeight * 1.15;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  const passed115vh = currentScrollY > triggerPoint;
  const scrollingUp = currentScrollY < lastScrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  // tampil saat scroll ke atas & sudah lewat 115vh
  if (passed115vh && scrollingUp) {
    homeTrigger.classList.add("is-show");
  }

  // hilang saat scroll ke bawah (kecuali sedang hold)
  if (scrollingDown && !homeTrigger.classList.contains("is-hold")) {
    homeTrigger.classList.remove("is-show");
  }

  lastScrollY = currentScrollY;
});

//tombol produk

const slider = document.getElementById("slider");
const card = slider.querySelector(".card");
const gap = 16;

const cardWidth = card.offsetWidth + gap; // 24 = gap

next.onclick = () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
};

prev.onclick = () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
};

//animasi teks tambahkan ke keranjang saat logo cart dihover

const isLogoHovered1 = document.querySelector(".cartLogo1");
const isLogoHovered2 = document.querySelector(".cartLogo2");
const isLogoHovered3 = document.querySelector(".cartLogo3");
const isLogoHovered4 = document.querySelector(".cartLogo4");
const isLogoHovered5 = document.querySelector(".cartLogo5");

const addCartText1 = document.querySelector(".cartText1");
const addCartText2 = document.querySelector(".cartText2");
const addCartText3 = document.querySelector(".cartText3");
const addCartText4 = document.querySelector(".cartText4");
const addCartText5 = document.querySelector(".cartText5");

isLogoHovered1.addEventListener("mouseenter", () => {
  addCartText1.classList.toggle("hover");
});
isLogoHovered1.addEventListener("mouseleave", () => {
  addCartText1.classList.remove("hover");
});

isLogoHovered2.addEventListener("mouseenter", () => {
  addCartText2.classList.toggle("hover");
});
isLogoHovered2.addEventListener("mouseleave", () => {
  addCartText2.classList.remove("hover");
});

isLogoHovered3.addEventListener("mouseenter", () => {
  addCartText3.classList.toggle("hover");
});
isLogoHovered3.addEventListener("mouseleave", () => {
  addCartText3.classList.remove("hover");
});

isLogoHovered4.addEventListener("mouseenter", () => {
  addCartText4.classList.toggle("hover");
});
isLogoHovered4.addEventListener("mouseleave", () => {
  addCartText4.classList.remove("hover");
});

isLogoHovered5.addEventListener("mouseenter", () => {
  addCartText5.classList.toggle("hover");
});
isLogoHovered5.addEventListener("mouseleave", () => {
  addCartText5.classList.remove("hover");
});

//animasi cart saat card dihover

const triggerLogo = document.querySelectorAll(".card");

triggerLogo.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover");
  });
});
