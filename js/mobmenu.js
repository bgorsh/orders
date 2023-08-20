const burger = document.querySelector('.header__burger-btn');
const link = document.querySelectorAll('.header__menu-link');
const mobMenu = document.querySelector('.header__menu-list');


burger.addEventListener('click', () => {
  document.querySelector('.header__menu-list').classList.toggle('active')
});

link.forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelector('.header__menu-list').classList.remove('active')
  })
})