const pageBody = document.body;
const themeModeCheckbox = document.querySelector('[data-theme-mode]');
const advantagesSection = document.querySelector('.advantages');
const bookingSection = document.querySelector('.booking');
const contactSection = document.querySelector('.contact');
const callbackSection = document.querySelector('.callback');
const approvalSection = document.querySelector('.approval');
const footerSection = document.querySelector('.footer');
const headerSection = document.querySelector('.header');

/* Добавление классов для установки темной темы */
const setDarkTheme = () => {
  pageBody.classList.add('dark-mode');
  advantagesSection.classList.add('dark-mode');
  bookingSection.classList.add('dark-mode');
  contactSection.classList.add('dark-mode');
  callbackSection.classList.add('dark-mode');
  approvalSection.classList.add('dark-mode');
  footerSection.classList.add('dark-mode');
  headerSection.classList.add('dark-mode');
};

/* Удаление классов для установки светлой темы по умолчанию */
const removeDarkTheme = () => {
  localStorage.themeColor = 'light';
  pageBody.classList.remove('dark-mode');
  advantagesSection.classList.remove('dark-mode');
  bookingSection.classList.remove('dark-mode');
  contactSection.classList.remove('dark-mode');
  callbackSection.classList.remove('dark-mode');
  approvalSection.classList.remove('dark-mode');
  footerSection.classList.remove('dark-mode');
  headerSection.classList.remove('dark-mode');
};

/* Проверяем какая тема осталась после обновления сайта */
if (localStorage.themeColor === 'dark') {
  if (themeModeCheckbox) {
    themeModeCheckbox.checked = true;
    setDarkTheme();
  }
}

/* Если есть на сайте такой элемент то - продолжаем */
if (themeModeCheckbox) {
  themeModeCheckbox.addEventListener('change', () => {
    if (themeModeCheckbox.checked) {
      localStorage.themeColor = 'dark';
      setDarkTheme();
    } else {
      removeDarkTheme();
    }
  });
}
