
//animasi bagian produk

const delay = 3000
const backHomeBtn = document.getElementById("backHome");
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

const isLogoHovered1 = document.querySelector(".enterLogo1");
const isLogoHovered2 = document.querySelector(".enterLogo2");
const isLogoHovered3 = document.querySelector(".enterLogo3");
const isLogoHovered4 = document.querySelector(".enterLogo4");
const isLogoHovered5 = document.querySelector(".enterLogo5");

const addEnterText1 = document.querySelector(".enterText1");
const addEnterText2 = document.querySelector(".enterText2");
const addEnterText3 = document.querySelector(".enterText3");
const addEnterText4 = document.querySelector(".enterText4");
const addEnterText5 = document.querySelector(".enterText5");

isLogoHovered1.addEventListener("mouseenter", () => {
  addEnterText1.classList.toggle("hover");
});
isLogoHovered1.addEventListener("mouseleave", () => {
  addEnterText1.classList.remove("hover");
});

isLogoHovered2.addEventListener("mouseenter", () => {
  addEnterText2.classList.toggle("hover");
});
isLogoHovered2.addEventListener("mouseleave", () => {
  addEnterText2.classList.remove("hover");
});

isLogoHovered3.addEventListener("mouseenter", () => {
  addEnterText3.classList.toggle("hover");
});
isLogoHovered3.addEventListener("mouseleave", () => {
  addEnterText3.classList.remove("hover");
});

isLogoHovered4.addEventListener("mouseenter", () => {
  addEnterText4.classList.toggle("hover");
});
isLogoHovered4.addEventListener("mouseleave", () => {
  addEnterText4.classList.remove("hover");
});

isLogoHovered5.addEventListener("mouseenter", () => {
  addEnterText5.classList.toggle("hover");
});
isLogoHovered5.addEventListener("mouseleave", () => {
  addEnterText5.classList.remove("hover");
});
