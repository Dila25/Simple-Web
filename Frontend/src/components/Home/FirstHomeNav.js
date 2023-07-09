import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Main.css';
import { BiHome } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BiUser } from "react-icons/bi"; 
import { FaUsers } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Sidebar = () => {
  useEffect(() => {
    let toggleBtn;
    let nav;

    const showMenu = (headerToggle, navbarId) => {
      toggleBtn = document.getElementById(headerToggle);
      nav = document.getElementById(navbarId);

      // Validate that variables exist
      if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu');
          // change icon
          toggleBtn.classList.toggle('bx-x');
        });
      }
    };

    showMenu('header-toggle', 'navbar');

    const linkColor = document.querySelectorAll('.nav__link');

    function colorLink() {
      linkColor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }

    linkColor.forEach((l) => l.addEventListener('click', colorLink));

    // Clean up the event listeners when the component unmounts
    return () => {
      if (toggleBtn && nav) {
        toggleBtn.removeEventListener('click', () => {
          nav.classList.toggle('show-menu');
          toggleBtn.classList.toggle('bx-x');
        });
      }

      linkColor.forEach((l) => l.removeEventListener('click', colorLink));
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="nav" id="navbar">
        <nav className="nav__container">
          <div>
            <Link href="#" className="nav__link nav__logo">
              <i className="bx bxs-disc nav__icon"></i>sw
              <span className="nav__logo-name"> | Simple Web</span>
            </Link>
            <div className="nav__list">
              <div className="nav__items">
                <Link href="#" className="nav__link active">
                  <BiHome className="nav__icon" />
                  <Link to="/AmainHome"><span className="nav__name">Home</span></Link>
                </Link>

                <Link href="#" className="nav__link">
                  <RiAdminFill className="nav__icon" />
                  <span className="nav__name">Admin</span>
                </Link>

                <Link href="#" className="nav__link">
                  <FaUsers className="nav__icon" />
                  <span className="nav__name">Staff</span>
                </Link>

                <Link href="#" className="nav__link">
                  <BiUser className="nav__icon" />
                  <span className="nav__name">User</span>
                </Link>

                <Link href="#" className="nav__link nav__logout">
                  <BiLogOut className="nav__icon" />
                  <span className="nav__name">Log Out</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
