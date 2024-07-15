// Selectors
const navLinks = document.querySelectorAll('.nav-link');
const menuItems = document.querySelectorAll('.menu-item');
const reservationForm = document.querySelector('#reservation-form');
const datePicker = document.querySelector('#date-picker');
const timePicker = document.querySelector('#time-picker');
const partySizeInput = document.querySelector('#party-size-input');
const submitButton = document.querySelector('#submit-button');

// Event Listeners
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Add active class to the clicked link
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add active class to the clicked item
    menuItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get the form data
  const date = datePicker.value;
  const time = timePicker.value;
  const partySize = partySizeInput.value;

  // Validate the form data
  if (!date || !time || !partySize) {
    alert('Please fill in all the fields');
    return;
  }

  // Send the form data to the server
  fetch('/make-reservation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ date, time, partySize })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Reservation made successfully!');
    } else {
      alert('Error making reservation');
    }
  })
  .catch(error => {
    console.error(error);
  });
});

// Date picker functionality
datePicker.addEventListener('input', () => {
  const date = datePicker.value;
  const today = new Date();
  if (date < today) {
    alert('You cannot make a reservation for a past date');
    datePicker.value = '';
  }
});

// Time picker functionality
timePicker.addEventListener('input', () => {
  const time = timePicker.value;
  const currentTime = new Date().getHours();
  if (time < currentTime) {
    alert('You cannot make a reservation for a past time');
    timePicker.value = '';
  }
});

// Party size input functionality
partySizeInput.addEventListener('input', () => {
  const partySize = partySizeInput.value;
  if (partySize < 1) {
    alert('Party size must be at least 1');
    partySizeInput.value = '';
  }
});

