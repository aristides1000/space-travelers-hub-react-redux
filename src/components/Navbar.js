/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../media/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/my-profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navbar navbar-light">
      <div className="container border-bottom pt-2 pb-3 border-3">
        <div className="d-flex align-items-center justify-content-center">
          <img src={planet} alt="planet" width="75" />
          <h1 className="navbar-brand fs-2 ms-3">
            Space Travelers&apos; Hub
          </h1>
        </div>
        <ul className="d-flex mb-0">
          {links.map((link) => (
            <li key={link.id} id={link.id} className="li-Nav-item">
              <NavLink
                to={link.path}
                activeClassName="text-decoration-underline"
                className="mx-3 text-decoration-none"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
