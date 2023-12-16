async function commentFormHandler(event) {
  event.preventDefault();

  const textComment = document
    .querySelector('input[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(textComment);
  console.log(post_id);

  if (textComment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        textComment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#commentForm')
  .addEventListener('submit', commentFormHandler);
