import { useState } from 'react'
import {Navbar} from './components/navbar'
import {Intro} from './components/Intros/intro'
import { Skills } from './components/Skills/skills'
import { Portfolio } from './components/portfolio/portfolio'
import {Transition} from "./PageTransition"
function App() {
 
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Skills></Skills>
    </div>
  )
}

export default Transition(App);
