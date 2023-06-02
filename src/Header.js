import React, {useState} from 'react'
import styles from "./Header.css"



const Header = () =>  {
  return (
    <div id="navcon" class="header-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={require('./images/WWSlogo.png')} alt="" width="90" height="82" class="d-inline-block align-text-center"/>
            <h4 class="d-inline-block align-text-center">Wewasquez Services</h4>
          </a>
          <button id="nav-toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarNav" aria-controls="navBarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navBarNav">
            <ul class="nav nav-fill navList ">
              <li class="nav-item nav " >
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Faq</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
                <div class="d-grid gap-2 scheduleBtn">
                  <a class="btn btn-primary" role="button">Schedule now</a>
                </div>
            </ul>
          </div>
          
        </div>
    </nav>
    </div>

    
  )
};

export default Header
