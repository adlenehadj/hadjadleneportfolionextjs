import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
          <li><Link href="/projects" legacyBehavior><a>Projects</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
          <li><Link href="/testimonials" legacyBehavior><a>Testimonials</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





