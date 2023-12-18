async function commentFormHandler(event) {
	event.preventDefault();

	const textComment = document
		.querySelector('input[name="comment-body"]')
		.value.trim();
	const post_id = window.location.toString().split('/')[
		window.location.toString().split('/').length - 1
	];

	const response = await fetch('/api/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	let user;

	if (response.ok) {
		user = await response.json();
	}

	if (textComment && user) {
		const commentResponse = await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment: textComment,
				user_id: user.id,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (commentResponse.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector('#commentForm')
	.addEventListener('submit', commentFormHandler);
