const pageBody = document.body;
// Для удобства поиска находим секцию header
const header = pageBody.querySelector('#header');
// Логотип сайта в планшетной/мобильной версии
const headerLogo = header.querySelector('#header__logo');
// Кнопка для открытия/закрытия меню
const burger = header.querySelector('#burger');
// Элемент - 'Бургер/Крестик'
const burgerMenu = burger.querySelector('#burger__menu');
// Навигация по сайту
const headerNav = header.querySelector('#header__nav');

if (window.matchMedia('(max-width: 767px)').matches) {
  burger.addEventListener('click', (evt) => {
    evt.preventDefault();
    pageBody.classList.toggle('scroll-lock');
    headerLogo.classList.toggle('is-open');
    headerNav.classList.toggle('is-open');
    burgerMenu.classList.toggle('is-open');
    burger.classList.toggle('is-open');
  });
}
