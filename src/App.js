// Import React Modules
import { useState, useEffect } from 'react'
import { render } from 'react-dom'

import './assets/sass/style.css';
import Header from './views/Header'
import Content from './views/Hero'
import Portfolio from './views/Portfolio'

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Portfolio/>
    </>
  );
}



export default App;
