import throttle from 'lodash.throttle';

const refs = {
  emailInput: document.querySelector('[name=email]'),
  textareaInput: document.querySelector('[name=message]'),
  submitButton: document.querySelector('form'),
};

refs.emailInput.addEventListener('input', onEmailFill);
refs.textareaInput.addEventListener('input', onTextareaFill);
refs.submitButton.addEventListener('submit', onFormSubmit);

let savedForm = localStorage.getItem('feedback-form-state');

let formData = {};

formAutocomplete();

function formAutocomplete() {
  if (savedForm) {
    refs.emailInput.value = JSON.parse(savedForm).email;

    refs.textareaInput.value = JSON.parse(savedForm).message;
  }
}

console.log(refs.emailInput);
console.log(refs.textareaInput);
console.log(refs.submitButton);

function onEmailFill(evt) {
  const email = evt.currentTarget.value;

  formData.email = email;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onTextareaFill(evt) {
  const message = evt.currentTarget.value;
  formData.message = message;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}