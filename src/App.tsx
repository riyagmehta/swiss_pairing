import { useState } from 'react'
import { Route,Router,Routes,BrowserRouter } from 'react-router-dom'
import './App.css'
import Registration from './pages/Registration'
import Players from './pages/Players'
import Matches from './pages/Matches'
import Standings from './pages/Standings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Registration/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/matches" element={<Matches/>}/>
      <Route path="/standings" element={<Standings/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
