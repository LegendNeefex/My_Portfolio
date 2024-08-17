import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioProvider } from './context/PortfolioContext'
import AllFiles from './AllFiles'


function App() {

  return (
    <PortfolioProvider>
      <BrowserRouter>
        <AllFiles />
      </BrowserRouter>
    </PortfolioProvider>
  )
}

export default App