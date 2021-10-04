/* eslint-disable no-unused-vars */
import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <h1 className="navbar-brand">
        Navbar
      </h1>
      <ul className="d-flex">
        <li>
          <h1>Rockets</h1>
        </li>
        <li>
          <h1>Missions</h1>
        </li>
        <li>
          <h1>My Profile</h1>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
