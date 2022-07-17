import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contacts></Contacts>
        <Footer></Footer>

    
    </>
  )
}

export default App
