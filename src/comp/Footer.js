import React from 'react';
import './Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Elly. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
