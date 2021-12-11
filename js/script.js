//SHOW SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 170)
        scrollTop.classList.add('scroll-top')
    else
        scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


// SCROLL TOP
document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo(0, 0)
})

//HEADER 
window.addEventListener('scroll', function () {
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})


//Dark Mode
const body = document.querySelector('body');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
    body.classList.toggle('dark');
})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
}
