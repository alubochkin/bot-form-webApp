class FormDataCeated {
  dataForm = [];

  init() {
    this.root = document.getElementById('form');
    if (this.root) {
      this.createForm()
        .then(() => this.addListenerForm())
    } 
  }

  async createForm() {
    this.form = `
      <form id="form">
        <input name="inp1" type="text" placeholder="text" />
        <input name="inp2" type="text" placeholder="text" />
        <input name="inp3" type="text" placeholder="text" />
        <p class="errors"></p>
        <button id="submit">Send</button>
      </div>
    `
    this.root.insertAdjacentHTML('beforeend', this.form);
    this.errorsElem = this.root.querySelector('.errors')
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
        this.dataForm = inputs.map((input) => input.value);
      } else {
        this.addError('Вы не все поля заполнили');
      }
      
    })
  }
}

(new FormDataCeated).init()


