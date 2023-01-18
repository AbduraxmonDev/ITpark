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
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

let moreBtn = document.querySelector('#moreBtn');
moreBtn.addEventListener('click', function(e) {
  document.querySelector(".courses__types").classList.toggle("more");
})