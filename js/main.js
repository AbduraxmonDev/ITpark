let btn = document.querySelector("#burger");
let link = document.querySelectorAll("#link");
btn.addEventListener("click", function () {
  document.querySelector("header").classList.toggle("open");
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    document.querySelector("header").classList.remove("open");
  }
});
for (let item of link) {
  item.addEventListener("click", function () {
    document.querySelector("header").classList.remove("open");
  });
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let moreBtn = document.querySelector("#moreBtn");
moreBtn.addEventListener("click", function () {
  document.querySelector(".courses__types").classList.toggle("more");
});

let input = document.querySelector("#input");
let submitBtn = document.querySelector("#submitBtn");
let error = document.querySelector("#error");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    error.style.display = "block";
    setTimeout(function () {
      error.style.display = "none";
    }, 3000);
  } else {
    console.log(typeof input.value)
  }
});
