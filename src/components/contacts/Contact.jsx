import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_9aj7gjl",'template_aq651eq', form.current, 'r0uSi7FIbXucAr6yU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.resent()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
      <div className='contact_options'>
      <article className='contact_option'>
        <MdOutlineMailOutline className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>giedre.savickiene78@gmail.com</h5>
        <a href="mailto:giedre.savickiene78@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
      </article>
      <article className='contact_option'>
        <RiMessengerLine className='contact_option-icon'/>
        <h4>Messenger</h4>
        <h5>Giedre Savickiene</h5>
        <a href="https://m.me/giedre.savickiene.77/" target="_blank" rel="noreferrer">Send a message</a>
      </article>
      </div>
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-promary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
