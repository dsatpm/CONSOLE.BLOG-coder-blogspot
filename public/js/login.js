
// Get the login form element
const loginForm = document.querySelector('#login-form');

// Add a submit event listener to the login form
loginForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the username and password from the form
  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#pwd-login').value.trim();


  fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Redirect the user to the dashboard page if the login was successful
      window.location.href = '/blog';
    } else {
      // Display an error message if the login failed
      alert('Invalid username or password');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
