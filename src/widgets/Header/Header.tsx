import Container from "../../shared/ui/Container/Container.tsx";
import {Link} from "react-router-dom";
import navLinks from "../../shared/config/constants.ts";
import ProfileIcon from "../../shared/assets/icons/profile-icon.svg?react";
import CartIcon from "../../shared/assets/icons/cart-icon.svg?react";

const Header = () => {
  return (
    <header className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="src/shared/assets/images/logo.png"
              className="h-10 w-auto"
              alt="The Everything Store"
            />
          </Link>
          <nav className="flex justify-center">
            <ul className="flex gap-x-6">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block font-light py-1 px-2 hover:scale-110 focus:scale-110 active:scale-95 duration-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-center gap-x-5">
            <Link to="#">
              <ProfileIcon className="w-27px h-27px hover:scale-110 focus:scale-110 active:scale-95 duration-100" />
            </Link>
            <Link to="/cart">
              <CartIcon className="w-27px h-27px hover:scale-110 focus:scale-110 active:scale-95 duration-100" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
