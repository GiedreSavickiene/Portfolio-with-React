import React from 'react'
import './about.css'
import ME from '../../assets/web-developer.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'


const about = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src= {ME} alt='About me'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Experience</h5>
              <small>Do not have yet</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Clients</h5>
              <small>Coming Soon...</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Projects</h5>
              <small>7 ounly, but I am working on it</small>
            </article>
          </div>

          <p>In the difficult global situation for several years, I decided to learn something new and to change my career direction. I studied IT for two years. I've found the course very interesting and I am improving my skills rather successfully. Now, I am looking for new opportunities in this field. I really want to find my place in the IT world, work, continue learning, improve. I am motivated, responsible, hardworking.</p>

          <a href='#contact' className='btn btn-primary'>Write me</a>
        </div>
      </div>
    </section>
  )
}

export default about
