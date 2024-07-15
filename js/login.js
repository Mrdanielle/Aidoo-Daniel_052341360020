const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('show');
});

signupBtn.addEventListener('click', () => {
  signupModal.classList.add('show');
});

loginLink.addEventListener('click', () => {
  signupModal.classList.remove('show');
  loginModal.classList.add('show');
});

signupLink.addEventListener('click', () => {
  loginModal.classList.remove('show');
  signupModal.classList.add('show');
});

document.addEventListener('click', (e) => {
  if (e.target === loginModal || e.target === signupModal) {
    loginModal.classList.remove('show');
    signupModal.classList.remove('show');
  }
});