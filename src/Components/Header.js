import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
        <ul>
         {/* <a class="navbar-brand" href="#">
            <img src="../src/logo.png" alt="logo" width="60" height="50" />
          </a> */}
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSHnutm04OuhEJj1dv4n6O_iuB_RI5_Edvg&usqp=CAU" width={50} height={50} style={{marginRight:"400px"}}/>
          </li>
         <li><Link to="/Homepage">Home</Link></li>
            <li><Link to="/FAQ">FAQ's</Link></li>
            <li><Link to="/About">About us</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signin">Sign Up</Link></li>
         
        </ul>
        <span><Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Raise Request
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Billing</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Network Issue</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></span>
      </nav>
    </header>
  );
};

export default Header;