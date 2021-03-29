// open and close navigation
const button = document.querySelector('.nav-button')
const nav = document.querySelector('.navigation')

function toggleNav( evt ) {
  if( nav.classList.contains('open') ) {
    nav.classList.remove('open')
  }
  else {
    nav.classList.add('open')
  }
}

function onLoad( evt ) {
  button.addEventListener('click', toggleNav )
}



window.addEventListener('load', onLoad )