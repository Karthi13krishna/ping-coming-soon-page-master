const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-msg');

const emailRegex =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value.match(emailRegex)) {
    emailForm.submit();
  } else {
    errorMsg.classList.remove('hidden');
    errorMsg.textContent = 'Please provide a valid email address';
    emailInput.classList.replace('border-gray-300', 'border-red-500');
  }
});
