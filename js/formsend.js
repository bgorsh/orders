const form = document.getElementById('form');
const msg = document.getElementById('message');

// Обработчик события отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение отправки формы

  // Получаем данные формы
  const formData = new FormData(this);

  // Отправляем данные формы на сервер с использованием функции fetch()
  fetch('/send_mail.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Очищаем поля формы
      h1.style.cssText = 'text-alighn: center; vertical-alighn: middle;';
      h1.setAttribute('style', 'text-alighn: center; vertical-alighn: middle;');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
});
