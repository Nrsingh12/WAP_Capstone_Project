import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ShopKaro Project</p>
    </footer>
  );
}

export default Footer;
