import throttle from 'lodash.throttle';

const refs = {
  emailInput: document.querySelector('[name=email]'),
  textareaInput: document.querySelector('[name=message]'),
  submitForm: document.querySelector('form'),
  submitButton: document.querySelector('[type=submit]'),
};

function allowToSubmit() {
  if (
    refs.emailInput.value.length !== 0 &&
    refs.textareaInput.value.length !== 0
  ) {
    refs.submitButton.disabled = false;
  } else {
    refs.submitButton.disabled = true;
  }
}

refs.emailInput.addEventListener('input', throttle(onEmailFill, 500));
refs.textareaInput.addEventListener('input', throttle(onTextareaFill, 500));
refs.submitForm.addEventListener('submit', onFormSubmit);

let savedForm = localStorage.getItem('feedback-form-state');
let formData;
JSON.parse(savedForm) === null
  ? (formData = {})
  : (formData = JSON.parse(savedForm));

formAutocomplete();

function formAutocomplete() {
  refs.submitButton.disabled = true;

  if (savedForm) {
    switch (undefined) {
      case JSON.parse(savedForm).email:
        refs.emailInput.value = '';
        break;

      default:
        refs.emailInput.value = JSON.parse(savedForm).email;
        allowToSubmit();
        break;
    }
    switch (undefined) {
      case JSON.parse(savedForm).message:
        refs.textareaInput.value = '';
        break;
      default:
        refs.textareaInput.value = JSON.parse(savedForm).message;
        allowToSubmit();
        break;
    }
  }
}

function writeToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  allowToSubmit();
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
  localStorage.removeItem('feedback-form-state');
  formData = {};
  refs.submitButton.disabled = true;
}
