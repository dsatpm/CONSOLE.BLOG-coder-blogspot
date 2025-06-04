const React = require('react');

function Comments({ comments }) {
  if (!comments || comments.length === 0) return null;
  return (
    <>
      <h3 className="comments-header">User Comments</h3>
      {comments.map((c) => (
        <div className="comments" key={c.id}>
          <div className="comments-body">
            <p>{c.comment}</p>
            <div>
              by: {c.user.username},
              {new Date(c.date_created).toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

module.exports = Comments;
