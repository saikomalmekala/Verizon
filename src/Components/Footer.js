import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam viverra arcu et ligula interdum, nec molestie nunc semper.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> 123-456-789</span>
            <span><i className="fas fa-envelope"></i> info@example.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Follow us on</h2>
      
        <button> <a href="https://www.instagram.com/accounts/login/">Instagram</a></button>
        <button><a href="https://twitter.com/login">Twitter</a></button>
           <button> <a href="https://www.facebook.com/">FaceBook</a></button>
            <button><a href="https://www.youtube.com/?gl=IN">youtube</a></button>
          
        </div>
        {/* <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" /><br></br>
            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea><br>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div> */}
      </div>
      <div className="footer-bottom">
        &copy; 2024 Company Name | Designed by Your Name
      </div>
    </footer>
  );
};

export default Footer;

