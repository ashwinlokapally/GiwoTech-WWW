import React from 'react'
import { HashRouter, Routes , Route} from 'react-router-dom'
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
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/science' element={<SciencePage/>}/>
          <Route path='/pipeline' element={<PipelinePage/>}/>
          <Route path='/news-updates' element={<NewsUpdatesPage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/team' element={<TeamPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </HashRouter>
      
    </>
  )
}

export default App