const navmenu = document.querySelector('.navigation');
const navtoggle = document.querySelector('.menu-toggle');

navtoggle.addEventListener('click', () => {
    const visibility = navmenu.getAttribute('data-visible');
    if (visibility === "false") {
        navmenu.setAttribute('data-visible', true)
        navtoggle.setAttribute('data-active', true)
    }
    else if (visibility === "true") {
        navmenu.setAttribute('data-visible', false)
        navtoggle.setAttribute('data-active', false)
    }
})