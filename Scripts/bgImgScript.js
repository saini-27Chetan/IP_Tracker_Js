// Script to change the background image 

const bgHeader = document.getElementById('header');
function handleMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        bgHeader.style.background = `url('./images/pattern-bg-mobile.png')`;
        bgHeader.style.backgroundRepeat = `no-repeat`;
        bgHeader.style.backgroundSize = `cover`;
    }
    else {
        bgHeader.style.background = `url('./images/pattern-bg-desktop.png')`;
        bgHeader.style.backgroundRepeat = `no-repeat`;
        bgHeader.style.backgroundSize = `cover`;
    }
}

const mediaQuery = window.matchMedia('(max-width: 580px)');
handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);