import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Book App</h2>
        <p>React.js Full Course</p>
      </header>
      {children}
      <footer className="footer">
        <p>Developed by Ali 🤞</p>
      </footer>
    </>
  );
}

export default Layout;
