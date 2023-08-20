const form = document.querySelector('form'),
      inputs = document.querySelectorAll('input'),
      phoneInput = document.querySelector('input[name="phone"]');


  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо, я с Вами свяжусь',
    failure: 'Извините, что-то пошло не так...'
  };

  const formData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

    const formData = new FormData(form);

    sendData('../send_mail.php', formData)
    .then(res => {
      console.log(res);
      statusMessage.textContent = message.success;
    })
    .catch(() => statusMessage.textContent = message.failure)
    .finally(() => {
      clearInputs();
      setTimeout(() => {
          statusMessage.remove();
      }, 5000);
    });

  const clearInputs = () => {
    inputs.forEach(item => {
        item.value = '';
    });
  };
})