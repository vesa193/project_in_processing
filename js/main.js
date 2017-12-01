const hamburger = document.querySelector('.nav__hamburger')
const menu = document.querySelector('.nav__menu')
const menuActive = document.querySelector('.nav__menu--open')

function openMenu(e) {
    menu.classList.toggle('nav__menu--open')
}

hamburger.addEventListener('click', openMenu)



const jobBtn = document.querySelector('.job__btn--open')
const hideBox = document.querySelector('.jobs__hide-box')


function openMore(e) {
    console.log(e)
    hideBox.classList.toggle('jobs__addition')
}

jobBtn.addEventListener('click', openMore)