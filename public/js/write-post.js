
const form = document.querySelector('#newPost');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the values of the title and content inputs
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  // Create an object with the title and content values
  const post = { title, content };

  // Send a POST request to the server with the blog post data
  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
});