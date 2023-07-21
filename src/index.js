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
          <input class="field" required name="title" type="text" />
        </label>

        <label>
          Ссыдка на видео:
          <input class="field" required name="link" type="text" />
        </label>

        <label>
        Описание задачи:
         <div contenteditable="plaintext-only" id="editor" class="field">
         </div>
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

      const fields = Array.from(event.target.querySelectorAll('.field'));

      if (fields.every((f) => f.value || f.textContent)) {
        this.senDataInBot(fields);
      } else {
        this.addError('Вы не все поля заполнили');
      }
      
    })
  }

  senDataInBot(fieldsArr) {
    try {
      const prepaireData = {};

      fieldsArr.forEach((field) => {
        if(field.name) {
          prepaireData[field.name] = field.value;
          field.value = '';
        } else {
          prepaireData['description'] = field.innerHTML;
          field.innerHTML = '';
        } 

      });

      const data = JSON.stringify(prepaireData);
      console.log(data, prepaireData)
      if (data) this.tg.sendData(data);

    } catch(err) {
      console.log(err)
    }

  }
}

(new FormDataCeated).init('root');

