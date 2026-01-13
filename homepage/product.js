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
    addCart.classList.toggle("is-show", window.scrollY > 200);
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

const addCartLogo = document.querySelectorAll('.cartLogo');

addCartLogo.forEach(cartLogo => {
  const addCartText = cartLogo.querySelector(".addCart");

  cartLogo.addEventListener("mouseenter", () => {
    addCartText.classList.add("show")
  })
})


