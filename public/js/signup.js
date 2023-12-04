// Get the form element
const form = document
	.querySelector('#signup-form')
	.addEventListener('submit', async (event) => {
		// Prevent the default form submission behavior
		event.preventDefault();

		// Get the user input values
		const username = document.querySelector('#user-signup').value.trim();
    const password = document.querySelector('#pwd-signup').value.trim();

		if (username && password) {
			const response = await fetch('/api/users/signup', {
				method: 'POST',
				body: JSON.stringify({ username, password }),
				headers: { 'Content-Type': 'application/json' },
			});

			if (response.ok) {
				document.location.replace('/blog');
			} else {
				alert('Failed to sign up.');
			}
		}
	});
