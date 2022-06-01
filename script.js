document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    menuIcon = document.querySelector('#menu-icon')
    menuContent = document.querySelector('.container>nav nav .links')


    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active-menu')
        menuContent.classList.toggle('open-menu')
    })

    let links = document.querySelectorAll('.container>nav nav .links a')

    links = Array.from(links)
    links.map((link) => {
        link.addEventListener('click', () => {
            menuIcon.classList.toggle('active-menu')
            menuContent.classList.toggle('open-menu')
        })
    })
})