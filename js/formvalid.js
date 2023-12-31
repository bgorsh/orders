let selector = document.querySelector("input[type='phone']");
let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.order__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    checkbox: {
      required: true,
      checked: true
    }
  }
})