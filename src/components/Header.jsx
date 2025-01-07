import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/CAREER.gif'; // Adjust based on the actual file location

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  // Listen for the scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Simplified logic
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isSticky ? 'fixed-header' : ''}>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg px-3 bg-white shadow-blue rounded">
          <div className="container-fluid">
            <img src={logo} style={{ width: '100px' }} alt="Career Engine" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="mx-auto">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'Timeline', path: '/timeline' },
                    { name: 'Courses', path: '/courses' },
                    { name: 'Alumni', path: '/alumni' },
                    { name: 'Register', path: '/register' },
                    { name: 'Blog', path: '/blog' },
                    { name: 'Contact', path: '/contact' },
                  ].map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ms-auto">
                <Link className="btn btn-dark" to="/login">
                  Chat Now
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
