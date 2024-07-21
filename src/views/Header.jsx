import '@/ui/views/header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
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
    <header>
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
              <div className="menu-hamburguesa icon-button">
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
