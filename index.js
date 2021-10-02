const img = document.querySelector("img");
const h1 = document.querySelector("h1");
const a = document.querySelectorAll("a");
const h6 = document.querySelectorAll("h6");
let toggle = false;

//Theme change:
const redTheme = () => {
  if (toggle === false) {
    img.src = "8-bit-dylan-red.png";
    h1.textContent = "Hi, I'm Dylan :(";
    toggle = true;
  } else {
    img.src = "8-bit-dylan.png";
    h1.textContent = "Hi, I'm Dylan :)";
    toggle = false;
  }
  document.body.classList.toggle("red");
  img.classList.toggle("red-img");
  for (let i in a) {
    a[i].classList.toggle("red-link");
  }
  for (let i in h6) {
    h6[i].classList.toggle("red-border");
  }
};

img.addEventListener("click", redTheme);
