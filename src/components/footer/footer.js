import React from 'react'
import "./footer.css";
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const yr = new Date().getFullYear();
function Footer() {
  return (
    <div className>
        <p className='heading'>Made By <u>Aman Singh</u></p>
        <p className='copyright'>© {`${yr}`} Copyright @Aman  </p>
        <div className='foot'>
        <a
         href="https://github.com/amansingh88688"
         rel="noopener"
         target="_blank"
         >
        <FaGithub className='icons github'/>
        </a>
        <a
         href="https://www.instagram.com/amansingh88688"
         rel="noopener"
         target="_blank"
         >
        <FaLinkedin className='icons linkedin'/>
        </a>
         <a
         href="https://www.linkedin.com/in/aman-singh-718493224/"
         rel="noopener"
         target="_blank"
         >
            <FaInstagram className='icons instagram'/>
        </a>
        </div>


    </div>
  )
}

export default Footer;