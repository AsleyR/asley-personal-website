import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
