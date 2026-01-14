const holdBtn500mL = document.querySelector(".sizeBtn500mL");
const holdBtn1000mL = document.querySelector(".sizeBtn1000mL");

holdBtn500mL.addEventListener("click", () => {
  holdBtn500mL.classList.toggle("hold");
  holdBtn1000mL.classList.remove("hold");
})

holdBtn1000mL.addEventListener("click", () => {
  holdBtn1000mL.classList.toggle("hold");
  holdBtn500mL.classList.remove("hold");
})

