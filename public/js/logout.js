
// Get the logout button element
const logout = document.querySelector('#logout');

// Add a click event listener to the logout button
logout.addEventListener('click', () => {
  // Send a logout request to the server
  fetch('/logout', {
    method: 'POST',
    credentials: 'same-origin'
  })
  .then(response => {
    // Redirect to the login page
    window.location.href = '/login';
  })
  .catch(error => {
    console.error('Logout failed:', error);
  });
});
