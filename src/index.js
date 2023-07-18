class FormDataCeated {
  dataForm = [];

  init() {
    this.root = document.getElementById('root');
    if (this.root) {
      this.createForm()
        .then(() => this.addListenerForm())
    } 
  }

  async createForm() {
    this.form = `
      <form id="form">
        <h3>V-3</h3>
        <input name="inp1" type="text" placeholder="text" />
        <input name="inp2" type="text" placeholder="text" />
        <input name="inp3" type="text" placeholder="text" />
        <p class="errors"></p>
        <button id="submit">Send</button>
      </div>
    `
    this.root.insertAdjacentHTML('beforeend', this.form);
    this.errorsElem = this.root.querySelector('.errors');
    this.root.querySelector('h3').innerText = window.Telegram?.WebApp.sendData.toString();
    return true;
  }

  addError(text) {
    this.errorsElem.textContent = text
  }

  addListenerForm() {
    this.root.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      window.Telegram?.WebApp.sendData('data');
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
    console.log(data);
    window.Telegram?.WebApp.sendData(data);
  }
}

(new FormDataCeated).init()


