let $ = document;
// const hamburgerMenu = $.querySelector('.topic-links-container')
let sideBarMenu = $.querySelector('.side-bar-menu')
let hamburger = $.querySelector('#nav-icon1')
let secondICon = $.querySelector('.second-icon')

hamburger.addEventListener('click' , ()=> {
    secondICon.classList.toggle('open')
    if(sideBarMenu.style.right === '0') {
        sideBarMenu.style.right = '10rem'
    } else {
        sideBarMenu.style.right = '0'
        
    }
})