const React = require('react');
const MainLayout = require('./layouts/main');
const Header = require('./partials/Header');
const Footer = require('./partials/Footer');
const Comments = require('./partials/Comments');

function Homepage({ allPosts, loggedIn }) {
  return (
    <MainLayout>
      <Header loggedIn={loggedIn} />
      {loggedIn ? (
        <section className="homepage">
          {allPosts.map((post) => (
            <div className="card" key={post.id}>
              <h2>
                <a href={`/post/${post.id}`}>{post.title}</a>
              </h2>
              <a href={`/dashboard/${post.id}`}>Edit</a>
              <p>{post.content}</p>
              <p>
                <strong>Posted on:</strong>{' '}
                {new Date(post.date_created).toLocaleDateString()}
              </p>
              <Comments comments={post.comments} />
            </div>
          ))}
        </section>
      ) : (
        <div className="login-container">
          <p>
            You must be logged in to view the posts. <a href="/login">Log in</a>
          </p>
        </div>
      )}
      <Footer />
    </MainLayout>
  );
}

module.exports = Homepage;
