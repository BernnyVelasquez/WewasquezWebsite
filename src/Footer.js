import React from 'react'
import styles from './Footer.css'

const Footer = () => {
  return (
<footer id="footer" class="text-center text-muted">
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <img src={require('./images/Full-logo.png')} class="img-fluid" alt=''/>
          </h6>
          <p>
          The #1 Heating and Air services in Cleavland, TN area. Bringing comfort to your home, one degree at a time.
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="hdr text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p>
            <i class="fas fa-envelope me-3"></i>
            <a class="text-reset" href="mailto:wewasquezservices@gmail.com">
            wewasquezservices@gmail.com
            </a>
          </p>
          <p><i class="fas fa-phone me-3"></i><a  class="footer-call text-reset" href="tel:7064020506">706-402-2513</a></p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="hdr text-uppercase fw-bold mb-4">
            Social Media
          </h6>
          <p>
            <a href="#" class="text-reset ftBtn">Facebook</a>
          </p> 
        </div>
        <div class=" UsefulLinks col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="hdr text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#" class="text-reset ">Services</a>
          </p>
          <p>
            <a href="#" class="text-reset">About Us</a>
          </p>
          <p>
            <a href="#" class="text-reset">Faq</a>
          </p>
          <p>
            <a href="#" class="text-reset">Offers</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4">
    
    <a  class="fw-bold text-reset" href="/">© 2023 Copyright: Wewasquez Services</a>
  </div>
</footer>
  )
}

export default Footer
