import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {GrLinkedin} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iraoclj', 'template_bmq8fi6', form.current, 'zOcZfd1iFIUjkleiB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
         <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>lowkeyreal247@gmail.com</h5>
             <a href='mailto:lowkeyreal247@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <GrLinkedin className='contact__option-icon'/>
             <h4>LinkedIn</h4>
             <h5>Anshu Ranjan</h5>
             <a href='www.linkedin.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <GrTwitter className='contact__option-icon'/>
             <h4>Twitter</h4>
             <h5>@anshuperiple</h5>
             <a href='www.twitter.com' target='_blank'>Send a Message</a>
          </article>
         </div>
         {/*END OF CONTACT OPTIONS*/}
         <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
            <textarea name='message' rows = "7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact