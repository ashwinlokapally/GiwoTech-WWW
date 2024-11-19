import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import SciencePage from './Components/SciencePage'
import ContactPage from './Components/ContactPage'
import PipelinePage from './Components/PipelinePage'
import NewsUpdatesPage from './Components/NewsUpdatesPage'
import TeamPage from './Components/TeamPage'
import NewsPage from './Components/NewsPage'

const App = () => {
  return (
    <>
    
      <BrowserRouter> 
     
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
        <Route path='/news-updates' element={<NewsUpdatesPage/>}/>
      </Routes>
      <Routes>
        <Route path='/news' element={<NewsPage/>}/>
      </Routes>
      <Routes>
        <Route path='/team' element={<TeamPage/>}/>
      </Routes>
      <Routes>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App