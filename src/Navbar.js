import React, {useState} from 'react'
import styles from "./Navbar.css"



function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark ">
      <div class="container-fluid">
        <span >
          <a class="navbar-brand" href="#">
            <img src={require('./images/WWSlogo.png')} alt="" width="90" height="72" class="d-inline-block align-text-center"/>
          </a>
          <a class="d-inline-block align-text-center">
            <h4>Wewasquez Services</h4>
          </a>
          <h2 class="d-inline-block align-text-center mx-5 ">706-402-2513</h2>
        </span>
        <ul class="nav justify-content-end">
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
    </nav>
  )
};

export default Navbar
