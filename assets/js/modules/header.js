const header = document.querySelector('[data-header]')

function init() {
    setListeners()
}
export default {
    init
}

function onWindowScroll() {
    if (window.scrollY > 20) {
        header.style.backgroundColor = '#0c0d14'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}
const openNavSubmenu = document.querySelector('[data-open-navsubmenu]')
const navSubmenu = document.querySelector('[data-navsubmenu]')

function onTouchOpenNavSubmenu(event) {
    event.preventDefault();
    navSubmenu.classList.toggle("active")
}
const userMenu = document.querySelector('[data-user-menu]')
const openUserMenu = document.querySelector('[data-open-usermenu]')

function onTouchOpenUserMenu(event) {
    event.preventDefault();
    userMenu.classList.toggle("active")
}

function setListeners() {
    window.addEventListener('scroll', onWindowScroll)
    openNavSubmenu.addEventListener('touchstart', onTouchOpenNavSubmenu)
    openUserMenu.addEventListener('touchstart', onTouchOpenUserMenu)
}