addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.desplegable')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const nav_menu = document.querySelector('.nav-menu')
            nav_menu.classList.toggle('show')
        })
    }
})