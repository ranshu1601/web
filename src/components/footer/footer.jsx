import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> Anshu Ranjan </a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://linkedin.com'><BsLinkedin/></a>
        <a href='https://instagram.com'><GrInstagram/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anshu Ranjan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer