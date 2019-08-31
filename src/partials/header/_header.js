const toggleButton = document.getElementById('toggle-menu')
toggleButton.addEventListener('click',
    () => {
        document.querySelector('header > div.container').classList.toggle('open')
        document.querySelector('div.duo-menu-icon').classList.toggle('open')
    }
)

if (window.innerWidth < 768) {
    const submenu = document.getElementById('submenu')

    submenu.addEventListener('click', () => {
        document.querySelector('div.header-logo').classList.add('open')
        document.querySelector('ul#menu-submenu').classList.add('open')
        document.querySelector('ul#menu').classList.add('open')
    })

    const back = document.querySelector('div.header-logo > div')

    back.addEventListener('click', () => {
        document.querySelector('div.header-logo').classList.remove('open')
        document.querySelector('ul#menu-submenu').classList.remove('open')
        document.querySelector('ul#menu').classList.remove('open')
    })
}
