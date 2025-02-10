import { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import SecondRow from './components/second-Row/SecondRow'
import ThirdRow from './components/third-row/ThirdRow'
import FourthRow from './components/fourth-row/FourthRow'
import Footer from './components/footer/Footer'
import FifthRow from './components/fifth-row/FifthRow'
import SixthRow from './components/sixth-row/SixthRow'

function App() {


  return (
    <div>
  <Navbar></Navbar>
  <Header></Header>
  <SecondRow></SecondRow>
  <ThirdRow></ThirdRow>
  <FourthRow></FourthRow>
  <FifthRow></FifthRow>
  <SixthRow></SixthRow>
  <Footer></Footer>
    </div>

  )
}

export default App
