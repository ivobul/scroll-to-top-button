const px = 50; // number of pixels
const btn = document.querySelector("#btn");

document.addEventListener("scroll", showBtn);
btn.addEventListener("click", toTop);

function showBtn() {
  if (document.body.scrollTop > px || document.documentElement.scrollTop > px) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  } 
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}