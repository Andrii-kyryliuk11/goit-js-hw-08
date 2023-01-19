import throttle from 'lodash.throttle';

const refs = {
  emailInput: document.querySelector('[name=email]'),
  textareaInput: document.querySelector('[name=message]'),
  submitButton: document.querySelector('form'),
};

refs.emailInput.addEventListener('input', throttle(onEmailFill, 500));
refs.textareaInput.addEventListener('input', throttle(onTextareaFill, 500));
refs.submitButton.addEventListener('submit', onFormSubmit);

let savedForm = localStorage.getItem('feedback-form-state');

let formData = {};

formAutocomplete();

function formAutocomplete() {
  if (savedForm) {
    switch (undefined) {
      case JSON.parse(savedForm).email:
        refs.emailInput.value = '';
        break;

      default:
        refs.emailInput.value = JSON.parse(savedForm).email;

        break;
    }
    switch (undefined) {
      case JSON.parse(savedForm).message:
        refs.textareaInput.value = '';
        break;
      default:
        refs.textareaInput.value = JSON.parse(savedForm).message;
        break;
    }
  }
}

function writeToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onEmailFill(evt) {
  const email = evt.target.value;
  formData.email = email;
  writeToLocalStorage();
}

function onTextareaFill(evt) {
  const message = evt.target.value;
  formData.message = message;
  writeToLocalStorage();
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.target.reset();
}
