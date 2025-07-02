const arrLinks = ['Studio', 'Portfolio', 'Contacts'];
const refs = {
  navLinks: document.querySelectorAll('.nav-link'),
  mobileMenu: document.querySelector('.menu'),
  mobileMenuList: document.querySelector('.menu-nav-list-js'),
  btnMenuOpen: document.querySelector('.menu-btn-open'),
  btnMenuClose: document.querySelector('.menu-btn-close'),
  menuLinks: document.querySelectorAll('.menu-nav-link'),
  btnHero: document.querySelector('.hero-btn'),
  modalWindow: document.querySelector('.backdrop'),
  btnModalClose: document.querySelector('.modal-btn-close'),
  modalForm: document.querySelector('.modal-form'),
};

// Создаем разметку для мобильного меню
function createMarkup(arr) {
  return arr.map((item) => 
    ` <li class=" menu-nav-item">
  <a class="menu-nav-link" href="#${item.trim().toLowerCase()}" aria-label="go to ${item} site">
  ${item}
  </a>
  </li>`
).join('')
}
refs.mobileMenuList.insertAdjacentHTML('afterbegin', createMarkup(arrLinks));

// header
refs.navLinks.forEach((link) => {
  link.addEventListener('mouseover', (e) => {
    e.currentTarget.classList.add('active');
  });
  link.addEventListener('mouseout', handle);
  link.addEventListener('click', handle);
 function handle(e) {
    e.currentTarget.classList.remove('active');
  };
});


// === ОТКРЫТИЕ / ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ===
refs.btnHero.addEventListener('click', handleOpenModal);
refs.btnModalClose.addEventListener('click', handleCloseModal);

refs.modalWindow.addEventListener('click', e => {
  if (e.target === refs.modalWindow) handleCloseModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') handleCloseModal();
});

function handleOpenModal() {
  refs.modalWindow.classList.add('is-open');
  document.body.classList.add('on-scroll'); // Блокируем прокрутку страницы
}

function handleCloseModal() {
  refs.modalWindow.classList.remove('is-open');
  document.body.classList.remove('js-on-scroll'); // Разблокируем прокрутку страницы
}

// === ОТКРЫТИЕ / ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ===
refs.btnMenuOpen.addEventListener('click', () => {
  refs.mobileMenu.classList.add('menu-js');
});

function handleCloseMenu () {
  refs.mobileMenu.classList.remove('menu-js');
}
refs.btnMenuClose.addEventListener('click', handleCloseMenu);
refs.mobileMenuList.addEventListener('click', e => {
  if (e.target.classList.contains('menu-nav-link')) {
    handleCloseMenu();
  }
})


// === ОТПРАВКА ФОРМЫ ===
refs.modalForm.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://your-server-endpoint.com/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

    const result = await response.json();
    console.log('Успешно отправлено:', result);

    refs.modalForm.reset();
    closeModal(); // Закрываем модалку после успешной отправки
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    alert('Произошла ошибка. Попробуйте ещё раз.');
  }
});



