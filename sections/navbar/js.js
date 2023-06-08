const buttonNavbar = document.getElementById('buttom-navbar-resposive')
const collapseNavbar = document.getElementById('collapse-navbar')
const navBar = document.getElementById('navbar-basic')

// buttom-and-collapse-menu-navbar

buttonNavbar.addEventListener('click', ()=> {
    buttonNavbar.classList.toggle('change');
    collapseNavbar.classList.toggle('active');
});


// scrool-effect-navabar

window.addEventListener('scroll', ()=> {
    navBar.classList.toggle("bottom", window.scrollY>0);
})



