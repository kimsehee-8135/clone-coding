const menuOpenEl = document.getElementById('btn--open')
const sideMenuEl = document.getElementById('side__menu')
const menuCloseEl = document.getElementById('btn--close')

menuOpenEl.addEventListener("click", function(){
    sideMenuEl.style.transform = 'translateX(0%)'
})


menuCloseEl.addEventListener("click", function(){
    sideMenuEl.style.transform = 'translateX(-100%)'
})