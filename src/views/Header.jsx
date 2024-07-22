import '@/ui/views/header.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(false)
  const menuButton = useRef(null)
  const header = useRef(null)

  const handleClickMenu = () => {
    setMenuDisplayed((prev) => !prev);
  };

  useEffect(() => {
    const handleClickDocument = (e) => {
      if (!header.current?.contains(e.target)) {
        setMenuDisplayed(false);
      }
    }

    document.addEventListener("click", handleClickDocument);

    return () => {
      document.removeEventListener("click", handleClickDocument);
    }
  }, [])

  const links = [
    {
      name: "Inicio",
      url: "/",
    },
    {
      name: "Productos",
      url: "/products",
    },
    {
      name: "Contacto",
      url: "/contact",
    },
  ];

  return (
    <header ref={header}>
      <header className="home-header px-8 transition">
        <div className="max-w-1280 mx-auto py-1 my-auto">
          <div className="home-header-content">
            <nav className="nav-header">
              <ul className="home-header-links">
                {
                  links.map((link) => (
                    <li
                      key={link.url}
                      className="contents"
                    >
                      <Link to={link.url} className="link home-header__link transition">
                        {link.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
            <div className="header-icons py-4">
              <div
                className={`menu-hamburguesa icon-button 
                  ${menuDisplayed ? 'menu-hamburguesa--abierto' : ''}`}
                onClick={handleClickMenu}
                ref={menuButton}
              >
                <div className="bar bar__1 transition"></div>
                <div className="bar bar__2 transition"></div>
                <div className="bar bar__3 transition"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-menu transition">
          <ul>
            {
              links.map((link) => (
                <li
                  key={link.url}
                  className="contents"
                >
                  <Link to={link.url} className="link hoverable-link transition">
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </header>
    </header>
  )
}
