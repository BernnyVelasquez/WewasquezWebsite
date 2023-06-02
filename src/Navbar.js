import React, {useState} from 'react'
import styles from "./Navbar.css"



function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <div class="container-fluid">
      <a class="navbar-brand logo" href="#">
        <img src={require('./images/WWSlogo.png')} alt="" width="90" height="72" class="d-inline-block align-text-center"/>
        <h4 class="d-inline-block align-text-center">Wewasquez Services</h4>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
          <h1 class="d-inline-block align-text-center mx-5 ">706-402-2513</h1>

          <div class="collapse navbar-collapse justify-content-end list" id="navbarNav">
            <ul class="nav nav-fill ">
              <li class="nav-item nav " >
                <a class="nav-link active" aria-current="page" href="#">Active</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar
