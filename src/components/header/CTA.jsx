import React from 'react'
import CV from '../../assets/Giedre.Savickiene_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Write me</a>
      
    </div>
  )
}

export default CTA
