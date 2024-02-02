import { useState } from 'react'
import {Navbar} from './components/navbar'
import {Intro} from './components/Intros/intro'
import { Skills } from './components/Skills/skills'
import { Portfolio } from './components/portfolio/portfolio'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Portfolio></Portfolio>
    </div>
    
    </>
  )
}

export default App
