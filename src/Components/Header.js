import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        <a class="navbar-brand" href="#">
        <img src="../public/logo512.png" alt="logo" width="60" height="50" />
      </a>
         <center> <li><a href="/">Home</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/About">About us</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Signin">Sign Up</a></li>
   <li>    
 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Raise Request
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Billing</a>
    <a class="dropdown-item" href="#">Network isssue</a>
    <a class="dropdown-item" href="#">Other</a>
  </div></button>
  </li>
</center>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
