import React from 'react';
import './Footer.css';
import {FaTwitter,FaDiscord,FaGithub,FaMobile,FaEnvelope, FaSearchLocation, FaMobileAlt} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';


const Footer = ()=> {


    return ( 

          <section className='footer'>

              <div className="sound-logo">
                    <a href="">
                      S <span className='dsign'>lara</span>
                    </a>
              </div>
              <div className="content-box">
              <div className="quick-linksbox">
                  <h6 className="quicklink-head">Quick Links</h6>
                  <a href=""><p className='quicklink-text1'>About</p></a>
                  <a href=""><p className='quicklink-text1'>Blog</p></a>
                  <a href=""><p className='quicklink-text2'>Privacy Policy</p></a>
              </div>

              <div className="social-icons">
                  <a href="" className='iconsg' > <FaGithub/>  </a>
                  <a href="" className='iconsd' > <FaDiscord/>  </a>
                  <a href="" className='iconst' > <FaTwitter/> </a>
              </div>


              <div className="contactsbox">
                  <h6 className="contactus-head">Contact-Us</h6>
                  <p className='emailaddress'><span className='bottom-icon'><FaEnvelope mr-1/></span>ocarslyobas@gmail.com</p>
                  <p className="mobile-contact"><span className='bottom-icon'><FaMobileAlt mr-1/></span>+234-91-61722400</p>
                  <p className='botomtextcontent'><span className='bottom-icon'><MdLocationOn/></span>Address: Save Foundation 25, Sapele Road, Benin City, Edo State.</p>
              </div>
              </div>
          
              <div className="disclaimer">
                  <p className='disclaimer-text'>&copy;{new Date().getFullYear()} Save Lara. All rights reserved</p>
              </div>
      
          </section>

  );
};    




export default Footer;
