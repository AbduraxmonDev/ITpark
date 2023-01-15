let btn = document.querySelector('#burger');
let link = document.querySelectorAll('#link');
let links = document.querySelector('#header__navbar')
console.log(link)
btn.addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open')
});
document.addEventListener('keydown', function(e){
    if (e.key == 'Escape') {
        document.querySelector('header').classList.remove('open')
    }
});
for (let links of link) {
    links.addEventListener('click', function() {
        document.querySelector('header').classList.remove('open')
    });
  }