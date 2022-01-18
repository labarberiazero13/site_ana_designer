/*show menu*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav')

/*removendo menu mobile*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*deixando o link clicado com a class active*/
const linkColor = document.querySelectorAll('.nav_link')
function colorLink() {
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))