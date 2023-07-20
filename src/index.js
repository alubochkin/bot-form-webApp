class FormDataCeated {
  dataForm = [];

  init(selector) {
    this.root = document.getElementById(selector);
    this.tg =  window.Telegram?.WebApp;
    this.tg.ready();

    if (this.root) {
      this.createTemplateForm();
      this.addListenerForm();
    } 
  }

  createTemplateForm() {
    this.form = `
      <form id="form">
        <label>
          Название:
          <input required name="field-title" type="text" placeholder="Укажите название" />
        </label>

        <label>
          Ссыдка на видео:
          <input required name="field-link" type="text" placeholder="Укажите ссылку" />
        </label>

        <label>
        Описание задачи:
        <textarea rows="5" required name="field-description" placeholder="Укажите описание"></textarea>
      </label>

        <p class="errors"></p>
        <button id="submit">Отправить</button>
      </div>
    `
    this.root.insertAdjacentHTML('beforeend', this.form);
    this.errorsElem = this.root.querySelector('.errors');
    return true;
  }

  addError(text) {
    this.errorsElem.textContent = text
  }

  addListenerForm() {
    this.root.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = Array.from(event.target.querySelectorAll('input'));
      if (inputs.every((inp) => inp.value)) {
        this.senDataInBot(inputs);
      } else {
        this.addError('Вы не все поля заполнили');
      }
      
    })
  }
  senDataInBot(inputsArray) {
    const inputsArrayValue = inputsArray.map((input) => input.value);
    inputsArray.map((input) => input.value = '');
    const data = JSON.stringify(inputsArrayValue);

    this.tg.sendData(data);
  }
}

(new FormDataCeated).init('root');

