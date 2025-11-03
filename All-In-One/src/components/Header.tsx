import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo">AIO</div>
        <div>
          <div style={{ fontWeight: 800 }}>All-in-One</div>
          <div className="muted" style={{ fontSize: '13px' }}>Your all-in-one toolset</div>
        </div>
      </div>

      <nav className="topnav" role="navigation" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tools/image-to-text">Image to Text</Link>
        <Link href="/tools/image-translator">Image Translator</Link>
      </nav>

      <div className="actions">
        <button className="btn">Login</button>
        <button className="btn primary">Get Started</button>
      </div>
    </header>
  );
};

export default Header;