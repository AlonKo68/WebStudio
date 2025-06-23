const refs = {
  modalForm: document.querySelector('.modal-form'),
  btnHero: document.querySelector('.hero-btn'),
  btnMenuOpen: document.querySelector('.menu-btn-open'),
  modalWindow: document.querySelector('.backdrop'),
  mobileMenu: document.querySelector('.menu'),
  btnModalClose: document.querySelector('.modal-btn-close'),
  btnMenuClose: document.querySelector('.menu-btn-close'),
};

// === ОТКРЫТИЕ / ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ===
refs.btnHero.addEventListener('click', openModal);
refs.btnModalClose.addEventListener('click', closeModal);
refs.modalWindow.addEventListener('click', e => {
  if (e.target === refs.modalWindow) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function openModal() {
  refs.modalWindow.classList.add('is-open');
}

function closeModal() {
  refs.modalWindow.classList.remove('is-open');
}

// === ОТКРЫТИЕ / ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ===
refs.btnMenuOpen.addEventListener('click', () => {
  refs.mobileMenu.classList.add('menu-js');
});

refs.btnMenuClose.addEventListener('click', () => {
  refs.mobileMenu.classList.remove('menu-js');
});

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




