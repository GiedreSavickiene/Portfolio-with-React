import React from 'react'
import './portfolio.css'
import IMG1 from './img/expences.jpg'
import IMG2 from './img/Movie.jpg'
import IMG3 from './img/Restorant.png'
import IMG4 from './img/Portfolio.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio" >
      <h5> My works</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG1} alt="Expences" />
          </div>
          <h3>Budget calculator </h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/GiedreSavickiene/Expence-Tracker" className='btn'>Github</a>
          <a href=" https://giedresavickiene.github.io/Expence-Tracker/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} alt="Expences" />
          </div>
          <h3>Search Movie </h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/GiedreSavickiene/Build-MovieSearch-Engine" className='btn'>Github</a>
          <a href=" https://giedresavickiene.github.io/Build-MovieSearch-Engine/" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG3} alt="Expences" />
          </div>
          <h3>Restaurant Menu </h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/GiedreSavickiene/Restaurant-meniu" className='btn'>Github</a>
          <a href="https://giedresavickiene.github.io/Restaurant-meniu/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG4} alt="Expences" />
          </div>
          <h3>Portfolio with HTML and CSS</h3>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/GiedreSavickiene/Portfolio-with-HTML-ant-CSS" className='btn'>Github</a>
          <a href=" https://giedresavickiene.github.io/Portfolio-with-HTML-ant-CSS/" className='btn btn-primary' target="_blank">Live Demo</a>
         </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
