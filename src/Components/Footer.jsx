import React from "react";
import "../Style/footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="modern-footer">
        <div class="footer-container">
          <div class="footer-logo">
            <img
              src="https://wallpapercave.com/wp/wp2520270.jpg"
              alt="Bike Logo"
            />
            <h1>Bike-z</h1>
          </div>
          <div class="footer-links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#bikes">Bikes</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@yourbikewebsite.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Your Bike Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
