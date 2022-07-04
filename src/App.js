// Import React Modules
import { useState, useEffect } from 'react'
import { render } from 'react-dom'

import './assets/sass/style.css';
import Header from './views/Header'
import Content from './views/Content'

function App() {
  return (
    <>
      <Header/>
      <Content/>
    </>
  );
}



export default App;
