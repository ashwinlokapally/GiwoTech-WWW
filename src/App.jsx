import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import SciencePage from './Components/SciencePage'
import ContactPage from './Components/ContactPage'
import PipelinePage from './Components/PipelinePage'
import TeamPage from './Components/TeamPage'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    
      <BrowserRouter> 
      <Navbar/>  
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Routes>
        <Route path='/science' element={<SciencePage/>}/>
      </Routes>
      <Routes>
        <Route path='/pipeline' element={<PipelinePage/>}/>
      </Routes>
      <Routes>
        <Route path='/team' element={<TeamPage/>}/>
      </Routes>
      <Routes>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App