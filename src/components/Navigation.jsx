import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
// import './Navigation.css'; // Import your CSS file

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="hamburger p-4 text-3xl" onClick={toggleMenu}>
          <SlMenu />
        </div>
        
        <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header_nav">
      <h2>DocBook🩺</h2>

        </div>


          <li className="nav-item">
            <NavLink to="/home" activeClassName="active" className="nav-item">
              DOCTORS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/appointments-form" activeClassName="active">
              ADD APPOINTMENT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-appointments" activeClassName="active">
              APPOINTMENTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-doctor" activeClassName="active">
              ADD DOCTOR
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/delete-doctor" activeClassName="active">
              DELETE DOCTOR
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
