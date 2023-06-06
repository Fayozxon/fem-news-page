const navBtn = document.querySelector('#navBtn'),
      nav = document.querySelector('#nav');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    navBtn.classList.toggle('open');
})