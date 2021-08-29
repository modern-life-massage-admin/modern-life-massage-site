import React, { useState, useRef } from "react";
import Logo, { HeaderWordMark } from "../../utils/logo";
import { Link } from "gatsby";

import Button from "../Button";
import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const ref = useRef();
  useClickOutside(ref, () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  });
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <Logo size={72} />
          <div className="header__wordmark">
            <HeaderWordMark />
          </div>
        </div>
      </Link>
      <div className={menuIsOpen ? "header__right" : "header__right--hidden"}>
        <div className="header__menu-wrapper" ref={ref}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link to="/book-now">
            <Button onClick={() => {}} variant="primary">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="header__menu-button">
        <Button
          variant="no-style"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.118 6H2.882A.882.882 0 002 6.882v2.236c0 .487.395.882.882.882h26.236A.882.882 0 0030 9.118V6.882A.882.882 0 0029.118 6zM29.118 14H2.882a.882.882 0 00-.882.882v2.236c0 .487.395.882.882.882h26.236a.882.882 0 00.882-.882v-2.236a.882.882 0 00-.882-.882zM29.118 22H2.882a.882.882 0 00-.882.882v2.236c0 .487.395.882.882.882h26.236a.882.882 0 00.882-.882v-2.236a.882.882 0 00-.882-.882z"
              fill="#fff"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
