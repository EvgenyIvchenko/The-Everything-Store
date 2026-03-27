import {useState} from "react";
import {Link} from "react-router-dom";
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import Container from "../../shared/ui/Container/Container.tsx";
import navLinks from "../../shared/config/constants.ts";
import ProfileIcon from "../../shared/assets/icons/profile-icon.svg?react";
import CartIcon from "../../shared/assets/icons/cart-icon.svg?react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

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
          <nav className="md:flex justify-center hidden">
            <ul className="flex gap-x-6">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block font-light py-1 px-2 hover:font-normal hover:scale-105 focus:scale-105 active:scale-95 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div
              onClick={toggleMenu}
              className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            />
            <div
              className={`absolute top-0 right-0 flex flex-col bg-bg-primary min-w-1/2 transform transition-transform duration-800 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <button
                onClick={toggleMenu}
                className="py-5.5 px-4 justify-end w-auto flex border-b border-border-primary"
              >
                <HiOutlineX className="w-7 h-7" />
              </button>
              <nav className="flex w-full">
                <ul className="flex flex-col w-full">
                  {navLinks.map(link => (
                    <li
                      key={link.path}
                      className="border-b border-border-primary last:border-b-0"
                    >
                      <Link
                        to={link.path}
                        onClick={toggleMenu}
                        className="block font-light py-6 px-4 text-center"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-5">
            <Link to="#">
              <ProfileIcon className="w-7 h-7 hover:scale-110 focus:scale-110 active:scale-95 duration-100" />
            </Link>
            <Link to="/cart">
              <CartIcon className="w-7 h-7 hover:scale-110 focus:scale-110 active:scale-95 duration-100" />
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden"
            >
              <HiOutlineMenu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
