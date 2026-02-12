const form = document.getElementById('registerform');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener("submit", function(e){
  e.preventDefault();

  const isNameValid = checkName();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isConfirmValid = checkConfirmPassword();

  if(isNameValid && isEmailValid && isPasswordValid && isConfirmValid){
    alert('Form Submitted successfully! ✅');
    form.reset();
    clearFormState();
  }
});

function showError(input, message){
  const error = input.nextElementSibling;
  error.innerText = message;
  input.classList.add('error-border');
  input.classList.remove('success-border');
}

function showSuccess(input){
  const error = input.nextElementSibling;
  error.innerText = '';
  input.classList.add('success-border');
  input.classList.remove('error-border');
}

function clearFormState() {
  [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.classList.remove('error-border', 'success-border');
    input.nextElementSibling.innerText = '';
  });
}

function checkName() {
  if(nameInput.value.trim() === ''){
    showError(nameInput, 'Name is required');
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function checkEmail(){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regex.test(emailInput.value)){
    showError(emailInput, 'Invalid email format');
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function checkPassword(){
  if(passwordInput.value.length < 6){
    showError(passwordInput, 'Password must be at least 6 characters');
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

function checkConfirmPassword(){
  if(confirmPasswordInput.value === ''){
    showError(confirmPasswordInput, "Confirm password is required!");
    return false;
  }
  if(confirmPasswordInput.value !== passwordInput.value){
    showError(confirmPasswordInput, 'Passwords do not match');
    return false;
  }
  showSuccess(confirmPasswordInput);
  return true;
}

nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkConfirmPassword);