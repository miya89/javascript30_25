const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  e.stopPropagation();
  console.log(this.classList.value);
}

button.addEventListener(
  "click",
  () => {
    console.log("clickkkkkkkk");
  },
  {
    capture: true,
    once: true,
  }
);

divs.forEach((div) => div.addEventListener("click", logText));
