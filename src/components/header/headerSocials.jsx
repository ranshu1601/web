import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anshu-ranjan-1601/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/ranshu1601' target="_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/__periple__/' target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials