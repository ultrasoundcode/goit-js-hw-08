import throttle from 'lodash.throttle';
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name=email]');
const messageInput = feedbackForm.querySelector('textarea[name=message]');

const saveStateToLocalStorage = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

const restoreStateFromLocalStorage = () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

const clearStateFromLocalStorage = () => {
  localStorage.removeItem('feedback-form-state');
};

const submitHandler = event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  clearStateFromLocalStorage();
  emailInput.value = '';
  messageInput.value = '';
};

feedbackForm.addEventListener('input', throttle(saveStateToLocalStorage, 500));
feedbackForm.addEventListener('submit', submitHandler);

restoreStateFromLocalStorage();
