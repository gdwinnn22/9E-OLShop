const sizeBtn500mL = document.querySelector(".sizeBtn500mL");
const sizeBtn1000ml = document.querySelector(".sizeBtn1000mL");
const changePrice = document.querySelector(".product-price");

sizeBtn500mL.addEventListener("click", () => {
    sizeBtn500mL.classList.add("hold");
    sizeBtn1000ml.classList.remove("hold");
    changePrice.textContent = "IDR Rp15.000,00";

});
sizeBtn1000ml.addEventListener("click", () => {
    sizeBtn1000ml.classList.add('hold');
    sizeBtn500mL.classList.remove("hold");
    changePrice.textContent = "IDR Rp20.000,00";
});