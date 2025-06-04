const React = require('react');

function Header({ loggedIn }) {
  return (
    <header>
      <div className="header-container">
        <h1>console.blog</h1>
        <p>Blog posts from the console.</p>
      </div>
      <div className="user-container">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        {loggedIn ? (
          <a href="/" id="logout">
            Logout
          </a>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </>
        )}
      </div>
      {loggedIn && <script src="/public/js/logout.js"></script>}
    </header>
  );
}

module.exports = Header;
