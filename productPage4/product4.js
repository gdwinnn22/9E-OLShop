const holdBtn500mL = document.querySelector(".sizeBtn500mL");
const holdBtn1000mL = document.querySelector(".sizeBtn1000mL");
let isSuccess500mL = false;
let isSuccess1000mL = false;

holdBtn500mL.addEventListener("click", () => {
  holdBtn500mL.classList.toggle("hold");
  holdBtn1000mL.classList.remove("hold");
  isSuccess500mL = true;
})

holdBtn1000mL.addEventListener("click", () => {
  holdBtn1000mL.classList.toggle("hold");
  holdBtn500mL.classList.remove("hold");
  isSuccess1000mL = true;
})

const addToCartBtn = document.getElementById("add-to-bag");

if (holdBtn1000mL.classList.contains("hold") || holdBtn1000mL.classList.contains("hold")) 
  {
  addToCartBtn.addEventListener("click", () => {
  alert("Successfully added to Cart");
})
} else {
  addToCartBtn.addEventListener("click", () => {
  alert("Please select size!");
})
}

