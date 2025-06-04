const React = require('react');

function MainLayout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 minimum-scale=1.0"
        />
        <link rel="stylesheet" href="/public/css/styles.css" />
        <title>console.blog // A Coder's Blogspot</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

module.exports = MainLayout;
