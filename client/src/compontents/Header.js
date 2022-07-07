import React from 'react'

function Header() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Emaily</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="/auth/google">log in</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;