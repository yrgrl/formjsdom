// Get the form element
const form = document.getElementById('myForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', validateForm);

// Function to validate the form
function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get all the form elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zip = document.getElementById('zip');
  const hobbies = document.getElementsByName('hobbies');
  const bio = document.getElementById('bio');

  // Validate each form element
  let isValid = true;

  // Validate name
  if (name.value.trim() === '') {
    name.classList.add('invalid');
    isValid = false;
  } else {
    name.classList.remove('invalid');
  }

  // Validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add('invalid');
    isValid = false;
  } else {
    email.classList.remove('invalid');
  }

  // Validate phone
const phoneRegex = /^\d{10}$/;
if (!phoneRegex.test(phone.value)) {
  phone.classList.add('invalid');
  isValid = false;
} else {
  phone.classList.remove('invalid');
}

  // Validate street
  if (street.value.trim() === '') {
    street.classList.add('invalid');
    isValid = false;
  } else {
    street.classList.remove('invalid');
  }

  // Validate city
  if (city.value.trim() === '') {
    city.classList.add('invalid');
    isValid = false;
  } else {
    city.classList.remove('invalid');
  }

  // Validate state
  if (state.value === '') {
    state.classList.add('invalid');
    isValid = false;
  } else {
    state.classList.remove('invalid');
  }

  // Validate zip
  const zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zip.value)) {
    zip.classList.add('invalid');
    isValid = false;
  } else {
    zip.classList.remove('invalid');
  }

  // Validate hobbies
  let hobbiesChecked = false;
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      hobbiesChecked = true;
      break;
    }
  }
  if (!hobbiesChecked) {
    document.getElementById('hobbies-error').innerHTML = 'Please select at least one hobby';
    isValid = false;
  } else {
    document.getElementById('hobbies-error').innerHTML = '';
  }

  // Validate bio
  if (bio.value.trim() === '') {
    bio.classList.add('invalid');
    isValid = false;
  } else {
    bio.classList.remove('invalid');
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
}

// Add an event listener to each form element to remove the invalid class when the user starts typing
const formElements = document.querySelectorAll('input, select, textarea');
formElements.forEach(element => {
  element.addEventListener('input', () => {
    element.classList.remove('invalid');
  });
});