import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ChatComponent from './ai-chat';
import UniversityStats from './Universities';

function App() {

  return (
    <>
    <Router>
    
                <Routes>
                    <Route path="/" element={<UniversityStats />} />
                </Routes> 
            </Router>
    </>
  )
}

export default App
