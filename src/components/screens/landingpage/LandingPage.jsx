import React, { useState } from 'react'
import Header from '../../includes/landingpage/Header'
import Contact from './Contact'
import Gallery from './Gallery'
import Sliders from './Sliders'
import SocialMedia from './SocialMedia'
import Spotlight from './Spotlight'
import Footer from "./Footer"

function LandingPage() {
  const [ViewMenu, setViewMenu] = useState(false)

  return (
    <>
        <Header setViewMenu={setViewMenu} ViewMenu={ViewMenu} />
        <Spotlight ViewMenu={ViewMenu} />
        <Sliders />
        <Gallery />
        <SocialMedia />
        <Contact />
        <Footer />
    </>
  )
}

export default LandingPage