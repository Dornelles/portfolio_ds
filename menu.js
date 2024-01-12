let menu = document.getElementById('menu-mobile')

let btnMenu = document.getElementById('btn-menu')
let overlayMenu = document.getElementById('overlay-menu')
let iconCloseMenu = document.getElementById('close-icon')
let listMenuClose = document.getElementById('list-menu-close')



btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


overlayMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

iconCloseMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


iconCloseMenu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

listMenuClose.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
