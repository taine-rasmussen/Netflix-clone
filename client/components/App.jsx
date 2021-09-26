import React from 'react'

// Components
import Nav from './Nav'
import MainPreview from './MainPreview'
import Preview from './Preview'

function App () {

  return (
    <>
      <div className='app'>
        <MainPreview />
        <Nav />
        <Preview />
      </div>
    </>
  )
}

export default App
