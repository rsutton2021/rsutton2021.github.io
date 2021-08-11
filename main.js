/*===================================== 
======== MENU CLOSE FUNCTION ==========
=====================================*/
function toggle() {
    let menuClose = document.getElementById('nav-toggle');
    menuClose.checked = false;
}

/*===================================== 
======== PROJECTS INFO POPUP ==========
=====================================*/

const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('popup-overlay');
/* const popupEsc = document.querySelectorAll('[class^="popup"]'); */

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)        
    })
});

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
        
});

/* Second attempt to add Escape button function to close popup - doesn't work */
/* popupEsc.forEach(escape => {
    escape.addEventListener('Escape', () => {
        const popup = escape.closest('.popup')
        closePopup(popup)
    })
}) */

function openPopup(popup) {
    if (popup === null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup) {
    if (popup === null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

/* First attempt to add Escape button function to close popup - doesn't work */
/* document.onkeydown = function(event) {
    if(event.key === 'Escape') {
        overlay.classList.remove('active');
        popupEsc.classList.remove('active');
        console.log('Escape Function Test');
    }
}; */

