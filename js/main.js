let btn = document.querySelector('#burger');
btn.addEventListener('click', function() {
    document.querySelector("header").classList.toggle("open")
});
document.addEventListener('keydown', function(e){
    if (e.key == 'Escape') {
        document.querySelector("header").classList.remove("open")
    }
}) ;
document.querySelectorAll('#header__link').addEventListener("click", function() {
    document.querySelector("header").classList.remove("open")
})