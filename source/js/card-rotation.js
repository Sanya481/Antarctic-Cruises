// Секция с нужными нам элементами для удобства поиска
const directionsBlock = document.querySelector('#directions');
// Список с карточками по маршрутам путешествия
const directionsList = directionsBlock.querySelector('#directions__list');

/* Проверим, соответствует ли указанный медиа-запрос (screen and (max-width: 1023px)) устройству
Результат проверки можно получить с помощью свойства matches (true или false) */
if (window.matchMedia('screen and (max-width: 1023px)').matches) {
  directionsList.addEventListener('click', (evt) => {
    const card = evt.target.closest('.card');
    const cardBack = evt.target.closest('.card-back');
    if (evt.target.tagName === 'IMG') {
      card.classList.add('rotation');
    }
    if (cardBack) {
      card.classList.remove('rotation');
    }
  });
}
